import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";

const mainFont = Playfair_Display({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "PromoWeb",
  description: "Promo Web by Mercadona",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mainFont.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
