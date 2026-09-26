export type Bulten = {
  tarih: string;
  dosya: string;
};

// gida-haberleri/ klasöründeki günlük özet PDF'lerinden üretilmiştir.
// Bu dosya scripts/refresh_gida_bultenleri.py tarafından otomatik üretilir — elle düzenlemeyin.
export const bultenler: Bulten[] = [
  { tarih: "2026-09-26", dosya: "/bultenler/26-09-2026.pdf" },
];
