'use client';

import { useState } from 'react';
import { ShoppingBag, Star } from 'lucide-react';

export interface Product {
  id: number;
  slug?: string;
  name: string;
  description: string;
  price: number;
  emoji?: string;
  image?: string;
  category: string;
  rating?: number;
  reviews?: number;
  colors?: string[];
  isNew?: boolean;
  isPopular?: boolean;
}

interface ProductCardProps {
  product: Product;
  onQuickAdd: (product: Product) => void;
}

export default function ProductCard({ product, onQuickAdd }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleQuickAdd = () => {
    setIsAdding(true);
    onQuickAdd(product);
    setTimeout(() => setIsAdding(false), 500);
  };

  return (
    <div
      className="bg-white rounded-3xl p-4 sm:p-6 shadow-soft hover:shadow-medium transition-soft group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square rounded-2xl bg-nuditos-crema mb-4 overflow-hidden">
        {/* Image/Emoji */}
        <div className={`w-full h-full flex items-center justify-center transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}>
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <span className="text-5xl sm:text-6xl">{product.emoji}</span>
          )}
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.isNew && (
            <span className="bg-nuditos-verde text-white text-xs font-bold px-2 py-1 rounded-full">
              Nuevo
            </span>
          )}
          {product.isPopular && (
            <span className="bg-nuditos-amarillo text-nuditos-marron-oscuro text-xs font-bold px-2 py-1 rounded-full">
              Popular
            </span>
          )}
        </div>

        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-3 right-3 w-11 h-11 rounded-full bg-nuditos-marron text-nuditos-crema flex items-center justify-center transition-all duration-300 hover:bg-nuditos-marron-oscuro focus-soft ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          } ${isAdding ? 'scale-90' : 'scale-100'}`}
          aria-label={`Agregar ${product.name} al carrito`}
        >
          <ShoppingBag className="w-5 h-5" />
        </button>
      </div>

      {/* Colors Preview */}
      {product.colors && product.colors.length > 0 && (
        <div className="flex gap-2 mb-3">
          {product.colors.slice(0, 4).map((color, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full ${color} ring-2 ring-nuditos-beige`}
              title={`Color ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Rating */}
      {product.rating && (
        <div className="flex items-center gap-1 mb-2">
          <div className="flex text-nuditos-amarillo" aria-label={`${product.rating} estrellas`}>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating || 0) ? 'fill-current' : 'text-nuditos-beige'
                }`}
              />
            ))}
          </div>
          {product.reviews && (
            <span className="text-xs text-nuditos-marron">({product.reviews})</span>
          )}
        </div>
      )}

      {/* Category */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-medium text-nuditos-marron bg-nuditos-rosa-claro px-2 py-1 rounded-full">
          {product.category}
        </span>
      </div>

      {/* Name & Description */}
      <h3 className="text-base sm:text-lg font-bold text-nuditos-marron-oscuro mb-1 line-clamp-1">
        {product.name}
      </h3>
      <p className="text-sm text-nuditos-marron mb-3 line-clamp-2 min-h-[2.5rem]">
        {product.description}
      </p>

      {/* Price & Add */}
      <div className="flex items-center justify-between">
        <span className="text-lg sm:text-xl font-bold text-nuditos-marron-oscuro">
          ${product.price.toLocaleString('es-CO')}
        </span>
        <button
          onClick={handleQuickAdd}
          className="w-10 h-10 rounded-full bg-nuditos-rosa flex items-center justify-center hover:bg-nuditos-rosa-claro transition-soft focus-soft md:hidden"
          aria-label={`Agregar ${product.name} al carrito`}
        >
          <ShoppingBag className="w-5 h-5 text-nuditos-marron" />
        </button>
      </div>
    </div>
  );
}
