#!/usr/bin/env python3
"""TMO bülteninden (Konya) günün referans fiyatlarını üretir.

Kaynak: borsa_verileri.db, kaynak='TMO', il='Konya'. TL/ton -> TL/kg'a
çevrilir. 0 veya boş fiyatlı satırlar (veri yok demektir) eklenmez.
"""
import sqlite3
import sys
from pathlib import Path

DB_PATH = "/Users/utkus/yine-bi-agent/veri_kaynagi/borsa_verileri.db"
OUT_PATH = Path(__file__).resolve().parent.parent / "src" / "data" / "tmo-fiyatlari.ts"

URUN_SIRA = [
    "Kırmızı Sert Buğday",
    "Diğer Beyaz Buğdaylar",
    "Makarnalık Buğday",
    "Arpa",
    "Mısır",
]

URUN_ETIKET = {
    "Kırmızı Sert Buğday": "Buğday Kırmızı",
    "Diğer Beyaz Buğdaylar": "Buğday Beyaz",
    "Makarnalık Buğday": "Buğday Makarnalık",
    "Arpa": "Arpa",
    "Mısır": "Mısır",
}


def main():
    db = sqlite3.connect(DB_PATH)
    cur = db.cursor()
    cur.execute("SELECT MAX(tarih) FROM fiyatlar WHERE kaynak='TMO'")
    son_tarih = cur.fetchone()[0]
    if not son_tarih:
        print("TMO verisi bulunamadı, dosya güncellenmedi.", file=sys.stderr)
        sys.exit(1)

    cur.execute(
        """
        SELECT urun, kapanis_fiyat
        FROM fiyatlar
        WHERE kaynak='TMO' AND tarih=? AND il='Konya' AND kapanis_fiyat IS NOT NULL
          AND kapanis_fiyat > 0
        """,
        (son_tarih,),
    )
    veri = {urun: fiyat for urun, fiyat in cur.fetchall()}

    entries = []
    for urun in URUN_SIRA:
        if urun in veri:
            fiyat_kg = round(veri[urun] / 1000, 2)
            entries.append((URUN_ETIKET[urun], fiyat_kg))

    lines = [
        "export type TmoFiyati = {",
        "  urun: string;",
        "  fiyat: number;",
        "  birim: string;",
        "  tarih: string;",
        "};",
        "",
        "// TMO günlük bülteninden (Konya), borsa_verileri.db üzerinden üretilmiştir.",
        f"// Kaynak tarih: {son_tarih}. TL/ton -> TL/kg çevrilmiştir. Veri olmayan ürün eklenmez.",
        "// Bu dosya scripts/refresh_tmo_konya.py tarafından otomatik üretilir — elle düzenlemeyin.",
        f'export const tmoSonGuncelleme = "{son_tarih}";',
        "",
        "export const tmoFiyatlari: TmoFiyati[] = [",
    ]
    for urun_etiket, fiyat in entries:
        lines.append(
            f'  {{ urun: "{urun_etiket}", fiyat: {fiyat}, birim: "TL/kg", tarih: tmoSonGuncelleme }},'
        )
    lines.append("];")

    OUT_PATH.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"Güncellendi: {OUT_PATH} ({len(entries)} kayıt, tarih {son_tarih})")


if __name__ == "__main__":
    main()
