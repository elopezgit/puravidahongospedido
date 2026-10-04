import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'terracotta';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-[#525B38] to-[#41492C] text-white shadow-lg shadow-[#525B38]/25 hover:brightness-110 border border-[#DCE5D0]/30',
  terracotta:
    'bg-gradient-to-r from-[#8E5238] to-[#743F29] text-white shadow-lg shadow-[#8E5238]/25 hover:brightness-110 border border-[#F4E3D8]/30',
  secondary:
    'bg-[#F4F6F0] text-[#1D2218] border border-[#E1E6DA] hover:bg-[#EAEFE4] hover:border-[#CAD6B8] shadow-sm',
  outline:
    'bg-transparent text-[#525B38] border-2 border-[#525B38] hover:bg-[#525B38]/10',
  ghost:
    'bg-transparent text-[#545D4B] hover:bg-[#F4F6F0] border border-transparent',
  danger:
    'bg-[#FBECEB] text-[#B9382F] border border-[#F5C7C5] hover:bg-[#F8D8D6]',
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs rounded-lg gap-1.5',
  md: 'px-4 py-2.5 text-sm rounded-xl gap-2',
  lg: 'px-6 py-3.5 text-base rounded-2xl gap-2.5',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  fullWidth = false,
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center font-bold uppercase tracking-wide
        transition-all duration-200 active:scale-[0.97]
        disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#525B38]/40 focus-visible:ring-offset-2
        ${VARIANT_STYLES[variant]}
        ${SIZE_STYLES[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
        </svg>
      ) : icon ? (
        <span className="shrink-0">{icon}</span>
      ) : null}
      {children}
    </button>
  );
}
