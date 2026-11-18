'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Search, Sparkles, Heart, Compass, Check, X } from 'lucide-react';
import { IconChristmasTree, IconSparkles, IconGift, IconSnowflake } from '@tabler/icons-react';
import { productsData, ProductDetail } from '@/src/data/products';
import BottomSheet from '../category/BottomSheet';
import ChristmasSnowfall from './ChristmasSnowfall';
import PromoModal from './PromoModal';

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
      const categories = ['Todos', 'Navidad', 'Pollitos', 'Nubi', 'Moñas', 'Diademas', 'Llaveros', 'Bolsos'];
      if (categories.includes(normalizedCategory)) {
        setActiveCategory(normalizedCategory);
      } else if (categoryParam.toLowerCase() === 'navidad') {
        setActiveCategory('Navidad');
      } else if (categoryParam.toLowerCase() === 'pollitos') {
        setActiveCategory('Pollitos');
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

  // Categories list (Flores oculto temporalmente - producto aún no disponible)
  const categories = ['Todos', 'Navidad', 'Pollitos', 'Nubi', 'Moñas', 'Diademas', 'Llaveros', 'Bolsos'];

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

  // Filter products (Flores oculto temporalmente)
  const filteredProducts = productsData.filter((product) => {
    if (product.category.toLowerCase() === 'flores') return false; // oculto hasta disponibilidad
    const matchesCategory =
      activeCategory === 'Todos' ||
      product.category.toLowerCase() === activeCategory.toLowerCase() ||
      (activeCategory === 'Pollitos' && product.slug.includes('pollitos')) ||
      (activeCategory === 'Navidad' && (product.category.toLowerCase() === 'navidad' || product.slug.includes('naviden')));
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full max-w-[480px] mx-auto min-h-screen bg-nuditos-crema flex flex-col relative pb-16">

      {/* Christmas Snowfall Effect */}
      <ChristmasSnowfall />

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

      {/* Christmas Promo Teaser Banner */}
      <div className="px-5 pt-0 pb-2.5 bg-nuditos-crema">
        <div
          onClick={() => {
            const p = productsData.find(item => item.slug === 'pollitos-navidenos');
            if (p) handleProductOpen(p);
          }}
          className="p-3 rounded-2xl bg-gradient-to-r from-[#142f23] via-[#1b4332] to-[#142f23] text-white flex items-center justify-between border border-amber-400/40 shadow-sm cursor-pointer hover:brightness-105 active:scale-[0.99] transition-all group"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-400/20 border border-amber-300/40 flex items-center justify-center shrink-0">
              <IconGift className="w-5 h-5 text-amber-300 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] font-black uppercase text-amber-300 tracking-wider">
                  Promo Navideña
                </span>
                <span className="bg-red-600 text-white text-[8px] font-black px-1.5 py-0.2 rounded-full uppercase">
                  Hasta -31%
                </span>
              </div>
              <p className="text-xs font-black text-white leading-tight">
                POLLITOS DECORATIVOS
              </p>
            </div>
          </div>
          <span className="text-[10px] font-black bg-amber-400 text-emerald-950 px-2.5 py-1.5 rounded-full uppercase shrink-0 shadow-xs">
            Ver Promo
          </span>
        </div>
      </div>

      {/* 3. STICKY CATEGORIES SLIDER */}
      <div className="py-2.5 bg-nuditos-crema border-b border-nuditos-beige/30">
        <div className="flex gap-2 overflow-x-auto px-5 pb-1 scrollbar-hide">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            const isNavidad = cat === 'Navidad';
            const isPollitos = cat === 'Pollitos';
            return (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 scale-95 active:scale-90 flex items-center gap-1.5 ${isSelected
                  ? isNavidad
                    ? 'bg-gradient-to-r from-[#142f23] via-[#1b4332] to-[#142f23] text-white shadow-lg ring-2 ring-emerald-400 scale-100 font-extrabold'
                    : isPollitos
                      ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-white shadow-lg ring-2 ring-yellow-300 scale-100 font-extrabold'
                      : 'bg-nuditos-marron text-white shadow-md'
                  : isNavidad
                    ? 'bg-emerald-50 text-emerald-900 border border-emerald-300 hover:bg-emerald-100 font-black shadow-xs ring-1 ring-emerald-200/50'
                    : isPollitos
                      ? 'bg-amber-100 text-amber-900 border-2 border-amber-400 hover:bg-amber-200 font-black shadow-sm ring-1 ring-amber-300/50'
                      : 'bg-white text-nuditos-marron border border-nuditos-beige/65 hover:bg-gray-50'
                  }`}
              >
                {isNavidad && <IconChristmasTree className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                {cat}
                {isNavidad && (
                  <span className="bg-amber-400/90 text-emerald-950 text-[9px] px-1.5 py-0.5 rounded-full font-black uppercase tracking-wider">
                    Especial
                  </span>
                )}
                {isPollitos && (
                  <span className="bg-amber-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-black uppercase tracking-wider">
                    Nuevo
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. PRODUCT LIST (2-Column scannable grid) */}
      <div className="px-5 py-4 relative z-10 flex-1">
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center bg-white/50 backdrop-blur-xs rounded-[2rem] border border-nuditos-beige/40 p-6">
            <Search className="w-8 h-8 text-nuditos-marron-claro mx-auto" />
            <h3 className="text-base font-extrabold text-nuditos-marron-oscuro mt-3">No encontramos resultados</h3>
            <p className="text-xs text-nuditos-marron mt-1">Prueba escribiendo otra palabra clave o cambiando el filtro de categoría.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3.5">
            {filteredProducts.map((product, index) => {
              if (product.isSpan2) {
                return (
                  <div
                    key={product.id}
                    onClick={() => handleProductOpen(product)}
                    className="col-span-2 bg-gradient-to-b from-white via-[#FCFAF6] to-white rounded-[2rem] p-3.5 border border-amber-300/60 shadow-soft hover:shadow-medium transition-all duration-300 active:scale-[0.99] cursor-pointer group flex flex-col justify-between relative overflow-hidden"
                  >
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-200/25 rounded-full blur-2xl pointer-events-none" />

                    <div>
                      {/* Wide Landscape Image Container */}
                      <div className="relative aspect-[16/10] w-full rounded-2xl bg-nuditos-crema overflow-hidden shadow-xs">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 500px) 100vw, 500px"
                          priority
                        />

                        {/* Badges */}
                        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 bg-[#142f23]/90 backdrop-blur-xs text-amber-200 text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm border border-amber-400/30">
                          <IconChristmasTree className="w-3 h-3 text-emerald-300" />
                          <span>Edición Navidad · Destacado</span>
                        </div>

                        <div className="absolute top-2.5 right-2.5 flex items-center gap-1 bg-white/95 backdrop-blur-xs text-nuditos-marron-oscuro text-[9px] font-extrabold px-2.5 py-1 rounded-full shadow-xs">
                          <IconSparkles className="w-3 h-3 text-amber-500" />
                          <span>Para el Árbol</span>
                        </div>

                        {/* Shein/Temu Discount Badge */}
                        <div className="absolute bottom-2.5 left-2.5 bg-red-600 text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider shadow-md flex items-center gap-1 border border-red-300">
                          <span>Hasta -31% OFF</span>
                        </div>
                      </div>

                      {/* Meta details */}
                      <div className="pt-3 px-1 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-extrabold text-emerald-800 uppercase tracking-widest flex items-center gap-1">
                            <IconSnowflake className="w-2.5 h-2.5 text-emerald-600" />
                            Decoración Navideña
                          </span>
                          <span className="text-[10px] text-nuditos-marron-claro font-semibold">
                            5 modelos coleccionables
                          </span>
                        </div>
                        <h3 className="text-sm sm:text-base font-extrabold text-nuditos-marron-oscuro group-hover:text-nuditos-marron transition-colors">
                          {product.name}
                        </h3>

                        {/* Temu-style bundle savings strip */}
                        <div className="flex flex-wrap gap-1.5 pt-0.5">
                          <span className="bg-amber-100 text-amber-900 border border-amber-300 text-[9px] font-black px-2 py-0.5 rounded-full">
                            3 por $30.000 (Ahorras $6k)
                          </span>
                          <span className="bg-emerald-100 text-emerald-900 border border-emerald-300 text-[9px] font-black px-2 py-0.5 rounded-full">
                            6 por $50.000 (Ahorras $22k)
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="px-1 pt-3 mt-3 border-t border-nuditos-crema flex justify-between items-center">
                      <div>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-sm sm:text-base font-black text-nuditos-marron-oscuro">
                            ${product.price.toLocaleString('es-CO')}
                          </span>
                          <span className="text-xs text-gray-400 line-through">
                            $16.000
                          </span>
                          <span className="text-[9px] text-gray-400 font-bold uppercase">
                            c/u
                          </span>
                        </div>
                        <span className="text-[9px] text-emerald-800 font-extrabold block">
                          Desde $8.333 c/u en pack x6
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-gradient-to-r from-[#173a28] to-[#25573d] text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-sm group-hover:shadow transition-all">
                        <IconGift className="w-3.5 h-3.5 text-amber-300" />
                        <span>Ver modelos y promo</span>
                      </div>
                    </div>
                  </div>
                );
              }

              // Marketing badging tags mapping
              let badgeText = '';
              let badgeColor = '';
              let badgeIcon: React.ReactNode = null;

              if (product.slug === 'nubi') {
                badgeText = 'TERAPÉUTICO';
                badgeColor = 'bg-nuditos-marron text-white';
              } else if (product.slug === 'pollitos-con-sombrero') {
                badgeText = 'DESTACADO';
                badgeColor = 'bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-sm font-black';
                badgeIcon = <IconSparkles className="w-2.5 h-2.5 inline mr-1 text-amber-200" />;
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
                        loading={index < 2 ? 'eager' : 'lazy'}
                        priority={index === 0}
                      />

                      {/* Floating Badge (Marketing) */}
                      {badgeText && (
                        <span className={`absolute top-2 left-2 text-[8px] font-black px-2 py-1 rounded-full uppercase tracking-wider shadow-xs flex items-center ${badgeColor}`}>
                          {badgeIcon}
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

      {/* 6. POPUP PROMO MODAL */}
      <PromoModal
        onSelectProduct={(slug) => {
          const found = productsData.find(p => p.slug === slug);
          if (found) {
            handleProductOpen(found);
          }
        }}
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
