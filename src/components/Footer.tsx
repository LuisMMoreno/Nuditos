'use client';

import { Heart } from 'lucide-react';

const InstagramIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
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

  const socialLinks = [
    { href: 'https://instagram.com/nuditos.fusa', icon: InstagramIcon, label: 'Instagram' },
    { href: 'https://tiktok.com/@nuditos.fusa', icon: TikTokIcon, label: 'TikTok' },
    { href: 'https://wa.me/573053655297', icon: WhatsappIcon, label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-nuditos-marron text-nuditos-crema mt-auto py-8" role="contentinfo">
      <div className="max-w-[600px] mx-auto px-4 flex flex-col items-center gap-6">
        
        {/* Redes sociales */}
        <div className="flex gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label={social.label}
            >
              <social.icon />
            </a>
          ))}
        </div>

        {/* Textos */}
        <div className="text-center space-y-2">
          <p className="text-nuditos-rosa-claro text-sm font-medium">
            © {currentYear} Nuditos. Hecho con <Heart className="w-3.5 h-3.5 inline text-nuditos-rosa fill-nuditos-rosa" aria-hidden="true" /> en Fusagasugá, Colombia.
          </p>
          <p className="text-nuditos-rosa-claro/70 text-xs">
            Cada compra apoya el trabajo artesanal y consciente.
          </p>
        </div>

      </div>
    </footer>
  );
}

