import Image from "next/image";
import Link from "next/link";
import heroPhoto from "@/assets/stock/wheat-field-hero.jpg";
import { blogYazilari } from "@/data/blog";
import { tmoFiyatlari, tmoSonGuncelleme } from "@/data/tmo-fiyatlari";
import { formatTL, formatTarih } from "@/lib/format";

export default function Home() {
  const sonYazi = blogYazilari[0];

  return (
    <>
      <section className="relative overflow-hidden bg-silo">
        <Image
          src={heroPhoto}
          alt=""
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-silo via-silo/70 to-silo/30" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <p className="text-sm font-semibold tracking-widest text-wheat">
            DOĞRU FİYATA HUBUBAT TİCARETİ
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-5xl font-bold leading-[1.05] text-paper sm:text-6xl">
            TEDARİKÇİDEN ALICIYA, DOĞRU FİYATA ULAŞTIRIYORUZ
          </h1>
          <p className="mt-5 max-w-lg text-paper/75">
            Ekmeklik ve makarnalık buğday, arpa ve mısırda tedarikçi ile
            alıcıyı doğrudan buluşturuyoruz. Her gün güncel fiyat.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/fiyatlar"
              className="bg-wheat px-6 py-3 text-sm font-semibold uppercase tracking-wide text-silo transition-colors hover:bg-wheat-light"
            >
              Fiyatlar
            </Link>
            <Link
              href="/blog"
              className="border border-paper/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-paper transition-colors hover:border-wheat hover:text-wheat"
            >
              Günlük Özetler
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink/50">
            Güncel Fiyatlar — TMO Konya
          </p>
          <p className="text-xs text-ink/40">
            Güncelleme: {formatTarih(tmoSonGuncelleme)}
          </p>
        </div>
        <div className="mt-4 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
          {tmoFiyatlari.map((fiyat, i) => (
            <div
              key={fiyat.urun}
              className={`bg-paper-2 p-6 ${
                i === tmoFiyatlari.length - 1 && tmoFiyatlari.length % 2 === 1
                  ? "sm:col-span-2"
                  : ""
              }`}
            >
              <p className="font-display text-lg font-medium uppercase text-ink">
                {fiyat.urun}
              </p>
              <p className="mt-4 font-display text-2xl font-medium">
                {formatTL(fiyat.fiyat)}
                <span className="ml-1 text-sm text-ink/50">{fiyat.birim}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {sonYazi && (
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink/50">
            Piyasa Haberleri
          </p>
          <Link
            href={`/blog/${sonYazi.slug}`}
            className="group mt-4 grid gap-0 overflow-hidden border border-line bg-paper-2 sm:grid-cols-[1.1fr_1fr]"
          >
            <div className="relative aspect-[16/10] sm:aspect-auto">
              {sonYazi.resim && (
                <Image
                  src={sonYazi.resim}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              )}
            </div>
            <div className="flex flex-col justify-center p-8">
              <span className="text-xs font-semibold uppercase tracking-wide text-rust">
                Haber
              </span>
              <span className="mt-2 font-display text-2xl font-medium leading-snug group-hover:text-wheat">
                {sonYazi.baslik}
              </span>
              <span className="mt-3 text-sm text-ink/60">{sonYazi.ozet}</span>
            </div>
          </Link>
        </section>
      )}
    </>
  );
}
