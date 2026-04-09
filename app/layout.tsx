import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Nuditos - Pequeños objetos con gran significado emocional",
  description: "Conejitos tejidos a mano diseñados para acompañarte y darte calma. Cada puntada tiene tiempo, cuidado y significado.",
  keywords: ["conejitos tejidos", "soporte emocional", "crochet", "regalos con significado", "ansiedad", "confort"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${nunito.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-nuditos-crema text-nuditos-marron-oscuro">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
