import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sarıaslan Ticaret — Hububat Alım Satım",
  description:
    "Sarıaslan Ticaret; buğday, arpa ve mısır alım satımında güncel fiyat ve kalite bilgisi sunar.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className="h-full">
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
