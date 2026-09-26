#!/usr/bin/env python3
"""gida-haberleri/ altındaki günlük bülten PDF'lerini siteye senkronize eder.

Kaynak: /Users/utkus/Desktop/yine-bi-agent/gida-haberleri/<GG-AA-YYYY>/
        gunluk_gida_ozet_<GG-AA-YYYY>.pdf
Bülten üretimi interaktif bir Claude oturumunda yapılır (bu script üretmez,
sadece o gün üretilmiş PDF varsa kopyalar) — bkz. gida-haberleri/.claude/skills/gunluk-bulten.
"""
import re
import shutil
import sys
from datetime import datetime
from pathlib import Path

KAYNAK_KOK = Path("/Users/utkus/Desktop/yine-bi-agent/gida-haberleri")
SITE_KOK = Path(__file__).resolve().parent.parent
HEDEF_KLASOR = SITE_KOK / "public" / "bultenler"
OUT_PATH = SITE_KOK / "src" / "data" / "bultenler.ts"

TARIH_DESENI = re.compile(r"^\d{2}-\d{2}-\d{4}$")


def gg_aa_yyyy_to_iso(tarih: str) -> str:
    return datetime.strptime(tarih, "%d-%m-%Y").strftime("%Y-%m-%d")


def main():
    HEDEF_KLASOR.mkdir(parents=True, exist_ok=True)

    bultenler = []
    for klasor in sorted(KAYNAK_KOK.iterdir()):
        if not klasor.is_dir() or not TARIH_DESENI.match(klasor.name):
            continue
        pdf = klasor / f"gunluk_gida_ozet_{klasor.name}.pdf"
        if not pdf.exists():
            continue
        hedef_pdf = HEDEF_KLASOR / f"{klasor.name}.pdf"
        shutil.copyfile(pdf, hedef_pdf)
        bultenler.append({"tarih": gg_aa_yyyy_to_iso(klasor.name), "dosya": f"/bultenler/{klasor.name}.pdf"})

    if not bultenler:
        print("Hiç bülten PDF'i bulunamadı, dosya güncellenmedi.", file=sys.stderr)
        sys.exit(1)

    bultenler.sort(key=lambda b: b["tarih"], reverse=True)

    lines = [
        "export type Bulten = {",
        "  tarih: string;",
        "  dosya: string;",
        "};",
        "",
        "// gida-haberleri/ klasöründeki günlük özet PDF'lerinden üretilmiştir.",
        "// Bu dosya scripts/refresh_gida_bultenleri.py tarafından otomatik üretilir — elle düzenlemeyin.",
        "export const bultenler: Bulten[] = [",
    ]
    for b in bultenler:
        lines.append(f'  {{ tarih: "{b["tarih"]}", dosya: "{b["dosya"]}" }},')
    lines.append("];")

    OUT_PATH.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"Güncellendi: {OUT_PATH} ({len(bultenler)} bülten)")


if __name__ == "__main__":
    main()
