import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Sarıaslan Ticaret — Hububat Alım Satım",
  description:
    "Sarıaslan Ticaret; buğday, arpa ve mısır alım satımında güncel fiyat ve kalite bilgisi sunar.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${oswald.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
