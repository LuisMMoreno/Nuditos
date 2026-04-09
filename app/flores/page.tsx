import Link from 'next/link';
import { ShoppingBag, Heart } from 'lucide-react';
import Button from '@/src/components/Button';

const flores = [
  {
    id: 1,
    name: 'Ramo de Rosas Eternas',
    description: 'Rosas tejidas en tonos rosa y rojo que nunca se marchitan',
    price: 35,
    emoji: '🌹',
    colors: ['bg-nuditos-rosa', 'bg-nuditos-marron-claro'],
  },
  {
    id: 2,
    name: 'Girasol de la Alegría',
    description: 'Un rayo de sol en forma de flor tejida',
    price: 18,
    emoji: '🌻',
    colors: ['bg-nuditos-amarillo', 'bg-nuditos-verde'],
  },
  {
    id: 3,
    name: 'Tulipanes de Primavera',
    description: 'Set de 3 tulipanes en colores pastel',
    price: 28,
    emoji: '🌷',
    colors: ['bg-nuditos-rosa-claro', 'bg-nuditos-amarillo-claro'],
  },
  {
    id: 4,
    name: 'Lavanda Calmante',
    description: 'Ramito de lavanda que transmite tranquilidad',
    price: 22,
    emoji: '🌿',
    colors: ['bg-nuditos-verde-claro', 'bg-nuditos-beige'],
  },
  {
    id: 5,
    name: 'Margaritas Silvestres',
    description: 'Alegría en forma de margaritas blancas',
    price: 20,
    emoji: '🌼',
    colors: ['bg-nuditos-crema', 'bg-nuditos-amarillo'],
  },
  {
    id: 6,
    name: 'Orquídea Elegante',
    description: 'Sofisticación en cada pétalo tejido',
    price: 45,
    emoji: '🌺',
    colors: ['bg-nuditos-rosa', 'bg-nuditos-blanco'],
  },
];

export default function FloresPage() {
  return (
    <div className="min-h-screen bg-nuditos-crema">
      {/* Header */}
      <div className="bg-gradient-to-br from-nuditos-rosa via-nuditos-crema to-nuditos-amarillo-claro py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-5xl mb-4 block">💐</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-nuditos-marron-oscuro mb-4">
            Flores que Nunca Se Marchitan
          </h1>
          <p className="text-lg sm:text-xl text-nuditos-marron max-w-2xl mx-auto">
            Regalos tejidos con amor que duran para siempre, como los momentos especiales
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {flores.map((producto) => (
            <div
              key={producto.id}
              className="bg-white rounded-3xl p-6 shadow-soft hover:shadow-medium transition-soft group"
            >
              {/* Image */}
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-nuditos-crema to-nuditos-rosa-claro mb-6 flex items-center justify-center overflow-hidden">
                <span className="text-7xl group-hover:scale-110 transition-soft">
                  {producto.emoji}
                </span>
              </div>

              {/* Info */}
              <h3 className="text-lg font-bold text-nuditos-marron-oscuro mb-2">
                {producto.name}
              </h3>
              <p className="text-sm text-nuditos-marron mb-4">
                {producto.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-nuditos-marron-oscuro">
                  ${producto.price}
                </span>
                <button className="w-10 h-10 rounded-full bg-nuditos-rosa flex items-center justify-center hover:bg-nuditos-rosa-claro transition-soft focus-soft">
                  <ShoppingBag className="w-5 h-5 text-nuditos-marron" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-soft max-w-3xl mx-auto">
            <span className="text-4xl mb-4 block">🎁</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-nuditos-marron-oscuro mb-4">
              ¿Buscas algo especial?
            </h2>
            <p className="text-lg text-nuditos-marron mb-8">
              Podemos crear un ramo personalizado con las flores favoritas de esa persona especial.
              Cuéntanos tu idea y la hacemos realidad.
            </p>
            <Link href="/contacto">
              <Button size="lg">Crear ramo personalizado</Button>
            </Link>
          </div>
        </div>

        {/* Value Props */}
        <div className="mt-20 grid sm:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-soft text-center">
            <div className="w-16 h-16 rounded-full bg-nuditos-rosa flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-nuditos-marron" />
            </div>
            <h3 className="font-bold text-nuditos-marron-oscuro mb-2">Hechas con Amor</h3>
            <p className="text-sm text-nuditos-marron">
              Cada pétalo está tejido a mano con paciencia y dedicación
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-soft text-center">
            <div className="w-16 h-16 rounded-full bg-nuditos-amarillo flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">♾️</span>
            </div>
            <h3 className="font-bold text-nuditos-marron-oscuro mb-2">Para Siempre</h3>
            <p className="text-sm text-nuditos-marron">
              A diferencia de las flores naturales, estas nunca se marchitarán
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-soft text-center">
            <div className="w-16 h-16 rounded-full bg-nuditos-verde flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🌱</span>
            </div>
            <h3 className="font-bold text-nuditos-marron-oscuro mb-2">Sostenibles</h3>
            <p className="text-sm text-nuditos-marron">
              Hechas con materiales naturales y procesos respetuosos con el medio ambiente
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
