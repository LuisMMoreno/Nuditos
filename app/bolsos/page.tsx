import Link from 'next/link';
import { ShoppingBag, Star } from 'lucide-react';
import Button from '@/src/components/Button';

const bolsos = [
  {
    id: 1,
    name: 'Bolso Tote Nuditos',
    description: 'Espacioso y resistente, perfecto para el día a día',
    price: 55,
    emoji: '👜',
    colors: ['bg-nuditos-marron', 'bg-nuditos-verde', 'bg-nuditos-rosa'],
    rating: 4.9,
    reviews: 24,
  },
  {
    id: 2,
    name: 'Mochila Mini',
    description: 'Compacta pero con espacio para lo esencial',
    price: 45,
    emoji: '🎒',
    colors: ['bg-nuditos-beige', 'bg-nuditos-marron-claro'],
    rating: 4.8,
    reviews: 18,
  },
  {
    id: 3,
    name: 'Bucket Bag',
    description: 'Estilo bohemio con cordón ajustable',
    price: 50,
    emoji: '🪣',
    colors: ['bg-nuditos-amarillo', 'bg-nuditos-rosa'],
    rating: 4.7,
    reviews: 12,
  },
  {
    id: 4,
    name: 'Crossbody',
    description: 'Bandolera elegante para manos libres',
    price: 40,
    emoji: '👝',
    colors: ['bg-nuditos-marron', 'bg-nuditos-verde-claro'],
    rating: 4.9,
    reviews: 31,
  },
];

export default function BolsosPage() {
  return (
    <div className="min-h-screen bg-nuditos-crema">
      {/* Header */}
      <div className="bg-gradient-to-br from-nuditos-verde-claro via-nuditos-crema to-nuditos-beige py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-5xl mb-4 block">👜</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-nuditos-marron-oscuro mb-4">
            Bolsos Tejidos
          </h1>
          <p className="text-lg sm:text-xl text-nuditos-marron max-w-2xl mx-auto">
            Piezas únicas con personalidad, tejidas a mano para acompañarte en cada aventura
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {bolsos.map((producto) => (
            <div
              key={producto.id}
              className="bg-white rounded-3xl p-6 shadow-soft hover:shadow-medium transition-soft group"
            >
              {/* Image */}
              <div className="aspect-square rounded-2xl bg-nuditos-crema mb-4 flex items-center justify-center overflow-hidden">
                <span className="text-6xl group-hover:scale-110 transition-soft">
                  {producto.emoji}
                </span>
              </div>

              {/* Colors Preview */}
              <div className="flex gap-2 mb-4">
                {producto.colors.map((color, index) => (
                  <div
                    key={index}
                    className={`w-4 h-4 rounded-full ${color} ring-2 ring-nuditos-beige`}
                  />
                ))}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-2">
                <div className="flex text-nuditos-amarillo">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(producto.rating) ? 'fill-current' : 'text-nuditos-beige'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-nuditos-marron">
                  {producto.reviews} reseñas
                </span>
              </div>

              {/* Info */}
              <h3 className="text-base font-bold text-nuditos-marron-oscuro mb-1">
                {producto.name}
              </h3>
              <p className="text-sm text-nuditos-marron mb-4">
                {producto.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-nuditos-marron-oscuro">
                  ${producto.price}
                </span>
                <button className="w-9 h-9 rounded-full bg-nuditos-rosa flex items-center justify-center hover:bg-nuditos-rosa-claro transition-soft focus-soft">
                  <ShoppingBag className="w-4 h-4 text-nuditos-marron" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-20 bg-white rounded-3xl p-8 sm:p-12 shadow-soft">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-nuditos-marron-oscuro mb-6">
                Cada bolso cuenta una historia
              </h2>
              <p className="text-lg text-nuditos-marron leading-relaxed mb-4">
                Nuestros bolsos están tejidos usando técnicas tradicionales que han pasado
                de generación en generación. Cada puntada lleva el tiempo y cuidado que
                solo el trabajo artesanal puede ofrecer.
              </p>
              <p className="text-lg text-nuditos-marron leading-relaxed mb-6">
                Hechos con algodón orgánico de la más alta calidad, son suaves al tacto
                pero increíblemente resistentes. Perfectos para llevar tus esenciales
                con estilo y conciencia.
              </p>
              <Link href="/nubi">
                <Button>Ver colección completa</Button>
              </Link>
            </div>
            <div className="bg-nuditos-crema rounded-2xl p-8 flex items-center justify-center">
              <span className="text-8xl">🧶</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
