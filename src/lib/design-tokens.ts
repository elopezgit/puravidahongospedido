/**
 * PURA VIDA HONGOS Design System — Tokens
 * 
 * Fuente única de verdad para colores, tipografía, espaciado,
 * sombras y bordes botánicos.
 * 
 * Identidad: Medicina Ancestral & Adaptógenos — Verde Oliva / Sage Pastel / Terracota / Lino Cálido.
 */

export const tokens = {
  /* ─── Paleta Principal ─── */
  color: {
    // Verde Oliva & Sage (Primary)
    primary: '#525B38',
    'primary-hover': '#41492C',
    'primary-light': '#7E8B5E',
    'primary-pastel': '#DCE5D0',
    'primary-bg': 'rgba(82, 91, 56, 0.08)',
    'primary-ring': 'rgba(82, 91, 56, 0.25)',

    // Terracota Cálida (Secondary)
    secondary: '#8E5238',
    'secondary-hover': '#743F29',
    'secondary-light': '#B36D4E',
    'secondary-pastel': '#F4E3D8',
    'secondary-bg': 'rgba(142, 82, 56, 0.08)',

    // Dorado Ámbar / Arena
    accent: '#C49A68',
    'accent-hover': '#AB8252',
    'accent-pastel': '#F6EFE5',
    'accent-bg': 'rgba(196, 154, 104, 0.12)',

    // Neutros Botánicos
    surface: '#FFFFFF',
    'surface-card': '#FFFFFF',
    background: '#F8F6F1',       // Lino marfil cálido
    'background-alt': '#EFECE3',   // Arena suave
    'text-primary': '#1D2218',    // Carbón botánico
    'text-secondary': '#545D4B',  // Musgo pétreo
    'text-muted': '#8A9380',      // Sage apacible
    border: '#E1E6DA',            // Sage pastel claro
    'border-light': '#EFF3EA',

    // POS / Admin (Fondos botánicos oscuros)
    'dark-bg': '#141810',         // Bosque noche
    'dark-surface': '#1C2218',    // Oliva oscuro
    'dark-border': '#2D3726',     // Borde musgo
    'dark-text': '#F5F2EA',      // Marfil
    'dark-text-muted': '#9CA691', // Sage suave

    // Semántica
    success: '#3A7D44',
    'success-bg': '#EAF5EC',
    warning: '#C47C1B',
    'warning-bg': '#FDF4E6',
    error: '#B9382F',
    'error-bg': '#FBECEB',
    info: '#3B6E8C',
    'info-bg': '#EBF3F8',
  },

  /* ─── Tipografía ─── */
  font: {
    sans: "'Outfit', 'Plus Jakarta Sans', sans-serif",
    display: "'Cormorant Garamond', 'Playfair Display', serif",
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
    sm: '0 1px 3px rgba(31,36,24,0.04)',
    md: '0 4px 8px rgba(31,36,24,0.06)',
    lg: '0 10px 20px rgba(31,36,24,0.08)',
    xl: '0 20px 30px rgba(31,36,24,0.12)',
    primary: '0 4px 16px rgba(82,91,56,0.22)',
  },
} as const;

export type ColorToken = keyof typeof tokens.color;
export type FontToken = keyof typeof tokens.font;
export type RadiusToken = keyof typeof tokens.radius;
export type ShadowToken = keyof typeof tokens.shadow;