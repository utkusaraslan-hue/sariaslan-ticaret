import type { Metadata } from "next";
import { ilFiyatlari } from "@/data/il-fiyatlari";
import { formatTL } from "@/lib/format";

export const metadata: Metadata = {
  title: "Fiyatlar — Sarıaslan Ticaret",
  description: "Sarıaslan Ticaret güncel buğday, arpa ve mısır alış-satış fiyatları, il il.",
};

function illeregoreGrupla() {
  const map = new Map<string, typeof ilFiyatlari>();
  for (const kayit of ilFiyatlari) {
    const liste = map.get(kayit.il) ?? [];
    liste.push(kayit);
    map.set(kayit.il, liste);
  }
  return [...map.entries()].sort((a, b) => a[0].localeCompare(b[0], "tr"));
}

export default function FiyatlarPage() {
  const ilGruplari = illeregoreGrupla();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-sm uppercase tracking-wide text-wheat">Piyasa</p>
      <h1 className="mt-2 font-display text-3xl font-medium">
        İllere göre alış-satış fiyatları
      </h1>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {ilGruplari.map(([il, kayitlar]) => (
          <div key={il} className="border border-line bg-paper-2">
            <p className="border-b border-line bg-ink/[0.03] px-4 py-2.5 font-display text-base font-medium uppercase tracking-wide text-ink">
              {il}
            </p>
            <div className="divide-y divide-line">
              {kayitlar.map((kayit) => (
                <div key={kayit.urun} className="px-4 py-3">
                  <p className="text-sm font-medium text-ink">{kayit.urun}</p>
                  <div className="mt-1.5 flex items-baseline gap-x-6 text-sm">
                    <span className="text-ink/50">
                      Alış <span className="font-medium text-ink">{formatTL(kayit.alis)}</span>
                    </span>
                    <span className="text-ink/50">
                      Satış <span className="font-medium text-ink">{formatTL(kayit.satis)}</span>
                    </span>
                    <span className="text-xs text-ink/40">{kayit.birim}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
