import type { StaticImageData } from "next/image";
import tmoHububatArzi from "@/assets/blog/tmo-hububat-arzi.jpeg";

export type BlogYazisi = {
  slug: string;
  baslik: string;
  ozet: string;
  tarih: string;
  icerik: string[];
  resim?: StaticImageData;
};

export const blogYazilari: BlogYazisi[] = [
  {
    slug: "tmodan-hububat-arzina-iliskin-kritik-aciklama",
    resim: tmoHububatArzi,
    baslik: "TMO'dan Hububat Arzına İlişkin Kritik Açıklama",
    ozet:
      "TMO, buğday ve arpada rekor üretimle güçlenen arzı değerlendirerek satışlara öne çekilmiş bir başlangıçla başladığını, mısırda ise arzın önümüzdeki haftalarda belirgin artacağını açıkladı.",
    tarih: "2026-09-16",
    icerik: [
      "TMO, 2026/27 sezonunda buğday ve arpada rekor üretimle güçlenen arzı değerlendirerek satışlara öne çekilmiş bir başlangıçla başladı ve kurum tarihinin en yoğun alım dönemlerinden birinin ardından stoklarını piyasaya sunmaya girişti.",
      "Mısırda ise Akdeniz Bölgesi hasadının tamamlanmasına yakın olunması ve İç Anadolu'nun hasada girmesiyle önümüzdeki haftalarda arzın belirgin artacağı, şu anki geçici daralmanın ise üreticilerin fiyat artışı bekleyerek ürünü piyasaya sunmaktan kaçınmasından kaynaklandığı belirtildi.",
      "TMO, hububat piyasasında arz yönünde bir sorun bulunmadığını vurgularken bu ötelemenin sürmesi halinde arz güvenliği için gerekli tedbirleri alacağını duyurdu.",
      "Ayrıca yem hammaddesi ihtiyacını karşılamak ve mısır üzerindeki talep baskısını azaltmak amacıyla stoklarındaki arpayı da besici ve yetiştiricilerin kullanımına açarak satışa başlayacağını açıkladı.",
    ],
  },
];
