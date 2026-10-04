import React from 'react';

type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'info' | 'primary' | 'secondary' | 'accent';
type BadgeSize = 'sm' | 'md';

interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
  pulse?: boolean;
}

const VARIANT_STYLES: Record<BadgeVariant, string> = {
  default: 'bg-[#F4F6F0] text-[#545D4B] border-[#E1E6DA]',
  success: 'bg-[#EAF5EC] text-[#2E6B38] border-[#BDE3C3]',
  warning: 'bg-[#FDF4E6] text-[#8E5238] border-[#F4DEBF]',
  danger: 'bg-[#FBECEB] text-[#B9382F] border-[#F5C7C5]',
  info: 'bg-[#EBF3F8] text-[#2C6280] border-[#C3DCE9]',
  primary: 'bg-[#DCE5D0] text-[#525B38] border-[#CAD6B8]',
  secondary: 'bg-[#F4E3D8] text-[#8E5238] border-[#E7D0C4]',
  accent: 'bg-[#F6EFE5] text-[#AB8252] border-[#EBD8BD]',
};

const SIZE_STYLES: Record<BadgeSize, string> = {
  sm: 'text-[10px] px-2 py-0.5 gap-1',
  md: 'text-xs px-2.5 py-1 gap-1.5',
};

export default function Badge({
  variant = 'default',
  size = 'sm',
  children,
  className = '',
  dot = false,
  pulse = false,
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center font-bold uppercase tracking-wider rounded-md border
        ${VARIANT_STYLES[variant]}
        ${SIZE_STYLES[size]}
        ${className}
      `}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            pulse ? 'animate-pulse' : ''
          } ${
            variant === 'success' ? 'bg-[#3A7D44]' :
            variant === 'warning' ? 'bg-[#C47C1B]' :
            variant === 'danger' ? 'bg-[#B9382F]' :
            variant === 'info' ? 'bg-[#3B6E8C]' :
            variant === 'primary' ? 'bg-[#525B38]' :
            variant === 'secondary' ? 'bg-[#8E5238]' :
            'bg-[#8A9380]'
          }`}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
