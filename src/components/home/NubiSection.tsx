import Button from '../Button';
import Link from 'next/link';
import Image from 'next/image';
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

const nubiImages = [
  '/nubi/IMG_3448.jpeg',
  '/nubi/IMG_3421.jpeg',
  '/nubi/IMG_3453.jpeg',
  '/nubi/IMG_3435.jpeg',
  '/nubi/IMG_3412.jpeg',
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
              {/* Múltiple set de imágenes para asegurar un bucle infinito continuo (5 * 3) */}
              {[...nubiImages, ...nubiImages, ...nubiImages].map((src, i) => (
                <div 
                  key={i} 
                  className="w-56 sm:w-64 md:w-80 h-72 sm:h-80 md:h-96 mx-3 sm:mx-4 flex-shrink-0 bg-nuditos-crema/40 backdrop-blur-sm border border-nuditos-marron/5 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative"
                >
                  <Image 
                    src={src} 
                    alt={`Nubi ${i + 1}`} 
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, 320px"
                  />
                </div>
              ))}
            </div>
            
            {/* Fades a los lados del fondo */}
            <div className="absolute top-0 left-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-white/90 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-white/90 to-transparent pointer-events-none" />
          </div>

          {/* Contenido Frontal */}
          <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            <h2 id="nubi-heading" className="sr-only">Nubi: Nuestro compañero terapéutico</h2>
            <p className="text-2xl sm:text-3xl md:text-4xl text-nuditos-marron-oscuro leading-relaxed sm:leading-loose">
              <span className="font-serif italic text-4xl sm:text-5xl md:text-6xl font-normal text-nuditos-marron-claro block sm:inline mb-2 sm:mb-0">Nubi</span>{' '}
              es más que un simple muñeco, es un{' '}
              <span className="font-extrabold text-nuditos-marron-oscuro bg-nuditos-amarillo/40 px-2 py-0.5 rounded-lg whitespace-nowrap">
                compañero terapéutico
              </span>{' '}
              diseñado para abrazar tus días y brindarte{' '}
              <span className="font-serif italic text-3xl sm:text-4xl md:text-5xl font-medium text-nuditos-marron block sm:inline mt-2 sm:mt-0 underline decoration-nuditos-rosa decoration-wavy decoration-2 underline-offset-8">
                regulación emocional profunda
              </span>.
            </p>

            <div className="mt-14 text-center">
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
