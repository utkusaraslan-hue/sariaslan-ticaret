#!/usr/bin/env python3
"""gida-haberleri/ham-veri/ altındaki en güncel günün haberlerini siteye
senkronize eder (yalnızca en güncel gün tutulur, eskiler silinir).

Kaynak: gida-haberleri/ham-veri/<GG-AA-YYYY>/haberler.json + gorseller/
Reddit kullanıcı adları ve gazeteci isimleri sitede ASLA görünmez (bkz.
gida-haberleri/.claude/skills/gunluk-bulten/SKILL.md kuralı) — kaynak adı
okunur/nötr bir etikete çevrilir.
"""
import json
import re
import shutil
import sys
from datetime import datetime
from pathlib import Path

KAYNAK_KOK = Path("/Users/utkus/Desktop/yine-bi-agent/gida-haberleri/ham-veri")
SITE_KOK = Path(__file__).resolve().parent.parent
HEDEF_KLASOR = SITE_KOK / "public" / "haberler"
OUT_PATH = SITE_KOK / "src" / "data" / "haberler.ts"

TARIH_DESENI = re.compile(r"^\d{2}-\d{2}-\d{4}$")

KAYNAK_ETIKET = {
    "Dünya Gazetesi - Tarım": "Dünya Gazetesi",
    "Food Business News - Genel": "Food Business News",
    "Food Business News - Tahıl": "Food Business News",
    "Food Business News - Tedarik Zinciri": "Food Business News",
    "Food Business News - Meyve/Sebze": "Food Business News",
}


def guvenli_kaynak_adi(kaynak: str) -> str:
    if kaynak in KAYNAK_ETIKET:
        return KAYNAK_ETIKET[kaynak]
    if kaynak.startswith("Reddit"):
        return "Yurt dışı sosyal medya ve sektör forumları"
    if kaynak.startswith("LinkedIn/Bloomberg"):
        return "Bloomberg HT"
    return kaynak


def gg_aa_yyyy_to_iso(tarih: str) -> str:
    return datetime.strptime(tarih, "%d-%m-%Y").strftime("%Y-%m-%d")


def ts_escape(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"').replace("\n", " ").strip()


def main():
    adaylar = [
        k for k in KAYNAK_KOK.iterdir()
        if k.is_dir() and TARIH_DESENI.match(k.name) and (k / "haberler.json").exists()
    ]
    if not adaylar:
        print("Hiç haberler.json bulunamadı, dosya güncellenmedi.", file=sys.stderr)
        sys.exit(1)

    en_guncel = max(adaylar, key=lambda k: gg_aa_yyyy_to_iso(k.name))
    tarih_iso = gg_aa_yyyy_to_iso(en_guncel.name)

    haberler_ham = json.loads((en_guncel / "haberler.json").read_text(encoding="utf-8"))

    # Site hububat/tahıl odaklı — o kategori önceliklendirilir, en fazla 8 haber.
    hububat = [h for h in haberler_ham if h.get("kategori") == "hububat_ve_diger"]
    secilenler = hububat[:8] if hububat else haberler_ham[:8]

    if HEDEF_KLASOR.exists():
        shutil.rmtree(HEDEF_KLASOR)
    HEDEF_KLASOR.mkdir(parents=True, exist_ok=True)

    haberler = []
    for i, h in enumerate(secilenler):
        gorsel_yolu = None
        gorsel_dosya = h.get("gorsel_dosya")
        if gorsel_dosya:
            kaynak_gorsel = en_guncel / gorsel_dosya
            if kaynak_gorsel.exists():
                uzanti = kaynak_gorsel.suffix or ".jpg"
                hedef_ad = f"{i:02d}{uzanti}"
                shutil.copyfile(kaynak_gorsel, HEDEF_KLASOR / hedef_ad)
                gorsel_yolu = f"/haberler/{hedef_ad}"

        haberler.append({
            "kaynak": guvenli_kaynak_adi(h.get("kaynak", "")),
            "baslik": h.get("baslik", ""),
            "ozet": h.get("ozet", ""),
            "link": h.get("link", ""),
            "gorsel": gorsel_yolu,
        })

    lines = [
        "export type Haber = {",
        "  kaynak: string;",
        "  baslik: string;",
        "  ozet: string;",
        "  link: string;",
        "  gorsel: string | null;",
        "};",
        "",
        "// gida-haberleri/ham-veri/ klasöründeki günlük haber taramasından üretilmiştir.",
        "// Bu dosya scripts/refresh_gida_haberleri.py tarafından otomatik üretilir — elle düzenlemeyin.",
        f'export const haberlerTarihi = "{tarih_iso}";',
        "",
        "export const haberler: Haber[] = [",
    ]
    for h in haberler:
        gorsel = f'"{h["gorsel"]}"' if h["gorsel"] else "null"
        lines.append(
            "  {\n"
            f'    kaynak: "{ts_escape(h["kaynak"])}",\n'
            f'    baslik: "{ts_escape(h["baslik"])}",\n'
            f'    ozet: "{ts_escape(h["ozet"])}",\n'
            f'    link: "{ts_escape(h["link"])}",\n'
            f"    gorsel: {gorsel},\n"
            "  },"
        )
    lines.append("];")

    OUT_PATH.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"Güncellendi: {OUT_PATH} ({len(haberler)} haber, tarih {tarih_iso})")


if __name__ == "__main__":
    main()
