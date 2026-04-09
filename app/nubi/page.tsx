'use client';

import { useState } from 'react';
import { Heart, Truck, Shield, Link as LinkIcon, HandHeart } from 'lucide-react';
import Button from '@/src/components/Button';

const models = [
  { 
    id: 'sin-peso', 
    name: 'Clásico (Sin peso)', 
    price: 45, 
    description: 'Ligero y abrazable, ideal para compañía diaria y para llevar a todos lados.' 
  },
  { 
    id: 'con-peso', 
    name: 'Terapéutico (Con peso)', 
    price: 65, 
    description: 'Con peso distribuido (aprox 1kg). Estimula el sistema nervioso brindando calma profunda y reduciendo la ansiedad.' 
  },
];

const outfits = [
  { id: 'ninguno', name: 'Sin ropita', emoji: '🐰', price: 0 },
  { id: 'tiburon', name: 'Tiburón', emoji: '🦈', price: 15 },
  { id: 'sapito', name: 'Sapito', emoji: '🐸', price: 12 },
  { id: 'gatito', name: 'Gatito', emoji: '🐱', price: 12 },
];

export default function NubiPage() {
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [selectedOutfit, setSelectedOutfit] = useState(outfits[0]);
  const [customName, setCustomName] = useState('');
  const [quantity, setQuantity] = useState(1);

  const totalPrice = (selectedModel.price + selectedOutfit.price) * quantity;

  const features = [
    {
      icon: HandHeart,
      title: 'Estímulo Sensorial',
      description: 'Texturas y pesos calculados para activar la respuesta de relajación.',
    },
    {
      icon: Shield,
      title: 'Materiales Hipoalergénicos',
      description: 'Algodón orgánico seguro, suave al tacto y amigable con pieles sensibles.',
    },
    {
      icon: LinkIcon,
      title: 'Apego Seguro',
      description: 'Una herramienta física diseñada para brindar anclaje emocional continuo.',
    },
    {
      icon: Truck,
      title: 'Envío con Cuidado',
      description: 'Empaquetado minuciosamente para llegar intacto a tus manos.',
    },
  ];

  return (
    <div className="min-h-screen bg-nuditos-crema pb-20">
      {/* Header */}
      <div className="bg-white shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-4xl text-nuditos-rosa">🐰</span>
              <div>
                <h1 className="text-2xl sm:text-4xl font-bold text-nuditos-marron-oscuro mb-1">Nubi</h1>
                <p className="text-nuditos-marron font-medium">Muñeco de regulación emocional</p>
              </div>
            </div>
            {/* Tag terapéutica */}
            <div className="inline-flex items-center bg-nuditos-verde-claro/30 text-nuditos-marron-oscuro px-4 py-2 rounded-full font-medium text-sm">
              <Heart className="w-4 h-4 mr-2 text-nuditos-marron" />
              Terapia de apego y contención
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Image Section */}
          <div className="space-y-6">
            <div
              className={`aspect-[4/5] rounded-3xl bg-gradient-to-br from-white to-nuditos-beige shadow-medium flex flex-col items-center justify-center transition-soft duration-500 relative overflow-hidden text-center`}
            >
              {/* Espacio reservado para foto real. El emoji es un placeholder visual temporal. */}
              <span className="text-[150px] mb-8 animate-gentle-float z-10 relative">
                {selectedOutfit.emoji}
              </span>
              
              <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-10">
                 <span className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-2xl text-nuditos-marron-oscuro font-bold text-sm shadow-sm">
                    {selectedModel.name}
                 </span>
                 {selectedOutfit.id !== 'ninguno' && (
                   <span className="bg-nuditos-rosa/80 backdrop-blur-sm px-4 py-2 rounded-2xl text-nuditos-marron-oscuro font-bold text-sm shadow-sm">
                      Outfit: {selectedOutfit.name}
                   </span>
                 )}
              </div>

              {customName && (
                <div className="absolute bottom-10 z-10 bg-white/80 backdrop-blur px-8 py-3 rounded-full shadow-soft opacity-100 transition-opacity">
                  <p className="text-nuditos-marron-oscuro font-bold text-2xl">
                    "{customName}"
                  </p>
                </div>
              )}
              
              {/* Decorative backgrounds */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-nuditos-rosa opacity-30 rounded-full blur-3xl z-0" />
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-nuditos-verde-claro opacity-30 rounded-full blur-3xl z-0" />
            </div>
          </div>

          {/* Customization Section */}
          <div className="space-y-10">
            {/* Model Selection */}
            <div>
              <h3 className="text-xl font-bold text-nuditos-marron-oscuro mb-4 flex items-center gap-2">
                Paso 1: Elige el Modelo
                <span className="text-xs font-normal bg-nuditos-amarillo-claro text-nuditos-marron px-2 py-1 rounded-md">Requerido</span>
              </h3>
              <div className="space-y-4">
                {models.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => setSelectedModel(model)}
                    className={`w-full p-5 rounded-3xl border-2 transition-all text-left focus-soft group ${
                      selectedModel.id === model.id
                        ? 'border-nuditos-marron bg-white shadow-medium scale-[1.02]'
                        : 'border-transparent bg-white/50 hover:bg-white hover:shadow-soft'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-bold text-nuditos-marron-oscuro">
                        {model.name}
                      </span>
                      <span className={`font-bold ${selectedModel.id === model.id ? 'text-nuditos-marron-oscuro' : 'text-nuditos-marron'}`}>
                        ${model.price}
                      </span>
                    </div>
                    <p className="text-sm text-nuditos-marron leading-relaxed">
                      {model.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Outfit Selection */}
            <div>
              <h3 className="text-xl font-bold text-nuditos-marron-oscuro mb-4 flex items-center gap-2">
                Paso 2: Elige su Ropita
                <span className="text-xs font-normal bg-nuditos-amarillo-claro text-nuditos-marron px-2 py-1 rounded-md">Opcional</span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {outfits.map((outfit) => (
                  <button
                    key={outfit.id}
                    onClick={() => setSelectedOutfit(outfit)}
                    className={`p-4 rounded-3xl border-2 transition-all text-center focus-soft ${
                      selectedOutfit.id === outfit.id
                        ? 'border-nuditos-marron bg-white shadow-soft scale-[1.02]'
                        : 'border-transparent bg-white/50 hover:bg-white'
                    }`}
                  >
                    <span className="text-3xl block mb-2">{outfit.emoji}</span>
                    <span className="text-base font-semibold text-nuditos-marron-oscuro block">
                      {outfit.name}
                    </span>
                    {outfit.price > 0 && (
                      <span className="block text-sm text-nuditos-marron font-medium mt-1">+${outfit.price}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Name */}
            <div className="bg-white p-6 rounded-3xl shadow-soft border border-nuditos-rosa-claro">
              <h3 className="text-lg font-bold text-nuditos-marron-oscuro mb-2">
                Paso 3: Bautiza a tu Nubi
              </h3>
              <p className="text-sm text-nuditos-marron mb-4">Darle un nombre ayuda a fortalecer el vínculo de apego.</p>
              <input
                type="text"
                value={customName}
                onChange={(e) => setCustomName(e.target.value)}
                placeholder="Ej. Copo, Luna, Miel..."
                maxLength={20}
                className="w-full px-5 py-4 rounded-2xl border-2 border-nuditos-beige/70 focus:border-nuditos-marron focus:outline-none focus:ring-4 focus:ring-nuditos-marron/10 transition-soft bg-nuditos-crema/50 font-medium text-nuditos-marron-oscuro text-lg"
              />
            </div>

            {/* Add to Cart Section */}
            <div className="bg-nuditos-marron-oscuro rounded-3xl p-6 sm:p-8 shadow-medium text-white">
              <div className="flex justify-between items-end mb-6 border-b border-white/10 pb-6">
                <div>
                  <p className="text-white/70 mb-1">Total a pagar</p>
                  <div className="text-3xl font-bold flex items-center gap-2">
                    ${totalPrice}
                    <span className="text-sm font-normal text-white/50 bg-white/10 px-2 py-1 rounded-md">Envío Gratis</span>
                  </div>
                </div>
                
                <div className="flex items-center bg-white/10 rounded-2xl border border-white/20 p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/20 rounded-xl transition-soft"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-bold">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/20 rounded-xl transition-soft"
                  >
                    +
                  </button>
                </div>
              </div>
              
              <Button className="w-full justify-center bg-white text-nuditos-marron-oscuro hover:bg-nuditos-crema text-lg h-14" size="lg">
                Agregar al Carrito
              </Button>
            </div>
          </div>
        </div>

        {/* Sobre Nubi - SECCIÓN TERAPÉUTICA DESTACADA */}
        <div className="mt-24 sm:mt-32">
          <div className="bg-white rounded-[3rem] overflow-hidden shadow-medium border border-nuditos-beige/50">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 sm:p-16 lg:p-20 flex flex-col justify-center">
                <span className="text-nuditos-marron-claro font-bold text-sm uppercase tracking-widest mb-4 block">
                  Regulación Emocional
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-nuditos-marron-oscuro mb-8 leading-tight">
                  ¿Por qué Nubi es más que un simple amigurumi?
                </h2>
                
                <div className="space-y-6">
                  <p className="text-lg text-nuditos-marron leading-relaxed">
                    Nubi está pensado como una herramienta terapéutica activa. Los <strong className="text-nuditos-marron-oscuro">amigurumis de contención</strong> son utilizados en psicología para ayudar a individuos a gestionar picos de ansiedad, estrés y desregulación emocional.
                  </p>
                  <p className="text-lg text-nuditos-marron leading-relaxed">
                    Cuando abrazas a Nubi (especialmente en su modelo con peso), el cuerpo experimenta <strong className="text-nuditos-marron-oscuro">Estimulación de Presión Profunda</strong> (DTP, por sus siglas en inglés). Esto estimula la liberación de serotonina y dopamina, reduciendo los niveles de cortisol (la hormona del estrés) y llevando al sistema nervioso a un estado de calma.
                  </p>
                  <p className="text-lg text-nuditos-marron leading-relaxed">
                    Es un compañero silencioso y constante que ofrece un apego seguro, texturas que reducen la agitación sensorial, y una presencia que ayuda a "anclar" los pensamientos en el momento presente (grounding).
                  </p>
                </div>
              </div>
              
              <div className="bg-nuditos-marron-oscuro text-white p-10 sm:p-16 lg:p-20 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-10 border-b border-white/20 pb-4">
                  Ventajas Terapeúticas
                </h3>
                <div className="space-y-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-nuditos-crema" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                        <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
