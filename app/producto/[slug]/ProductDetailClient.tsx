'use client';

import { useState } from 'react';
import { HandHeart, Shield, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/src/components/Button';
import { ProductDetail } from '@/src/data/products';

export default function ProductDetailClient({ product }: { product: ProductDetail }) {
  const [quantity, setQuantity] = useState(1);

  const images = [product.image, ...(product.gallery || [])];
  const [activeImage, setActiveImage] = useState(images[0]);

  const handleBuyOnWhatsApp = () => {
    const message = `¡Hola! Me gustaría comprar el producto:\n- Producto: ${product.name}\n- Categoría: ${product.category}\n- Cantidad: ${quantity}\n- Precio unitario: $${product.price.toLocaleString('es-CO')}\n- Total: $${(product.price * quantity).toLocaleString('es-CO')}`;
    const whatsappUrl = `https://wa.me/573053655297?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-nuditos-crema pb-16 pt-[88px] sm:pt-[100px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-6 text-sm text-nuditos-marron" aria-label="Breadcrumb">
          <Link
            href={product.category === 'Moñas' ? '/monas' : `/${product.category.toLowerCase()}`}
            className="flex items-center gap-1.5 font-semibold hover:text-nuditos-marron-oscuro transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 flex-shrink-0" />
            <span>{product.category}</span>
          </Link>
          <span className="text-nuditos-beige">/</span>
          <span className="text-nuditos-marron-oscuro font-medium line-clamp-1 text-xs sm:text-sm">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20">

          {/* Galería de Imágenes */}
          <div className="space-y-3">
            {/* Imagen principal */}
            <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-medium relative group"
              style={{ aspectRatio: '4/5' }}>
              <Image
                src={activeImage}
                alt={product.name}
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                {product.isNew && (
                  <span className="bg-white/90 backdrop-blur-md text-nuditos-marron-oscuro text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                    Nuevo
                  </span>
                )}
                {product.isPopular && (
                  <span className="bg-nuditos-amarillo/90 backdrop-blur-md text-nuditos-marron-oscuro text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                    Favorito
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-1 scrollbar-hide">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0 border-2 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-nuditos-marron/20 ${
                      activeImage === img
                        ? 'border-nuditos-marron shadow-md scale-100'
                        : 'border-transparent scale-95 opacity-60 hover:opacity-100 hover:scale-100'
                    }`}
                  >
                    <Image src={img} alt={`Vista ${idx + 1}`} fill className="object-cover" sizes="(max-width: 640px) 64px, 80px" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Información del Producto */}
          <div className="flex flex-col gap-5 lg:justify-center">

            {/* Nombre y precio */}
            <div className="space-y-2">
              <p className="text-nuditos-marron-claro font-bold text-xs uppercase tracking-widest">
                {product.category}
              </p>
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-nuditos-marron-oscuro leading-tight tracking-tight">
                {product.name}
              </h1>
              <div className="text-2xl sm:text-3xl font-bold text-nuditos-amarillo drop-shadow-sm">
                ${product.price.toLocaleString('es-CO')}
              </div>
            </div>

            {/* Descripción */}
            <div className="space-y-3 pt-4 border-t border-nuditos-marron/10">
              {product.story.map((paragraph, index) => (
                <p key={index} className="text-sm sm:text-base text-nuditos-marron leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Buy Section */}
            <div className="bg-nuditos-marron-oscuro rounded-2xl sm:rounded-[2rem] p-4 sm:p-6 shadow-medium text-white">
              <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/10">
                <div>
                  <p className="text-white/70 mb-1 text-xs font-medium">Total a pagar</p>
                  <div className="text-2xl sm:text-3xl font-bold">
                    ${(product.price * quantity).toLocaleString('es-CO')}
                  </div>
                </div>

                {/* Quantity Control */}
                <div className="flex items-center bg-white/10 rounded-xl border border-white/20 p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    aria-label="Disminuir cantidad"
                    className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/20 active:bg-white/30 rounded-lg transition-all"
                  >
                    <span className="text-xl leading-none font-medium">−</span>
                  </button>
                  <span className="w-10 text-center font-bold text-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    aria-label="Aumentar cantidad"
                    className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/20 active:bg-white/30 rounded-lg transition-all"
                  >
                    <span className="text-xl leading-none font-medium">+</span>
                  </button>
                </div>
              </div>

              <Button
                onClick={handleBuyOnWhatsApp}
                className="w-full justify-center bg-[#25D366] text-white hover:bg-[#20ba5a] active:bg-[#1da850] text-base sm:text-lg h-14 rounded-xl transition-all shadow-lg border-none"
                size="lg"
              >
                Comprar por WhatsApp
              </Button>
            </div>

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="grid grid-cols-2 gap-4">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-nuditos-marron shadow-sm flex-shrink-0">
                      {idx === 0 ? <HandHeart className="w-5 h-5" /> : <Shield className="w-5 h-5" />}
                    </div>
                    <div>
                      <h4 className="font-bold text-nuditos-marron-oscuro text-xs sm:text-sm">{feature.title}</h4>
                      <p className="text-xs text-nuditos-marron mt-0.5 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

