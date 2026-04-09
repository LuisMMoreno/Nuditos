import Link from 'next/link';
import { Heart, Mail, Camera, Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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

  return (
    <footer className="bg-nuditos-marron text-nuditos-crema mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-nuditos-rosa flex items-center justify-center">
                <span className="text-xl">🐰</span>
              </div>
              <span className="text-2xl font-bold">Nuditos</span>
            </div>
            <p className="text-nuditos-rosa-claro leading-relaxed mb-6">
              Nuditos crea pequeños objetos con un gran significado emocional.
              Cada pieza está tejida a mano con intención y cariño, diseñada
              para acompañarte en momentos difíciles y celebrar los buenos.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-nuditos-rosa/20 flex items-center justify-center hover:bg-nuditos-rosa/40 transition-soft focus-soft"
                aria-label="Instagram"
              >
                <Camera className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-nuditos-rosa/20 flex items-center justify-center hover:bg-nuditos-rosa/40 transition-soft focus-soft"
                aria-label="Facebook"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href="mailto:hola@nuditos.com"
                className="w-10 h-10 rounded-full bg-nuditos-rosa/20 flex items-center justify-center hover:bg-nuditos-rosa/40 transition-soft focus-soft"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Productos */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-nuditos-amarillo">Productos</h3>
            <ul className="space-y-2">
              {footerLinks.productos.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-nuditos-rosa-claro hover:text-nuditos-amarillo transition-soft"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ayuda */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-nuditos-amarillo">Ayuda</h3>
            <ul className="space-y-2">
              {footerLinks.ayuda.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-nuditos-rosa-claro hover:text-nuditos-amarillo transition-soft"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-nuditos-amarillo">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-nuditos-rosa-claro hover:text-nuditos-amarillo transition-soft"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-nuditos-rosa/30 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-nuditos-rosa-claro text-sm text-center sm:text-left">
            © {currentYear} Nuditos. Hecho con <Heart className="w-4 h-4 inline text-nuditos-rosa" /> y muchas puntadas.
          </p>
          <p className="text-nuditos-rosa-claro text-sm">
            Cada compra apoya el trabajo artesanal y consciente.
          </p>
        </div>
      </div>
    </footer>
  );
}
