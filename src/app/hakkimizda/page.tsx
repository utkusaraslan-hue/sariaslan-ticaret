import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda — Sarıaslan Ticaret",
  description: "Sarıaslan Ticaret'in hububat alım satımındaki yaklaşımı ve kapsamı.",
};

export default function HakkimizdaPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm uppercase tracking-wide text-wheat">Hakkımızda</p>
      <h1 className="mt-2 font-display text-3xl font-medium">
        Üretici ile sanayiciyi buluşturuyoruz
      </h1>
      <div className="mt-6 space-y-5 text-ink/75">
        <p>
          Sarıaslan Ticaret, Konya ve çevresindeki üretici ve lisanslı
          depolardan buğday, arpa ve mısır alarak un, yem ve gıda sanayine
          doğrudan tedarik sağlar.
        </p>
        <p>
          Her partide kalite analizi yapılır; ürün özellikleri (protein
          oranı, nem, camsılık vb.) alıcıya net şekilde bildirilir. Alım-satım
          süreci boyunca fiyat şeffaflığı ve teslim güvenilirliği önceliğimizdir.
        </p>
        <p className="text-sm text-ink/50">
          Bu sayfanın içeriği yer tutucudur — şirket geçmişi, ekip ve kapasite
          bilgileriyle güncellenmelidir.
        </p>
      </div>
    </div>
  );
}
