export interface ProductDetail {
  id: number;
  slug: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isPopular?: boolean;
  story: string[];
  features?: { title: string; desc: string }[];
  gallery?: string[];
}

export const productsData: ProductDetail[] = [
  {
    id: 1,
    slug: 'mona-girasol',
    name: 'Moña Girasol',
    description: 'Moña tejida a mano con un tierno aplique de girasol. Estilo y suavidad que no maltratan tu cabello.',
    price: 10000,
    image: '/productos/monas/nuevas/girasol 1.jpeg',
    category: 'Moñas',
    isNew: true,
    story: [
      'Nuestras Moñas de Girasol llevan un pedacito de primavera en tu cabello. Tejidas minuciosamente puntada a puntada.',
      'Son sumamente cómodas y elásticas, pensadas para no generar tracción dolorosa y acompañarte con un detalle alegre y natural todos los días.'
    ],
    features: [
      { title: 'Agarre Confortable', desc: 'No troza el cabello ni jala la raíz.' },
      { title: 'Detalle Tejido', desc: 'Girasol en relieve tejido con hilo de alta calidad.' }
    ],
    gallery: [
      '/productos/monas/nuevas/girasol 2.jpeg',
      '/productos/monas/nuevas/girasol 3.jpeg'
    ]
  },
  {
    id: 14,
    slug: 'mona-dona',
    name: 'Moña Dona',
    description: 'Moña clásica en forma de dona tejida a crochet. Un accesorio esponjoso y cómodo.',
    price: 10000,
    image: '/productos/monas/nuevas/dona 1.jpeg',
    category: 'Moñas',
    story: [
      'La Moña Dona está diseñada para abrazar tu cabello con la máxima suavidad posible. Su estructura acolchada evita marcas y quiebres.'
    ],
    features: [
      { title: 'Elasticidad Premium', desc: 'Excelente soporte para colas altas o moños bajos.' }
    ],
    gallery: [
      '/productos/monas/nuevas/dona 3.jpeg',
      '/productos/monas/nuevas/moña 2.jpeg'
    ]
  },
  {
    id: 15,
    slug: 'mona-estrella',
    name: 'Moña Estrella',
    description: 'Moña elástica con tiernas estrellas tejidas a mano. Perfecta para un look soñador y sutil.',
    price: 10000,
    image: '/productos/monas/nuevas/estrella 1.jpeg',
    category: 'Moñas',
    isNew: true,
    story: [
      'Una hermosa estrellita tejida adorna tu cola de caballo o trenzas, brindándote un look de fantasía muy tierno y calmante.'
    ],
    features: [
      { title: 'Suave y Segura', desc: 'Ideal para todo tipo de cabello, incluso para las más pequeñas.' }
    ],
    gallery: [
      '/productos/monas/nuevas/estrella 2.jpeg'
    ]
  },
  {
    id: 2,
    slug: 'diadema-sapito',
    name: 'Diadema Sapito',
    description: 'Divertida diadema con diseño de sapito. Hecha a mano con materiales premium.',
    price: 28000,
    image: '/productos/diademas/ranita/3.jpeg',
    category: 'Diademas',
    isPopular: true,
    story: [
      '¿Qué mejor forma de afrontar un día difícil que con una corona de sapito? Esta diadema es un inyector de serotonina instantáneo.',
      'La estructura interna es tan flexible que olvidarás que la llevas puesta. Los ojitos del sapito actúan como un rompehielos social, sacando sonrisas donde quiera que vayas.'
    ],
    features: [
      { title: 'Soporte Ultra Flexible', desc: 'No genera dolores temporales gracias a su núcleo moldeable.' },
      { title: 'Conexión Emocional', desc: 'Su diseño animal fomenta la reducción indirecta de estrés.' }
    ],
    gallery: [
      '/productos/diademas/ranita/1.jpeg',
      '/productos/diademas/ranita/2.jpeg',
      '/productos/diademas/ranita/4.jpeg'
    ]
  },
  {
    id: 3,
    slug: 'diadema-maky',
    name: 'Diadema Maky',
    description: 'Elegante diadema estilo Maky tejida a mano con un patrón hermoso y suave al tacto.',
    price: 28000,
    image: '/productos/diademas/maky/1.jpeg',
    category: 'Diademas',
    story: [
      'Inspirada en las siluetas clásicas pero tejida con la calidez de Nuditos, la Diadema Maky combina la elegancia del día a día con el confort artesanal.',
      'Es perfecta para esos días en los que necesitas verte arreglada pero priorizando que tu cabeza esté descansada. El material natural permite que el cuero cabelludo respire.'
    ],
    features: [
      { title: 'Diseño Minimalista', desc: 'Apta para atuendos formales y casuales.' },
      { title: 'Textura Calmante', desc: 'Un suave contacto que relaja en lugar de presionar.' }
    ],
    gallery: [
      '/productos/diademas/maky/2.jpeg',
      '/productos/diademas/maky/3.jpeg',
      '/productos/diademas/maky/4.jpeg'
    ]
  },
  {
    id: 4,
    slug: 'diadema-bolitas-polvo',
    name: 'Diadema Bolitas de Polvo',
    description: 'Hermosa diadema con adorables bolitas de polvo inspiradas en el viaje de Chihiro.',
    price: 28000,
    image: '/productos/diademas/bolitas-de-polvo/5.jpeg',
    category: 'Diademas',
    isNew: true,
    story: [
      'Un homenaje tierno y nostálgico. Las famosas bolitas de polvo se posan suavemente sobre tu cabeza.',
      'Son especialmente diseñadas para despertar a tu niño interior y recordarte que la magia está en los detalles simples y en el amor de un trabajo hecho a mano.'
    ],
    features: [
      { title: 'Apego Visual Nostálgico', desc: 'Evoca memorias reconfortantes ligadas al cine y la infancia.' },
      { title: 'Ligereza Absoluta', desc: 'A pesar de sus decoraciones, es sumamente ligera.' }
    ],
    gallery: [
      '/productos/diademas/bolitas-de-polvo/1.jpeg',
      '/productos/diademas/bolitas-de-polvo/2.jpeg',
      '/productos/diademas/bolitas-de-polvo/3.jpeg',
      '/productos/diademas/bolitas-de-polvo/4.jpeg'
    ]
  },
  {
    id: 5,
    slug: 'bolso-margarita',
    name: 'Bolso Margarita (Flor)',
    description: 'Hermoso bolso tejido a mano con diseño de flor Margarita. Perfecto para combinar con tu estilo artesanal.',
    price: 85000,
    image: '/productos/bolsos/margarita/1.jpeg',
    category: 'Bolsos',
    isPopular: true,
    story: [
      'Nuestros bolsos Margarita son el complemento ideal para llevar un aire de naturaleza y frescura contigo.',
      'Tejidos meticulosamente por artesanos expertos, son funcionales, amplios para tus esenciales y sumamente suaves al tacto. Una obra de arte hecha hilo.'
    ],
    features: [
      { title: 'Espacioso y Práctico', desc: 'Diseño optimizado para tus elementos esenciales diarios.' },
      { title: 'Material Duradero', desc: 'Tejido reforzado para soportar el uso diario manteniendo su suavidad.' }
    ],
    gallery: [
      '/productos/bolsos/margarita/2.jpeg',
      '/productos/bolsos/margarita/3.jpeg',
      '/productos/bolsos/margarita/4.jpeg',
      '/productos/bolsos/margarita/5.jpeg',
      '/productos/bolsos/margarita/6.jpeg',
      '/productos/bolsos/margarita/7.jpeg'
    ]
  },
  {
    id: 6,
    slug: 'bolso-fresita',
    name: 'Bolso Fresita',
    description: 'Adorable bolso tejido a mano con diseño de Fresita / Sandía. Divertido y muy cómodo.',
    price: 70000,
    image: '/productos/bolsos/fresita/1.jpeg',
    category: 'Bolsos',
    isNew: true,
    story: [
      'Un diseño divertido y frutal que alegra cualquier atuendo. Tejido con la máxima calidad y relleno de detalles que enamoran.',
      'Su tamaño compacto es perfecto para salidas rápidas, paseos o para darle un toque especial a la vestimenta diaria de grandes y chicos.'
    ],
    features: [
      { title: 'Diseño Único', desc: 'Detalles frutales en relieve tejidos con hilo premium.' },
      { title: 'Suave y Confortable', desc: 'No lastima el hombro al usarlo por largos periodos.' }
    ],
    gallery: [
      '/productos/bolsos/fresita/2.jpeg',
      '/productos/bolsos/fresita/3.jpeg',
      '/productos/bolsos/fresita/4.jpeg',
      '/productos/bolsos/fresita/5.jpeg',
      '/productos/bolsos/fresita/6.jpeg',
      '/productos/bolsos/fresita/7.jpeg',
      '/productos/bolsos/fresita/8.jpeg'
    ]
  },
  {
    id: 7,
    slug: 'llavero-abejita',
    name: 'Llavero Abejita',
    description: 'Tierno llavero en forma de abejita, un anclaje sensorial compacto de bolsillo.',
    price: 8000,
    image: '/productos/llaveros/abejas/2.jpeg',
    category: 'Llaveros',
    story: [
      'Las pequeñas abejitas tejidas sirven como un recordatorio físico de calma en tus llaves o maleta.',
      'Sus texturas suaves te invitan a tocarlas en momentos de nerviosismo o tensión, ayudando a centrar la atención mediante el tacto.'
    ],
    features: [
      { title: 'Tamaño Ideal', desc: 'Compacto, perfecto para llaves o cremalleras.' },
      { title: 'Calmante Sensorial', desc: 'La textura tejida ayuda a reducir el estrés cotidiano.' }
    ],
    gallery: [
      '/productos/llaveros/abejas/2.jpeg',
      '/productos/llaveros/abejas/3.jpeg'
    ]
  },
  {
    id: 8,
    slug: 'llavero-chimuelo',
    name: 'Llavero Chimuelo',
    description: 'Divertido llavero de dragón Chimuelo tejido con detalles sumamente detallados.',
    price: 8000,
    image: '/productos/llaveros/chimuelos/1.jpeg',
    category: 'Llaveros',
    isPopular: true,
    story: [
      'Inspirado en el adorable dragón negro. Chimuelo te acompaña a donde vayas cuidando de tus llaves con su tierna mirada.',
      'Un regalo perfecto para fanáticos y un accesorio que seguro iniciará conversaciones.'
    ],
    features: [
      { title: 'Gran Detalle', desc: 'Detalles bordados y terminaciones limpias hechas a mano.' },
      { title: 'Compañero Fiel', desc: 'Ideal para colocar en morrales o estuches escolares.' }
    ],
    gallery: [
      '/productos/llaveros/chimuelos/2.jpeg',
      '/productos/llaveros/chimuelos/3.jpeg',
      '/productos/llaveros/chimuelos/4.jpeg',
      '/productos/llaveros/chimuelos/5.jpeg',
      '/productos/llaveros/chimuelos/6.jpeg',
      '/productos/llaveros/chimuelos/7.jpeg'
    ]
  },
  {
    id: 9,
    slug: 'llavero-estrella',
    name: 'Llavero Estrella',
    description: 'Linda y suave estrella tejida en varios colores para un anclaje alegre.',
    price: 8000,
    image: '/productos/llaveros/estrellas/1.jpeg',
    category: 'Llaveros',
    story: [
      'Estrellitas tejidas a mano para iluminar tu día a día. Siente la reconfortante textura del tejido en tus dedos y relájate.'
    ],
    features: [
      { title: 'Colores Vibrantes', desc: 'Hilos seleccionados para captar luz y alegría.' },
      { title: 'Táctil', desc: 'Su relleno mullido las hace sumamente satisfactorias al apretar.' }
    ],
    gallery: [
      '/productos/llaveros/estrellas/2.jpeg',
      '/productos/llaveros/estrellas/3.jpeg',
      '/productos/llaveros/estrellas/4.jpeg'
    ]
  },
  {
    id: 10,
    slug: 'llavero-pulpo',
    name: 'Llavero Pulpo',
    description: 'Llavero en forma de pulpo con tentáculos divertidos e interactivos.',
    price: 8000,
    image: '/productos/llaveros/pulpos/1.jpeg',
    category: 'Llaveros',
    isNew: true,
    story: [
      'Los pulpos de apego son ampliamente reconocidos por calmar a personas de todas las edades.',
      'Jugar con sus tentáculos rizados simula una sensación de tranquilidad y calma motora perfecta para la autorregulación.'
    ],
    features: [
      { title: 'Tentáculos Rizables', desc: 'Estructura elástica divertida para manipular sensorialmente.' },
      { title: 'Variedad de Colores', desc: 'Elige tu tono favorito de calma.' }
    ],
    gallery: [
      '/productos/llaveros/pulpos/2.jpeg',
      '/productos/llaveros/pulpos/3.jpeg',
      '/productos/llaveros/pulpos/4.jpeg',
      '/productos/llaveros/pulpos/5.jpeg',
      '/productos/llaveros/pulpos/6.jpeg',
      '/productos/llaveros/pulpos/7.jpeg'
    ]
  },
  {
    id: 11,
    slug: 'flor-girasol',
    name: 'Flor Girasol',
    description: 'Hermosa flor de girasol tejida a mano. Brillo y alegría eterna para tu hogar.',
    price: 15000,
    image: '/productos/monas/nuevas/girasol 1.jpeg',
    category: 'Flores',
    isPopular: true,
    story: [
      'Nuestros girasoles de hilo llenan de luz cualquier espacio sin marchitarse nunca. Un obsequio ideal lleno de significado.',
      'Representa el calor, la felicidad y la energía positiva duradera.'
    ],
    features: [
      { title: 'Estructura Firme', desc: 'Tallo reforzado para sostenerse erguido en floreros.' },
      { title: 'Regalo Perfecto', desc: 'Transmite buenos deseos de forma permanente.' }
    ],
    gallery: [
      '/productos/monas/nuevas/girasol 2.jpeg',
      '/productos/monas/nuevas/girasol 3.jpeg'
    ]
  },
  {
    id: 12,
    slug: 'ramo-3-flores',
    name: 'Ramo de 3 Flores',
    description: 'Precioso ramo de 3 flores combinadas tejidas con suprema elegancia.',
    price: 40000,
    image: '/productos/monas/nuevas/todas 2.jpeg',
    category: 'Flores',
    story: [
      'Un trío de belleza floral permanente. El ramo de 3 flores de Nuditos es el detalle perfecto para expresar cariño eterno.'
    ],
    features: [
      { title: 'Arreglo Listo', desc: 'Decorado con envoltura especial listo para entregar.' }
    ],
    gallery: []
  },
  {
    id: 13,
    slug: 'ramo-6-flores',
    name: 'Ramo de 6 Flores',
    description: 'Impresionante y abundante ramo de 6 flores tejidas a mano. Máxima expresión de afecto.',
    price: 80000,
    image: '/productos/monas/nuevas/todas 1.jpeg',
    category: 'Flores',
    isNew: true,
    story: [
      'Nuestro ramo más grande y espectacular. Combina 6 hermosas flores artesanales de crochet en una presentación premium de regalo.'
    ],
    features: [
      { title: 'Presentación de Lujo', desc: 'Envoltura floral artesanal de alta calidad y lazo decorativo.' }
    ],
    gallery: []
  }
];

// Helper functions para obtener datos
export const getProductBySlug = (slug: string) => {
  return productsData.find(p => p.slug === slug);
};

export const getProductsByCategory = (category: string) => {
  return productsData.filter(p => p.category.toLowerCase() === category.toLowerCase());
};
