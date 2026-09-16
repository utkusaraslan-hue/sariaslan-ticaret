import Image from "next/image";
import { notFound } from "next/navigation";
import { blogYazilari } from "@/data/blog";
import { formatTarih } from "@/lib/format";
import WheatVisual from "@/components/WheatVisual";

export function generateStaticParams() {
  return blogYazilari.map((yazi) => ({ slug: yazi.slug }));
}

export default async function BlogYazisiPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const yazi = blogYazilari.find((y) => y.slug === slug);

  if (!yazi) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <div className="aspect-[16/9] overflow-hidden bg-silo">
        {yazi.resim ? (
          <Image
            src={yazi.resim}
            alt=""
            className="h-full w-full object-cover"
            sizes="(min-width: 768px) 672px, 100vw"
            priority
          />
        ) : (
          <WheatVisual />
        )}
      </div>
      <p className="mt-6 text-sm uppercase tracking-wide text-wheat">
        {formatTarih(yazi.tarih)}
      </p>
      <h1 className="mt-2 font-display text-3xl font-medium">{yazi.baslik}</h1>
      <div className="mt-8 space-y-5 text-ink/75">
        {yazi.icerik.map((paragraf, i) => (
          <p key={i}>{paragraf}</p>
        ))}
      </div>
    </article>
  );
}
