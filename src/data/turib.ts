export type TuribFiyat = {
  urun: string;
  fiyat: number;
  birim: string;
  degisimYuzde: number;
  tarih: string;
};

// TÜRİB normal seans kapanış fiyatlarının ürün bazında ortalaması.
// Kaynak: /Users/utkus/yine-bi-agent/veri_kaynagi/borsa_verileri.db
// (TURIB_NORMAL_SEANS, 2026-09-15 vs 2026-09-14). Tek enstrümanlı /
// düşük işlem hacimli kalemler (n=1) dışarıda bırakıldı — tek işlemin
// günlük ortalamayı domine etmesi yanıltıcı olur.
export const turibFiyatlari: TuribFiyat[] = [
  { urun: "Arpa 1. Sınıf", fiyat: 13.5, birim: "TL/kg", degisimYuzde: 3.85, tarih: "2026-09-15" },
  { urun: "Arpa 2. Sınıf", fiyat: 13.51, birim: "TL/kg", degisimYuzde: -0.88, tarih: "2026-09-15" },
  { urun: "Buğday Ekmeklik Beyaz 3. Sınıf", fiyat: 17.75, birim: "TL/kg", degisimYuzde: 0, tarih: "2026-09-15" },
  { urun: "Buğday Ekmeklik Kırmızı 2. Sınıf", fiyat: 18.0, birim: "TL/kg", degisimYuzde: 2.51, tarih: "2026-09-15" },
  { urun: "Buğday Ekmeklik Kırmızı 3. Sınıf", fiyat: 17.7, birim: "TL/kg", degisimYuzde: 1.2, tarih: "2026-09-15" },
  { urun: "Buğday Ekmeklik Kırmızı Düşük Vasıflı", fiyat: 16.0, birim: "TL/kg", degisimYuzde: -0.19, tarih: "2026-09-15" },
  { urun: "Buğday Makarnalık Düşük Vasıflı", fiyat: 15.82, birim: "TL/kg", degisimYuzde: -1.92, tarih: "2026-09-15" },
  { urun: "Mısır 1. Sınıf", fiyat: 15.28, birim: "TL/kg", degisimYuzde: -0.07, tarih: "2026-09-15" },
  { urun: "Mısır 2. Sınıf", fiyat: 15.08, birim: "TL/kg", degisimYuzde: -5.75, tarih: "2026-09-15" },
];
