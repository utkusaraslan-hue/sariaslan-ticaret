import type { Metadata } from "next";
import Image from "next/image";
import siloPhoto from "@/assets/stock/grain-silo.jpg";

export const metadata: Metadata = {
  title: "İletişim — Sarıaslan Ticaret",
  description: "Sarıaslan Ticaret ile iletişime geçin.",
};

export default function IletisimPage() {
  return (
    <div className="grid lg:grid-cols-2">
      <div className="px-6 py-16 lg:px-16 lg:py-24">
        <p className="text-sm uppercase tracking-wide text-wheat">İletişim</p>
        <h1 className="mt-2 font-display text-3xl font-medium">Bize ulaşın</h1>
        <dl className="mt-8 space-y-4 border-t border-line pt-6 text-sm">
          <div className="flex justify-between pb-3">
            <dt className="text-ink/50">E-posta</dt>
            <dd className="font-medium">
              <a href="mailto:info@sariaslanticaret.com" className="hover:text-wheat">
                info@sariaslanticaret.com
              </a>
            </dd>
          </div>
        </dl>
      </div>
      <div className="relative min-h-64 lg:min-h-full">
        <Image
          src={siloPhoto}
          alt=""
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
    </div>
  );
}
