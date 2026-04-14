'use client';

import { Product } from './ProductCard';
import { ShoppingBag, Star, Sparkles } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BentoCatalogueProps {
  products: Product[];
  categoryName: string;
  categoryDescription: string;
  emptyMessage?: string;
}

export default function BentoCatalogue({ products, categoryName, categoryDescription, emptyMessage = "Próximamente agregaremos más productos hermosos a esta colección." }: BentoCatalogueProps) {
  const [isAdding, setIsAdding] = useState<number | null>(null);

  const handleQuickAdd = (product: Product) => {
    setIsAdding(product.id);
    setTimeout(() => setIsAdding(null), 500);
  };

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
        <div className="w-24 h-24 bg-nuditos-rosa-claro rounded-full flex items-center justify-center mb-6 animate-gentle-float">
          <Sparkles className="w-10 h-10 text-nuditos-marron" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-nuditos-marron-oscuro mb-4">Colección en Preparación</h3>
        <p className="text-lg text-nuditos-marron max-w-lg">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="py-8">
      {/* Editorial Header */}
      <div className="mb-12 max-w-3xl">
        <h2 className="text-4xl sm:text-6xl font-bold text-nuditos-marron-oscuro mb-6 tracking-tight">
          Colección <br/><span className="text-nuditos-marron italic font-serif">{categoryName}</span>
        </h2>
        <p className="text-lg sm:text-xl text-nuditos-marron leading-relaxed">
          {categoryDescription}
        </p>
      </div>

      {/* Bento Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[350px] md:auto-rows-[400px]">
        {products.map((product, index) => {
          // Determinar el tamaño de la tarjeta basado en el índice para lograr asimetría
          // Patrón: Grande (span 2), Normal (span 1), Normal (span 1), Ancho (span 2)
          let colSpanClass = "col-span-1";
          let rowSpanClass = "row-span-1";
          
          if (index === 0) {
            colSpanClass = "md:col-span-2 lg:col-span-2";
            rowSpanClass = "md:row-span-2";
          } else if (index === 3) {
            colSpanClass = "md:col-span-2 lg:col-span-3";
          }

          return (
            <div 
              key={product.id}
              className={`group relative rounded-[2rem] overflow-hidden bg-white shadow-soft hover:shadow-medium transition-all duration-500 ease-out flex flex-col ${colSpanClass} ${rowSpanClass}`}
            >
              {/* Contenedor de Imagen de Fondo con Zoom (ahora clickeable) */}
              <Link href={product.slug ? `/producto/${product.slug}` : '#'} className="absolute inset-0 bg-nuditos-beige overflow-hidden group/link">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-nuditos-crema text-8xl">
                    {product.emoji}
                  </div>
                )}
                {/* Gradiente sutil para legibilidad de textos */}
                <div className="absolute inset-0 bg-gradient-to-t from-nuditos-marron-oscuro/80 via-nuditos-marron-oscuro/20 to-transparent transition-opacity duration-300" />
              </Link>

              {/* Botón flotante superior (Badges) */}
              <div className="absolute top-6 left-6 flex flex-col gap-2 z-10 pointer-events-none">
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

              {/* Contenido Editorial en la base */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out pointer-events-none">
                <div className="flex justify-between items-end gap-4 pointer-events-auto">
                  <div className="flex-1">
                    <Link href={product.slug ? `/producto/${product.slug}` : '#'} className="block hover:underline decoration-white/50 underline-offset-4">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight text-shadow-sm">
                        {product.name}
                      </h3>
                    </Link>
                    
                    {/* Descripcion que aparece en hover */}
                    <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-24 opacity-0 group-hover:opacity-100">
                      <p className="text-white/90 text-sm sm:text-base line-clamp-2 mt-2 mb-2 font-medium">
                        {product.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 mt-3">
                      <span className="text-xl sm:text-2xl font-bold text-nuditos-amarillo drop-shadow-md">
                        ${product.price.toLocaleString('es-CO')}
                      </span>
                      {product.rating && (
                        <div className="flex items-center gap-1 bg-black/20 backdrop-blur-md px-3 py-1 rounded-full">
                          <Star className="w-4 h-4 text-nuditos-amarillo fill-nuditos-amarillo" />
                          <span className="text-white text-sm font-medium">{product.rating}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Accion Flotante Círculo */}
                  <button
                    onClick={(e) => { e.preventDefault(); handleQuickAdd(product); }}
                    className={`w-14 h-14 rounded-full bg-white text-nuditos-marron flex items-center justify-center transition-all duration-300 hover:bg-nuditos-rosa hover:scale-110 shadow-lg ${isAdding === product.id ? 'scale-90 bg-nuditos-verde text-white' : ''}`}
                    aria-label={`Agregar ${product.name} al carrito`}
                  >
                    <ShoppingBag className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
