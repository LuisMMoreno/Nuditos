import Link from 'next/link';
import Button from '../Button';
import { ArrowRight, Heart } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-nuditos-marron via-nuditos-marron-claro to-nuditos-rosa" aria-labelledby="cta-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Badge de urgencia */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
          <Heart className="w-4 h-4 text-white fill-white" aria-hidden="true" />
          <span className="text-sm font-semibold text-white">Envío gratis en pedidos hoy</span>
        </div>

        <h2 id="cta-heading" className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white drop-shadow-md mb-4 sm:mb-6 leading-tight max-w-4xl">
          Un abrazo que siempre está, incluso en la distancia
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-nuditos-crema mb-8 sm:mb-10 max-w-2xl drop-shadow-sm font-medium leading-relaxed">
          Nubi no es solo un peluche, es un refugio seguro. Diseñado como muñeco de regulación emocional
          para acompañar, escuchar en silencio y calmar la ansiedad.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="/nubi">
            <Button
              size="lg"
              variant="primary"
              className="!bg-nuditos-crema !text-nuditos-marron-oscuro font-bold hover:!bg-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] px-8 sm:px-10 py-4 text-base sm:text-lg border-2 border-white/30 hover:scale-105 active:scale-95 transition-all duration-200 group min-w-[160px]"
            >
              Regalar un Nubi
              <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
            </Button>
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4 sm:gap-6 text-white/80 text-xs sm:text-sm">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 13l4 4L19 7" />
            </svg>
            Envío seguro
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 13l4 4L19 7" />
            </svg>
            30 días de garantía
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 13l4 4L19 7" />
            </svg>
            Hecho con amor
          </span>
        </div>
      </div>
    </section>
  );
}
