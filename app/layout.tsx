import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { CartProvider } from "./components/CartProvider";
import { ProfitProvider } from "./components/ProfitProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lemonade Stand",
  description: "Browse cocktails and manage your shopping cart.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ProfitProvider>
          <CartProvider>
            <header className="flex items-center border-b px-6 py-4">
              <nav aria-label="Main navigation" className="flex gap-4">
                <Link href="/">Home</Link>
                <Link href="/shop">Shop</Link>
                <Link href="/cart">Cart</Link>
              </nav>
            </header>
            <main className="flex-1 px-6 py-8">{children}</main>
          </CartProvider>
        </ProfitProvider>
      </body>
    </html>
  );
}
