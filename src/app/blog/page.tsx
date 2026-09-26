import type { Metadata } from "next";
import Image from "next/image";
import { bultenler } from "@/data/bultenler";
import { haberler, haberlerTarihi } from "@/data/haberler";
import { formatTarih } from "@/lib/format";

export const metadata: Metadata = {
  title: "Günlük Özet — Sarıaslan Ticaret",
  description: "Sarıaslan Ticaret günlük gıda ve tarım piyasası özeti ve haberleri.",
};

export default function BlogPage() {
  const sonBulten = bultenler[0];

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-3xl font-medium">Günlük Özet</h1>
      <p className="mt-2 text-sm text-ink/60">
        Hububat ve gıda piyasasına dair günlük özet bülten (PDF).
      </p>

      {sonBulten && (
        <div className="mt-8">
          <p className="mb-3 text-xs uppercase tracking-wide text-ink/40">
            {formatTarih(sonBulten.tarih)} Günlük Özet
          </p>
          <iframe
            src={sonBulten.dosya}
            title="Günlük Özet"
            className="h-[150vh] w-full border border-line"
          />
        </div>
      )}

      {haberler.length > 0 && (
        <>
          <div className="mt-16 flex items-baseline justify-between gap-2">
            <h2 className="font-display text-xl font-medium">Haberler</h2>
            <p className="text-xs text-ink/40">{formatTarih(haberlerTarihi)}</p>
          </div>
          <ul className="mt-6 divide-y divide-line">
            {haberler.map((haber) => (
              <li key={haber.link} className="py-6 first:pt-0">
                <a
                  href={haber.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-4"
                >
                  {haber.gorsel && (
                    <div className="relative hidden h-20 w-28 shrink-0 overflow-hidden bg-silo sm:block">
                      <Image
                        src={haber.gorsel}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="112px"
                      />
                    </div>
                  )}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-wheat">
                      {haber.kaynak}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-medium group-hover:text-wheat">
                      {haber.baslik}
                    </h3>
                    {haber.ozet && (
                      <p className="mt-2 text-sm text-ink/60">{haber.ozet}</p>
                    )}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
