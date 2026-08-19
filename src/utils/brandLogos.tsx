import React from 'react';

interface BrandLogoProps {
  brand: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

// Logo de marca AVENTUS Perfumería (identidad premium oro champagne + negro cálido).
// Se muestra siempre con la marca del tenant que realiza el pedido; el fallback
// por defecto es "AVENTUS".
export const BrandLogo: React.FC<BrandLogoProps> = ({ brand, className = '', size = 'md' }) => {
  const cleanBrand = (brand || 'AVENTUS').toUpperCase().trim();

  const sizeClasses = {
    sm: 'h-6 max-w-[110px]',
    md: 'h-8 max-w-[150px]',
    lg: 'h-11 max-w-[200px]',
  }[size];

  return (
    <div
      className={`inline-flex items-center gap-2 bg-[#0C0A09]/95 border border-[#C9A962]/40 px-2.5 py-1 rounded-lg shadow-md ${sizeClasses} ${className}`}
    >
      <span className="w-5 h-5 rounded-full bg-gradient-to-br from-[#E4C87F] via-[#C9A962] to-[#A8863B] flex items-center justify-center font-serif font-black text-[#0C0A09] text-sm shrink-0">
        A
      </span>
      <div className="flex flex-col justify-center leading-none">
        <span className="font-serif font-black tracking-tight text-[#E4C87F] text-xs sm:text-sm">
          {cleanBrand}
        </span>
        <span className="font-sans font-bold tracking-[0.25em] text-[#A8863B] text-[8px] uppercase">
          PERFUMERÍA
        </span>
      </div>
    </div>
  );
};