export type IlFiyati = {
  il: string;
  urun: string;
  alis: number;
  satis: number;
  birim: string;
  tarih: string;
};

// TÜRİB normal seans verisinden (borsa_verileri.db) üretilmiştir.
// Kaynak tarih: 2026-09-25. Formül: alış = ildeki en düşük kapanış fiyatının %10 altı,
// satış = ildeki en yüksek kapanış fiyatının %10 üstü. Veri olmayan il/ürün eklenmez.
// Bu dosya scripts/refresh_il_fiyatlari.py tarafından otomatik üretilir — elle düzenlemeyin.
export const sonGuncelleme = "2026-09-25";

export const ilFiyatlari: IlFiyati[] = [
  { il: "Adana", urun: "Buğday Ekmeklik Beyaz 2. Sınıf", alis: 16.65, satis: 20.35, birim: "TL/kg", tarih: sonGuncelleme },
  { il: "Adana", urun: "Mısır 1. Sınıf", alis: 13.1, satis: 16.28, birim: "TL/kg", tarih: sonGuncelleme },
  { il: "Adana", urun: "Mısır 2. Sınıf", alis: 13.28, satis: 16.23, birim: "TL/kg", tarih: sonGuncelleme },
  { il: "Afyonkarahisar", urun: "Buğday Ekmeklik Kırmızı Düşük Vasıflı", alis: 14.4, satis: 17.6, birim: "TL/kg", tarih: sonGuncelleme },
  { il: "Aksaray", urun: "Arpa 1. Sınıf", alis: 12.15, satis: 14.85, birim: "TL/kg", tarih: sonGuncelleme },
  { il: "Aksaray", urun: "Arpa 2. Sınıf", alis: 11.7, satis: 14.3, birim: "TL/kg", tarih: sonGuncelleme },
  { il: "Aksaray", urun: "Buğday Ekmeklik Beyaz 2. Sınıf", alis: 16.65, satis: 20.35, birim: "TL/kg", tarih: sonGuncelleme },
  { il: "Aksaray", urun: "Buğday Ekmeklik Kırmızı 2. Sınıf", alis: 16.65, satis: 20.35, birim: "TL/kg", tarih: sonGuncelleme },
  { il: "Ankara", urun: "Buğday Ekmeklik Kırmızı 2. Sınıf", alis: 16.65, satis: 20.35, birim: "TL/kg", tarih: sonGuncelleme },
  { il: "Ankara", urun: "Buğday Ekmeklik Kırmızı 3. Sınıf", alis: 15.75, satis: 19.25, birim: "TL/kg", tarih: sonGuncelleme },
  { il: "Balıkesir", urun: "Buğday Ekmeklik Kırmızı 2. Sınıf", alis: 16.65, satis: 20.35, birim: "TL/kg", tarih: sonGuncelleme },
  { il: "Balıkesir", urun: "Buğday Ekmeklik Kırmızı 3. Sınıf", alis: 15.97, satis: 19.53, birim: "TL/kg", tarih: sonGuncelleme },
  { il: "Balıkesir", urun: "Buğday Ekmeklik Kırmızı Düşük Vasıflı", alis: 15.08, satis: 18.43, birim: "TL/kg", tarih: sonGuncelleme },
  { il: "Batman", urun: "Buğday Ekmeklik Beyaz 2. Sınıf", alis: 16.65, satis: 20.35, birim: "TL/kg", tarih: sonGuncelleme },
  { il: "Batman", urun: "Buğday Makarnalık Düşük Vasıflı", alis: 15.08, satis: 18.43, birim: "TL/kg", tarih: sonGuncelleme },
  { il: "Diyarbakır", urun: "Buğday Makarnalık Düşük Vasıflı", alis: 15.08, satis: 18.43, birim: "TL/kg", tarih: sonGuncelleme },
  { il: "Eskişehir", urun: "Arpa 1. Sınıf", alis: 12.78, satis: 15.62, birim: "TL/kg", tarih: sonGuncelleme },
  { il: "Eskişehir", urun: "Buğday Ekmeklik Kırmızı 3. Sınıf", alis: 15.75, satis: 19.25, birim: "TL/kg", tarih: sonGuncelleme },
  { il: "Kahramanmaraş", urun: "Mısır 1. Sınıf", alis: 13.05, satis: 15.95, birim: "TL/kg", tarih: sonGuncelleme },
  { il: "Kayseri", urun: "Buğday Ekmeklik Beyaz Düşük Vasıflı", alis: 15.08, satis: 18.43, birim: "TL/kg", tarih: sonGuncelleme },
  { il: "Kayseri", urun: "Buğday Makarnalık Düşük Vasıflı", alis: 13.28, satis: 16.23, birim: "TL/kg", tarih: sonGuncelleme },
  { il: "Kırklareli", urun: "Buğday Ekmeklik Kırmızı 2. Sınıf", alis: 16.65, satis: 20.35, birim: "TL/kg", tarih: sonGuncelleme },
  { il: "Kırklareli", urun: "Buğday Ekmeklik Kırmızı 3. Sınıf", alis: 15.97, satis: 19.53, birim: "TL/kg", tarih: sonGuncelleme },
  { il: "Konya", urun: "Arpa 1. Sınıf", alis: 12.6, satis: 15.4, birim: "TL/kg", tarih: sonGuncelleme },
  { il: "Konya", urun: "Arpa 2. Sınıf", alis: 12.87, satis: 15.73, birim: "TL/kg", tarih: sonGuncelleme },
  { il: "Konya", urun: "Buğday Ekmeklik Kırmızı 2. Sınıf", alis: 16.65, satis: 20.35, birim: "TL/kg", tarih: sonGuncelleme },
  { il: "Konya", urun: "Buğday Ekmeklik Kırmızı Düşük Vasıflı", alis: 14.4, satis: 17.6, birim: "TL/kg", tarih: sonGuncelleme },
  { il: "Konya", urun: "Mısır 2. Sınıf", alis: 14.67, satis: 17.93, birim: "TL/kg", tarih: sonGuncelleme },
  { il: "Mersin", urun: "Mısır 1. Sınıf", alis: 13.26, satis: 16.2, birim: "TL/kg", tarih: sonGuncelleme },
  { il: "Osmaniye", urun: "Mısır 1. Sınıf", alis: 13.14, satis: 16.06, birim: "TL/kg", tarih: sonGuncelleme },
  { il: "Sakarya", urun: "Buğday Ekmeklik Kırmızı Düşük Vasıflı", alis: 15.08, satis: 18.43, birim: "TL/kg", tarih: sonGuncelleme },
  { il: "Tekirdağ", urun: "Buğday Ekmeklik Kırmızı 2. Sınıf", alis: 16.2, satis: 20.35, birim: "TL/kg", tarih: sonGuncelleme },
  { il: "Tekirdağ", urun: "Buğday Ekmeklik Kırmızı Düşük Vasıflı", alis: 15.08, satis: 18.43, birim: "TL/kg", tarih: sonGuncelleme },
  { il: "Yozgat", urun: "Arpa 2. Sınıf", alis: 12.24, satis: 14.96, birim: "TL/kg", tarih: sonGuncelleme },
  { il: "İstanbul", urun: "Buğday Ekmeklik Kırmızı 2. Sınıf", alis: 16.65, satis: 20.35, birim: "TL/kg", tarih: sonGuncelleme },
  { il: "Şırnak", urun: "Buğday Makarnalık Düşük Vasıflı", alis: 15.08, satis: 18.43, birim: "TL/kg", tarih: sonGuncelleme },
];
