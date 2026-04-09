import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  fullWidth?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center font-semibold rounded-2xl
    transition-soft focus-soft disabled:opacity-50 disabled:cursor-not-allowed
    transform active:scale-95
  `;

  const variants = {
    primary: `
      bg-nuditos-marron text-nuditos-crema
      hover:bg-nuditos-marron-oscuro
      shadow-soft hover:shadow-medium
    `,
    secondary: `
      bg-nuditos-rosa text-nuditos-marron
      hover:bg-nuditos-rosa-claro
      shadow-soft
    `,
    outline: `
      border-2 border-nuditos-marron text-nuditos-marron
      hover:bg-nuditos-marron hover:text-nuditos-crema
    `,
    ghost: `
      text-nuditos-marron hover:bg-nuditos-rosa-claro
    `,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
