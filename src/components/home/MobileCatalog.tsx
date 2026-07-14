'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Search, Sparkles, Heart, Compass, Check, X } from 'lucide-react';
import { productsData, ProductDetail } from '@/src/data/products';
import BottomSheet from '../category/BottomSheet';

function CatalogContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get('category');
  const productParam = searchParams.get('product');

  // State
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  // Sync category and product from query parameters
  useEffect(() => {
    if (categoryParam) {
      const normalizedCategory = categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1).toLowerCase();
      // Validate it exists in our categories
      const categories = ['Todos', 'Nubi', 'Moñas', 'Diademas', 'Llaveros', 'Bolsos', 'Flores'];
      if (categories.includes(normalizedCategory)) {
        setActiveCategory(normalizedCategory);
      } else if (categoryParam.toLowerCase() === 'monas') {
        setActiveCategory('Moñas');
      }
    }
  }, [categoryParam]);

  useEffect(() => {
    if (productParam) {
      const foundProduct = productsData.find(p => p.slug === productParam);
      if (foundProduct) {
        setSelectedProduct(foundProduct);
        setIsBottomSheetOpen(true);
      }
    }
  }, [productParam]);

  // Categories list
  const categories = ['Todos', 'Nubi', 'Moñas', 'Diademas', 'Llaveros', 'Bolsos', 'Flores'];

  // Handle category pill click
  const handleCategoryClick = (cat: string) => {
    setActiveCategory(cat);
    // Update URL query param cleanly without reload
    const urlCategory = cat === 'Todos' ? '' : cat.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (urlCategory) {
      router.push(`/?category=${urlCategory}`, { scroll: false });
    } else {
      router.push(`/`, { scroll: false });
    }
  };

  // Open product sheet
  const handleProductOpen = (product: ProductDetail) => {
    setSelectedProduct(product);
    setIsBottomSheetOpen(true);
    router.push(`/?product=${product.slug}`, { scroll: false });
  };

  // Close product sheet
  const handleProductClose = () => {
    setIsBottomSheetOpen(false);
    // Remove product param from URL
    const urlCategory = activeCategory === 'Todos' ? '' : activeCategory.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (urlCategory) {
      router.push(`/?category=${urlCategory}`, { scroll: false });
    } else {
      router.push(`/`, { scroll: false });
    }
  };

  // Filter products
  const filteredProducts = productsData.filter((product) => {
    const matchesCategory = activeCategory === 'Todos' || product.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full max-w-[480px] mx-auto min-h-screen bg-nuditos-crema flex flex-col relative pb-16">
      
      {/* Decorative Warm Blob Background */}
      <div className="absolute top-[400px] right-5 w-36 h-36 bg-[#E8D7A0]/20 rounded-full blur-2xl pointer-events-none z-0" />

      {/* 2. SEARCH BAR */}
      <div className="px-5 py-3 bg-nuditos-crema">
        <div className="relative flex items-center bg-white border border-nuditos-beige rounded-2xl shadow-sm focus-within:ring-2 focus-within:ring-nuditos-marron transition-all">
          <Search className="absolute left-4 w-4 h-4 text-nuditos-marron-claro" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="¿Qué estás buscando hoy?"
            className="w-full pl-10 pr-10 py-3 rounded-2xl text-xs font-semibold outline-none text-nuditos-marron-oscuro"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 p-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* 3. STICKY CATEGORIES SLIDER */}
      <div className="py-2.5 bg-nuditos-crema border-b border-nuditos-beige/30">
        <div className="flex gap-2 overflow-x-auto px-5 pb-1 scrollbar-hide">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 scale-95 active:scale-90 ${
                  isSelected
                    ? 'bg-nuditos-marron text-white shadow-md'
                    : 'bg-white text-nuditos-marron border border-nuditos-beige/65 hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. PRODUCT LIST (2-Column scannable grid) */}
      <div className="px-5 py-4 relative z-10 flex-1">
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center bg-white/50 backdrop-blur-xs rounded-[2rem] border border-nuditos-beige/40 p-6">
            <span className="text-4xl">🔍</span>
            <h3 className="text-base font-extrabold text-nuditos-marron-oscuro mt-3">No encontramos resultados</h3>
            <p className="text-xs text-nuditos-marron mt-1">Prueba escribiendo otra palabra clave o cambiando el filtro de categoría.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3.5">
            {filteredProducts.map((product) => {
              // Marketing badging tags mapping
              let badgeText = '';
              let badgeColor = '';
              
              if (product.slug === 'nubi') {
                badgeText = 'TERAPÉUTICO';
                badgeColor = 'bg-nuditos-marron text-white';
              } else if (product.isNew) {
                badgeText = 'NUEVO';
                badgeColor = 'bg-nuditos-verde text-white';
              } else if (product.isPopular) {
                badgeText = 'FAVORITO';
                badgeColor = 'bg-[#E8D7A0] text-nuditos-marron-oscuro';
              }

              return (
                <div
                  key={product.id}
                  onClick={() => handleProductOpen(product)}
                  className="bg-white rounded-[2rem] p-3 border border-nuditos-beige/20 shadow-soft hover:shadow-medium transition-all duration-300 active:scale-[0.98] flex flex-col justify-between cursor-pointer group"
                >
                  <div className="space-y-2">
                    {/* Image Container */}
                    <div className="relative aspect-square w-full rounded-2xl bg-nuditos-crema overflow-hidden shadow-xs">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 250px) 50vw, 250px"
                      />
                      
                      {/* Floating Badge (Marketing) */}
                      {badgeText && (
                        <span className={`absolute top-2 left-2 text-[8px] font-black px-2 py-1 rounded-full uppercase tracking-wider shadow-xs ${badgeColor}`}>
                          {badgeText}
                        </span>
                      )}
                    </div>

                    {/* Meta info */}
                    <div className="px-1.5 space-y-1">
                      <span className="text-[9px] font-bold text-nuditos-marron-claro uppercase tracking-widest block">
                        {product.category}
                      </span>
                      <h3 className="text-xs sm:text-sm font-extrabold text-nuditos-marron-oscuro leading-tight line-clamp-1 group-hover:text-nuditos-marron">
                        {product.name}
                      </h3>
                      <p className="text-[10px] text-nuditos-marron leading-normal line-clamp-2 min-h-[30px]">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  {/* Price info */}
                  <div className="px-1.5 pt-2 mt-2 border-t border-nuditos-crema flex justify-between items-center">
                    <span className="text-xs sm:text-sm font-black text-nuditos-marron-oscuro">
                      ${product.price.toLocaleString('es-CO')}
                    </span>
                    <span className="w-6 h-6 rounded-full bg-nuditos-rosa-claro text-nuditos-marron text-xs flex items-center justify-center font-bold">
                      +
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 5. BOTTOM DETAIL SHEET */}
      <BottomSheet
        product={selectedProduct}
        isOpen={isBottomSheetOpen}
        onClose={handleProductClose}
      />

    </div>
  );
}

export default function MobileCatalog() {
  return (
    <Suspense fallback={
      <div className="w-full max-w-[480px] mx-auto min-h-screen bg-nuditos-crema flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-nuditos-marron border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-sm text-nuditos-marron font-bold">Cargando catálogo...</p>
        </div>
      </div>
    }>
      <CatalogContent />
    </Suspense>
  );
}
