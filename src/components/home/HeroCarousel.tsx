'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import Image from 'next/image';

const slides = [
  { id: 1, imagePath: '/banners/banner1.jpg', bgFallback: 'bg-gray-200' },
  { id: 2, imagePath: '/banners/banner2.jpg', bgFallback: 'bg-gray-300' },
];

const AUTOPLAY_INTERVAL = 6000;

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<number>(0);
  const lastTickRef = useRef<number>(Date.now());

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
    progressRef.current = 0;
    lastTickRef.current = Date.now();
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
    progressRef.current = 0;
    lastTickRef.current = Date.now();
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
    progressRef.current = 0;
    lastTickRef.current = Date.now();
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      const now = Date.now();
      const elapsed = now - lastTickRef.current;
      const newProgress = Math.min((elapsed / AUTOPLAY_INTERVAL) * 100, 100);

      progressRef.current = newProgress;
      setProgress(newProgress);

      if (elapsed >= AUTOPLAY_INTERVAL) {
        nextSlide();
      }
    }, 100);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  return (
    <section
      className="relative overflow-hidden w-full aspect-[3/2] md:aspect-auto md:h-[75vh] lg:h-[85vh] max-h-[900px] mt-[100px] sm:mt-[112px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Banner promocional"
      aria-roledescription="carrusel"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`
            absolute inset-0 transition-opacity duration-700 ease-out
            ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}
          `}
          aria-hidden={index !== currentSlide}
          role="group"
          aria-roledescription="slide"
          aria-label={`Banner ${index + 1}`}
        >
          {/* Capa 1: Fondo borroso para llenar los espacios sin recortes abruptos */}
          <div className="absolute inset-0 z-0 overflow-hidden bg-nuditos-crema">
            <img 
              src={slide.imagePath} 
              alt="" 
              className="w-full h-full object-cover blur-3xl scale-110 opacity-60"
              aria-hidden="true"
            />
            {/* Overlay sutil para suavizar el fondo */}
            <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
          </div>

          {/* Capa 2: Imagen principal sin recortes (object-contain) */}
          <div className="absolute inset-0 z-10 flex items-center justify-center p-0 sm:p-4">
            <img 
              src={slide.imagePath} 
              alt={`Banner Promocional ${slide.id}`} 
              className="w-full h-full object-contain sm:drop-shadow-2xl"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>
      ))}

      {/* Controls */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20"
        role="tablist"
        aria-label="Navegación del carrusel"
      >
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="flex items-center justify-center transition-all duration-200 hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
          aria-label={isPaused ? 'Reproducir' : 'Pausar'}
        >
          {isPaused ? (
            <Play className="w-4 h-4 text-black fill-black" />
          ) : (
            <Pause className="w-4 h-4 text-black fill-black" />
          )}
        </button>

        <div className="flex gap-2 items-center" role="group" aria-label="Indicadores de slide">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black
                ${index === currentSlide
                  ? 'w-2 h-2 bg-black'
                  : 'w-1.5 h-1.5 bg-black/40 hover:bg-black/60'
                }
              `}
              aria-label={`Ir al slide ${index + 1}`}
              aria-selected={index === currentSlide}
              role="tab"
              aria-controls={`slide-${index}`}
            />
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/10 z-20">
        <div
          className="h-full bg-black transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Progreso del slide"
        />
      </div>
    </section>
  );
}
