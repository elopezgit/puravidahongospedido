/* =========================================================================
   tenantTheme — Presentación por tenant (PURA VIDA HONGOS)
   ========================================================================= */

export type TenantSplash = {
  tagline: string
  title: string
  subtitle: string
  chips: string[]
  cta: string
}

export type TenantBanner = {
  id: string
  image_url: string
  title?: string
  subtitle?: string
}

export type TenantTheme = {
  /** Nombre corto para badges y titularidad. */
  brand: string
  /** Bajada junto al logo del header. */
  descriptor: string
  /** Claim/badge del splash. */
  claim: string
  searchPlaceholder: string
  categoryImages: Record<string, string>
  fallbackCategoryImage: string
  fallbackProductImage: string
  keywords: Record<string, string[]>
  showGenderFilter: boolean
  showBrandFilter: boolean
  splash: TenantSplash
  fallbackBanners: TenantBanner[]
  /** Línea superior del modal de producto. */
  modalEyebrow: string
  modalEmptyDescription: string
  cartEmptyText: string
  cartCtaHint: string
}

const PURAVIDAHONGOS: TenantTheme = {
  brand: 'HONGOS PURA VIDA',
  descriptor: 'Medicina Ancestral & Adaptógenos',
  claim: 'MEDICINA ANCESTRAL, ACCESIBLE Y LLENA DE VIDA 🌿',
  searchPlaceholder: 'Buscar elixires (Melena de León, Reishi, Ashwagandha, Blends)...',
  categoryImages: {
    'elixires simples': '/img/puravidahongos/p-melena-de-leon.webp',
    'blends': '/img/puravidahongos/p-descanso-profundo.webp',
    'blends sinergia': '/img/puravidahongos/p-inmuno-balance.webp',
    'adaptogenos': '/img/puravidahongos/p-ashwagandha.webp',
    'hongos': '/img/puravidahongos/p-reishi.webp',
    'todos': '/img/puravidahongos/p-cordyceps.webp',
  },
  fallbackCategoryImage: '/img/logo/puravidahongos_logo.svg',
  fallbackProductImage: '/img/logo/puravidahongos_logo.svg',
  keywords: {
    'elixires simples': ['Claridad', 'Memoria', 'Inmunidad', 'Calma', 'Vitalidad', 'Descanso'],
    'blends': ['Inmuno Balance', 'Descanso Profundo', 'Energía & Enfoque', 'Antiestrés'],
    'blends sinergia': ['Inmuno', 'Descanso', 'Enfoque', 'Rendimiento'],
    'todas': ['Claridad', 'Memoria', 'Inmunidad', 'Calma', 'Vitalidad', 'Descanso', 'Enfoque', 'Estrés'],
  },
  showGenderFilter: false,
  showBrandFilter: false,
  splash: {
    tagline: 'MEDICINA ANCESTRAL · TRIPLE EXTRACCIÓN',
    title: 'HONGOS PURA VIDA',
    subtitle: 'ELIXIRES DE HONGOS MEDICINALES & ADAPTÓGENOS PUROS',
    chips: [
      '🌿 100% Extracto Puro',
      '🔬 Cavitación Acústica',
      '✨ Sin Estimulantes Artificiales',
      '🚚 Envíos a todo el país'
    ],
    cta: 'EXPLORAR CATÁLOGO',
  },
  fallbackBanners: [
    { id: '1', image_url: '/img/puravidahongos/banner-melena.jpg', title: 'MELENA DE LEÓN · NEUROGÉNESIS', subtitle: 'Claridad mental, memoria y regeneración neuronal · Extracto triple' },
    { id: '2', image_url: '/img/puravidahongos/banner-reishi.jpg', title: 'REISHI · PAZ & LONGEVIDAD', subtitle: 'Calma adaptógena, modulación inmune y sueño zen reparador' },
    { id: '3', image_url: '/img/puravidahongos/banner-cordyceps.jpg', title: 'CORDYCEPS · ENERGÍA & VITALIDAD', subtitle: 'Oxigenación celular y bio-síntesis de energía ATP sin estimulantes' },
    { id: '4', image_url: '/img/puravidahongos/banner-adaptogenos.jpg', title: 'SINERGIA ADAPTÓGENA PURA', subtitle: 'Extractos botánicos puros del bosque con máxima biodisponibilidad' },
  ],
  modalEyebrow: 'HONGOS PURA VIDA · BOTICA ANCESTRAL',
  modalEmptyDescription: 'Elixir de hongos medicinales y adaptógenos de alta pureza. Gotero de 50 ml con triple extracción cíclica.',
  cartEmptyText: 'Agregá tus elixires y blends botánicos',
  cartCtaHint: 'Armás tu pedido acá y lo confirmamos por WhatsApp',
}

const THEMES: Record<string, TenantTheme> = {
  puravidahongos: PURAVIDAHONGOS,
  puravida: PURAVIDAHONGOS,
  default: PURAVIDAHONGOS,
}

/** Tema genérico construido a partir de los datos de la empresa. */
function buildGenericTheme(slug: string, empresaName?: string | null): TenantTheme {
  const name = (empresaName || slug || 'Hongos Pura Vida').trim()
  return {
    ...PURAVIDAHONGOS,
    brand: name.toUpperCase(),
    descriptor: 'Medicina Ancestral & Adaptógenos',
    claim: 'MEDICINA ANCESTRAL, ACCESIBLE Y LLENA DE VIDA',
    searchPlaceholder: 'Buscar elixires, hongos, blends...',
    splash: {
      ...PURAVIDAHONGOS.splash,
      title: name.toUpperCase(),
    },
    modalEyebrow: `${name.toUpperCase()} · OFICIAL`,
  }
}

export function getTenantTheme(slug?: string | null, empresaName?: string | null): TenantTheme {
  const key = (slug || '').trim().toLowerCase()
  return THEMES[key] ?? buildGenericTheme(key, empresaName)
}

/** Normaliza un nombre de categoría/tags para lookup estable. */
export function normalizeThemeKey(value: string): string {
  return (value || '')
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}