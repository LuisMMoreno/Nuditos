'use client';

import { useState } from 'react';
import { X, ChevronDown, SlidersHorizontal } from 'lucide-react';

interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

interface FilterGroup {
  id: string;
  title: string;
  options: FilterOption[];
  type: 'checkbox' | 'radio' | 'range';
}

interface FilterSidebarProps {
  filters: FilterGroup[];
  selectedFilters: Record<string, string | string[]>;
  onFilterChange: (filterId: string, value: string | string[]) => void;
  onClearFilters: () => void;
  isOpen?: boolean;
  onClose?: () => void;
}

export default function FilterSidebar({
  filters,
  selectedFilters,
  onFilterChange,
  onClearFilters,
  isOpen = true,
  onClose,
}: FilterSidebarProps) {
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(
    filters.reduce((acc, filter) => ({ ...acc, [filter.id]: true }), {})
  );

  const toggleGroup = (groupId: string) => {
    setExpandedGroups(prev => ({ ...prev, [groupId]: !prev[groupId] }));
  };

  const isSelected = (filterId: string, value: string) => {
    const selected = selectedFilters[filterId];
    if (Array.isArray(selected)) {
      return selected.includes(value);
    }
    return selected === value;
  };

  const handleCheckboxChange = (filterId: string, value: string) => {
    const current = selectedFilters[filterId];
    if (Array.isArray(current)) {
      const newValue = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value];
      onFilterChange(filterId, newValue);
    } else {
      onFilterChange(filterId, [value]);
    }
  };

  const hasActiveFilters = Object.keys(selectedFilters).length > 0 &&
    Object.values(selectedFilters).some(v => Array.isArray(v) ? v.length > 0 : v !== '');

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && onClose && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-80 lg:w-64 bg-white lg:bg-transparent overflow-y-auto transform transition-transform duration-300 lg:transform-none ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-4 lg:p-0">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 text-nuditos-marron" />
              <h2 className="text-lg font-bold text-nuditos-marron-oscuro">Filtros</h2>
            </div>
            {hasActiveFilters && (
              <button
                onClick={onClearFilters}
                className="text-sm text-nuditos-marron hover:text-nuditos-marron-oscuro transition-soft"
              >
                Limpiar
              </button>
            )}
            {onClose && (
              <button
                onClick={onClose}
                className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center hover:bg-nuditos-crema transition-soft"
                aria-label="Cerrar filtros"
              >
                <X className="w-5 h-5 text-nuditos-marron" />
              </button>
            )}
          </div>

          {/* Filter Groups */}
          <div className="space-y-4">
            {filters.map(filter => (
              <div
                key={filter.id}
                className="bg-white lg:bg-transparent rounded-2xl lg:rounded-none overflow-hidden"
              >
                {/* Group Header */}
                <button
                  onClick={() => toggleGroup(filter.id)}
                  className="w-full flex items-center justify-between p-4 lg:p-2 hover:bg-nuditos-crema/50 lg:hover:bg-transparent transition-soft"
                >
                  <span className="font-semibold text-nuditos-marron-oscuro text-left">
                    {filter.title}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-nuditos-marron transition-transform duration-200 ${
                      expandedGroups[filter.id] ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Group Options */}
                {expandedGroups[filter.id] && (
                  <div className="px-4 pb-4 lg:px-0 lg:pb-4 space-y-2">
                    {filter.type === 'range' ? (
                      <div className="space-y-3">
                        <input
                          type="range"
                          min="0"
                          max="100"
                          className="w-full accent-nuditos-marron"
                          onChange={(e) => onFilterChange(filter.id, e.target.value)}
                          defaultValue={selectedFilters[filter.id] || '50'}
                        />
                        <div className="flex justify-between text-sm text-nuditos-marron">
                          <span>${(Number(selectedFilters[filter.id]) || 50) * 0.5}</span>
                          <span>${(Number(selectedFilters[filter.id]) || 50)}</span>
                        </div>
                      </div>
                    ) : (
                      filter.options.map(option => (
                        <label
                          key={option.value}
                          className="flex items-center gap-3 cursor-pointer group"
                        >
                          <div className="relative">
                            <input
                              type={filter.type === 'radio' ? 'radio' : 'checkbox'}
                              name={filter.id}
                              value={option.value}
                              checked={isSelected(filter.id, option.value)}
                              onChange={() => filter.type === 'checkbox'
                                ? handleCheckboxChange(filter.id, option.value)
                                : onFilterChange(filter.id, option.value)
                              }
                              className="sr-only"
                            />
                            <div className={`w-5 h-5 rounded-md border-2 transition-soft ${
                              isSelected(filter.id, option.value)
                                ? 'bg-nuditos-marron border-nuditos-marron'
                                : 'border-nuditos-marron-claro group-hover:border-nuditos-marron'
                            }`}>
                              {isSelected(filter.id, option.value) && (
                                <svg className="w-full h-full text-white p-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                          </div>
                          <span className="text-nuditos-marron group-hover:text-nuditos-marron-oscuro transition-soft flex-1">
                            {option.label}
                          </span>
                          {option.count !== undefined && (
                            <span className="text-xs text-nuditos-marron-claro">
                              ({option.count})
                            </span>
                          )}
                        </label>
                      ))
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
