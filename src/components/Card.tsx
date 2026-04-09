import { ReactNode } from 'react';
import Link from 'next/link';

interface CardProps {
  children: ReactNode;
  href?: string;
  className?: string;
  hover?: 'lift' | 'glow' | 'none';
}

export default function Card({
  children,
  href,
  className = '',
  hover = 'lift',
}: CardProps) {
  const hoverStyles = {
    lift: 'hover:-translate-y-1 hover:shadow-medium',
    glow: 'hover:shadow-medium hover:ring-2 hover:ring-nuditos-rosa/50',
    none: '',
  };

  const content = (
    <div
      className={`
        bg-white rounded-3xl p-6 shadow-soft transition-soft
        ${hoverStyles[hover]}
        ${className}
      `}
    >
      {children}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block focus-soft">
        {content}
      </Link>
    );
  }

  return content;
}
