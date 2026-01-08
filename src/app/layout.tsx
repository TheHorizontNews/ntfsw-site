import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NTFSW.org - Best AI Porn & NSFW Reviews 2026",
  description: "Expert reviews of AI generators, MILF, hentai, big tits and more adult tools.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <header className="bg-gray-900 py-6 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <h1 className="text-4xl font-bold text-red-600">NTFSW.org</h1>
            <nav>
              <a href="/" className="text-white hover:text-red-400 mr-6">Home</a>
              <a href="/ai-milf" className="text-white hover:text-red-400">AI MILF</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="bg-gray-950 py-10 text-center text-gray-400">
          <p>© 2026 NTFSW.org • Adult Content • 18+ Only</p>
        </footer>
      </body>
    </html>
  );
}
