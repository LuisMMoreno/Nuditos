import Button from '../Button';
import Link from 'next/link';
import { Heart, Sparkles, HandHeart } from 'lucide-react';

const values = [
  {
    icon: HandHeart,
    title: 'Estímulo Sensorial',
    text: 'El peso y la textura actúan sobre el sistema nervioso, ayudando a reducir la ansiedad.',
    color: 'bg-nuditos-rosa',
    iconColor: 'text-nuditos-marron',
  },
  {
    icon: Sparkles,
    title: 'Apoyo Terapéutico',
    text: 'Facilita la calma durante episodios de hiperactividad o estrés extremo.',
    color: 'bg-nuditos-amarillo',
    iconColor: 'text-nuditos-marron',
  },
  {
    icon: Heart,
    title: 'Apego Seguro',
    text: 'Un anclaje físico que transmite una sensación constante de compañía y seguridad.',
    color: 'bg-nuditos-verde',
    iconColor: 'text-nuditos-marron',
  },
];

export default function NubiSection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-nuditos-crema to-white" aria-labelledby="nubi-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Texto Introductorio con Pasarela (Marquee) de Fondo */}
        <div className="relative mb-16 sm:mb-20 rounded-[2.5rem] overflow-hidden bg-white/50 backdrop-blur-sm border border-white/60 shadow-medium py-20 sm:py-32">
          
          {/* Pasarela a la derecha (Fondo) */}
          <div className="absolute inset-0 w-full h-full overflow-hidden opacity-30 pointer-events-none flex items-center">
            <div className="flex w-[300%] sm:w-[200%] lg:w-[150%] animate-marquee-right">
              {/* Doble set de imágenes para el bucle (6 + 6) */}
              {[...Array(6), ...Array(6)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-56 sm:w-64 md:w-80 h-72 sm:h-80 md:h-96 mx-3 sm:mx-4 flex-shrink-0 bg-nuditos-crema/40 backdrop-blur-sm border border-nuditos-marron/5 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative"
                >
                  {/* Placeholder vacío decorativo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-nuditos-beige/20 to-nuditos-crema/20 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/30 flex items-center justify-center shadow-inner">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-nuditos-marron/30" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9c.83 0 1.5-.67 1.5-1.5S7.83 8 7 8s-1.5.67-1.5 1.5S6.17 11 7 11zm3.5 3c-.83 0-1.5-.67-1.5-1.5S9.67 11 10.5 11s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3.5-3c-.83 0-1.5-.67-1.5-1.5S13.17 8 14 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3.5 3c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Fades a los lados del fondo */}
            <div className="absolute top-0 left-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-white/90 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-white/90 to-transparent pointer-events-none" />
          </div>

          {/* Contenido Frontal */}
          <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            <p className="text-3xl sm:text-4xl md:text-5xl text-nuditos-marron-oscuro leading-relaxed sm:leading-snug drop-shadow-sm">
              <span className="font-display italic text-4xl sm:text-5xl md:text-6xl pr-2 text-nuditos-marron">Nubi</span> 
              es más que un simple muñeco, es un 
              <strong className="font-bold px-2 block sm:inline">compañero terapéutico</strong>
              diseñado para abrazar tus días y brindarte 
              <span className="font-display italic text-4xl sm:text-5xl md:text-6xl pl-2 text-nuditos-marron">regulación emocional profunda</span>.
            </p>

            <div className="mt-12 text-center">
              <Link href="/nubi">
                <Button size="lg" variant="primary" className="shadow-medium hover:shadow-lg hover:-translate-y-1 active:translate-y-0 active:scale-95 px-10 transition-all duration-300">
                  Conocer a Nubi
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group text-center p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-nuditos-marron focus-within:ring-offset-2"
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-5 sm:mb-6 transition-transform duration-300 group-hover:scale-110`}>
                <value.icon className="w-7 h-7 sm:w-8 sm:h-8 text-nuditos-marron" aria-hidden="true" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-nuditos-marron-oscuro mb-3">
                {value.title}
              </h3>
              <p className="text-sm sm:text-base text-nuditos-marron leading-relaxed">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
