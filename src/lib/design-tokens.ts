/**
 * AVENTUS Perfumería Design System — Tokens
 * 
 * Fuente única de verdad para colores, tipografía, espaciado,
 * sombras y bordes. Todas las variantes (cliente, POS, admin)
 * se derivan de estos tokens base.
 * 
 * Identidad: perfumería premium — oro champagne / negro profundo / marfil.
 */

export const tokens = {
  /* ─── Paleta Principal ─── */
  color: {
    // Oro AVENTUS (primary)
    primary: '#C9A962',
    'primary-hover': '#A8863B',
    'primary-light': '#E4C87F',
    'primary-bg': 'rgba(201,169,98,0.12)',
    'primary-ring': 'rgba(201,169,98,0.30)',

    // Secundario (violeta amatista / esencia)
    secondary: '#7A5C9E',
    'secondary-hover': '#62497F',
    'secondary-bg': 'rgba(122,92,158,0.10)',

    // Neutros
    surface: '#FFFFFF',
    'surface-card': '#FFFFFF',
    background: '#FBF8F3',      // marfil claro
    'background-alt': '#F3EDE2', // marfil intenso
    'text-primary': '#1C1713',   // casi negro cálido
    'text-secondary': '#5B5145', // pardo suave
    'text-muted': '#A89E8E',     // piedra
    border: '#E7DFD2',           // beige
    'border-light': '#F5F0E7',  // beige claro

    // POS / Admin (fondos oscuros premium)
    'dark-bg': '#0C0A09',        // negro profundo
    'dark-surface': '#171310',   // negro cálido
    'dark-border': '#2B2218',   // marrón oscuro
    'dark-text': '#F5EFE6',     // marfil
    'dark-text-muted': '#9C8F7C', // pardo claro

    // Semántica
    success: '#16A34A',
    'success-bg': '#DCFCE7',
    warning: '#D97706',
    'warning-bg': '#FEF3C7',
    error: '#DC2626',
    'error-bg': '#FEE2E2',
    info: '#2563EB',
    'info-bg': '#DBEAFE',
  },

  /* ─── Tipografía ─── */
  font: {
    sans: "'Outfit', sans-serif",
    display: "'Playfair Display', serif",
    mono: "'Courier New', monospace",
  },

  /* ─── Tamaños de fuente ─── */
  fontSize: {
    xs: '10px',
    sm: '12px',
    base: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
  },

  /* ─── Espaciado ─── */
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    '2xl': '32px',
    '3xl': '48px',
  },

  /* ─── Bordes ─── */
  radius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    '2xl': '24px',
    full: '9999px',
  },

  /* ─── Sombras ─── */
  shadow: {
    sm: '0 1px 2px rgba(12,10,9,0.05)',
    md: '0 4px 6px rgba(12,10,9,0.07)',
    lg: '0 10px 15px rgba(12,10,9,0.10)',
    xl: '0 20px 25px rgba(12,10,9,0.15)',
    primary: '0 4px 14px rgba(201,169,98,0.30)',
  },
} as const;

export type ColorToken = keyof typeof tokens.color;
export type FontToken = keyof typeof tokens.font;
export type RadiusToken = keyof typeof tokens.radius;
export type ShadowToken = keyof typeof tokens.shadow;