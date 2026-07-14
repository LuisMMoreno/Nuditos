'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, Heart, Sparkles, AlertCircle, ShoppingBag, Award, Shield, Check, Info } from 'lucide-react';
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
  { id: 'ninguno', name: 'Sin ropita', icon: '🐰', price: 0 },
  { id: 'tiburon', name: 'Saco Tiburón (Azul)', icon: '🦈', price: 20000 },
  { id: 'sapito', name: 'Saco Sapito (Verde)', icon: '🐸', price: 20000 },
  { id: 'gatito', name: 'Saco Gatito (Negro)', icon: '🐱', price: 20000 },
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

  // Reset states when product changes
  useEffect(() => {
    setSelectedModel(nubiModels[0]);
    setSelectedOutfit(nubiOutfits[0]);
    setCustomName('');
    setQuantity(1);
    setActiveImageIndex(0);
  }, [product]);

  if (!product) return null;

  const isNubi = product.slug === 'nubi';

  // Get gallery images
  const allImages = isNubi 
    ? (nubiOutfitImages[selectedOutfit.id] || nubiOutfitImages.ninguno)
    : [product.image, ...(product.gallery || [])];

  const currentPrice = isNubi 
    ? (selectedModel.price + selectedOutfit.price) 
    : product.price;

  const totalPrice = currentPrice * quantity;

  const handleBuyOnWhatsApp = () => {
    let message = '';
    if (isNubi) {
      message = `¡Hola Nuditos! Me gustaría encargar a Nubi:
- Modelo: ${selectedModel.name}
- Ropita: ${selectedOutfit.name}
${customName.trim() ? `- Nombre para mi Nubi: "${customName.trim()}"\n` : ''}- Cantidad: ${quantity}
- Total: $${totalPrice.toLocaleString('es-CO')} COP

¿Me confirman la disponibilidad para envío?`;
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
                        onClick={() => setActiveImageIndex(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                          activeImageIndex === i ? 'bg-nuditos-marron-oscuro w-5' : 'bg-gray-300/80'
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
                      onClick={() => setActiveImageIndex(i)}
                      className={`relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                        activeImageIndex === i ? 'border-nuditos-marron-oscuro scale-95 shadow-sm' : 'border-transparent opacity-75'
                      }`}
                    >
                      <Image src={img} alt="" fill className="object-cover" sizes="64px" />
                    </button>
                  ))}
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
                          className={`w-full p-4.5 rounded-2xl border text-left transition-all ${
                            selectedModel.id === model.id
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
                          className={`p-3.5 rounded-2xl border text-center transition-all ${
                            selectedOutfit.id === outfit.id
                              ? 'border-nuditos-marron bg-white shadow-soft ring-1 ring-nuditos-marron'
                              : 'border-gray-200 bg-white/50 hover:bg-white'
                          }`}
                        >
                          <span className="text-2xl block mb-1">{outfit.icon}</span>
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

            </div>

            {/* Sticky Buy Panel (Action Bottom Bar) */}
            <div className="bg-white border-t border-nuditos-beige/70 p-4.5 pb-6 flex items-center justify-between gap-4 z-20">
              
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
                className="flex-1 bg-[#25D366] text-white hover:bg-[#20ba5a] active:scale-[0.98] transition-all py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2 text-sm font-extrabold shadow-md outline-none focus-soft min-h-[48px]"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Pedir por WhatsApp</span>
                <span className="bg-white/25 px-2 py-0.5 rounded-md text-xs font-black">
                  ${totalPrice.toLocaleString('es-CO')}
                </span>
              </button>

            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
