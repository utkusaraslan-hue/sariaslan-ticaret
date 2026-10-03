export type Bulten = {
  tarih: string;
  dosya: string;
};

// gida-haberleri/ klasöründeki günlük özet PDF'lerinden üretilmiştir.
// Bu dosya scripts/refresh_gida_bultenleri.py tarafından otomatik üretilir — elle düzenlemeyin.
export const bultenler: Bulten[] = [
  { tarih: "2026-10-03", dosya: "/bultenler/03-10-2026.pdf" },
];
