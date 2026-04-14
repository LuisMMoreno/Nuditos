'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { useCart } from '@/src/context/CartContext';

export default function Navbar() {
  const { totalItems } = useCart();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);
  const [showSearch, setShowSearch] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  // Scroll detection with direction
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 20);
      setPrevScroll(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Focus trap for mobile menu
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      const firstLink = menuRef.current?.querySelector('a') as HTMLElement;
      firstLink?.focus();
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

  // Keyboard navigation for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/nubi', label: 'Nubi' },
    { href: '/monas', label: 'Moñas' },
    { href: '/bolsos', label: 'Bolsos' },
    { href: '/llaveros', label: 'Llaveros' },
    { href: '/flores', label: 'Flores' },
    { href: '/diademas', label: 'Diademas' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      {/* Scroll progress indicator */}
      {scrolled && (
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-nuditos-marron via-nuditos-rosa to-nuditos-marron origin-left transition-transform duration-300" style={{ width: `${Math.min(prevScroll / 10, 100)}%` }} />
      )}

      <nav
        className={`max-w-7xl mx-auto transition-all duration-500 rounded-full border ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] py-1 sm:py-2'
            : 'bg-white/60 backdrop-blur-md border-white/40 shadow-[0_4px_20px_rgb(0,0,0,0.04)] py-2 sm:py-3'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between px-6 sm:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center group relative outline-none focus-soft rounded-full py-1" aria-label="Nuditos home">
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
          <ul className="hidden md:flex items-center lg:space-x-1" role="menubar">
            {navLinks.map((link) => (
              <li key={link.href} role="none">
                <Link
                  href={link.href}
                  role="menuitem"
                  className={`relative px-2 lg:px-4 py-2 text-sm lg:text-base font-semibold transition-all duration-300 rounded-full focus-soft whitespace-nowrap ${
                    isActive(link.href)
                      ? 'bg-nuditos-marron text-white'
                      : 'text-nuditos-marron-oscuro hover:bg-nuditos-marron/5'
                  }`}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Cart & Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Search toggle */}
            <div ref={searchRef} className="relative">
              {showSearch ? (
                <input
                  type="search"
                  placeholder="Buscar..."
                  className="w-40 sm:w-48 px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-nuditos-marron/20 text-nuditos-marron-oscuro text-sm focus:soft outline-none transition-all"
                  autoFocus
                />
              ) : (
                <button
                  onClick={() => setShowSearch(true)}
                  className="p-3 rounded-full hover:bg-nuditos-marron/5 transition-all duration-300 focus-soft"
                  aria-label="Buscar"
                >
                  <Search className="w-5 h-5 text-nuditos-marron-oscuro" />
                </button>
              )}
            </div>

            {/* Cart with animated badge */}
            <Link
              href="/carrito"
              className="relative p-3 rounded-full hover:bg-nuditos-marron/5 transition-all duration-300 focus-soft group min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={`Carrito con ${totalItems} productos`}
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-nuditos-marron-oscuro group-hover:scale-110 transition-transform" />
              {totalItems > 0 && (
                <span
                  className="absolute -top-1 -right-1 min-w-[20px] h-5 bg-nuditos-marron-oscuro text-white text-[10px] rounded-full flex items-center justify-center font-bold shadow-md border-2 border-white px-1 animate-pulse"
                  aria-label={`${totalItems} items in cart`}
                >
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-full bg-nuditos-marron/5 transition-all duration-300 focus-soft hover:bg-nuditos-marron/10 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Menú"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
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
        <div
          id="mobile-menu"
          ref={menuRef}
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
          role="menu"
          aria-hidden={!isMenuOpen}
        >
          <ul className="px-6 pb-6 pt-2 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-4 px-4 font-bold rounded-2xl transition-all text-center min-h-[44px] flex items-center justify-center ${
                    isActive(link.href)
                      ? 'bg-nuditos-marron text-white'
                      : 'text-nuditos-marron-oscuro hover:bg-nuditos-marron/5'
                  }`}
                  role="menuitem"
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
