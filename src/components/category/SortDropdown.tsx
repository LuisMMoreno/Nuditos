'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ArrowUpDown, ArrowUpAZ, ArrowDownAZ, Star, TrendingUp } from 'lucide-react';

type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'popular';

interface SortDropdownProps {
  value: SortOption;
  onChange: (option: SortOption) => void;
}

const sortOptions: { value: SortOption; label: string; icon: React.ReactNode }[] = [
  { value: 'price-asc', label: 'Menor precio', icon: <ArrowUpDown className="w-4 h-4" /> },
  { value: 'price-desc', label: 'Mayor precio', icon: <ArrowUpDown className="w-4 h-4 rotate-180" /> },
  { value: 'name-asc', label: 'A-Z', icon: <ArrowUpAZ className="w-4 h-4" /> },
  { value: 'name-desc', label: 'Z-A', icon: <ArrowDownAZ className="w-4 h-4" /> },
  { value: 'popular', label: 'Más populares', icon: <Star className="w-4 h-4" /> },
];

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = sortOptions.find(opt => opt.value === value) || sortOptions[0];

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl border border-nuditos-beige hover:border-nuditos-marron-claro transition-soft focus-soft"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="text-sm text-nuditos-marron">Ordenar:</span>
        <span className="text-sm font-semibold text-nuditos-marron-oscuro">
          {selectedOption.label}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-nuditos-marron transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-medium z-50 overflow-hidden"
          role="listbox"
        >
          {sortOptions.map((option, index) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-nuditos-crema transition-soft ${
                value === option.value ? 'bg-nuditos-rosa-claro' : ''
              } ${index !== sortOptions.length - 1 ? 'border-b border-nuditos-beige/50' : ''}`}
              role="option"
              aria-selected={value === option.value}
            >
              <span className={`flex-shrink-0 ${
                value === option.value ? 'text-nuditos-marron-oscuro' : 'text-nuditos-marron'
              }`}>
                {option.icon}
              </span>
              <span className={`text-sm ${
                value === option.value ? 'font-semibold text-nuditos-marron-oscuro' : 'text-nuditos-marron'
              }`}>
                {option.label}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
