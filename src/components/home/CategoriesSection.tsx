import Link from 'next/link';
import Image from 'next/image';
import Button from '../Button';
import { Package, Key, Flower, Sparkles, Crown } from 'lucide-react';

const categories = [
  {
    id: 'bolsos',
    name: 'Bolsos',
    tagline: 'Lleva tu calma contigo',
    description: 'Piezas tejidas con paciencia, personalidad y funcionalidad. Cada bolso es un abrazo de hilo diseñado para acompañarte en tu día a día, envolviendo tus esenciales en la suavidad de un trabajo verdaderamente artesanal.',
    icon: Package,
    href: '/bolsos',
    bgLight: 'bg-nuditos-verde-claro/10',
    blobColor: 'bg-nuditos-verde',
    buttonVariant: 'outline',
    reversed: false,
  },
  {
    id: 'llaveros',
    name: 'Llaveros',
    tagline: 'Un anclaje de bolsillo',
    description: 'Pequeños recordatorios tangibles de bienestar. Diseñados para calzarse en tus llaves o en tu maleta, estos accesorios te brindan una porción de confort táctil y visual donde quiera que vayas, ideales para momentos de estrés súbito.',
    icon: Key,
    href: '/llaveros',
    bgLight: 'bg-nuditos-amarillo-claro/10',
    blobColor: 'bg-nuditos-amarillo',
    buttonVariant: 'primary',
    reversed: true,
  },
  {
    id: 'flores',
    name: 'Flores',
    tagline: 'Belleza que perdura',
    description: 'Regalos emocionales que no se marchitan con el tiempo. Tejidas a mano con suprema delicadeza, nuestras flores simbolizan el cuidado eterno y el afecto incondicional, perfectas para alegrar cualquier espacio de forma permanente.',
    icon: Flower,
    href: '/flores',
    bgLight: 'bg-nuditos-rosa-claro/10',
    blobColor: 'bg-nuditos-rosa',
    buttonVariant: 'outline',
    reversed: false,
  },
  {
    id: 'monas',
    name: 'Moñas',
    tagline: 'Detalles que abrazan',
    description: 'Accesorios suaves para el cabello que no jalonan ni lastiman. Creadas con la misma intención terapéutica y materiales nobles de nuestros amigurumis, completando tu estilo con pequeñas pinceladas de amor.',
    icon: Sparkles,
    image: '/categories/monas.png',
    href: '/monas',
    bgLight: 'bg-nuditos-crema',
    blobColor: 'bg-nuditos-marron-claro',
    buttonVariant: 'primary',
    reversed: true,
  },
  {
    id: 'diademas',
    name: 'Diademas',
    tagline: 'Coronas de confort',
    description: 'Piezas únicas diseñadas para coronar tu rutina con estilo y comodidad. Nuestras diademas están estructuradas para no causar presión, combinando materiales de alta calidad con personajes que te harán sonreír.',
    icon: Crown,
    image: '/categories/sapito.png',
    href: '/diademas',
    bgLight: 'bg-nuditos-beige/20',
    blobColor: 'bg-nuditos-marron',
    buttonVariant: 'outline',
    reversed: false,
  },
];

const categoryIcons = {
  bolsos: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M6 7h12v13H6zM9 7V5a3 3 0 016 0v2" />
      <circle cx="12" cy="13" r="1.5" fill="currentColor" />
    </svg>
  ),
  llaveros: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="8" cy="8" r="5" />
      <path d="M11.5 11.5L16 16l2-2" />
      <circle cx="18" cy="18" r="2" />
    </svg>
  ),
  flores: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 2v20M12 7c-2-2-5-2-7 0s-2 5 0 7 5 2 7 0" />
      <path d="M12 7c2-2 5-2 7 0s2 5 0 7-5 2-7 0" />
      <path d="M12 12c-2 2-5 2-7 0s-2-5 0-7" />
      <path d="M12 12c2 2 5 2 7 0s2-5 0-7" />
    </svg>
  ),
  monas: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 8c-3 0-5 2-5 5s2 5 5 5 5-2 5-5-2-5-5-5z" />
      <path d="M12 18v4M8 22h8" />
      <circle cx="12" cy="13" r="2" fill="currentColor" />
    </svg>
  ),
  diademas: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M4 14l2-8h12l2 8" />
      <path d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />
      <path d="M12 14v6" />
    </svg>
  ),
};

export default function CategoriesSection() {
  return (
    <section className="bg-white" aria-label="Categorías de productos">
      {categories.map((category) => (
        <article
          key={category.id}
          className={`py-12 sm:py-20 ${category.bgLight} overflow-hidden`}
          aria-labelledby={`${category.id}-title`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col gap-8 sm:gap-12 lg:gap-16 items-center ${category.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>

              {/* Text Content */}
              <div className="flex-1 text-center lg:text-left z-10 w-full lg:w-1/2 space-y-4 sm:space-y-6">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-soft text-nuditos-marron mx-auto lg:mx-0 overflow-hidden relative">
                  {category.image ? (
                    <Image
                      src={category.image}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  ) : (
                    categoryIcons[category.id as keyof typeof categoryIcons]
                  )}
                </div>
                <h3 className="text-xs sm:text-sm font-bold tracking-widest uppercase text-nuditos-marron-claro">
                  {category.tagline}
                </h3>
                <h2 id={`${category.id}-title`} className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-nuditos-marron-oscuro leading-tight">
                  {category.name}
                </h2>
                <p className="text-base sm:text-lg text-nuditos-marron leading-relaxed max-w-xl mx-auto lg:mx-0">
                  {category.description}
                </p>
                <div className="pt-2 flex justify-center lg:justify-start">
                  <Link href={category.href}>
                    <Button
                      size="lg"
                      variant={category.buttonVariant as 'primary' | 'outline'}
                      className="min-w-[140px]"
                    >
                      Explorar {category.name}
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Visual Card */}
              <div className="flex-1 relative w-full lg:w-1/2 mt-4 lg:mt-0 flex justify-center items-center">
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-72 sm:h-72 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] ${category.blobColor} opacity-15 blur-2xl animate-gentle-float`} />

                <div className="relative z-10 w-full max-w-sm aspect-[4/5] bg-white/50 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col items-center justify-center overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/20" />
                  
                  {category.image ? (
                    <div className="relative w-full h-full p-4 sm:p-6 flex items-center justify-center">
                      <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-inner">
                        <Image
                          src={category.image}
                          alt={category.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white/60 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {categoryIcons[category.id as keyof typeof categoryIcons]}
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 px-4 py-3 rounded-xl text-center shadow-sm">
                      <span className="text-xs sm:text-sm font-bold text-nuditos-marron-oscuro uppercase tracking-wider">
                        Colección {category.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
