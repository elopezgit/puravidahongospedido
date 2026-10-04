export interface DefaultCategory {
  id: string;
  name: string;
  icon: string;
  description?: string;
}

export interface DefaultProduct {
  id?: string;
  name: string;
  description: string;
  price: number;
  category_id: string;
  image_url: string;
  code: string;
  sort_order: number;
  is_active: boolean;
  badge?: string;
  profile?: string[];
  benefits?: string[];
}

export const DEFAULT_PURAVIDA_CATEGORIES: DefaultCategory[] = [
  {
    id: "cat-simples",
    name: "Elixires Simples",
    icon: "🍄",
    description: "Extractos puros de hongos medicinales y raíces adaptogénicas maestras"
  },
  {
    id: "cat-blends",
    name: "Blends Sinergia",
    icon: "✨",
    description: "Fórmulas combinadas con triple extracción cíclica para objetivos específicos"
  }
];

export const DEFAULT_PURAVIDA_PRODUCTS: DefaultProduct[] = [
  {
    category_id: "cat-simples",
    name: "Melena de León (Hericium erinaceus)",
    description: "Claridad mental, memoria, neurogénesis y enfoque prolongado. Extracto puro con triple extracción cíclica.",
    price: 22000,
    image_url: "/img/puravidahongos/p-melena-de-leon.webp",
    code: "PVH-001",
    sort_order: 1,
    is_active: true,
    badge: "Más Vendido",
    benefits: ["Claridad mental", "Neurogénesis", "Memoria & Enfoque"]
  },
  {
    category_id: "cat-simples",
    name: "Reishi (Ganoderma lucidum)",
    description: "El hongo de la longevidad y la calma. Regula el sistema nervioso, reduce el cortisol y modula el sistema inmune.",
    price: 22000,
    image_url: "/img/puravidahongos/p-reishi.webp",
    code: "PVH-002",
    sort_order: 2,
    is_active: true,
    badge: "Longevidad",
    benefits: ["Calma el estrés", "Sistema Inmune", "Sueño profundo"]
  },
  {
    category_id: "cat-simples",
    name: "Cordyceps (Cordyceps militaris)",
    description: "Potenciador natural de ATP y oxigenación celular. Vitalidad, resistencia física y energía limpia sin estimulantes.",
    price: 22000,
    image_url: "/img/puravidahongos/p-cordyceps.webp",
    code: "PVH-003",
    sort_order: 3,
    is_active: true,
    badge: "Energía Limpia",
    benefits: ["Energía celular ATP", "Rendimiento deportivo", "Oxigenación"]
  },
  {
    category_id: "cat-simples",
    name: "Ashwagandha (Withania somnifera)",
    description: "Cuando cuesta bajar revoluciones. Regula la respuesta al estrés, equilibra las emociones y favorece el descanso.",
    price: 22000,
    image_url: "/img/puravidahongos/p-ashwagandha.webp",
    code: "PVH-004",
    sort_order: 4,
    is_active: true,
    badge: "Antiestrés",
    benefits: ["Equilibrio emocional", "Regula el cortisol", "Descanso"]
  },
  {
    category_id: "cat-simples",
    name: "Rhodiola (Rhodiola rosea)",
    description: "La raíz de la resistencia física y emocional. Ideal para fatiga crónica, estrés prolongado y estado de ánimo bajo.",
    price: 22000,
    image_url: "/img/puravidahongos/p-rhodiola.webp",
    code: "PVH-005",
    sort_order: 5,
    is_active: true,
    badge: "Vitalidad",
    benefits: ["Resistencia física", "Ánimo positivo", "Antifatiga"]
  },
  {
    category_id: "cat-simples",
    name: "Champiñón del Sol (Agaricus blazei)",
    description: "El sol en forma de hongo. Inmunidad profunda, protección celular y soporte para procesos oncológicos y crónicos.",
    price: 22000,
    image_url: "/img/puravidahongos/p-champignon-del-sol.webp",
    code: "PVH-006",
    sort_order: 6,
    is_active: true,
    badge: "Inmunidad",
    benefits: ["Inmunidad comprometida", "Equilibrio celular", "Regeneración"]
  },
  {
    category_id: "cat-simples",
    name: "Cola de Pavo (Trametes versicolor)",
    description: "Gran modulador inmunológico y prebiótico potente. Refuerza la barrera intestinal y las defensas del organismo.",
    price: 22000,
    image_url: "/img/puravidahongos/p-cola-de-pavo.webp",
    code: "PVH-007",
    sort_order: 7,
    is_active: true,
    benefits: ["Microbiota intestinal", "Polisacáridos PSP/PSK", "Defensas"]
  },
  {
    category_id: "cat-simples",
    name: "Tremella (Tremella fuciformis)",
    description: "El ácido hialurónico del reino fungi. Hidratación celular profunda, soporte de colágeno natural y luminosidad cutánea.",
    price: 22000,
    image_url: "/img/puravidahongos/p-tremella.webp",
    code: "PVH-008",
    sort_order: 8,
    is_active: true,
    benefits: ["Hidratación dérmica", "Colágeno natural", "Antiage botánico"]
  },
  {
    category_id: "cat-simples",
    name: "Maitake (Grifola frondosa)",
    description: "Soporte metabólico y glucémico. Ayuda a regular la sensibilidad a la insulina y el equilibrio lípido.",
    price: 22000,
    image_url: "/img/puravidahongos/p-maitake.webp",
    code: "PVH-009",
    sort_order: 9,
    is_active: true,
    benefits: ["Metabolismo glucémico", "Equilibrio lípido", "Salud cardiovascular"]
  },
  {
    category_id: "cat-simples",
    name: "Shiitake (Lentinula edodes)",
    description: "Longevidad celular, soporte cardiovascular y protección antioxidante integral.",
    price: 22000,
    image_url: "/img/puravidahongos/p-shiitake.webp",
    code: "PVH-010",
    sort_order: 10,
    is_active: true,
    benefits: ["Salud vascular", "Antioxidante", "Vitalidad"]
  },
  {
    category_id: "cat-blends",
    name: "Blend Inmuno Balance",
    description: "Cuando el cuerpo necesita un escudo real. Combina Reishi, Cola de Pavo y Champiñón del Sol para activar defensas naturales.",
    price: 25000,
    image_url: "/img/puravidahongos/p-inmuno-balance.webp",
    code: "PVH-101",
    sort_order: 11,
    is_active: true,
    badge: "Fórmula Exclusiva",
    benefits: ["Escudo inmunológico", "Cambios de estación", "Energía vital"]
  },
  {
    category_id: "cat-blends",
    name: "Blend Descanso Profundo",
    description: "Reishi + Ashwagandha + Melatonina botánica. Favorece la relajación neuromuscular y un ciclo de sueño reparador.",
    price: 25000,
    image_url: "/img/puravidahongos/p-descanso-profundo.webp",
    code: "PVH-102",
    sort_order: 12,
    is_active: true,
    badge: "Top Descanso",
    benefits: ["Sueño REM reparador", "Sin somnolencia diurna", "Baja revoluciones"]
  },
  {
    category_id: "cat-blends",
    name: "Blend Energía & Enfoque",
    description: "Cordyceps + Melena de León + Rhodiola. Máximo rendimiento cognitivo y físico sostenido en jornadas intensas.",
    price: 25000,
    image_url: "/img/puravidahongos/p-energia-y-enfoque.webp",
    code: "PVH-103",
    sort_order: 13,
    is_active: true,
    badge: "Sinergia Total",
    benefits: ["Enfoque prolongado", "Oxigenación", "Resistencia"]
  },
  {
    category_id: "cat-blends",
    name: "Blend Cognitivo & Antiestrés",
    description: "Melena de León + Ashwagandha. Enfoque lúcido y sereno, disipando la niebla mental y la sobrecarga emocional.",
    price: 25000,
    image_url: "/img/puravidahongos/p-cognitivo-y-antiestres.webp",
    code: "PVH-104",
    sort_order: 14,
    is_active: true,
    benefits: ["Claridad sin ansiedad", "Memoria activa", "Calma mental"]
  }
];

export function filterTenantCategories(_slug: string | undefined, cats: any[]): any[] {
  if (cats && Array.isArray(cats) && cats.length > 0) {
    return cats;
  }
  return DEFAULT_PURAVIDA_CATEGORIES;
}

export function filterTenantProducts(_slug: string | undefined, prods: any[]): any[] {
  if (prods && Array.isArray(prods) && prods.length > 0) {
    return prods;
  }
  return DEFAULT_PURAVIDA_PRODUCTS;
}

export function filterTenantOrders(_slug: string | undefined, orders: any[]): any[] {
  return Array.isArray(orders) ? orders : [];
}

export function filterTenantBanners(_slug: string | undefined, banners: any[]): any[] {
  return Array.isArray(banners) ? banners : [];
}