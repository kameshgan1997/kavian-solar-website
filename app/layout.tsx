import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "KAVIAN SOLAR | Rooftop Solar Solutions",
  description:
    "Residential and commercial rooftop solar solutions by KAVIAN SOLAR.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className="min-h-screen bg-white text-slate-900"
      >
        <header className="w-full border-b bg-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo.png"
                alt="Kavian Solar - Clean Energy Brighter Tomorrow"
                width={180}
                height={180}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}