'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Heart, Mail } from 'lucide-react';

// SVG Icons for social media
const InstagramIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TikTokIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const WhatsappIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 8h.01M12 12h.01M16 16h.01M9 16c-.5-1-1-2-1-3 0-2 2-4 4-4s4 2 4 4c0 1-.5 2-1 3" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const footerLinks = {
    productos: [
      { href: '/nubi', label: 'Conejitos Nubi' },
      { href: '/accesorios', label: 'Accesorios' },
      { href: '/bolsos', label: 'Bolsos' },
      { href: '/flores', label: 'Flores' },
    ],
    ayuda: [
      { href: '/contacto', label: 'Contacto' },
      { href: '/envios', label: 'Envíos' },
      { href: '/devoluciones', label: 'Devoluciones' },
      { href: '/preguntas-frecuentes', label: 'Preguntas frecuentes' },
    ],
    legal: [
      { href: '/privacidad', label: 'Política de privacidad' },
      { href: '/terminos', label: 'Términos y condiciones' },
      { href: '/cookies', label: 'Política de cookies' },
    ],
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const socialLinks = [
    { href: 'https://instagram.com/nuditos', icon: InstagramIcon, label: 'Instagram' },
    { href: 'https://facebook.com/nuditos', icon: FacebookIcon, label: 'Facebook' },
    { href: 'https://tiktok.com/@nuditos', icon: TikTokIcon, label: 'TikTok' },
    { href: 'https://wa.me/573000000000', icon: WhatsappIcon, label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-nuditos-marron text-nuditos-crema mt-auto" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">


        {/* Bottom Section */}
        <div className="border-t border-nuditos-rosa/30 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-nuditos-rosa-claro text-sm text-center sm:text-left">
            © {currentYear} Nuditos. Hecho con <Heart className="w-4 h-4 inline text-nuditos-rosa" aria-hidden="true" /> y muchas puntadas.
          </p>
          <p className="text-nuditos-rosa-claro text-sm text-center sm:text-right">
            Cada compra apoya el trabajo artesanal y consciente.
          </p>
        </div>
      </div>
    </footer>
  );
}
