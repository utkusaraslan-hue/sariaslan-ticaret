export type Fiyat = {
  urun: string;
  ozellik: string;
  alis: number | null;
  satis: number | null;
  birim: string;
  degisimYuzde: number;
  guncellenme: string;
};

// Bu fiyatlar elle güncellenir. Sarıaslan Ticaret'in kendi alış/satış
// tekliflerini yansıtır — resmi borsa (TÜRİB/TMO) verisi değildir.
// alis/satis null olan ürünlerde henüz fiyat girilmemiştir ("-" gösterilir).
export const fiyatlar: Fiyat[] = [
  {
    urun: "Buğday Kırmızı",
    ozellik: "Düşük vasıflı",
    alis: null,
    satis: null,
    birim: "TL/kg",
    degisimYuzde: 0,
    guncellenme: "2026-09-16",
  },
  {
    urun: "Buğday Beyaz",
    ozellik: "Düşük vasıflı",
    alis: null,
    satis: null,
    birim: "TL/kg",
    degisimYuzde: 0,
    guncellenme: "2026-09-16",
  },
  {
    urun: "Buğday Makarnalık",
    ozellik: "Düşük vasıflı",
    alis: null,
    satis: null,
    birim: "TL/kg",
    degisimYuzde: 0,
    guncellenme: "2026-09-16",
  },
  {
    urun: "Arpa",
    ozellik: "",
    alis: null,
    satis: null,
    birim: "TL/kg",
    degisimYuzde: 0,
    guncellenme: "2026-09-16",
  },
  {
    urun: "Mısır",
    ozellik: "",
    alis: null,
    satis: null,
    birim: "TL/kg",
    degisimYuzde: 0,
    guncellenme: "2026-09-16",
  },
];

export const oneCikanUrun = fiyatlar[0];
