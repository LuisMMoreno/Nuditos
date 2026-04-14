import type { Metadata } from "next";
import { Nunito, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { CartProvider } from '@/src/context/CartContext';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import AppWrapper from '@/src/components/AppWrapper';


const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});


export const metadata: Metadata = {
  title: "Nuditos - Conejitos tejidos para regulación emocional",
  description: "Amigurumis terapéuticos diseñados para brindarte calma y contención. Personaliza tu Nubi con ropita tejida con amor.",
  keywords: ["conejitos tejidos", "regulación emocional", "amigurumi terapéutico", "crochet", "ansiedad", "confort", "apego seguro"],
  openGraph: {
    title: "Nuditos - Tu compañero de calma",
    description: "Conejitos tejidos a mano para regulación emocional y confort profundo.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${nunito.variable} ${instrumentSerif.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-nuditos-crema text-nuditos-marron-oscuro">
        <CartProvider>
          <AppWrapper>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </AppWrapper>
        </CartProvider>
      </body>
    </html>
  );
}
