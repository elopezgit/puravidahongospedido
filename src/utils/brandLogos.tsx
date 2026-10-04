import React from 'react';

interface BrandLogoProps {
  brand?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'olive' | 'cream' | 'terracotta';
}

/**
 * Logo de marca PURA VIDA HONGOS (identidad botánica élite: verde oliva, sage pastel, marfil y terracota).
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({ 
  brand = 'PURA VIDA', 
  className = '', 
  size = 'md',
  variant = 'olive'
}) => {
  const cleanBrand = (brand || 'PURA VIDA').toUpperCase().trim();

  const sizeClasses = {
    sm: 'h-8 px-2.5 py-1 text-xs',
    md: 'h-10 px-3.5 py-1.5 text-sm',
    lg: 'h-12 px-4 py-2 text-base',
  }[size];

  const variantClasses = {
    olive: 'bg-[#525B38] text-[#F5F2EA] border-[#6D774D]',
    cream: 'bg-[#FAF8F3] text-[#1D2218] border-[#E1E6DA]',
    terracotta: 'bg-[#8E5238] text-[#FAF8F3] border-[#A8664A]',
  }[variant];

  return (
    <div
      className={`inline-flex items-center gap-2.5 rounded-xl border shadow-sm transition-all hover:scale-[1.02] ${sizeClasses} ${variantClasses} ${className}`}
    >
      <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center shrink-0 border border-white/20">
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current opacity-90" aria-hidden="true">
          <path d="M12 2C7.5 2 4 5.5 4 10c0 3.5 2.5 6.5 6 7.5V22h4v-4.5c3.5-1 6-4 6-7.5 0-4.5-3.5-8-8-8zm-1 9V6h2v5h3v2h-8v-2h3z"/>
        </svg>
      </div>
      <div className="flex flex-col justify-center leading-none">
        <span className="font-display font-bold tracking-wider text-xs sm:text-sm">
          {cleanBrand}
        </span>
        <span className="font-sans font-semibold tracking-[0.22em] text-[8px] uppercase opacity-75 mt-0.5">
          HONGOS MEDICINALES
        </span>
      </div>
    </div>
  );
};