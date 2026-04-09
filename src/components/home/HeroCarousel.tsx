'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative overflow-hidden min-h-[80vh] sm:min-h-[70vh]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`
            absolute inset-0 transition-opacity duration-1000 ease-in-out
            bg-gradient-to-br ${slide.gradient}
            ${index === currentSlide ? 'opacity-100' : 'opacity-0'}
          `}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20 sm:pt-48 sm:pb-20 flex items-center min-h-[80vh] sm:min-h-[70vh]">
            <div className="max-w-2xl animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-nuditos-marron-oscuro mb-4 sm:mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-xl text-nuditos-marron mb-6 sm:mb-8 leading-relaxed">
                {slide.text}
              </p>
              <Link href={slide.href}>
                <Button size="lg" variant="primary">
                  {slide.cta}
                </Button>
              </Link>
            </div>
          </div>

          {/* Decoración */}
          <div className="absolute bottom-10 right-10 w-32 h-32 sm:w-48 sm:h-48 opacity-20 animate-gentle-float">
            <div className="w-full h-full rounded-full bg-nuditos-marron blur-3xl" />
          </div>
        </div>
      ))}

      {/* Controles */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center hover:bg-white transition-soft focus-soft shadow-soft"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5 text-nuditos-marron" />
        </button>

        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                w-2 h-2 rounded-full transition-all duration-500
                ${index === currentSlide ? 'w-8 bg-nuditos-marron' : 'bg-nuditos-marron/40'}
              `}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center hover:bg-white transition-soft focus-soft shadow-soft"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-5 h-5 text-nuditos-marron" />
        </button>
      </div>
    </section>
  );
}
