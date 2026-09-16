import type { Metadata } from "next";
import { fiyatlar } from "@/data/fiyatlar";
import { fiyatYonu, formatTL, formatTarih } from "@/lib/format";

export const metadata: Metadata = {
  title: "Fiyatlar — Sarıaslan Ticaret",
  description: "Sarıaslan Ticaret güncel buğday, arpa ve mısır alış-satış fiyatları.",
};

const yonRenk = {
  yukselis: "text-moss",
  dusus: "text-rust",
  sabit: "text-ink/50",
} as const;

export default function FiyatlarPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-sm uppercase tracking-wide text-wheat">Piyasa</p>
      <h1 className="mt-2 font-display text-3xl font-medium">
        Güncel alış-satış fiyatları
      </h1>
      <p className="mt-3 max-w-2xl text-ink/70">
        Aşağıdaki fiyatlar Sarıaslan Ticaret&apos;in kendi alım-satım
        tekliflerini gösterir; resmi borsa fiyatı değildir. Parti büyüklüğüne
        ve teslim şekline göre fiyat değişebilir.
      </p>

      <div className="mt-10 overflow-x-auto border border-line">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-line bg-ink/[0.03] text-left text-xs uppercase tracking-wide text-ink/50">
              <th className="px-4 py-3 font-medium">Ürün</th>
              <th className="px-4 py-3 font-medium">Özellik</th>
              <th className="px-4 py-3 font-medium text-right">Alış</th>
              <th className="px-4 py-3 font-medium text-right">Satış</th>
              <th className="px-4 py-3 font-medium text-right">Değişim</th>
              <th className="px-4 py-3 font-medium text-right">Güncelleme</th>
            </tr>
          </thead>
          <tbody>
            {fiyatlar.map((fiyat) => {
              const yon = fiyatYonu(fiyat.degisimYuzde);
              return (
                <tr key={fiyat.urun} className="border-b border-line last:border-0">
                  <td className="px-4 py-4 font-medium">{fiyat.urun}</td>
                  <td className="px-4 py-4 text-ink/60">{fiyat.ozellik}</td>
                  <td className="px-4 py-4 text-right tabular-nums">
                    {fiyat.alis === null ? "-" : formatTL(fiyat.alis)}
                  </td>
                  <td className="px-4 py-4 text-right font-medium tabular-nums">
                    {fiyat.satis === null ? "-" : formatTL(fiyat.satis)}{" "}
                    <span className="text-xs font-normal text-ink/50">
                      {fiyat.birim}
                    </span>
                  </td>
                  <td className={`px-4 py-4 text-right tabular-nums ${yonRenk[yon]}`}>
                    {yon === "yukselis" ? "+" : yon === "sabit" ? "±" : ""}
                    {fiyat.degisimYuzde.toFixed(1)}%
                  </td>
                  <td className="px-4 py-4 text-right text-ink/50">
                    {formatTarih(fiyat.guncellenme)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
