'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { IconChristmasTree, IconGift, IconSparkles, IconPercentage } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PromoModalProps {
  onSelectProduct: (slug: string) => void;
}

export default function PromoModal({ onSelectProduct }: PromoModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if dismissed in current session
    const dismissed = sessionStorage.getItem('nuditos_promo_navidad_dismissed');
    if (!dismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('nuditos_promo_navidad_dismissed', 'true');
  };

  const handleClaim = () => {
    handleClose();
    onSelectProduct('pollitos-navidenos');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[360px] bg-white rounded-[2rem] border-2 border-amber-300/80 shadow-2xl overflow-hidden z-10 flex flex-col"
          >
            {/* Header festive bar */}
            <div className="bg-gradient-to-r from-[#142f23] via-[#1b4332] to-[#142f23] text-white px-4 py-2.5 flex items-center justify-between border-b border-amber-400/20">
              <div className="flex items-center gap-1.5">
                <IconChristmasTree className="w-4 h-4 text-emerald-300" />
                <span className="text-[11px] font-black uppercase tracking-wider text-amber-200">
                  Promo Navideña · Nuditos
                </span>
                <IconSparkles className="w-3.5 h-3.5 text-amber-300" />
              </div>
              <button
                onClick={handleClose}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Cerrar promoción"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Poster Image Container */}
            <div className="relative aspect-[3/4] w-full bg-nuditos-crema overflow-hidden">
              <Image
                src="/productos/pollitos-navidenos/promo.jpeg"
                alt="Promoción Pollitos Navideños"
                fill
                priority
                className="object-cover"
                sizes="360px"
              />

              {/* Temu-style discount ribbon */}
              <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1 border border-red-300">
                <IconPercentage className="w-3 h-3 text-white" />
                <span>Hasta 31% OFF</span>
              </div>
            </div>

            {/* Pricing Tiers (Temu / Shein style) */}
            <div className="p-4 bg-gradient-to-b from-[#FFFDF9] to-[#FAF6EE] space-y-3">
              <div className="grid grid-cols-3 gap-1.5 text-center">
                <div className="bg-white p-2 rounded-xl border border-gray-200 shadow-xs">
                  <span className="block text-[9px] font-bold text-gray-500 uppercase">1 Unidad</span>
                  <span className="block text-xs font-black text-nuditos-marron-oscuro">$12.000</span>
                </div>
                <div className="bg-amber-50 p-2 rounded-xl border border-amber-300 shadow-xs relative">
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-[7px] font-black px-1.5 py-0.2 rounded-full uppercase whitespace-nowrap">
                    Popular
                  </span>
                  <span className="block text-[9px] font-bold text-amber-900 uppercase">Pack x3</span>
                  <span className="block text-xs font-black text-amber-900">$30.000</span>
                  <span className="block text-[8px] font-bold text-emerald-700">Ahorra $6k</span>
                </div>
                <div className="bg-emerald-50 p-2 rounded-xl border border-emerald-300 shadow-xs relative">
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-emerald-700 text-white text-[7px] font-black px-1.5 py-0.2 rounded-full uppercase whitespace-nowrap">
                    Super Ahorro
                  </span>
                  <span className="block text-[9px] font-bold text-emerald-900 uppercase">Pack x6</span>
                  <span className="block text-xs font-black text-emerald-900">$50.000</span>
                  <span className="block text-[8px] font-black text-emerald-700">Ahorra $22k</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleClaim}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#173a28] via-[#24523a] to-[#173a28] hover:brightness-110 text-white font-black text-xs uppercase tracking-wider shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-2 border border-amber-400/30"
              >
                <IconGift className="w-4 h-4 text-amber-300" />
                <span>Aprovechar Promo y Elegir</span>
              </button>

              <button
                onClick={handleClose}
                className="w-full text-center text-[10px] font-bold text-nuditos-marron-claro hover:text-nuditos-marron underline transition-colors"
              >
                Ver otros productos del catálogo
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

