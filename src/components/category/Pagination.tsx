'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems?: number;
  itemsPerPage?: number;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage = 12,
}: PaginationProps) {
  const getVisiblePages = () => {
    const pages: (number | 'ellipsis')[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push('ellipsis');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push('ellipsis');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems || 0);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12">
      {/* Results count */}
      {totalItems && (
        <p className="text-sm text-nuditos-marron">
          Mostrando <span className="font-semibold">{startItem}-{endItem}</span> de{' '}
          <span className="font-semibold">{totalItems}</span> productos
        </p>
      )}

      {/* Pagination controls */}
      <div className="flex items-center gap-2">
        {/* Previous */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-nuditos-beige text-nuditos-marron hover:border-nuditos-marron hover:text-nuditos-marron-oscuro transition-soft focus-soft disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-nuditos-beige disabled:hover:text-nuditos-marron"
          aria-label="Página anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Page numbers */}
        <div className="flex items-center gap-1">
          {getVisiblePages().map((page, index) => (
            <div key={index}>
              {page === 'ellipsis' ? (
                <span className="w-10 h-10 flex items-center justify-center text-nuditos-marron">
                  ...
                </span>
              ) : (
                <button
                  onClick={() => onPageChange(Number(page))}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-soft focus-soft ${
                    page === currentPage
                      ? 'bg-nuditos-marron text-white font-semibold'
                      : 'text-nuditos-marron hover:bg-nuditos-rosa-claro'
                  }`}
                  aria-label={`Página ${page}`}
                  aria-current={page === currentPage ? 'page' : undefined}
                >
                  {page}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Next */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-nuditos-beige text-nuditos-marron hover:border-nuditos-marron hover:text-nuditos-marron-oscuro transition-soft focus-soft disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-nuditos-beige disabled:hover:text-nuditos-marron"
          aria-label="Página siguiente"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
