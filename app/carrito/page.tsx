'use client';

import { Trash2, Plus, Minus, ArrowLeft, CreditCard, Shield, Truck, RotateCcw, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import Button from '@/src/components/Button';
import { useCart } from '@/src/context/CartContext';
import { useState } from 'react';

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal, shipping, total } = useCart();
  const [isRemoving, setIsRemoving] = useState<string | null>(null);

  const handleRemove = async (itemId: string) => {
    setIsRemoving(itemId);
    await new Promise(resolve => setTimeout(resolve, 200));
    removeItem(itemId);
    setIsRemoving(null);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-nuditos-crema flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="relative mb-6" aria-hidden="true">
            <div className="w-32 h-32 mx-auto bg-nuditos-rosa-claro rounded-full flex items-center justify-center">
              <ShoppingBag className="w-16 h-16 text-nuditos-marron opacity-40" strokeWidth={1.5} />
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white rounded-full shadow-soft flex items-center justify-center">
              <span className="text-2xl">👀</span>
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-nuditos-marron-oscuro mb-4">
            Tu carrito está vacío
          </h1>
          <p className="text-nuditos-marron mb-8">
            Parece que aún no has encontrado a tu Nubi perfecto.
            ¡Vamos a remediar eso!
          </p>
          <Link href="/nubi">
            <Button size="lg" aria-label="Explorar productos Nubi">
              Conocer a Nubi
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-nuditos-crema py-8 sm:py-12" role="main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-8">
          <Link
            href="/nubi"
            className="inline-flex items-center gap-2 text-nuditos-marron hover:text-nuditos-marron-oscuro transition-soft mb-4 focus:outline-none focus:ring-2 focus:ring-nuditos-marron rounded-lg px-2 py-1"
            aria-label="Volver a la tienda"
          >
            <ArrowLeft className="w-5 h-5" />
            Seguir explorando
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-nuditos-marron-oscuro">
            Tu carrito
          </h1>
          <p className="text-nuditos-marron mt-2" aria-live="polite">
            {items.length} {items.length === 1 ? 'producto' : 'productos'}
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Cart Items */}
          <section className="lg:col-span-2 space-y-4" aria-label="Productos en el carrito">
            {items.map((item) => (
              <article
                key={item.id}
                className={`bg-white rounded-3xl p-4 sm:p-6 shadow-soft flex gap-4 sm:gap-6 transition-all duration-200 ${
                  isRemoving === item.id ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
              >
                {/* Product Image */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-nuditos-rosa-claro flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <span className="text-4xl sm:text-5xl">{item.emoji}</span>
                </div>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-2">
                    <div className="min-w-0">
                      <h3 className="font-bold text-base sm:text-lg text-nuditos-marron-oscuro truncate">
                        {item.name}
                      </h3>
                      {item.customName && (
                        <p className="text-sm text-nuditos-marron italic truncate">
                          Nombre: "{item.customName}"
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="p-2 rounded-full hover:bg-nuditos-rosa-claro transition-soft focus:outline-none focus:ring-2 focus:ring-nuditos-rosa-claro text-nuditos-marron min-w-[44px] min-h-[44px] flex items-center justify-center"
                      aria-label={`Eliminar ${item.name} del carrito`}
                      disabled={isRemoving === item.id}
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  <dl className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-nuditos-marron mb-4">
                    <div><dt className="sr-only">Tamaño</dt>Tamaño: {item.size}</div>
                    <div><dt className="sr-only">Color</dt>Color: {item.color}</div>
                    <div className="sm:hidden"><dt className="sr-only">Accesorio</dt>Accesorio: {item.outfit}</div>
                  </dl>

                  <div className="flex items-center justify-between">
                    {/* Quantity Controls */}
                    <div className="flex items-center bg-nuditos-crema rounded-xl" role="group" aria-label={`Cantidad de ${item.name}`}>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center text-nuditos-marron hover:bg-nuditos-rosa-claro rounded-l-xl transition-soft focus:outline-none focus:ring-2 focus:ring-nuditos-marron min-w-[44px]"
                        aria-label={`Reducir cantidad de ${item.name}`}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center font-semibold text-nuditos-marron-oscuro" aria-live="polite">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center text-nuditos-marron hover:bg-nuditos-rosa-claro rounded-r-xl transition-soft focus:outline-none focus:ring-2 focus:ring-nuditos-marron min-w-[44px]"
                        aria-label={`Aumentar cantidad de ${item.name}`}
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <p className="text-sm text-nuditos-marron">
                        ${item.price} {item.quantity > 1 && `x ${item.quantity}`}
                      </p>
                      <p className="text-lg sm:text-xl font-bold text-nuditos-marron-oscuro">
                        ${item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}

            {/* Continue Shopping */}
            <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-soft">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-nuditos-marron-oscuro mb-1">
                    ¿Quieres más Nubi?
                  </h3>
                  <p className="text-sm text-nuditos-marron">
                    Explora más productos y encuentra el perfecto
                  </p>
                </div>
                <Link href="/nubi" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto">Ver más</Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Order Summary - Sticky en desktop, al final en mobile */}
          <aside className="lg:col-span-1" aria-label="Resumen del pedido">
            <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-soft lg:sticky lg:top-24">
              <h2 className="text-xl font-bold text-nuditos-marron-oscuro mb-6">
                Resumen del pedido
              </h2>

              <dl className="space-y-4 mb-6">
                <div className="flex justify-between text-nuditos-marron">
                  <dt>Subtotal</dt>
                  <dd className="font-medium" aria-live="polite">${subtotal}</dd>
                </div>
                <div className="flex justify-between text-nuditos-marron">
                  <dt>Envío</dt>
                  <dd className="text-nuditos-verde font-medium" aria-live="polite">
                    {shipping === 0 ? 'Gratis' : `$${shipping}`}
                  </dd>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-nuditos-marron bg-nuditos-crema rounded-xl p-3">
                    ¡Agrega ${(50 - subtotal).toFixed(2)} más para tener envío gratis!
                  </p>
                )}
              </dl>

              <div className="border-t border-nuditos-rosa pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <dt className="text-lg font-bold text-nuditos-marron-oscuro">Total</dt>
                  <dd className="text-2xl font-bold text-nuditos-marron" aria-live="polite" aria-atomic="true">
                    ${total}
                  </dd>
                </div>
              </div>

              <Button
                fullWidth
                size="lg"
                className="mb-4 min-h-[48px] touch-target"
                aria-label="Proceder al pago"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Proceder al pago
              </Button>

              {/* Trust Badges */}
              <div className="space-y-3 text-sm" role="list" aria-label="Beneficios de compra">
                <div className="flex items-center gap-3 text-nuditos-marron" role="listitem">
                  <Shield className="w-5 h-5 text-nuditos-verde flex-shrink-0" aria-hidden="true" />
                  <span>Pago 100% seguro</span>
                </div>
                <div className="flex items-center gap-3 text-nuditos-marron" role="listitem">
                  <Truck className="w-5 h-5 text-nuditos-verde flex-shrink-0" aria-hidden="true" />
                  <span>Envío gratis desde $50</span>
                </div>
                <div className="flex items-center gap-3 text-nuditos-marron" role="listitem">
                  <RotateCcw className="w-5 h-5 text-nuditos-verde flex-shrink-0" aria-hidden="true" />
                  <span>Devoluciones gratuitas</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
