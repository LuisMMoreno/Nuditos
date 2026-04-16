'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { ShoppingCart, Menu, X, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCart } from '@/src/context/CartContext';

export default function Navbar() {
  const { totalItems } = useCart();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  // Scroll detection with direction
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Focus trap for mobile menu
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  // Close search on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSearch(false);
      }
    };
    if (showSearch) {
      searchRef.current?.focus();
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showSearch]);

  const navLinks = [
    { href: '/nubi', label: 'Nubi' },
    { href: '/monas', label: 'Moñas' },
    { href: '/bolsos', label: 'Bolsos' },
    { href: '/llaveros', label: 'Llaveros' },
    { href: '/flores', label: 'Flores' },
    { href: '/diademas', label: 'Diademas' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      {/* Franja de Promociones */}
      <div className="bg-[#2A2A2A] text-white text-xs sm:text-sm py-2.5 px-4 flex justify-between items-center w-full">
        <button aria-label="Promoción anterior" className="opacity-80 hover:opacity-100 transition-opacity">
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <div className="text-center flex-1 font-medium tracking-wide">
          ESPACIO PARA TUS PROMOCIONES - ENVÍO GRATIS
        </div>
        <button aria-label="Siguiente promoción" className="opacity-80 hover:opacity-100 transition-opacity">
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      <nav
        className={`w-full transition-all duration-300 border-b border-gray-100 ${
          scrolled ? 'py-2 shadow-sm' : 'py-4'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 flex items-center justify-between">
          
          {/* Left Area: Desktop Nav Links & Mobile Menu */}
          <div className="flex items-center flex-1 justify-start">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 mr-2"
              aria-label="Menú"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop Links */}
            <ul className="hidden lg:flex items-center space-x-6 xl:space-x-8" role="menubar">
              {navLinks.map((link) => (
                <li key={link.href} role="none">
                  <Link
                    href={link.href}
                    role="menuitem"
                    className={`text-sm tracking-[0.1em] uppercase font-medium hover:text-gray-500 transition-colors ${
                      isActive(link.href) ? 'border-b-2 border-black pb-1' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Center Area: Logo */}
          <div className="flex-shrink-0 flex justify-center items-center">
            <Link href="/" className="outline-none py-1 flex items-center justify-center">
              <div className={`relative transition-all duration-500 ease-in-out ${scrolled ? 'w-24 h-10' : 'w-32 h-14'}`}>
                <Image
                  src="/logo.png"
                  alt="Logo Nuditos"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Right Area: Search & Cart */}
          <div className="flex items-center flex-1 justify-end space-x-4 sm:space-x-6">
            <div ref={searchRef} className="relative hidden sm:block">
              {showSearch ? (
                <input
                  type="search"
                  placeholder="Buscar..."
                  className="w-48 px-3 py-1.5 border-b border-black text-sm outline-none transition-all"
                  autoFocus
                />
              ) : (
                <button
                  onClick={() => setShowSearch(true)}
                  className="p-2 hover:opacity-70 transition-opacity"
                  aria-label="Buscar"
                >
                  <Search className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              )}
            </div>

            <Link
              href="/carrito"
              className="relative p-2 hover:opacity-70 transition-opacity flex items-center"
              aria-label={`Carrito`}
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[20px] h-5 bg-black text-white text-[10px] rounded-full flex items-center justify-center font-bold px-1">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Search - Visible only when search toggled on mobile */}
        {showSearch && (
          <div className="sm:hidden px-4 mt-2 pb-2">
            <input
              type="search"
              placeholder="Buscar..."
              className="w-full px-4 py-2 border border-gray-200 rounded-md text-sm outline-none"
              autoFocus
            />
          </div>
        )}

        {/* Mobile Menu Dropdown */}
        <div
          id="mobile-menu"
          ref={menuRef}
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white absolute w-full border-b border-gray-100 shadow-sm ${isMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'}`}
        >
          <ul className="px-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-sm tracking-widest uppercase font-medium ${
                    isActive(link.href) ? 'text-black font-bold' : 'text-gray-600'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
