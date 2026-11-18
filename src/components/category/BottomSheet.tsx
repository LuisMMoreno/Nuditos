'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, Heart, Sparkles, AlertCircle, ShoppingBag, Award, Shield, Check, Info } from 'lucide-react';
import { IconChristmasTree, IconSnowflake, IconGift, IconPercentage, IconSparkles } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface ProductDetail {
  id: number;
  slug: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isPopular?: boolean;
  story: string[];
  features?: { title: string; desc: string }[];
  gallery?: string[];
}

interface BottomSheetProps {
  product: ProductDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

// Nubi customization config
const nubiModels = [
  {
    id: 'sin-peso',
    name: 'Clásico (Sin peso)',
    price: 80000,
    description: 'Ligero y abrazable, ideal para compañía diaria y llevar a todos lados.'
  },
  {
    id: 'con-peso',
    name: 'Terapéutico (Con peso)',
    price: 100000,
    description: 'Con peso distribuido (~1kg). Estimula el sistema nervioso brindando calma profunda.'
  },
];

const nubiOutfits = [
  { id: 'ninguno', name: 'Sin ropita', badge: 'Básico', price: 0 },
  { id: 'tiburon', name: 'Saco Tiburón (Azul)', badge: 'Tiburón', price: 20000 },
  { id: 'sapito', name: 'Saco Sapito (Verde)', badge: 'Sapito', price: 20000 },
  { id: 'gatito', name: 'Saco Gatito (Negro)', badge: 'Gatito', price: 20000 },
];

const nubiOutfitImages: Record<string, string[]> = {
  ninguno: [
    '/nubi/IMG_3435.jpeg',
    '/nubi/IMG_3431.jpeg',
    '/nubi/IMG_3432.jpeg',
    '/nubi/IMG_3436.jpeg',
  ],
  sapito: [
    '/nubi/IMG_3421.jpeg',
    '/nubi/IMG_3417.jpeg',
    '/nubi/IMG_3418.jpeg',
    '/nubi/IMG_3420.jpeg',
  ],
  gatito: [
    '/nubi/IMG_3448.jpeg',
    '/nubi/IMG_3439.jpeg',
    '/nubi/IMG_3440.jpeg',
    '/nubi/IMG_3442.jpeg',
  ],
  tiburon: [
    '/nubi/IMG_3453.jpeg',
    '/nubi/IMG_3452.jpeg',
    '/nubi/IMG_3454.jpeg',
    '/nubi/IMG_3456.jpeg',
  ],
};

interface PollitoModel {
  id: string;
  name: string;
  hat: string;
  image: string;
  tag: string;
  tagColor: string;
}

const pollitoModels: PollitoModel[] = [
  {
    id: 'stitch',
    name: 'Stitch',
    hat: 'Sombrerito azul con orejitas',
    image: '/productos/pollitos/1.jpeg',
    tag: 'Azul',
    tagColor: 'bg-blue-100 text-blue-800 border-blue-200',
  },
  {
    id: 'angel',
    name: 'Ángel',
    hat: 'Sombrerito rosado con orejitas',
    image: '/productos/pollitos/2.jpeg',
    tag: 'Rosa',
    tagColor: 'bg-pink-100 text-pink-800 border-pink-200',
  },
  {
    id: 'chaquipiyo',
    name: 'Chaquipiyo',
    hat: 'Pollito saliendo del cascarón',
    image: '/productos/pollitos/3.jpeg',
    tag: 'Cascarón',
    tagColor: 'bg-amber-100 text-amber-800 border-amber-200',
  },
  {
    id: 'spiderman',
    name: 'Spiderman',
    hat: 'Máscara roja arácnida tejida',
    image: '/productos/pollitos/4.jpeg',
    tag: 'Rojo',
    tagColor: 'bg-red-100 text-red-800 border-red-200',
  },
  {
    id: 'sapito',
    name: 'Sapito',
    hat: 'Sombrerito verde con ojitos',
    image: '/productos/pollitos/5.jpeg',
    tag: 'Verde',
    tagColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  },
];

interface PollitoNavidenoModel {
  id: string;
  name: string;
  desc: string;
  image: string;
  tag: string;
}

const pollitosNavidenosModels: PollitoNavidenoModel[] = [
  {
    id: 'navideno-1',
    name: 'Pollito Arbolito',
    desc: 'Un hermoso arbolito',
    image: '/productos/pollitos-navidenos/1.jpeg',
    tag: 'Arbolito',
  },
  {
    id: 'navideno-2',
    name: 'Pollito Duende',
    desc: 'Un duende travieso',
    image: '/productos/pollitos-navidenos/2.jpeg',
    tag: 'Duende',
  },
  {
    id: 'navideno-3',
    name: 'Pollito Reno',
    desc: 'Es Rodolfo!!',
    image: '/productos/pollitos-navidenos/3.jpeg',
    tag: 'Reno',
  },
  {
    id: 'navideno-4',
    name: 'Pollito Santa',
    desc: 'Jo Jo Jo',
    image: '/productos/pollitos-navidenos/4.jpeg',
    tag: 'Santa',
  },
  {
    id: 'navideno-5',
    name: 'Pollito Invierno',
    desc: 'Está listo para el frío',
    image: '/productos/pollitos-navidenos/5.jpeg',
    tag: 'Invierno',
  },
];

function getPollitosNavidenosPricing(qty: number) {
  const unitPrice = 12000;
  const regularTotal = qty * unitPrice;

  // 6 for 50,000 | 3 for 30,000 | 1 for 12,000
  const packsOf6 = Math.floor(qty / 6);
  const rem6 = qty % 6;
  const packsOf3 = Math.floor(rem6 / 3);
  const singles = rem6 % 3;

  let total = (packsOf6 * 50000) + (packsOf3 * 30000) + (singles * unitPrice);
  if (qty === 5) {
    total = 50000;
  }

  const saved = regularTotal - total;
  const discountPercent = regularTotal > 0 ? Math.round((saved / regularTotal) * 100) : 0;

  let packBadge = '';
  if (qty >= 6) {
    packBadge = `Súper Pack x${qty} (-31% OFF)`;
  } else if (qty >= 3) {
    packBadge = `Pack x${qty} (-17% OFF)`;
  }

  let incentive = '';
  if (qty === 1) {
    incentive = '¡Agrega 2 más y lleva 3 por solo $30.000 (Ahorras $6.000)!';
  } else if (qty === 2) {
    incentive = '¡Estás a 1 pollito de llevar 3 por solo $30.000 (Ahorras $6.000)!';
  } else if (qty >= 3 && qty < 6) {
    const diff = 6 - qty;
    incentive = `¡Agrega ${diff} más y lleva el Súper Pack 6 por solo $50.000 (Ahorras $22.000)!`;
  }

  return { total, regularTotal, saved, discountPercent, packBadge, incentive };
}

export default function BottomSheet({ product, isOpen, onClose }: BottomSheetProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Nubi State
  const [selectedModel, setSelectedModel] = useState(nubiModels[0]);
  const [selectedOutfit, setSelectedOutfit] = useState(nubiOutfits[0]);
  const [customName, setCustomName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Pollitos State
  const [selectedPollitoModel, setSelectedPollitoModel] = useState<PollitoModel | null>(null);
  const [pollitoModelError, setPollitoModelError] = useState(false);
  const [selectedNavidenoModel, setSelectedNavidenoModel] = useState<PollitoNavidenoModel | null>(null);

  // Reset states when product changes
  useEffect(() => {
    setSelectedModel(nubiModels[0]);
    setSelectedOutfit(nubiOutfits[0]);
    setCustomName('');
    setQuantity(1);
    setActiveImageIndex(0);
    setSelectedPollitoModel(null);
    setSelectedNavidenoModel(null);
    setPollitoModelError(false);
  }, [product]);

  if (!product) return null;

  const isNubi = product.slug === 'nubi';
  const isPollitos = product.slug === 'pollitos-con-sombrero';
  const isPollitosNavidenos = product.slug === 'pollitos-navidenos';

  // Get gallery images
  const allImages = isNubi
    ? (nubiOutfitImages[selectedOutfit.id] || nubiOutfitImages.ninguno)
    : [product.image, ...(product.gallery || [])];

  const currentPrice = isNubi
    ? (selectedModel.price + selectedOutfit.price)
    : product.price;

  const navidenoPricing = isPollitosNavidenos ? getPollitosNavidenosPricing(quantity) : null;
  const totalPrice = isPollitosNavidenos
    ? navidenoPricing!.total
    : currentPrice * quantity;

  const handleSelectPollitoModel = (model: PollitoModel, index: number) => {
    setSelectedPollitoModel(model);
    setPollitoModelError(false);
    setActiveImageIndex(index);
  };

  const handleSelectNavidenoModel = (model: PollitoNavidenoModel, index: number) => {
    setSelectedNavidenoModel(model);
    setActiveImageIndex(index + 2); // 0 is PORTADA, 1 is PROMO, 2-6 are models
  };

  const handleSelectImageIndex = (idx: number) => {
    setActiveImageIndex(idx);
    if (isPollitos && pollitoModels[idx]) {
      setSelectedPollitoModel(pollitoModels[idx]);
      setPollitoModelError(false);
    } else if (isPollitosNavidenos && idx >= 2 && pollitosNavidenosModels[idx - 2]) {
      setSelectedNavidenoModel(pollitosNavidenosModels[idx - 2]);
    }
  };

  const handleBuyOnWhatsApp = () => {
    let message = '';
    if (isNubi) {
      message = `¡Hola Nuditos! Me gustaría encargar a Nubi:
- Modelo: ${selectedModel.name}
- Ropita: ${selectedOutfit.name}
${customName.trim() ? `- Nombre para mi Nubi: "${customName.trim()}"\n` : ''}- Cantidad: ${quantity}
- Total: $${totalPrice.toLocaleString('es-CO')} COP

¿Me confirman la disponibilidad para envío?`;
    } else if (isPollitosNavidenos) {
      const pricing = getPollitosNavidenosPricing(quantity);
      const discountText = pricing.saved > 0
        ? `\n- Descuento de Promo: -$${pricing.saved.toLocaleString('es-CO')} COP (${pricing.discountPercent}% OFF)`
        : '';
      const packNote = pricing.packBadge ? ` (${pricing.packBadge})` : '';

      message = `¡Hola Nuditos! Me interesa la promoción de Pollitos Navideños para el árbol:
- Cantidad: ${quantity} unidades${packNote}
${selectedNavidenoModel ? `- Modelo preferido: ${selectedNavidenoModel.name} (${selectedNavidenoModel.desc})\n` : '- Modelo: Selección festiva para el árbol\n'}- Precio Regular: $${pricing.regularTotal.toLocaleString('es-CO')} COP${discountText}
- TOTAL CON PROMO: $${pricing.total.toLocaleString('es-CO')} COP

¿Me confirman disponibilidad para entrega inmediata?`;
    } else if (isPollitos) {
      if (!selectedPollitoModel) {
        setPollitoModelError(true);
        const selectorEl = document.getElementById('pollito-model-selector');
        if (selectorEl) {
          selectorEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }
      message = `¡Hola Nuditos! Me interesa comprar Pollitos con Sombrero:
- Modelo elegido: ${selectedPollitoModel.name} (${selectedPollitoModel.hat})
- Precio Unitario: $${product.price.toLocaleString('es-CO')} COP
- Cantidad: ${quantity}
- Total: $${totalPrice.toLocaleString('es-CO')} COP

¿Me confirman si tienen disponible para entrega?`;
    } else {
      message = `¡Hola Nuditos! Me interesa comprar este producto:
- Nombre: ${product.name}
- Categoría: ${product.category}
- Precio Unitario: $${product.price.toLocaleString('es-CO')} COP
- Cantidad: ${quantity}
- Total: $${totalPrice.toLocaleString('es-CO')} COP

¿Me confirman si tienen disponible para entrega?`;
    }

    const whatsappUrl = `https://wa.me/573053655297?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
          />

          {/* Bottom Sheet Container */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-nuditos-crema rounded-t-[2.5rem] shadow-2xl max-h-[92vh] flex flex-col max-w-[500px] mx-auto overflow-hidden border-t border-nuditos-beige"
          >
            {/* Drag Handle Indicator */}
            <div className="w-full py-3 flex justify-center items-center flex-shrink-0 bg-white">
              <div className="w-12 h-1.5 bg-gray-200 rounded-full" />
              <button
                onClick={onClose}
                className="absolute right-5 top-2.5 p-2 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-full transition-colors outline-none focus-soft"
                aria-label="Cerrar detalles"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-5 pb-32 pt-2 space-y-6">

              {/* Product Gallery Section */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-white shadow-soft">
                {allImages.length > 0 && (
                  <Image
                    src={allImages[activeImageIndex]}
                    alt={product.name}
                    fill
                    className="object-cover transition-all duration-300 animate-fade-in-up"
                    priority
                    sizes="(max-width: 500px) 100vw, 500px"
                  />
                )}

                {/* Image badging */}
                <div className="absolute top-4 left-4 flex gap-1.5">
                  {product.isNew && (
                    <span className="bg-nuditos-verde text-white text-xs font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      Nuevo
                    </span>
                  )}
                  {product.isPopular && (
                    <span className="bg-nuditos-amarillo text-nuditos-marron-oscuro text-xs font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      Favorito
                    </span>
                  )}
                </div>

                {/* Quick Dots Indicator */}
                {allImages.length > 1 && (
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-10">
                    {allImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => handleSelectImageIndex(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${activeImageIndex === i ? 'bg-nuditos-marron-oscuro w-5' : 'bg-gray-300/80'
                          }`}
                        aria-label={`Ver foto ${i + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Thumbnail Bar */}
              {allImages.length > 1 && (
                <div className="flex gap-2.5 overflow-x-auto pb-1 scrollbar-hide">
                  {allImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelectImageIndex(i)}
                      className={`relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${activeImageIndex === i ? 'border-nuditos-marron-oscuro scale-95 shadow-sm' : 'border-transparent opacity-75'
                        }`}
                    >
                      <Image src={img} alt="" fill className="object-cover" sizes="64px" />
                    </button>
                  ))}
                </div>
              )}

              {/* Special Christmas Ambient Banner for Pollitos Navideños */}
              {isPollitosNavidenos && (
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#142f23] via-[#1b4332] to-[#142f23] text-white flex items-center justify-between border border-amber-400/40 shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-amber-400/20 border border-amber-300/40 flex items-center justify-center shrink-0">
                      <IconChristmasTree className="w-5 h-5 text-emerald-300" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-black uppercase text-amber-300 tracking-wider">
                          Edición Navidad 2026
                        </span>
                        <span className="bg-red-600 text-white text-[8px] font-black px-1.5 py-0.2 rounded-full uppercase">
                          Promo Especial
                        </span>
                      </div>
                      <p className="text-xs font-bold text-white/95">
                        Adornos tejidos para tu árbol
                      </p>
                    </div>
                  </div>
                  <IconSparkles className="w-5 h-5 text-amber-300 shrink-0" />
                </div>
              )}

              {/* Title & Price Header */}
              <div className="border-b border-nuditos-beige pb-4">
                <span className="text-xs font-bold text-nuditos-marron-claro uppercase tracking-widest bg-nuditos-rosa-claro/50 px-2.5 py-1 rounded-md">
                  {product.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-nuditos-marron-oscuro mt-2 leading-tight">
                  {product.name}
                </h2>

                {isPollitosNavidenos ? (
                  <div className="mt-2.5 space-y-2.5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-emerald-950">
                        ${currentPrice.toLocaleString('es-CO')} COP
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        $16.000 COP
                      </span>
                      <span className="text-xs text-red-600 font-black uppercase">
                        Unidad
                      </span>
                    </div>

                    {/* Temu/Shein Tier Selection Pills */}
                    <div className="pt-2 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold text-nuditos-marron-oscuro uppercase tracking-wider flex items-center gap-1">
                          <IconPercentage className="w-3.5 h-3.5 text-red-600" />
                          Selecciona tu Promo:
                        </span>
                        <span className="text-[10px] font-black text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                          Descuento automático
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        {/* 1 Unidad */}
                        <button
                          type="button"
                          onClick={() => setQuantity(1)}
                          className={`p-2.5 rounded-xl border text-center transition-all ${quantity === 1
                            ? 'border-emerald-700 bg-emerald-50/80 shadow-xs ring-2 ring-emerald-600/40'
                            : 'border-gray-200 bg-white/70 hover:bg-white'
                            }`}
                        >
                          <span className="block text-[10px] font-bold text-gray-600 uppercase">1 Adorno</span>
                          <span className="block text-xs font-black text-nuditos-marron-oscuro mt-0.5">$12.000</span>
                          <span className="block text-[8px] text-gray-400 mt-0.5">Individual</span>
                        </button>

                        {/* Pack 3 */}
                        <button
                          type="button"
                          onClick={() => setQuantity(3)}
                          className={`p-2.5 rounded-xl border text-center transition-all relative ${quantity === 3
                            ? 'border-amber-500 bg-amber-50 shadow-xs ring-2 ring-amber-400'
                            : 'border-amber-200 bg-white/70 hover:bg-white'
                            }`}
                        >
                          <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-[7px] font-black px-1.5 py-0.2 rounded-full uppercase whitespace-nowrap shadow-xs">
                            Popular
                          </span>
                          <span className="block text-[10px] font-black text-amber-900 uppercase">Pack x3</span>
                          <span className="block text-xs font-black text-amber-900 mt-0.5">$30.000</span>
                          <span className="block text-[8px] font-bold text-emerald-700 mt-0.5">Ahorras $6k</span>
                        </button>

                        {/* Pack 6 */}
                        <button
                          type="button"
                          onClick={() => setQuantity(6)}
                          className={`p-2.5 rounded-xl border text-center transition-all relative ${quantity >= 6
                            ? 'border-emerald-700 bg-emerald-50 shadow-xs ring-2 ring-emerald-600'
                            : 'border-emerald-200 bg-white/70 hover:bg-white'
                            }`}
                        >
                          <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-emerald-700 text-white text-[7px] font-black px-1.5 py-0.2 rounded-full uppercase whitespace-nowrap shadow-xs">
                            Súper Ahorro
                          </span>
                          <span className="block text-[10px] font-black text-emerald-950 uppercase">Pack x6</span>
                          <span className="block text-xs font-black text-emerald-950 mt-0.5">$50.000</span>
                          <span className="block text-[8px] font-bold text-emerald-700 mt-0.5">Ahorras $22k</span>
                        </button>
                      </div>

                      {/* Temu/Shein Incentive Text */}
                      {navidenoPricing && (
                        <div className={`p-2.5 rounded-xl border text-[11px] font-bold transition-all flex items-center gap-2 ${navidenoPricing.saved > 0
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                          : 'bg-amber-50 border-amber-300 text-amber-900'
                          }`}>
                          <IconSparkles className="w-3.5 h-3.5 shrink-0 text-amber-500" />
                          <div className="flex-1">
                            {navidenoPricing.saved > 0 ? (
                              <p>
                                <span className="font-black text-emerald-800">¡{navidenoPricing.packBadge}!</span> Ahorras <strong className="text-emerald-950">${navidenoPricing.saved.toLocaleString('es-CO')} COP</strong>.
                              </p>
                            ) : (
                              <p>{navidenoPricing.incentive}</p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="mt-2 flex items-center gap-3">
                    <span className="text-2xl font-black text-nuditos-marron">
                      ${currentPrice.toLocaleString('es-CO')} COP
                    </span>
                    {isNubi && (
                      <span className="text-xs font-semibold text-nuditos-verde bg-nuditos-verde-claro/20 px-2 py-1 rounded-md">
                        Envío Gratis
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Scannable Short Story (Marketing hook) */}
              <div className="space-y-2.5">
                <h3 className="text-sm font-extrabold text-nuditos-marron-oscuro uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-nuditos-amarillo fill-nuditos-amarillo" />
                  ¿Por qué te encantará?
                </h3>
                {product.story.map((paragraph, idx) => (
                  <p key={idx} className="text-sm text-nuditos-marron-oscuro/85 leading-relaxed font-medium">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Bullet Features */}
              {product.features && product.features.length > 0 && (
                <div className="bg-white rounded-2xl p-4 border border-nuditos-beige/40 shadow-gentle space-y-3">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start">
                      <div className="w-5 h-5 rounded-full bg-nuditos-verde/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-nuditos-marron-oscuro" />
                      </div>
                      <div>
                        <h4 className="text-xs font-extrabold text-nuditos-marron-oscuro">{feature.title}</h4>
                        <p className="text-xs text-nuditos-marron leading-normal mt-0.5">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* DYNAMIC NUBI CUSTOMIZATION FLOW */}
              {isNubi && (
                <div className="space-y-6 border-t border-nuditos-beige pt-5">
                  {/* Step 1: Model Choice */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-extrabold text-nuditos-marron-oscuro uppercase tracking-wider flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-nuditos-marron" />
                      Paso 1: Elige el Modelo
                    </h4>
                    <div className="space-y-2.5">
                      {nubiModels.map((model) => (
                        <button
                          key={model.id}
                          onClick={() => setSelectedModel(model)}
                          className={`w-full p-4.5 rounded-2xl border text-left transition-all ${selectedModel.id === model.id
                            ? 'border-nuditos-marron bg-white shadow-soft ring-1 ring-nuditos-marron scale-[1.01]'
                            : 'border-gray-200 bg-white/50 hover:bg-white'
                            }`}
                        >
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-extrabold text-nuditos-marron-oscuro">
                              {model.name}
                            </span>
                            <span className="font-extrabold text-xs text-nuditos-marron-oscuro">
                              ${model.price.toLocaleString('es-CO')}
                            </span>
                          </div>
                          <p className="text-xs text-nuditos-marron leading-snug">
                            {model.description}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Outfit Choice */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-extrabold text-nuditos-marron-oscuro uppercase tracking-wider flex items-center gap-1.5">
                      <Shield className="w-4 h-4 text-nuditos-marron" />
                      Paso 2: Elige su Ropita
                    </h4>
                    <div className="grid grid-cols-2 gap-2.5">
                      {nubiOutfits.map((outfit) => (
                        <button
                          key={outfit.id}
                          onClick={() => setSelectedOutfit(outfit)}
                          className={`p-3.5 rounded-2xl border text-center transition-all ${selectedOutfit.id === outfit.id
                            ? 'border-nuditos-marron bg-white shadow-soft ring-1 ring-nuditos-marron'
                            : 'border-gray-200 bg-white/50 hover:bg-white'
                            }`}
                        >
                          <span className="text-[10px] font-bold text-nuditos-marron-claro uppercase tracking-wider block mb-1">
                            {outfit.badge}
                          </span>
                          <span className="text-xs font-extrabold text-nuditos-marron-oscuro block">
                            {outfit.name}
                          </span>
                          <span className="text-[10px] text-nuditos-marron block mt-0.5">
                            {outfit.price > 0 ? `+$${outfit.price.toLocaleString('es-CO')}` : 'Gratis'}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Custom Name */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-extrabold text-nuditos-marron-oscuro uppercase tracking-wider">
                      Paso 3: Ponle un nombre (Opcional)
                    </h4>
                    <input
                      type="text"
                      maxLength={20}
                      value={customName}
                      onChange={(e) => setCustomName(e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, ''))}
                      placeholder="Ej. Copito, Nito, Bunny..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm outline-none focus-soft font-medium text-nuditos-marron-oscuro"
                    />
                    <p className="text-[10px] text-nuditos-marron">
                      Grabaremos este nombre en su certificado de adopción.
                    </p>
                  </div>
                </div>
              )}

              {/* DYNAMIC POLLITOS MODEL SELECTION FLOW */}
              {isPollitos && (
                <div id="pollito-model-selector" className="space-y-3.5 border-t border-nuditos-beige pt-5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-extrabold text-nuditos-marron-oscuro uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      Elige tu Modelo ({pollitoModels.length} disponibles)
                    </h4>
                    {selectedPollitoModel ? (
                      <span className="text-xs font-bold text-[#20ba5a] flex items-center gap-1 bg-green-50 px-2.5 py-1 rounded-full border border-green-200">
                        <Check className="w-3.5 h-3.5" />
                        {selectedPollitoModel.name}
                      </span>
                    ) : (
                      <span className="text-[11px] font-black text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300 animate-pulse">
                        Paso Requerido
                      </span>
                    )}
                  </div>

                  {pollitoModelError && !selectedPollitoModel && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs font-bold text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                      Por favor selecciona un modelo antes de pedir por WhatsApp.
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {pollitoModels.map((model, idx) => {
                      const isSelected = selectedPollitoModel?.id === model.id;
                      return (
                        <button
                          key={model.id}
                          type="button"
                          onClick={() => handleSelectPollitoModel(model, idx)}
                          className={`p-3 rounded-2xl border text-left transition-all duration-200 flex items-center gap-3 active:scale-[0.98] ${isSelected
                            ? 'border-amber-500 bg-amber-50/80 shadow-md ring-2 ring-amber-400'
                            : 'border-gray-200 bg-white/70 hover:bg-white hover:border-amber-200'
                            }`}
                        >
                          <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-gray-100 bg-gray-50 shadow-xs">
                            <Image
                              src={model.image}
                              alt={model.name}
                              fill
                              className="object-cover"
                              sizes="56px"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 mb-0.5">
                              <span className="text-[10px] font-bold text-nuditos-marron-claro uppercase">
                                {model.tag}
                              </span>
                              <span className="text-xs font-black text-nuditos-marron-oscuro truncate">
                                {model.name}
                              </span>
                            </div>
                            <p className="text-[10px] text-nuditos-marron line-clamp-1">
                              {model.hat}
                            </p>
                          </div>
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border transition-all ${isSelected
                              ? 'bg-amber-500 border-amber-500 text-white'
                              : 'border-gray-300 bg-white'
                              }`}
                          >
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* DYNAMIC POLLITOS NAVIDEÑOS MODEL SELECTION */}
              {isPollitosNavidenos && (
                <div className="space-y-3.5 border-t border-nuditos-beige pt-5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-extrabold text-nuditos-marron-oscuro uppercase tracking-wider flex items-center gap-1.5">
                      <IconChristmasTree className="w-4 h-4 text-emerald-600" />
                      Elige tu Modelo ({pollitosNavidenosModels.length} opciones)
                    </h4>
                    {selectedNavidenoModel && (
                      <span className="text-xs font-bold text-emerald-800 flex items-center gap-1 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        {selectedNavidenoModel.tag}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {pollitosNavidenosModels.map((model, idx) => {
                      const isSelected = selectedNavidenoModel?.id === model.id;
                      return (
                        <button
                          key={model.id}
                          type="button"
                          onClick={() => handleSelectNavidenoModel(model, idx)}
                          className={`p-3 rounded-2xl border text-left transition-all duration-200 flex items-center gap-3 active:scale-[0.98] ${isSelected
                            ? 'border-emerald-600 bg-emerald-50/70 shadow-md ring-2 ring-emerald-500/50'
                            : 'border-gray-200 bg-white/70 hover:bg-white hover:border-emerald-200'
                            }`}
                        >
                          <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-gray-100 bg-gray-50 shadow-xs">
                            <Image
                              src={model.image}
                              alt={model.name}
                              fill
                              className="object-cover"
                              sizes="56px"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 mb-0.5">
                              <span className="text-xs font-black text-nuditos-marron-oscuro truncate">
                                {model.name}
                              </span>
                            </div>
                            <p className="text-[10px] text-nuditos-marron line-clamp-1">
                              {model.desc}
                            </p>
                          </div>
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border transition-all ${isSelected
                              ? 'bg-emerald-600 border-emerald-600 text-white'
                              : 'border-gray-300 bg-white'
                              }`}
                          >
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

            </div>

            {/* Sticky Buy Panel (Action Bottom Bar) */}
            <div className="bg-white border-t border-nuditos-beige/70 p-4.5 pb-6 flex flex-col gap-2 z-20">

              {/* Savings strip for Pollitos Navideños */}
              {isPollitosNavidenos && navidenoPricing && navidenoPricing.saved > 0 && (
                <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl text-[11px] font-black text-emerald-900">
                  <span className="flex items-center gap-1">
                    <IconPercentage className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span>¡Promo aplicada: {navidenoPricing.packBadge}!</span>
                  </span>
                  <span className="text-emerald-950 font-black">
                    Ahorras ${navidenoPricing.saved.toLocaleString('es-CO')}
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between gap-4">
                {/* Quantity Selector */}
                <div className="flex items-center bg-nuditos-beige/50 border border-nuditos-beige rounded-xl p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-9 h-9 flex items-center justify-center font-bold text-nuditos-marron-oscuro active:bg-nuditos-beige rounded-lg"
                    aria-label="Disminuir"
                  >
                    −
                  </button>
                  <span className="w-8 text-center text-sm font-extrabold text-nuditos-marron-oscuro">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-9 h-9 flex items-center justify-center font-bold text-nuditos-marron-oscuro active:bg-nuditos-beige rounded-lg"
                    aria-label="Aumentar"
                  >
                    +
                  </button>
                </div>

                {/* WhatsApp Call to Action */}
                <button
                  onClick={handleBuyOnWhatsApp}
                  className={`flex-1 text-white active:scale-[0.98] transition-all py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2 text-sm font-extrabold shadow-md outline-none focus-soft min-h-[48px] ${isPollitos && !selectedPollitoModel
                    ? 'bg-[#25D366]/85 hover:bg-[#25D366]'
                    : 'bg-[#25D366] hover:bg-[#20ba5a]'
                    }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>
                    {isPollitos && !selectedPollitoModel
                      ? 'Selecciona tu modelo'
                      : isPollitos && selectedPollitoModel
                        ? `Pedir (${selectedPollitoModel.name})`
                        : 'Pedir por WhatsApp'}
                  </span>
                  <div className="bg-white/25 px-2 py-0.5 rounded-md text-xs font-black flex items-center gap-1.5">
                    {isPollitosNavidenos && navidenoPricing && navidenoPricing.saved > 0 && (
                      <span className="line-through opacity-60 text-[10px]">
                        ${navidenoPricing.regularTotal.toLocaleString('es-CO')}
                      </span>
                    )}
                    <span>${totalPrice.toLocaleString('es-CO')}</span>
                  </div>
                </button>
              </div>

            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
