import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim — Sarıaslan Ticaret",
  description: "Sarıaslan Ticaret ile iletişime geçin.",
};

export default function IletisimPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
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
  );
}
