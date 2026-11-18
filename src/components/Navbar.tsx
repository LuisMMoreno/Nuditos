'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { IconChristmasTree, IconSparkles, IconGift } from '@tabler/icons-react';

const promos = [
  'PROMO NAVIDADEÑA en Pollitos para el Árbol',
  'ENVÍO GRATIS EN FUSAGASUGÁ · TEJIDO ARTESANAL A MANO'
];

export default function Navbar() {
  const [promoIndex, setPromoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPromoIndex((prev) => (prev + 1) % promos.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setPromoIndex((prev) => (prev - 1 + promos.length) % promos.length);
  };

  const handleNext = () => {
    setPromoIndex((prev) => (prev + 1) % promos.length);
  };

  return (
    <header className="bg-white">
      {/* Franja de Promociones Navideña */}
      <div className="bg-gradient-to-r from-[#142f23] via-[#1b4332] to-[#142f23] text-white text-xs sm:text-sm py-2 px-4 flex justify-between items-center w-full border-b border-amber-400/20">
        <button
          onClick={handlePrev}
          aria-label="Promoción anterior"
          className="opacity-80 hover:opacity-100 transition-opacity p-0.5"
        >
          <ChevronLeft className="w-4 h-4 text-emerald-200" />
        </button>
        <Link
          href="/?product=pollitos-navidenos"
          className="text-center flex-1 font-semibold tracking-wide flex items-center justify-center gap-1.5 hover:opacity-95 transition-opacity"
        >
          <IconChristmasTree className="w-4 h-4 text-emerald-300 shrink-0" />
          <span className="text-[10px] sm:text-xs text-amber-100 font-extrabold uppercase tracking-wider line-clamp-1">
            {promos[promoIndex]}
          </span>
          <IconSparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
        </Link>
        <button
          onClick={handleNext}
          aria-label="Siguiente promoción"
          className="opacity-80 hover:opacity-100 transition-opacity p-0.5"
        >
          <ChevronRight className="w-4 h-4 text-emerald-200" />
        </button>
      </div>

      <nav
        className="w-full border-b border-gray-100 py-2 shadow-sm"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-[600px] mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="outline-none py-1 flex items-center">
              <div className="relative w-10 h-10">
                <Image
                  src="/isologo_sin_fondo.png"
                  alt="Logo Nuditos"
                  fill
                  sizes="40px"
                  className="object-contain"
                  priority
                />
              </div>
              <span className="ml-2 font-display text-xl tracking-tight text-nuditos-marron-oscuro font-bold">
                Nuditos
              </span>
              <span className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-extrabold uppercase tracking-wider">
                <IconChristmasTree className="w-3 h-3 text-emerald-600" />
                Navidad
              </span>
            </Link>
          </div>

          {/* WhatsApp a la derecha */}
          <div className="flex items-center justify-end">
            <a
              href="https://wa.me/573053655297"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#20ba5a] rounded-full transition-colors flex items-center gap-1.5 text-xs font-bold tracking-wide"
              aria-label="Contactar por WhatsApp"
            >
              <div className="relative w-4 h-4">
                <Image
                  src="/whatsapp.png"
                  alt="WhatsApp"
                  fill
                  sizes="16px"
                  className="object-contain"
                />
              </div>
              <span>Escríbenos</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
