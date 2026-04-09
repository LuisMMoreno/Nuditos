import Link from 'next/link';
import Button from '../Button';
import { Package, Key, Flower, Sparkles } from 'lucide-react';

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
    emoji: '👜',
  },
  {
    id: 'llaveros',
    name: 'Llaveros',
    tagline: 'Un anclaje de bolsillo',
    description: 'Pequeños recordatorios tangibles de bienestar. Diseñados para calzarse en tus llaves o en tu maleta, estos accesorios te brindan una porción de confort táctil y visual donde quiera que vayas, ideales para momentos de estrés súbito.',
    icon: Key,
    href: '/accesorios', 
    bgLight: 'bg-nuditos-amarillo-claro/10',
    blobColor: 'bg-nuditos-amarillo',
    buttonVariant: 'primary',
    reversed: true,
    emoji: '🔑',
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
    emoji: '🌷',
  },
  {
    id: 'monas',
    name: 'Moñas',
    tagline: 'Detalles que abrazan',
    description: 'Accesorios suaves para el cabello que no jalonan ni lastiman. Creadas con la misma intención terapéutica y materiales nobles de nuestros amigurumis, completando tu estilo con pequeñas pinceladas de amor.',
    icon: Sparkles,
    href: '/accesorios',
    bgLight: 'bg-nuditos-crema',
    blobColor: 'bg-nuditos-marron-claro',
    buttonVariant: 'primary',
    reversed: true,
    emoji: '🎀',
  },
];

export default function CategoriesSection() {
  return (
    <section className="bg-white">
      {categories.map((category, index) => (
        <div key={category.id} className={`py-20 sm:py-32 ${category.bgLight} overflow-hidden`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col gap-12 lg:gap-20 items-center ${category.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
              
              {/* Text Content */}
              <div className="flex-1 space-y-6 text-center lg:text-left z-10 w-full lg:w-1/2">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-2 bg-white shadow-soft text-nuditos-marron`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <h3 className="text-sm font-bold tracking-widest uppercase text-nuditos-marron-claro mb-2 block">
                  {category.tagline}
                </h3>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-nuditos-marron-oscuro mb-6 leading-tight">
                  {category.name}
                </h2>
                <p className="text-lg sm:text-xl text-nuditos-marron leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                  {category.description}
                </p>
                <div className="pt-4 flex justify-center lg:justify-start">
                  <Link href={category.href}>
                    <Button 
                      size="lg" 
                      className={category.buttonVariant === 'primary' ? '!bg-nuditos-marron !text-white hover:!bg-nuditos-marron-oscuro' : '!bg-white border-2 border-nuditos-marron !text-nuditos-marron hover:!bg-nuditos-marron hover:!text-white'}
                    >
                      Explorar {category.name}
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Image / Graphic Visual */}
              <div className="flex-1 relative w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center items-center">
                {/* Fondo asimétrico dinámico */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-[400px] sm:h-[400px] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] ${category.blobColor} opacity-20 blur-2xl animate-gentle-float`} />
                
                {/* Cuadro Glassmorphism principal (Placeholder imagen) */}
                <div className="relative z-10 w-full max-w-md aspect-[4/5] bg-white/40 backdrop-blur-md rounded-3xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col items-center justify-center overflow-hidden">
                  {/* Aquí irá la imagen real con un img tag. */}
                  <span className="text-8xl sm:text-[140px] drop-shadow-md group-hover:scale-110 transition-transform duration-500">{category.emoji}</span>
                  <div className="absolute bottom-6 left-6 right-6">
                     <div className="bg-white/80 p-4 rounded-2xl shadow-sm text-center">
                        <span className="text-sm font-bold text-nuditos-marron-oscuro uppercase tracking-wider">Colección {category.name}</span>
                     </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
