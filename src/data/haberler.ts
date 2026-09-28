export type Haber = {
  kaynak: string;
  baslik: string;
  ozet: string;
  link: string;
  gorsel: string | null;
};

// gida-haberleri/ham-veri/ klasöründeki günlük haber taramasından üretilmiştir.
// Bu dosya scripts/refresh_gida_haberleri.py tarafından otomatik üretilir — elle düzenlemeyin.
export const haberlerTarihi = "2026-09-27";

export const haberler: Haber[] = [
  {
    kaynak: "Dünya Gazetesi",
    baslik: "El Nino palm yağını vuracak: Fiyatlarda yükseliş bekleniyor",
    ozet: "",
    link: "https://www.dunya.com/sektorler/tarim/el-nino-palm-yagini-vuracak-fiyatlarda-yukselis-bekleniyor-haberi-841412",
    gorsel: "/haberler/00.jpg",
  },
  {
    kaynak: "Dünya Gazetesi",
    baslik: "Buğdayda düşüş hızlandı, fiyat bir ayın dibine indi",
    ozet: "",
    link: "https://www.dunya.com/ekonomi/bugdayda-dusus-hizlandi-fiyat-bir-ayin-dibine-indi-haberi-841388",
    gorsel: "/haberler/01.jpg",
  },
  {
    kaynak: "Dünya Gazetesi",
    baslik: "Hayvan varlığında artış: Küçükbaş 60,8 milyonu aştı",
    ozet: "",
    link: "https://www.dunya.com/sektorler/tarim/hayvan-varliginda-artis-kucukbas-608-milyonu-asti-haberi-841260",
    gorsel: "/haberler/02.jpg",
  },
  {
    kaynak: "Dünya Gazetesi",
    baslik: "Avrupa’da kuraklık mısır üretimini vurdu",
    ozet: "",
    link: "https://www.dunya.com/ekonomi/avrupada-kuraklik-misir-uretimini-vurdu-haberi-841259",
    gorsel: "/haberler/03.jpg",
  },
  {
    kaynak: "Dünya Gazetesi",
    baslik: "DAP ithalatı sert biçimde düştü",
    ozet: "Türkiye’de yüksek uluslararası fiyatlar DAP gübresine talebi sert biçimde frenledi. Nisan-temmuz döneminde ithalat, önceki üç yılın aynı dönem ortalamasının yüzde 43’ünde kaldı; eylül-ekimde...",
    link: "https://www.dunya.com/ekonomi/pahali-gubre-ciftciyi-geri-cekti-dap-ithalati-sert-dustu-haberi-840922",
    gorsel: "/haberler/04.jpg",
  },
  {
    kaynak: "Dünya Gazetesi",
    baslik: "Rusya Karadeniz’den kuzeye kayıyor",
    ozet: "Karadeniz’de liman ve sevkiyat hatlarına dönük saldırılar Rus tahıl ticaretinde rota değişimini hızlandırdı. Gübre ve kömür terminalleri buğday yüklemeye uyarlanırken ihracattaki düşüş, Türkiye’de...",
    link: "https://www.dunya.com/gundem/karadeniz-savasi-tahil-rotasini-degistirdi-rusya-bugdayi-kuzeye-tasiyor-haberi-840907",
    gorsel: "/haberler/05.jpg",
  },
  {
    kaynak: "Dünya Gazetesi",
    baslik: "Kakaoda yeni arz alarmı: Grev tehdidi fiyatları yeniden yukarı itti",
    ozet: "Dünyanın en büyük kakao üreticisi Fildişi Sahili’nde üreticilerin greve gitmesi ve aşırı yağışların hastalık riskini büyütmesi fiyatları yeniden yukarı çevirdi. New York kakao kontratları gün içinde...",
    link: "https://www.dunya.com/ekonomi/kakaoda-yeni-arz-alarmi-grev-tehdidi-fiyatlari-yeniden-yukari-itti-haberi-840837",
    gorsel: null,
  },
  {
    kaynak: "Dünya Gazetesi",
    baslik: "Gıda fiyatlarında 4 yılın zirvesi",
    ozet: "Olumsuz hava koşulları, jeopolitik gerilimler ve ticaret yollarındaki aksamalar küresel gıda fiyatlarını Kasım 2022’den bu yana en yüksek seviyeye taşıdı. Gübre fiyatları ikinci çeyrekteki...",
    link: "https://www.dunya.com/sektorler/tarim/kuresel-gida-fiyatlari-4-yilin-zirvesine-cikti-haberi-840693",
    gorsel: null,
  },
];
