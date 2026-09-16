import { turibFiyatlari } from "@/data/turib";
import { formatTL } from "@/lib/format";

function TickerIcerik() {
  return (
    <>
      <span className="shrink-0 font-medium text-wheat">TÜRİB AOF&apos;ları</span>
      <span className="h-4 w-px shrink-0 bg-paper/20" />
      {turibFiyatlari.map((fiyat) => (
        <span key={fiyat.urun} className="shrink-0 font-medium text-paper/90">
          {fiyat.urun} {formatTL(fiyat.fiyat)} TL
        </span>
      ))}
    </>
  );
}

export default function MarketTicker() {
  return (
    <div className="overflow-hidden bg-ticker text-paper">
      <div className="animate-ticker flex w-max items-center gap-6 py-2 text-xs">
        <div className="flex shrink-0 items-center gap-6 pl-6">
          <TickerIcerik />
        </div>
        <div aria-hidden="true" className="flex shrink-0 items-center gap-6 pl-6">
          <TickerIcerik />
        </div>
      </div>
    </div>
  );
}
