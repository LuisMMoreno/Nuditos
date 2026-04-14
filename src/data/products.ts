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
  rating?: number;
  reviews?: number;
  story: string[];
  features?: { title: string; desc: string }[];
  gallery?: string[];
}

export const productsData: ProductDetail[] = [
  {
    id: 1,
    slug: 'mona-nuditos',
    name: 'Moña Nuditos',
    description: 'Moña tejida a mano, ideal para tus peinados diarios con un toque especial.',
    price: 10000,
    image: '/productos/monas/1%20UP.png',
    category: 'Moñas',
    isNew: true,
    rating: 5.0,
    reviews: 8,
    story: [
      'Nuestras Moñas Nuditos nacen de la necesidad de llevar un pedacito de confort táctil en el cabello. A menudo, usamos accesorios que tiran del pelo o causan dolores de cabeza.',
      'Tejida a mano puntada a puntada, cada moña está trabajada con cariño para asegurar que envuelva el cabello sin maltratarlo. Son mucho más que un adorno: son un detalle de amor propio.'
    ],
    features: [
      { title: 'Cero Tensión', desc: 'Diseño anatómico que agarra suavemente sin provocar tracción dolorosa.' },
      { title: 'Hecha a Mano', desc: 'Cada moña es única: tejida puntada a puntada con dedicación y cuidado.' }
    ],
    gallery: [
      '/productos/monas/2%20UP.png',
      '/productos/monas/3%20UP.png',
      '/productos/monas/4%20UP.png'
    ]
  },
  {
    id: 2,
    slug: 'diadema-sapito',
    name: 'Diadema Sapito',
    description: 'Divertida diadema con diseño de sapito. Hecha a mano con materiales premium.',
    price: 27000,
    image: '/productos/diademas/ranita/1%20up.png',
    category: 'Diademas',
    isPopular: true,
    rating: 4.9,
    reviews: 15,
    story: [
      '¿Qué mejor forma de afrontar un día difícil que con una corona de sapito? Esta diadema es un inyector instantáneo de serotonina.',
      'La estructura interna es tan flexible que olvidarás que la llevas puesta. Los ojitos del sapito actúan como un rompehielos social, sacando sonrisas donde quiera que vayas y fomentando una energía positiva a tu alrededor.'
    ],
    features: [
      { title: 'Soporte Ultra Flexible', desc: 'No genera dolores temporales gracias a su núcleo moldeable.' },
      { title: 'Conexión Emocional', desc: 'Su diseño animal fomenta la reducción indirecta de estrés.' }
    ],
    gallery: [
      '/productos/diademas/ranita/2%20up.png',
      '/productos/diademas/ranita/3%20up.png',
      '/productos/diademas/ranita/4%20up.png',
      '/productos/diademas/ranita/5%20up.png'
    ]
  },
  {
    id: 3,
    slug: 'diadema-maky',
    name: 'Diadema Maky',
    description: 'Elegante diadema estilo Maky tejida a mano. Comodidad y estilo garantizado.',
    price: 25000,
    image: '/productos/diademas/maky/1%20UP.png',
    category: 'Diademas',
    rating: 4.8,
    reviews: 12,
    story: [
      'Inspirada en las siluetas clásicas pero tejida con la calidez de Nuditos, la Diadema Maky combina la elegancia del día a día con el confort artesanal.',
      'Es perfecta para esos días en los que necesitas verte arreglada pero priorizando que tu cabeza esté descansada. El material natural permite que el cuero cabelludo respire.'
    ],
    features: [
      { title: 'Diseño Minimalista', desc: 'Apta para atuendos formales y casuales.' },
      { title: 'Textura Calmante', desc: 'Un suave contacto que relaja en lugar de presionar.' }
    ],
    gallery: [
      '/productos/diademas/maky/2%20UP.png',
      '/productos/diademas/maky/3%20UP.png',
      '/productos/diademas/maky/4%20UP.png'
    ]
  },
  {
    id: 4,
    slug: 'diadema-bolitas-polvo',
    name: 'Diadema Bolitas de Polvo',
    description: 'Hermosa diadema con adorables bolitas de polvo inspiradas en el viaje de Chihiro.',
    price: 25000,
    image: '/productos/diademas/bolitas-de-polvo/1%20UP.png',
    category: 'Diademas',
    isNew: true,
    rating: 5.0,
    reviews: 20,
    story: [
      'Un homenaje tierno y nostálgico. Las famosas bolitas de polvo se posan suavemente sobre tu cabeza.',
      'Son especialmente diseñadas para despertar a tu niño interior y recordarte que la magia está en los detalles simples y en el amor de un trabajo hecho a mano. Sus pequeños ojitos observan el mundo contigo.'
    ],
    features: [
      { title: 'Apego Visual Nostálgico', desc: 'Evoca memorias reconfortantes ligadas al cine y la infancia.' },
      { title: 'Ligereza Absoluta', desc: 'A pesar de sus decoraciones, es sumamente ligera.' }
    ],
    gallery: [
      '/productos/diademas/bolitas-de-polvo/2%20UP.png',
      '/productos/diademas/bolitas-de-polvo/3%20UP.png',
      '/productos/diademas/bolitas-de-polvo/4%20UP.png'
    ]
  }
];

// Helper functions para obtener datos
export const getProductBySlug = (slug: string) => {
  return productsData.find(p => p.slug === slug);
};

export const getProductsByCategory = (category: string) => {
  return productsData.filter(p => p.category.toLowerCase() === category.toLowerCase());
};
