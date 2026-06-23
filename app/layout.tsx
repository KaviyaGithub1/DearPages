import type { Metadata } from "next";
import Image from "next/image";
import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DearPages.art",
  description: "Magazines, Posters, Polaraids, and Wall Posters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lora.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-lora bg-[#FDFBFB] text-[#010000] dark:bg-zinc-950 dark:text-zinc-50">
        <header className="sticky top-0 z-50 w-full border-b border-[#3a0005]/10 bg-[#FDFBFB]/70 backdrop-blur-xl dark:border-[#3a0005]/20 dark:bg-[#010000]/70">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <a href="#" className="flex items-center gap-3 py-1">
                <div className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-full overflow-hidden border border-[#3a0005]/20 shadow-sm">
                  <Image 
                    src="/logo.jpeg" 
                    alt="DearPages Logo" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 48px, 56px"
                  />
                </div>
                <span className="hidden sm:inline-block text-2xl font-serif font-black tracking-tighter text-[#3a0005] dark:text-[#FDFBFB]">
                  DearPages
                </span>
              </a>
            </div>
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
              <a href="#" className="transition-colors hover:text-[#3a0005] dark:hover:text-zinc-300">Home</a>
              <a href="#about" className="transition-colors hover:text-[#3a0005] dark:hover:text-zinc-300">About</a>
              <a href="#magazines" className="transition-colors hover:text-[#3a0005] dark:hover:text-zinc-300">Magazines</a>
              <a href="#posters" className="transition-colors hover:text-[#3a0005] dark:hover:text-zinc-300">Posters</a>
              <a href="#polaraids" className="transition-colors hover:text-[#3a0005] dark:hover:text-zinc-300">Polaraids</a>
              <a href="#wall-posters" className="transition-colors hover:text-[#3a0005] dark:hover:text-zinc-300">Wall posters</a>
              <a href="#contact" className="rounded-full bg-[#3a0005] font-serif px-5 py-2.5 text-[#FDFBFB] transition-all hover:bg-[#1a0002] hover:scale-105 active:scale-95 shadow-lg shadow-[#3a0005]/20">Order / Contact</a>
            </nav>
            {/* Mobile Nav Menu (CSS Only) */}
            <details className="lg:hidden relative group">
              <summary className="p-2 rounded-md hover:bg-[#3a0005]/5 dark:hover:bg-zinc-800 transition-colors list-none cursor-pointer [&::-webkit-details-marker]:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              </summary>
              <div className="absolute top-full right-0 mt-2 w-48 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl flex flex-col p-2 gap-1 z-50">
                <a href="#about" className="p-3 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors">About</a>
                <a href="#services" className="p-3 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors">Services</a>
                <a href="#collections" className="p-3 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors">Collections</a>
                <a href="#contact" className="p-3 text-sm font-medium bg-[#3a0005] text-[#FDFBFB] hover:bg-[#1a0002] rounded-xl transition-colors mt-2 text-center">Order / Contact</a>
              </div>
            </details>
          </div>
        </header>
        <main className="flex-1 flex flex-col">{children}</main>
        <footer className="border-t border-zinc-200/50 py-12 text-center text-sm text-zinc-500 dark:border-zinc-800/50 dark:text-zinc-400">
          <p>&copy; {new Date().getFullYear()} DearPages.art. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
