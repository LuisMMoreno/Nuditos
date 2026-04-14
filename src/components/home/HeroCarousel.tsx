'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import Button from '../Button';
import Link from 'next/link';

const slides = [
  {
    title: 'Tu compañero para la calma interior',
    text: 'Amigurumis diseñados específicamente para la regulación emocional y el confort profundo.',
    cta: 'Conocer a Nubi',
    href: '/nubi',
    gradient: 'from-nuditos-rosa via-nuditos-crema to-nuditos-amarillo-claro',
  },
  {
    title: 'Siente el alivio de un refugio seguro',
    text: 'Modelos terapéuticos con peso que brindan contención cuando las palabras no alcanzan.',
    cta: 'Descubrir beneficios',
    href: '/nubi',
    gradient: 'from-nuditos-verde-claro via-nuditos-crema to-nuditos-rosa-claro',
  },
  {
    title: 'Personaliza su abrazo',
    text: 'Descubre las ropitas tejidas con intención y cariño para tu compañero silencioso.',
    cta: 'Ver ropitas',
    href: '/nubi',
    gradient: 'from-nuditos-amarillo-claro via-nuditos-crema to-nuditos-beige',
  },
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
      className="relative overflow-hidden min-h-[80vh] sm:min-h-[70vh]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Galería destacada"
      aria-roledescription="carrusel"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`
            absolute inset-0 transition-opacity duration-700 ease-out
            bg-gradient-to-br ${slide.gradient}
            ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          `}
          aria-hidden={index !== currentSlide}
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} de ${slides.length}: ${slide.title}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-20 flex items-center min-h-[80vh] sm:min-h-[70vh]">
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-nuditos-marron-oscuro mb-4 sm:mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-nuditos-marron mb-6 sm:mb-8 leading-relaxed max-w-xl">
                {slide.text}
              </p>
              <Link href={slide.href}>
                <Button size="lg" variant="primary" aria-label={slide.cta}>
                  {slide.cta}
                </Button>
              </Link>
            </div>
          </div>

          <div className="absolute bottom-20 right-4 sm:right-10 w-24 h-24 sm:w-40 sm:h-40 opacity-15 animate-gentle-float">
            <div className="w-full h-full rounded-full bg-nuditos-marron blur-3xl" />
          </div>
        </div>
      ))}

      {/* Controls */}
      <div
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 sm:gap-4"
        role="tablist"
        aria-label="Navegación del carrusel"
      >
        <button
          onClick={prevSlide}
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nuditos-marron focus-visible:ring-offset-2 shadow-soft"
          aria-label="Slide anterior"
          disabled={isPaused}
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-nuditos-marron" />
        </button>

        <div className="flex gap-2" role="group" aria-label="Indicadores de slide">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nuditos-marron
                ${index === currentSlide
                  ? 'w-8 h-2 bg-nuditos-marron'
                  : 'w-2 h-2 bg-nuditos-marron/40 hover:bg-nuditos-marron/60'
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
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nuditos-marron focus-visible:ring-offset-2 shadow-soft"
          aria-label="Siguiente slide"
          disabled={isPaused}
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-nuditos-marron" />
        </button>

        <button
          onClick={() => setIsPaused(!isPaused)}
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nuditos-marron focus-visible:ring-offset-2 shadow-soft"
          aria-label={isPaused ? 'Reproducir' : 'Pausar'}
        >
          {isPaused ? (
            <Play className="w-5 h-5 sm:w-6 sm:h-6 text-nuditos-marron" />
          ) : (
            <Pause className="w-5 h-5 sm:w-6 sm:h-6 text-nuditos-marron" />
          )}
        </button>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-nuditos-marron/10">
        <div
          className="h-full bg-nuditos-marron transition-all duration-100 ease-linear"
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
