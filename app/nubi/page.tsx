'use client';

import { useState, useRef, useEffect } from 'react';
import { Heart, Truck, Shield, Link as LinkIcon, HandHeart, AlertCircle } from 'lucide-react';
import Button from '@/src/components/Button';

const models = [
  {
    id: 'sin-peso',
    name: 'Clásico (Sin peso)',
    price: 100000,
    description: 'Ligero y abrazable, ideal para compañía diaria y para llevar a todos lados.'
  },
  {
    id: 'con-peso',
    name: 'Terapéutico (Con peso)',
    price: 150000,
    description: 'Con peso distribuido (aprox 1kg). Estimula el sistema nervioso brindando calma profunda y reduciendo la ansiedad.'
  },
];

const outfits = [
  { id: 'ninguno', name: 'Sin ropita', icon: 'rabbit', price: 0 },
  { id: 'tiburon', name: 'Saco Tiburón (Azul)', icon: 'shark', price: 30000 },
  { id: 'sapito', name: 'Saco Sapito (Verde)', icon: 'frog', price: 30000 },
  { id: 'gatito', name: 'Saco Gatito (Negro)', icon: 'cat', price: 30000 },
];

const outfitImages: Record<string, string[]> = {
  ninguno: [
    '/nubi/IMG_3435.jpeg',
    '/nubi/IMG_3431.jpeg',
    '/nubi/IMG_3432.jpeg',
    '/nubi/IMG_3436.jpeg',
  ],
  sapito: [
    '/nubi/IMG_3421.jpeg',
    '/nubi/IMG_3417.jpeg',
    '/nubi/IMG_3418.jpeg',
    '/nubi/IMG_3420.jpeg',
    '/nubi/IMG_3429.jpeg',
    '/nubi/IMG_3412.jpeg',
  ],
  gatito: [
    '/nubi/IMG_3448.jpeg',
    '/nubi/IMG_3439.jpeg',
    '/nubi/IMG_3440.jpeg',
    '/nubi/IMG_3442.jpeg',
    '/nubi/IMG_3446.jpeg',
  ],
  tiburon: [
    '/nubi/IMG_3453.jpeg',
    '/nubi/IMG_3452.jpeg',
    '/nubi/IMG_3454.jpeg',
    '/nubi/IMG_3456.jpeg',
    '/nubi/IMG_3458.jpeg',
  ],
};

const NAME_REGEX = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
const MAX_NAME_LENGTH = 20;

const OutfitIcon = ({ icon, className = "w-12 h-12" }: { icon: string; className?: string }) => {
  const icons: Record<string, React.ReactNode> = {
    rabbit: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C10.5 2 9 3 9 5V7M15 5V7M12 2C13.5 2 15 3 15 5" strokeLinecap="round"/>
        <circle cx="12" cy="13" r="7" />
        <circle cx="9.5" cy="12" r="1" fill="currentColor" />
        <circle cx="14.5" cy="12" r="1" fill="currentColor" />
        <path d="M12 15V16M10 17H14" strokeLinecap="round"/>
      </svg>
    ),
    shark: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 12C2 12 4 8 8 7C10 6.5 12 7 14 8L18 6L16 10C18 11 20 12 22 12C20 14 18 15 16 16L18 20L14 18C12 19 10 19.5 8 19C4 18 2 14 2 12Z" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="10" cy="11" r="1" fill="currentColor"/>
      </svg>
    ),
    frog: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="8" cy="10" r="2" />
        <circle cx="16" cy="10" r="2" />
        <ellipse cx="12" cy="15" rx="6" ry="5" />
        <path d="M8 16L6 18M16 16L18 18" strokeLinecap="round"/>
      </svg>
    ),
    cat: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 6L5 3M16 6L19 3" strokeLinecap="round"/>
        <circle cx="12" cy="13" r="7" />
        <circle cx="9.5" cy="12" r="1" fill="currentColor" />
        <circle cx="14.5" cy="12" r="1" fill="currentColor" />
        <path d="M10 16C11 17 13 17 14 16" strokeLinecap="round"/>
        <path d="M6 14L4 13M18 14L20 13" strokeLinecap="round"/>
      </svg>
    ),
  };
  return icons[icon] || icons.rabbit;
};

export default function NubiPage() {
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [selectedOutfit, setSelectedOutfit] = useState(outfits[0]);
  const [customName, setCustomName] = useState('');
  const [nameError, setNameError] = useState('');
  const [quantity, setQuantity] = useState(1);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const currentImages = outfitImages[selectedOutfit.id] || outfitImages.ninguno;
  const [activeImage, setActiveImage] = useState(currentImages[0]);

  useEffect(() => {
    setActiveImage(currentImages[0]);
  }, [selectedOutfit]);

  const totalPrice = (selectedModel.price + selectedOutfit.price) * quantity;

  const validateName = (value: string) => {
    if (value && !NAME_REGEX.test(value)) {
      setNameError('Solo letras y espacios permitidos');
      return false;
    }
    setNameError('');
    return true;
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > MAX_NAME_LENGTH) {
      setNameError(`Máximo ${MAX_NAME_LENGTH} caracteres`);
      return;
    }
    validateName(value);
    setCustomName(value);
  };

  const handleBuyOnWhatsApp = () => {
    if (customName && !validateName(customName)) {
      nameInputRef.current?.focus();
      return;
    }

    const message = `¡Hola! Me gustaría comprar a Nubi:
- Modelo: ${selectedModel.name}
- Ropita: ${selectedOutfit.name}
${customName ? `- Nombre para mi Nubi: "${customName}"\n` : ''}- Cantidad: ${quantity}
- Total: $${totalPrice.toLocaleString('es-CO')}`;
    
    const whatsappUrl = `https://wa.me/573053655297?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

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
    <div className="min-h-screen bg-nuditos-crema pb-20 pt-24 sm:pt-32">
      {/* Header */}
      <header className="bg-white shadow-soft" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-nuditos-rosa/10 rounded-xl">
                <OutfitIcon icon="rabbit" className="w-6 h-6 sm:w-8 sm:h-8 text-nuditos-rosa" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-4xl font-bold text-nuditos-marron-oscuro mb-1">Nubi</h1>
                <p className="text-sm sm:text-base text-nuditos-marron font-medium">Muñeco de regulación emocional</p>
              </div>
            </div>
            {/* Tag terapéutica */}
            <div className="inline-flex items-center justify-center bg-nuditos-verde-claro/30 text-nuditos-marron-oscuro px-4 py-2 rounded-full font-medium text-sm" role="note" aria-label="Producto terapéutico">
              <Heart className="w-4 h-4 mr-2 text-nuditos-marron flex-shrink-0" />
              <span>Terapia de apego y contención</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Image Section */}
          <div className="space-y-6">
            <div
              className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-white shadow-medium relative group"
              role="img"
              aria-label={`Imagen de Nubi modelo ${selectedModel.name} ${selectedOutfit.name !== 'Sin ropita' ? 'con outfit ' + selectedOutfit.name : ''}`}
            >
              <img
                src={activeImage}
                alt={`Nubi ${selectedOutfit.name}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row gap-2 items-start sm:items-start justify-between z-10">
                 <span className="bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-2xl text-nuditos-marron-oscuro font-bold text-xs sm:text-sm shadow-sm">
                    {selectedModel.name}
                 </span>
                 {selectedOutfit.id !== 'ninguno' && (
                   <span className="bg-nuditos-rosa/90 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-2xl text-white font-bold text-xs sm:text-sm shadow-sm">
                      {selectedOutfit.name}
                   </span>
                 )}
              </div>

              {customName && (
                <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-10 bg-white/95 backdrop-blur px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-medium text-center">
                  <p className="text-nuditos-marron-oscuro font-bold text-lg sm:text-xl leading-none">
                    "{customName}"
                  </p>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {currentImages.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {currentImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden flex-shrink-0 border-2 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-nuditos-marron/20 ${
                      activeImage === img ? 'border-nuditos-marron scale-100 shadow-md' : 'border-transparent scale-95 opacity-70 hover:opacity-100 hover:scale-100'
                    }`}
                  >
                    <img src={img} alt={`Vista ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Customization Section */}
          <div className="space-y-10">
            {/* Model Selection */}
            <div role="radiogroup" aria-labelledby="model-selection-label">
              <h3 id="model-selection-label" className="text-lg sm:text-xl font-bold text-nuditos-marron-oscuro mb-4 flex items-center gap-2">
                Paso 1: Elige el Modelo
                <span className="text-xs font-normal bg-nuditos-amarillo-claro text-nuditos-marron px-2 py-1 rounded-md">Requerido</span>
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {models.map((model) => (
                  <button
                    key={model.id}
                    role="radio"
                    aria-checked={selectedModel.id === model.id}
                    onClick={() => setSelectedModel(model)}
                    onKeyDown={(e) => handleKeyDown(e, () => setSelectedModel(model))}
                    className={`w-full p-4 sm:p-5 rounded-3xl border-2 transition-all duration-200 text-left focus:outline-none focus:ring-4 focus:ring-nuditos-marron/20 group min-h-[88px] ${
                      selectedModel.id === model.id
                        ? 'border-nuditos-marron bg-white shadow-medium scale-[1.02]'
                        : 'border-transparent bg-white/50 hover:bg-white hover:shadow-soft'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-base sm:text-lg font-bold text-nuditos-marron-oscuro">
                        {model.name}
                      </span>
                      <span className={`font-bold text-sm sm:text-base ${selectedModel.id === model.id ? 'text-nuditos-marron-oscuro' : 'text-nuditos-marron'}`}>
                        ${model.price.toLocaleString('es-CO')} COP
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-nuditos-marron leading-relaxed">
                      {model.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Outfit Selection */}
            <div role="radiogroup" aria-labelledby="outfit-selection-label">
              <h3 id="outfit-selection-label" className="text-lg sm:text-xl font-bold text-nuditos-marron-oscuro mb-4 flex items-center gap-2">
                Paso 2: Elige su Ropita
                <span className="text-xs font-normal bg-nuditos-amarillo-claro text-nuditos-marron px-2 py-1 rounded-md">Opcional</span>
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {outfits.map((outfit) => (
                  <button
                    key={outfit.id}
                    role="radio"
                    aria-checked={selectedOutfit.id === outfit.id}
                    onClick={() => setSelectedOutfit(outfit)}
                    onKeyDown={(e) => handleKeyDown(e, () => setSelectedOutfit(outfit))}
                    className={`p-3 sm:p-4 rounded-3xl border-2 transition-all duration-200 text-center focus:outline-none focus:ring-4 focus:ring-nuditos-marron/20 min-h-[88px] ${
                      selectedOutfit.id === outfit.id
                        ? 'border-nuditos-marron bg-white shadow-soft scale-[1.02]'
                        : 'border-transparent bg-white/50 hover:bg-white hover:shadow-soft'
                    }`}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 flex items-center justify-center">
                      <OutfitIcon icon={outfit.icon} className={`w-8 h-8 sm:w-10 sm:h-10 ${selectedOutfit.id === outfit.id ? 'text-nuditos-marron-oscuro' : 'text-nuditos-marron'}`} />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-nuditos-marron-oscuro block">
                      {outfit.name}
                    </span>
                    {outfit.price > 0 && (
                      <span className="block text-xs sm:text-sm text-nuditos-marron font-medium mt-1">+${outfit.price.toLocaleString('es-CO')}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Name */}
            <div className="bg-white p-5 sm:p-6 rounded-3xl shadow-soft border border-nuditos-rosa-claro">
              <h3 className="text-lg font-bold text-nuditos-marron-oscuro mb-2">
                Paso 3: Bautiza a tu Nubi
              </h3>
              <p className="text-sm text-nuditos-marron mb-4">Darle un nombre ayuda a fortalecer el vínculo de apego.</p>
              <div className="space-y-2">
                <label htmlFor="custom-name" className="sr-only">
                  Nombre personalizado para tu Nubi
                </label>
                <input
                  ref={nameInputRef}
                  id="custom-name"
                  type="text"
                  value={customName}
                  onChange={handleNameChange}
                  placeholder="Ej. Copo, Luna, Miel..."
                  maxLength={MAX_NAME_LENGTH}
                  aria-invalid={!!nameError}
                  aria-describedby={nameError ? 'name-error' : 'name-hint'}
                  className={`w-full px-4 sm:px-5 py-4 h-14 rounded-2xl border-2 focus:outline-none focus:ring-4 transition-all duration-200 bg-nuditos-crema/50 font-medium text-nuditos-marron-oscuro text-base sm:text-lg min-h-[44px] ${
                    nameError
                      ? 'border-red-400 focus:border-red-500 focus:ring-red-200'
                      : 'border-nuditos-beige/70 focus:border-nuditos-marron focus:ring-nuditos-marron/10'
                  }`}
                />
                {nameError && (
                  <p id="name-error" role="alert" className="flex items-center gap-2 text-sm text-red-600 font-medium">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {nameError}
                  </p>
                )}
                <p id="name-hint" className="text-xs text-nuditos-marron/70">
                  Solo letras y espacios. Máximo {MAX_NAME_LENGTH} caracteres.
                </p>
              </div>
            </div>

            {/* Checkout Section */}
            <div className="bg-nuditos-marron-oscuro rounded-3xl p-5 sm:p-6 lg:p-8 shadow-medium text-white" role="region" aria-label="Resumen de compra">
              <div className="flex justify-between items-end mb-6 border-b border-white/10 pb-6">
                <div>
                  <p className="text-white/70 mb-1 text-sm sm:text-base">Total a pagar</p>
                  <div className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
                    <span>${totalPrice.toLocaleString('es-CO')}</span>
                    <span className="text-xs sm:text-sm font-normal text-white/60 bg-white/10 px-2 py-1 rounded-md">Envío Gratis</span>
                  </div>
                </div>

                <div className="flex items-center bg-white/10 rounded-2xl border border-white/20 p-1" role="group" aria-label="Cantidad">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    aria-label="Disminuir cantidad"
                    className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center text-white hover:bg-white/20 active:bg-white/30 rounded-xl transition-all duration-200 min-w-[44px] min-h-[44px]"
                  >
                    <span className="text-xl font-bold">−</span>
                  </button>
                  <span className="w-12 sm:w-14 text-center font-bold text-lg px-2" aria-live="polite">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    aria-label="Aumentar cantidad"
                    className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center text-white hover:bg-white/20 active:bg-white/30 rounded-xl transition-all duration-200 min-w-[44px] min-h-[44px]"
                  >
                    <span className="text-xl font-bold">+</span>
                  </button>
                </div>
              </div>

              <div className="relative">
                <Button
                  onClick={handleBuyOnWhatsApp}
                  className="w-full justify-center bg-[#25D366] text-white hover:bg-[#20ba5a] active:bg-[#1da850] text-base sm:text-lg h-14 transition-all duration-200 border-none shadow-lg"
                  size="lg"
                >
                  Comprar por WhatsApp
                </Button>
              </div>
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
