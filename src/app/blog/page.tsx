import type { Metadata } from "next";
import Link from "next/link";
import { blogYazilari } from "@/data/blog";
import { bultenler } from "@/data/bultenler";
import { formatTarih } from "@/lib/format";

export const metadata: Metadata = {
  title: "Günlük Özetler — Sarıaslan Ticaret",
  description: "Sarıaslan Ticaret günlük gıda ve tarım piyasası özet bültenleri.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-3xl font-medium">Günlük Özetler</h1>
      <p className="mt-2 text-sm text-ink/60">
        Hububat ve gıda piyasasına dair günlük özet bültenler (PDF).
      </p>

      <ul className="mt-8 divide-y divide-line">
        {bultenler.map((bulten) => (
          <li key={bulten.tarih} className="py-5 first:pt-0">
            <a
              href={bulten.dosya}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4"
            >
              <span className="font-display text-lg font-medium group-hover:text-wheat">
                {formatTarih(bulten.tarih)} Günlük Özet
              </span>
              <span className="whitespace-nowrap text-sm text-wheat">PDF&apos;i görüntüle →</span>
            </a>
          </li>
        ))}
      </ul>

      {blogYazilari.length > 0 && (
        <>
          <h2 className="mt-16 font-display text-xl font-medium">Haberler</h2>
          <ul className="mt-6 divide-y divide-line">
            {blogYazilari.map((yazi) => (
              <li key={yazi.slug} className="py-6 first:pt-0">
                <Link href={`/blog/${yazi.slug}`} className="group block">
                  <h3 className="font-display text-xl font-medium group-hover:text-wheat">
                    {yazi.baslik}
                  </h3>
                  <p className="mt-2 text-sm text-ink/60">{yazi.ozet}</p>
                  <p className="mt-3 text-xs text-ink/40">{formatTarih(yazi.tarih)}</p>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
