"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.png";
import MarketTicker from "./MarketTicker";

const links = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/fiyatlar", label: "Fiyatlar" },
  { href: "/blog", label: "Günlük Özetler" },
  { href: "/iletisim", label: "İletişim" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header>
      <MarketTicker />

      <div className="border-b border-line bg-paper-2">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3">
          <Link href="/" className="flex items-center gap-3">
            <Image src={logo} alt="Sarıaslan Ticaret" className="h-14 w-14" priority />
            <span className="hidden font-display text-lg font-medium uppercase tracking-wide text-ink sm:block">
              Sarıaslan Ticaret
            </span>
          </Link>

          <nav className="flex items-center gap-x-7 text-sm font-medium uppercase tracking-wide">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    active
                      ? "text-ink"
                      : "text-ink/55 transition-colors hover:text-ink"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/iletisim"
            className="shrink-0 bg-wheat px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-silo transition-colors hover:bg-wheat-light"
          >
            Teklif Al
          </Link>
        </div>
      </div>
    </header>
  );
}
