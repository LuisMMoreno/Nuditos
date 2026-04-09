import Link from 'next/link';
import Button from '../Button';

export default function CTASection() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-nuditos-marron via-nuditos-marron-claro to-nuditos-rosa">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-md mb-8 leading-tight max-w-4xl">
          Un abrazo que siempre está, incluso en la distancia
        </h2>
        <p className="text-xl sm:text-2xl text-nuditos-crema mb-12 max-w-3xl drop-shadow-sm font-medium leading-relaxed">
          Nubi no es solo un peluche, es un refugio seguro. Diseñado como muñeco de regulación emocional
          para acompañar, escuchar en silencio y calmar la ansiedad.
        </p>
        <br />

        <Link href="/nubi">
          <Button
            size="lg"
            className="!bg-nuditos-crema !text-nuditos-marron-oscuro font-black hover:!bg-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] px-12 py-5 text-xl border-2 border-white/30 transform hover:scale-105 transition-all duration-300"
          >
            Regalar un Nubi
          </Button>
        </Link>

        {/* Decorative elements */}

      </div>
    </section>
  );
}
