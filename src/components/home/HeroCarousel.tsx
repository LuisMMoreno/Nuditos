'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import Image from 'next/image';

const slides = [
  { id: 1, imagePath: '/banners/banner1.jpg', bgFallback: 'bg-gray-200' },
  { id: 2, imagePath: '/banners/banner2.jpg', bgFallback: 'bg-gray-300' },
  { id: 3, imagePath: '/banners/banner3.jpg', bgFallback: 'bg-gray-400' },
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
      className="relative overflow-hidden w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] mt-[100px] sm:mt-[110px]"
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
            absolute inset-0 transition-opacity duration-700 ease-out flex items-center justify-center
            ${slide.bgFallback} text-black/50
            ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}
          `}
          aria-hidden={index !== currentSlide}
          role="group"
          aria-roledescription="slide"
          aria-label={`Banner ${index + 1}`}
        >
          {/* Instrucciones para el usuario; la imagen se mostrará por encima si existe */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-0">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Espacio para Banner {slide.id}</h2>
            <p className="text-sm">Guarda la imagen en <strong>public/banners/banner{slide.id}.jpg</strong></p>
          </div>

          {/* Imagen del banner - oculta cualquier error si no existe la imagen con object-cover y div relativo */}
          <div className="absolute inset-0 z-10">
            {/* Usa un un tag picture/img nativo para mejor manejo de errores temporales antes de subirlas */}
            <img 
              src={slide.imagePath} 
              alt={`Banner Promocional ${slide.id}`} 
              className="w-full h-full object-cover"
              onError={(e) => {
                // Oculta la imagen si está rota para mostrar el mensaje de abajo
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>
      ))}

      {/* Controls */}
      <div
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 sm:gap-4 z-20"
        role="tablist"
        aria-label="Navegación del carrusel"
      >
        <button
          onClick={prevSlide}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/60 backdrop-blur-md flex items-center justify-center hover:bg-white hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black shadow-soft"
          aria-label="Slide anterior"
          disabled={isPaused}
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
        </button>

        <div className="flex gap-2" role="group" aria-label="Indicadores de slide">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black
                ${index === currentSlide
                  ? 'w-8 h-2 bg-black'
                  : 'w-2 h-2 bg-black/40 hover:bg-black/60'
                }
              `}
              aria-label={`Ir al slide ${index + 1}`}
              aria-selected={index === currentSlide}
              role="tab"
              aria-controls={`slide-${index}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/60 backdrop-blur-md flex items-center justify-center hover:bg-white hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black shadow-soft"
          aria-label="Siguiente slide"
          disabled={isPaused}
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
        </button>

        <button
          onClick={() => setIsPaused(!isPaused)}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/60 backdrop-blur-md flex items-center justify-center hover:bg-white hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black shadow-soft"
          aria-label={isPaused ? 'Reproducir' : 'Pausar'}
        >
          {isPaused ? (
            <Play className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
          ) : (
            <Pause className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
          )}
        </button>
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
