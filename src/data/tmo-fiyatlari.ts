export type TmoFiyati = {
  urun: string;
  fiyat: number;
  birim: string;
  tarih: string;
};

// TMO günlük bülteninden (Konya), borsa_verileri.db üzerinden üretilmiştir.
// Kaynak tarih: 2026-09-24. TL/ton -> TL/kg çevrilmiştir. Veri olmayan ürün eklenmez.
// Bu dosya scripts/refresh_tmo_konya.py tarafından otomatik üretilir — elle düzenlemeyin.
export const tmoSonGuncelleme = "2026-09-24";

export const tmoFiyatlari: TmoFiyati[] = [
  { urun: "Buğday Kırmızı", fiyat: 19.58, birim: "TL/kg", tarih: tmoSonGuncelleme },
  { urun: "Buğday Beyaz", fiyat: 16.51, birim: "TL/kg", tarih: tmoSonGuncelleme },
  { urun: "Buğday Makarnalık", fiyat: 17.67, birim: "TL/kg", tarih: tmoSonGuncelleme },
  { urun: "Arpa", fiyat: 14.41, birim: "TL/kg", tarih: tmoSonGuncelleme },
  { urun: "Mısır", fiyat: 16.24, birim: "TL/kg", tarih: tmoSonGuncelleme },
];
