import Link from 'next/link';
import { Heart, ShoppingBag } from 'lucide-react';
import Button from '@/src/components/Button';

const accesorios = [
  {
    id: 1,
    name: 'Corazón Bordado',
    description: 'Pequeño corazón para que tu Nubi lo sostenga',
    price: 5,
    emoji: '💝',
    category: 'Accesorios',
  },
  {
    id: 2,
    name: 'Flores Tejidas',
    description: 'Ramito de flores en crochet multicolor',
    price: 8,
    emoji: '🌸',
    category: 'Accesorios',
  },
  {
    id: 3,
    name: 'Lazo de Seda',
    description: 'Elegante lazo disponible en varios colores',
    price: 6,
    emoji: '🎀',
    category: 'Accesorios',
  },
  {
    id: 4,
    name: 'Estrella Mágica',
    description: 'Estrella con brillillo especial',
    price: 5,
    emoji: '⭐',
    category: 'Accesorios',
  },
  {
    id: 5,
    name: 'Bufanda Mini',
    description: 'Bufanda tejida para días fríos',
    price: 10,
    emoji: '🧣',
    category: 'Accesorios',
  },
  {
    id: 6,
    name: 'Gorro con Pompón',
    description: 'Gorrito adorable con pompón suave',
    price: 12,
    emoji: '🧢',
    category: 'Accesorios',
  },
];

export default function AccesoriosPage() {
  return (
    <div className="min-h-screen bg-nuditos-crema">
      {/* Header */}
      <div className="bg-gradient-to-br from-nuditos-amarillo-claro via-nuditos-crema to-nuditos-rosa-claro py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-5xl mb-4 block">🛍️</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-nuditos-marron-oscuro mb-4">
            Accesorios para Nubi
          </h1>
          <p className="text-lg sm:text-xl text-nuditos-marron max-w-2xl mx-auto">
            Pequeños detalles que le dan vida y personalidad a tu conejito
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {accesorios.map((producto) => (
            <div
              key={producto.id}
              className="bg-white rounded-3xl p-6 shadow-soft hover:shadow-medium transition-soft group"
            >
              {/* Image */}
              <div className="aspect-square rounded-2xl bg-nuditos-crema mb-6 flex items-center justify-center overflow-hidden">
                <span className="text-6xl group-hover:scale-110 transition-soft">
                  {producto.emoji}
                </span>
              </div>

              {/* Info */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium text-nuditos-marron bg-nuditos-rosa-claro px-3 py-1 rounded-full">
                  {producto.category}
                </span>
              </div>

              <h3 className="text-lg font-bold text-nuditos-marron-oscuro mb-1">
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

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-nuditos-marron mb-6">
            ¿No encuentras lo que buscas? Podemos crear un accesorio personalizado para ti.
          </p>
          <Link href="/contacto">
            <Button variant="outline">Contactar</Button>
          </Link>
        </div>
      </div>

      {/* Value Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-nuditos-marron-oscuro mb-4">
              Hechos con el mismo cariño
            </h2>
            <p className="text-nuditos-marron max-w-2xl mx-auto">
              Cada accesorio está tejido a mano siguiendo los mismos estándares de calidad que nuestros Nubi
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-nuditos-rosa flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-nuditos-marron" />
              </div>
              <h3 className="font-bold text-nuditos-marron-oscuro mb-2">100% Artesanal</h3>
              <p className="text-sm text-nuditos-marron">Cada pieza está hecha a mano por nuestras artesanas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-nuditos-amarillo flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="font-bold text-nuditos-marron-oscuro mb-2">Materiales Naturales</h3>
              <p className="text-sm text-nuditos-marron">Algodón orgánico y tintes naturales seguros</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-nuditos-verde flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-bold text-nuditos-marron-oscuro mb-2">Calidad Premium</h3>
              <p className="text-sm text-nuditos-marron">Revisamos cada puntada antes de enviar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
