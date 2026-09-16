import Image from "next/image";
import Link from "next/link";
import WheatVisual from "@/components/WheatVisual";
import { blogYazilari } from "@/data/blog";
import { fiyatlar } from "@/data/fiyatlar";
import { formatTL } from "@/lib/format";

export default function Home() {
  const sonYazi = blogYazilari[0];

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <div className="space-y-8">
          {fiyatlar.map((fiyat) => (
            <div key={fiyat.urun}>
              <p className="text-lg font-bold uppercase text-ink">
                {fiyat.urun} {fiyat.ozellik}
              </p>
              <div className="mt-3 flex flex-wrap items-baseline gap-x-10 gap-y-4">
                <div>
                  <span className="block text-xs font-medium uppercase tracking-wide text-ink/50">
                    Alış
                  </span>
                  <span className="font-display text-2xl font-medium">
                    {fiyat.alis === null ? "-" : formatTL(fiyat.alis)}
                    {fiyat.alis !== null && (
                      <span className="ml-1 text-sm text-ink/50">TL</span>
                    )}
                  </span>
                </div>
                <div>
                  <span className="block text-xs font-medium uppercase tracking-wide text-ink/50">
                    Satış
                  </span>
                  <span className="font-display text-2xl font-medium">
                    {fiyat.satis === null ? "-" : formatTL(fiyat.satis)}
                    {fiyat.satis !== null && (
                      <span className="ml-1 text-sm text-ink/50">TL</span>
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {sonYazi && (
          <Link href={`/blog/${sonYazi.slug}`} className="group block">
            <div className="aspect-[16/9] overflow-hidden bg-silo">
              {sonYazi.resim ? (
                <Image
                  src={sonYazi.resim}
                  alt=""
                  className="h-full w-full object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              ) : (
                <WheatVisual />
              )}
            </div>
            <div className="border border-t-0 border-line bg-paper-2 px-5 py-4">
              <span className="block text-xs font-semibold uppercase text-rust">
                Blog
              </span>
              <span className="mt-1 block font-display text-lg leading-snug group-hover:text-wheat">
                {sonYazi.baslik}
              </span>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
