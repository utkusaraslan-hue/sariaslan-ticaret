export type TmoFiyati = {
  urun: string;
  fiyat: number;
  birim: string;
  tarih: string;
};

// TMO günlük bülteninden (Konya), borsa_verileri.db üzerinden üretilmiştir.
// Kaynak tarih: 2026-09-25. TL/ton -> TL/kg çevrilmiştir. Veri olmayan ürün eklenmez.
// Bu dosya scripts/refresh_tmo_konya.py tarafından otomatik üretilir — elle düzenlemeyin.
export const tmoSonGuncelleme = "2026-09-25";

export const tmoFiyatlari: TmoFiyati[] = [
  { urun: "Buğday Kırmızı", fiyat: 19.33, birim: "TL/kg", tarih: tmoSonGuncelleme },
  { urun: "Buğday Makarnalık", fiyat: 17.86, birim: "TL/kg", tarih: tmoSonGuncelleme },
  { urun: "Arpa", fiyat: 14.34, birim: "TL/kg", tarih: tmoSonGuncelleme },
  { urun: "Mısır", fiyat: 16.39, birim: "TL/kg", tarih: tmoSonGuncelleme },
];
