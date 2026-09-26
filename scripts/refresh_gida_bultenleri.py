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

    adaylar = []
    for klasor in sorted(KAYNAK_KOK.iterdir()):
        if not klasor.is_dir() or not TARIH_DESENI.match(klasor.name):
            continue
        pdf = klasor / f"gunluk_gida_ozet_{klasor.name}.pdf"
        if not pdf.exists():
            continue
        adaylar.append(klasor)

    if not adaylar:
        print("Hiç bülten PDF'i bulunamadı, dosya güncellenmedi.", file=sys.stderr)
        sys.exit(1)

    # Sadece en güncel bülten tutulur — eski günlerin verisini saklamaya gerek yok.
    en_guncel = max(adaylar, key=lambda k: gg_aa_yyyy_to_iso(k.name))
    hedef_dosya_adi = f"{en_guncel.name}.pdf"

    for eski in HEDEF_KLASOR.glob("*.pdf"):
        if eski.name != hedef_dosya_adi:
            eski.unlink()

    shutil.copyfile(en_guncel / f"gunluk_gida_ozet_{en_guncel.name}.pdf", HEDEF_KLASOR / hedef_dosya_adi)

    bultenler = [{"tarih": gg_aa_yyyy_to_iso(en_guncel.name), "dosya": f"/bultenler/{hedef_dosya_adi}"}]

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
