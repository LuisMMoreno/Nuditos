'use client';

import { useState } from 'react';
import { Trash2, Plus, Minus, ArrowLeft, CreditCard } from 'lucide-react';
import Link from 'next/link';
import Button from '@/src/components/Button';

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  size: string;
  color: string;
  outfit: string;
  customName?: string;
  quantity: number;
  emoji: string;
}

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Nubi Clásico',
      description: 'Tu compañero emocional',
      price: 45,
      size: 'Clásico (25cm)',
      color: 'Rosa Sueño',
      outfit: 'Con Corazón',
      customName: 'Luna',
      quantity: 1,
      emoji: '🐰',
    },
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 5;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-nuditos-crema flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <span className="text-8xl block mb-6">🛒</span>
          <h1 className="text-2xl sm:text-3xl font-bold text-nuditos-marron-oscuro mb-4">
            Tu carrito está vacío
          </h1>
          <p className="text-nuditos-marron mb-8">
            Parece que aún no has encontrado a tu Nubi perfecto.
            ¡Vamos a remediar eso!
          </p>
          <Link href="/nubi">
            <Button size="lg">
              Conocer a Nubi
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-nuditos-crema py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/nubi"
            className="inline-flex items-center gap-2 text-nuditos-marron hover:text-nuditos-marron-oscuro transition-soft mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Seguir explorando
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-nuditos-marron-oscuro">
            Tu carrito
          </h1>
          <p className="text-nuditos-marron mt-2">
            {items.length} {items.length === 1 ? 'producto' : 'productos'}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 shadow-soft flex gap-6"
              >
                {/* Product Image */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-nuditos-rosa-claro flex items-center justify-center flex-shrink-0">
                  <span className="text-5xl">{item.emoji}</span>
                </div>

                {/* Product Info */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-lg text-nuditos-marron-oscuro">
                        {item.name}
                      </h3>
                      {item.customName && (
                        <p className="text-sm text-nuditos-marron italic">
                          Nombre: "{item.customName}"
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 rounded-full hover:bg-nuditos-rosa-claro transition-soft focus-soft text-nuditos-marron"
                      aria-label="Eliminar producto"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm text-nuditos-marron mb-4">
                    <p>Tamaño: {item.size}</p>
                    <p>Color: {item.color}</p>
                    <p>Accesorio: {item.outfit}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    {/* Quantity Controls */}
                    <div className="flex items-center bg-nuditos-crema rounded-xl">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-10 h-10 flex items-center justify-center text-nuditos-marron hover:bg-nuditos-rosa-claro rounded-l-xl transition-soft"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center font-semibold text-nuditos-marron-oscuro">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-10 h-10 flex items-center justify-center text-nuditos-marron hover:bg-nuditos-rosa-claro rounded-r-xl transition-soft"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <p className="text-sm text-nuditos-marron">
                        ${item.price} {item.quantity > 1 && `x ${item.quantity}`}
                      </p>
                      <p className="text-xl font-bold text-nuditos-marron-oscuro">
                        ${item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Continue Shopping */}
            <div className="bg-white rounded-3xl p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-nuditos-marron-oscuro mb-1">
                    ¿Quieres más Nubi?
                  </h3>
                  <p className="text-sm text-nuditos-marron">
                    Explora más productos y encuentra el perfecto
                  </p>
                </div>
                <Link href="/nubi">
                  <Button variant="outline">Ver más</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 shadow-soft sticky top-24">
              <h2 className="text-xl font-bold text-nuditos-marron-oscuro mb-6">
                Resumen del pedido
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-nuditos-marron">
                  <span>Subtotal</span>
                  <span className="font-medium">${subtotal}</span>
                </div>
                <div className="flex justify-between text-nuditos-marron">
                  <span>Envío</span>
                  <span className="text-nuditos-verde font-medium">
                    {shipping === 0 ? 'Gratis' : `$${shipping}`}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-nuditos-marron bg-nuditos-crema rounded-xl p-3">
                    ¡Agrega ${(50 - subtotal).toFixed(2)} más para tener envío gratis!
                  </p>
                )}
              </div>

              <div className="border-t border-nuditos-rosa pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-nuditos-marron-oscuro">Total</span>
                  <span className="text-2xl font-bold text-nuditos-marron">${total}</span>
                </div>
              </div>

              <Button fullWidth size="lg" className="mb-4">
                <CreditCard className="w-5 h-5 mr-2" />
                Proceder al pago
              </Button>

              {/* Trust Badges */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-nuditos-marron">
                  <Shield className="w-5 h-5 text-nuditos-verde" />
                  <span>Pago 100% seguro</span>
                </div>
                <div className="flex items-center gap-3 text-nuditos-marron">
                  <Truck className="w-5 h-5 text-nuditos-verde" />
                  <span>Envío gratis desde $50</span>
                </div>
                <div className="flex items-center gap-3 text-nuditos-marron">
                  <RotateCcw className="w-5 h-5 text-nuditos-verde" />
                  <span>Devoluciones gratuitas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Shield({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function Truck({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
    </svg>
  );
}

function RotateCcw({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
    </svg>
  );
}
