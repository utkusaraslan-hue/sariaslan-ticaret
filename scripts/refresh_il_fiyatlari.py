#!/usr/bin/env python3
"""TÜRİB normal seans verisinden il bazlı alış/satış fiyatlarını üretir.

Formül: alış = ildeki en düşük kapanış fiyatının %10 altı,
        satış = ildeki en yüksek kapanış fiyatının %10 üstü.
Veri bulunmayan il/ürün kombinasyonları eklenmez.
"""
import sqlite3
import sys
from pathlib import Path

DB_PATH = "/Users/utkus/yine-bi-agent/veri_kaynagi/borsa_verileri.db"
OUT_PATH = Path(__file__).resolve().parent.parent / "src" / "data" / "il-fiyatlari.ts"

URUN_MAP = {
    "ARPA 1.SINIF": "Arpa 1. Sınıf",
    "ARPA 2.SINIF": "Arpa 2. Sınıf",
    "BUĞDAY EKMEKLİK BEYAZ 2.SINIF": "Buğday Ekmeklik Beyaz 2. Sınıf",
    "BUĞDAY EKMEKLİK BEYAZ 3.SINIF": "Buğday Ekmeklik Beyaz 3. Sınıf",
    "BUĞDAY EKMEKLİK BEYAZ DÜŞÜK VASIFLI": "Buğday Ekmeklik Beyaz Düşük Vasıflı",
    "BUĞDAY EKMEKLİK KIRMIZI 2.SINIF": "Buğday Ekmeklik Kırmızı 2. Sınıf",
    "BUĞDAY EKMEKLİK KIRMIZI 3.SINIF": "Buğday Ekmeklik Kırmızı 3. Sınıf",
    "BUĞDAY EKMEKLİK KIRMIZI DÜŞÜK VASIFLI": "Buğday Ekmeklik Kırmızı Düşük Vasıflı",
    "BUĞDAY MAKARNALIK 3.SINIF": "Buğday Makarnalık 3. Sınıf",
    "BUĞDAY MAKARNALIK DÜŞÜK VASIFLI": "Buğday Makarnalık Düşük Vasıflı",
    "MISIR 1.SINIF": "Mısır 1. Sınıf",
    "MISIR 2.SINIF": "Mısır 2. Sınıf",
}

IL_MAP = {
    "ADANA": "Adana", "AFYONKARAHİSAR": "Afyonkarahisar", "AKSARAY": "Aksaray",
    "ANKARA": "Ankara", "BALIKESİR": "Balıkesir", "BATMAN": "Batman",
    "DİYARBAKIR": "Diyarbakır", "ESKİŞEHİR": "Eskişehir", "KAHRAMANMARAŞ": "Kahramanmaraş",
    "KAYSERİ": "Kayseri", "KIRKLARELİ": "Kırklareli", "KONYA": "Konya",
    "MERSİN": "Mersin", "OSMANİYE": "Osmaniye", "SAKARYA": "Sakarya",
    "TEKİRDAĞ": "Tekirdağ", "YOZGAT": "Yozgat", "İSTANBUL": "İstanbul", "ŞIRNAK": "Şırnak",
    "KONYA": "Konya",
}


def main():
    db = sqlite3.connect(DB_PATH)
    cur = db.cursor()
    cur.execute("SELECT MAX(tarih) FROM fiyatlar WHERE kaynak='TURIB_NORMAL_SEANS'")
    son_tarih = cur.fetchone()[0]
    if not son_tarih:
        print("TURIB_NORMAL_SEANS verisi bulunamadı, dosya güncellenmedi.", file=sys.stderr)
        sys.exit(1)

    cur.execute(
        """
        SELECT il, urun, MIN(kapanis_fiyat), MAX(kapanis_fiyat)
        FROM fiyatlar
        WHERE kaynak='TURIB_NORMAL_SEANS' AND tarih=? AND il IS NOT NULL AND il != ''
          AND kapanis_fiyat IS NOT NULL
        GROUP BY il, urun
        ORDER BY il, urun
        """,
        (son_tarih,),
    )
    rows = cur.fetchall()

    entries = []
    for il, urun, mn, mx in rows:
        alis = round(mn * 0.90, 2)
        satis = round(mx * 1.10, 2)
        il_disp = IL_MAP.get(il, il.title())
        urun_disp = URUN_MAP.get(urun, urun.title())
        entries.append((il_disp, urun_disp, alis, satis))

    lines = [
        "export type IlFiyati = {",
        "  il: string;",
        "  urun: string;",
        "  alis: number;",
        "  satis: number;",
        "  birim: string;",
        "  tarih: string;",
        "};",
        "",
        "// TÜRİB normal seans verisinden (borsa_verileri.db) üretilmiştir.",
        f"// Kaynak tarih: {son_tarih}. Formül: alış = ildeki en düşük kapanış fiyatının %10 altı,",
        "// satış = ildeki en yüksek kapanış fiyatının %10 üstü. Veri olmayan il/ürün eklenmez.",
        "// Bu dosya scripts/refresh_il_fiyatlari.py tarafından otomatik üretilir — elle düzenlemeyin.",
        f'export const sonGuncelleme = "{son_tarih}";',
        "",
        "export const ilFiyatlari: IlFiyati[] = [",
    ]
    for il_disp, urun_disp, alis, satis in entries:
        lines.append(
            f'  {{ il: "{il_disp}", urun: "{urun_disp}", alis: {alis}, satis: {satis}, '
            f'birim: "TL/kg", tarih: sonGuncelleme }},'
        )
    lines.append("];")

    OUT_PATH.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"Güncellendi: {OUT_PATH} ({len(entries)} kayıt, tarih {son_tarih})")


if __name__ == "__main__":
    main()
