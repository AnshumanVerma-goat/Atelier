import type { Metadata } from "next";
import { Cormorant, DM_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Atelier — Luxury freelance design",
    template: "%s · Atelier",
  },
  description:
    "Editorial websites and visual identities — calm composition, refined typography, enduring craft.",
  openGraph: {
    title: "Atelier — Luxury freelance design",
    description: "Quiet confidence. Premium creative direction for discerning brands.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atelier",
    description: "Luxury creative studio.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full overflow-x-hidden antialiased">{children}</body>
    </html>
  );
}
