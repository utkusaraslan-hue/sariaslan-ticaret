"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.png";
import MarketTicker from "./MarketTicker";

const links = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="bg-paper text-ink">
      <MarketTicker />

      <div className="border-b border-line">
        <div className="mx-auto flex max-w-6xl items-center px-6 py-4">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="Sarıaslan Ticaret" className="h-20 w-20" priority />
          </Link>
        </div>
      </div>

      <nav className="border-b border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-x-7 gap-y-1 px-6 text-xs font-medium uppercase tracking-wide">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`border-b-2 py-3 transition-colors ${
                  active
                    ? "border-moss text-ink"
                    : "border-transparent text-ink/55 hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
