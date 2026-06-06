'use client';

import { useState } from 'react';
import { HandHeart, Shield, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Button from '@/src/components/Button';
import { ProductDetail } from '@/src/data/products';

export default function ProductDetailClient({ product }: { product: ProductDetail }) {
  const [quantity, setQuantity] = useState(1);
  
  const images = [product.image, ...(product.gallery || [])];
  const [activeImage, setActiveImage] = useState(images[0]);

  const handleBuyOnWhatsApp = () => {
    const message = `¡Hola! Me gustaría comprar el producto:
- Producto: ${product.name}
- Categoría: ${product.category}
- Cantidad: ${quantity}
- Precio unitario: $${product.price.toLocaleString('es-CO')}
- Total: $${(product.price * quantity).toLocaleString('es-CO')}`;
    const whatsappUrl = `https://wa.me/573053655297?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-nuditos-crema pb-20 pt-[100px] sm:pt-[112px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb navegación */}
        <nav className="flex items-center gap-3 mb-10 text-sm text-nuditos-marron" aria-label="Breadcrumb">
          <Link
            href={product.category === 'Moñas' ? '/monas' : `/${product.category.toLowerCase()}`}
            className="flex items-center gap-2 font-semibold text-nuditos-marron hover:text-nuditos-marron-oscuro transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            {product.category}
          </Link>
          <span className="text-nuditos-beige">/</span>
          <span className="text-nuditos-marron-oscuro font-medium line-clamp-1">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20">
          {/* Galería de Imágenes */}
          <div className="space-y-4">
            <div className="w-full rounded-3xl overflow-hidden bg-white shadow-medium relative group" style={{aspectRatio: '3/4', maxHeight: '70vh'}}>
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
                {product.isNew && (
                  <span className="bg-white/90 backdrop-blur-md text-nuditos-marron-oscuro text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-sm">
                    Nuevo
                  </span>
                )}
                {product.isPopular && (
                  <span className="bg-nuditos-amarillo/90 backdrop-blur-md text-nuditos-marron-oscuro text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-sm">
                    Favorito
                  </span>
                )}
              </div>
            </div>
            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden flex-shrink-0 border-2 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-nuditos-marron/20 ${
                      activeImage === img ? 'border-nuditos-marron scale-100 shadow-md' : 'border-transparent scale-95 opacity-70 hover:opacity-100 hover:scale-100'
                    }`}
                  >
                    <img src={img} alt={`Vista ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Información del Producto y Compra */}
          <div className="space-y-10 flex flex-col justify-center">
            
            <div className="space-y-4">
              <p className="text-nuditos-marron-claro font-bold text-sm uppercase tracking-widest">
                {product.category}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-nuditos-marron-oscuro leading-tight tracking-tight">
                {product.name}
              </h1>
              <div className="text-3xl sm:text-4xl font-bold text-nuditos-amarillo drop-shadow-sm">
                ${product.price.toLocaleString('es-CO')}
              </div>
            </div>

            {/* Storytelling Text */}
            <div className="space-y-4 pt-6 border-t border-nuditos-marron/10">
              {product.story.map((paragraph, index) => (
                <p key={index} className="text-base sm:text-lg text-nuditos-marron leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Buy Section */}
            <div className="bg-nuditos-marron-oscuro rounded-[2.5rem] p-6 sm:p-8 lg:p-10 shadow-medium text-white mt-8">
              <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-8">
                <div>
                  <p className="text-white/70 mb-2 font-medium">Total</p>
                  <div className="text-3xl font-bold flex items-center gap-3">
                    <span>${(product.price * quantity).toLocaleString('es-CO')}</span>
                  </div>
                </div>

                {/* Quantity Control */}
                <div className="flex items-center bg-white/10 rounded-2xl border border-white/20 p-1.5 isolate">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center text-white hover:bg-white/20 active:bg-white/30 rounded-xl transition-all"
                  >
                    <span className="text-2xl leading-none font-medium">−</span>
                  </button>
                  <span className="w-14 text-center font-bold text-xl">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center text-white hover:bg-white/20 active:bg-white/30 rounded-xl transition-all"
                  >
                    <span className="text-2xl leading-none font-medium">+</span>
                  </button>
                </div>
              </div>

              <Button
                onClick={handleBuyOnWhatsApp}
                className="w-full justify-center bg-[#25D366] text-white hover:bg-[#20ba5a] active:bg-[#1da850] text-lg h-16 rounded-2xl transition-all shadow-lg border-none"
                size="lg"
              >
                Comprar por WhatsApp
              </Button>
            </div>
            
            {/* Features Decorativas */}
            {product.features && product.features.length > 0 && (
              <div className="grid grid-cols-2 gap-6 pt-8 mt-4">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-nuditos-marron shadow-sm">
                      {idx === 0 ? <HandHeart className="w-6 h-6" /> : <Shield className="w-6 h-6" />}
                    </div>
                    <div>
                      <h4 className="font-bold text-nuditos-marron-oscuro text-sm">{feature.title}</h4>
                      <p className="text-xs text-nuditos-marron mt-1 leading-relaxed">{feature.desc}</p>
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
