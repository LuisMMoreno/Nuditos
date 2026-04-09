'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // Efecto para detectar scroll y reducir el header o jugar con las sombras/bordes
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/nubi', label: 'Nubi' },
    { href: '/accesorios', label: 'Accesorios' },
    { href: '/bolsos', label: 'Bolsos' },
    { href: '/flores', label: 'Flores' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6 lg:px-8 animate-fade-in-up">
      <nav 
        className={`max-w-7xl mx-auto transition-all duration-500 rounded-full border ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-xl border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] py-1 sm:py-2' 
            : 'bg-white/60 backdrop-blur-md border-white/40 shadow-[0_4px_20px_rgb(0,0,0,0.04)] py-2 sm:py-3'
        }`}
      >
        <div className="flex items-center justify-between px-6 sm:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center group relative outline-none focus-soft rounded-full py-1">
            <div className={`relative transition-all duration-500 ease-in-out group-hover:scale-105 drop-shadow-sm ${scrolled ? 'w-24 h-12' : 'w-32 h-14'}`}>
              <Image 
                src="/logo.png" 
                alt="Logo Nuditos" 
                fill 
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-nuditos-marron-oscuro font-semibold transition-all duration-300 rounded-full hover:bg-nuditos-marron/5 group"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link
              href="/carrito"
              className="relative p-3 rounded-full hover:bg-nuditos-marron/5 transition-all duration-300 focus-soft group"
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-nuditos-marron-oscuro group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-nuditos-marron-oscuro text-white text-[10px] rounded-full flex items-center justify-center font-bold shadow-md border-2 border-white">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-full bg-nuditos-marron/5 transition-all duration-300 focus-soft hover:bg-nuditos-marron/10"
              aria-label="Menú"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-nuditos-marron-oscuro" />
              ) : (
                <Menu className="w-5 h-5 text-nuditos-marron-oscuro" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 pb-6 pt-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 px-4 text-nuditos-marron-oscuro hover:text-nuditos-marron font-bold rounded-2xl hover:bg-nuditos-marron/5 transition-all text-center"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
