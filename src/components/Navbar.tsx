'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="bg-white">
      {/* Franja de Promociones */}
      <div className="bg-[#2A2A2A] text-white text-xs sm:text-sm py-2.5 px-4 flex justify-between items-center w-full">
        <button aria-label="Promoción anterior" className="opacity-80 hover:opacity-100 transition-opacity">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="text-center flex-1 font-medium tracking-wide">
          🔥 ENVÍO GRATIS EN FUSAGASUGÁ 🔥
        </div>
        <button aria-label="Siguiente promoción" className="opacity-80 hover:opacity-100 transition-opacity">
          <ChevronRight className="w-4 h-4" />
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
