import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-1 sm:gap-2 text-sm text-nuditos-marron mb-6" aria-label="Breadcrumb">
      <Link
        href="/"
        className="hover:text-nuditos-marron-oscuro transition-soft focus-soft px-1"
      >
        Inicio
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-1 sm:gap-2">
          <ChevronRight className="w-4 h-4 text-nuditos-marron-claro flex-shrink-0" />
          {item.href && index < items.length - 1 ? (
            <Link
              href={item.href}
              className="hover:text-nuditos-marron-oscuro transition-soft focus-soft px-1"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-nuditos-marron-oscuro font-medium px-1" aria-current="page">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
