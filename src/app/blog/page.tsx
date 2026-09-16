import type { Metadata } from "next";
import Link from "next/link";
import { blogYazilari } from "@/data/blog";
import { formatTarih } from "@/lib/format";

export const metadata: Metadata = {
  title: "Blog — Sarıaslan Ticaret",
  description: "Hububat piyasası ve kalite üzerine yazılar.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <ul className="divide-y divide-line">
        {blogYazilari.map((yazi) => (
          <li key={yazi.slug} className="py-6 first:pt-0">
            <Link href={`/blog/${yazi.slug}`} className="group block">
              <h2 className="font-display text-xl font-medium group-hover:text-wheat">
                {yazi.baslik}
              </h2>
              <p className="mt-2 text-sm text-ink/60">{yazi.ozet}</p>
              <p className="mt-3 text-xs text-ink/40">{formatTarih(yazi.tarih)}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
