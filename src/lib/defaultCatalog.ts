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
  /* ─── Atributos de perfumería ─── */
  gender?: 'Hombre' | 'Mujer' | 'Unisex';
  family?: string;      // Familia olfativa: Cítrico, Amaderado, Oriental, Floral, Fougère, Dulce, Oud
  format?: string;      // EDP / EDT / Parfum / Tester / Esencia / Decant
  volume?: string;      // Ej: 100ml, 80ml, 50ml
  duration?: 'Corta' | 'Media' | 'Larga' | 'Muy Larga';
  sillage?: 'Íntimo' | 'Moderado' | 'Fuerte' | 'Envolvente';
  topNotes?: string[];  // Notas de salida
  heartNotes?: string[]; // Notas de cuerpo
  baseNotes?: string[]; // Notas de fondo
  season?: string;
  occasion?: string;
}

export const DEFAULT_AVENTUS_CATEGORIES: DefaultCategory[] = [
  {
    "id": "cat-arabes",
    "name": "Perfumes Árabes",
    "icon": "🕌",
    "description": "Fragancias árabes premium"
  },
  {
    "id": "cat-inspiraciones",
    "name": "Inspiraciones & Extractos",
    "icon": "💎",
    "description": "Esencias, Midoré, Only You y Plata"
  },
  {
    "id": "cat-decants",
    "name": "Miniaturas & Decants",
    "icon": "🍾",
    "description": "Perfumes de bolsillo y muestras"
  },
  {
    "id": "cat-desodorantes",
    "name": "Desodorantes & Splash",
    "icon": "💨",
    "description": "Cuidado personal"
  },
  {
    "id": "cat-pelo",
    "name": "Cuidado Capilar",
    "icon": "💆",
    "description": "Productos para el cabello"
  }
];

  

export const DEFAULT_AVENTUS_PRODUCTS: DefaultProduct[] = [
  {
    "category_id": "cat-arabes",
    "name": "RASASI — HAWAS ICE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0001",
    "sort_order": 1,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "RASASI — HAWAS PINK",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0002",
    "sort_order": 2,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "RASASI — HAWAS BLACK",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0003",
    "sort_order": 3,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "RASASI — HAWAS VIPER",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0004",
    "sort_order": 4,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "RASASI — HAWAS ECLAT",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0005",
    "sort_order": 5,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "RASASI — HAWAS LONDON",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0006",
    "sort_order": 6,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "RASASI — HAWAS ATLANTIS",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0007",
    "sort_order": 7,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "RASASI — HAWAS MALIBÚ",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0008",
    "sort_order": 8,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "AFNAN — 9PM CLÁSICO",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0009",
    "sort_order": 9,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "AFNAN — 9PM ELIXIR",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0010",
    "sort_order": 10,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "AFNAN — 9 PM REBEL",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0011",
    "sort_order": 11,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "AFNAN — 9PM NIGHT OUD",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 45000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0012",
    "sort_order": 12,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "AFNAN — 9AM DIVE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0013",
    "sort_order": 13,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "AFNAN — 9AM POUR FEMME",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0014",
    "sort_order": 14,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "AFNAN — 9AM  POUR FEMME VIOLET",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0015",
    "sort_order": 15,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "AFNAN — SUPREMACY",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 45000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0016",
    "sort_order": 16,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "AFNAN — HISTORIC OLMEDA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 50000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0017",
    "sort_order": 17,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "AFNAN — HISTORIC DORIA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 50000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0018",
    "sort_order": 18,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "ARMAF — CLUB DE NUIT INTENSE MAN",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0019",
    "sort_order": 19,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "ARMAF — CLUB DE NUIT SILLAGE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0020",
    "sort_order": 20,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "ARMAF — CLUB DE NUIT ICONIC",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0021",
    "sort_order": 21,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "ARMAF — CLUB DE NUIT UNTOLD",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0022",
    "sort_order": 22,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "ARMAF — CLUB DE NUIT MALEKA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0023",
    "sort_order": 23,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "ARMAF — CLUB DE NUIT WOMEN",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0024",
    "sort_order": 24,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "ARMAF — MISS CHIC",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0025",
    "sort_order": 25,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "ARMAF — MYSTIQUE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0026",
    "sort_order": 26,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "ARMAF-ODYSSEY — MANDARIN SKY",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0027",
    "sort_order": 27,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "ARMAF-ODYSSEY — BAHAMAS",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0028",
    "sort_order": 28,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "ARMAF-ODYSSEY — CANDEE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0029",
    "sort_order": 29,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "ARMAF-ODYSSEY — MANDARÍN SKY ELIXIR",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0030",
    "sort_order": 30,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "ARMAF-ODYSSEY — TOFFEE COFFEE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0031",
    "sort_order": 31,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "ARMAF-ODYSSEY — AQUA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0032",
    "sort_order": 32,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "ARMAF-ODYSSEY — ARTISTO",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0033",
    "sort_order": 33,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "ARMAF-ODYSSEY — BEACHA DAY",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0034",
    "sort_order": 34,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "ARMAF-ODYSSEY — MARSHMALLOW",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0035",
    "sort_order": 35,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "ARMAF-ODYSSEY — MANDARÍN SKY VINTAGE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0036",
    "sort_order": 36,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "ARMAF-ODYSSEY — DUBAI CHOCOLAT",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0037",
    "sort_order": 37,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "ASDAAF — RANEEN",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 45000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0038",
    "sort_order": 38,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "RUE BROCA — HOOKED AZURE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0039",
    "sort_order": 39,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "RUE BROCA — HOOKED POUR HOMME",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 0,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0040",
    "sort_order": 40,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "RUE BROCA — HOOKED POUR FEMME",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 0,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0041",
    "sort_order": 41,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "LATTAFA — YARA PINK",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0042",
    "sort_order": 42,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "LATTAFA — YARA CANDY",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0043",
    "sort_order": 43,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "LATTAFA — YARA MOI",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0044",
    "sort_order": 44,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "LATTAFA — YARA TOUS",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0045",
    "sort_order": 45,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "LATTAFA — ASAD",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0046",
    "sort_order": 46,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "LATTAFA — ASAD ELIXIR",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0047",
    "sort_order": 47,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "LATTAFA — ASAD BOURBON",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0048",
    "sort_order": 48,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "LATTAFA — MUSAMAM WHITE INTENSE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 50000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0049",
    "sort_order": 49,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "LATTAFA — MUSAMAM DORADO",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 50000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0050",
    "sort_order": 50,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "LATTAFA — FAKHAR BLACK SILVER",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0051",
    "sort_order": 51,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "LATTAFA — FAKHAR GOLD EXTRAIT",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0052",
    "sort_order": 52,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "LATTAFA — HONOR AND GLORY",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0053",
    "sort_order": 53,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "LATTAFA — OUD FOR GLORY",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0054",
    "sort_order": 54,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "LATTAFA — SUBLIME",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0055",
    "sort_order": 55,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "LATTAFA — KHAMARAH CLÁSICO",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0056",
    "sort_order": 56,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "LATTAFA — KHAMRAH DUKHAN",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0057",
    "sort_order": 57,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "LATTAFA — KHAMRAH DUKHAN QAWA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0058",
    "sort_order": 58,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "LATTAFA — ART OF UNIVERSE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 60000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0059",
    "sort_order": 59,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "LATTAFA — GIVE GOURMAND COOKIE GRAVE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 50000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0060",
    "sort_order": 60,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "LATTAFA — GIVE GOURMAND WHIPPED PLEASURE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 50000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0061",
    "sort_order": 61,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "LATTAFA — QAED AL FURSAN BLANCO",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0062",
    "sort_order": 62,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "LATTAFA — QAED AL FURSAN NEGRO",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0063",
    "sort_order": 63,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "LATTAFA — QAED AL FURSAN DORADO",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0064",
    "sort_order": 64,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "LATTAFA — QAAED",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0065",
    "sort_order": 65,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "LATTAFA — QAAED AL SHABAAB",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0066",
    "sort_order": 66,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "LATTAFA — RAMZ DORADO",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0067",
    "sort_order": 67,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "LATTAFA — RAMZ PLATEADO",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0068",
    "sort_order": 68,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "LATTAFA — ISHQ AL SHUYUKH SILVER",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0069",
    "sort_order": 69,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "LATTAFA — ISHQ AL SHUYUKH GOLD",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0070",
    "sort_order": 70,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "LATTAFA — ANGHAM SECOND SONG",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 40000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0071",
    "sort_order": 71,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "FRENCH AVENUE — VENENO NEGRO",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 60000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0072",
    "sort_order": 72,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "FRENCH AVENUE — VENENO BLANCO",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 60000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0073",
    "sort_order": 73,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "FRENCH AVENUE — VENENO SCARLET",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 60000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0074",
    "sort_order": 74,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "FRENCH AVENUE — VULCAN RAIE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 45000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0075",
    "sort_order": 75,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "FRENCH AVENUE — VULCAN FEU",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 45000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0076",
    "sort_order": 76,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "FRENCH AVENUE — CHAOS",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 60000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0077",
    "sort_order": 77,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "AL HARAMAIN — HARAMAIN AMBER OUD BLEU",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 60000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0078",
    "sort_order": 78,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "AL HARAMAIN — HARAMAIN AMBER OUD RUBY EDITION",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 60000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0079",
    "sort_order": 79,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "AL HARAMAIN — HARAMAIN AMBER OUD ULTRA VIOLET",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 60000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0080",
    "sort_order": 80,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "AL HARAMAIN — HARAMAIN AMBER OUD PRIVATE EDITION",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 60000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0081",
    "sort_order": 81,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "AL HARAMAIN — HARAMAIN AMBER OUD WHITE EDITION",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 60000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0082",
    "sort_order": 82,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "AL HARAMAIN — HARAMAIN AMBER OUD SPORT EDITION",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 60000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0083",
    "sort_order": 83,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "AL HARAMAIN — HARAMAIN AMBER OUD GOLD EDITION",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 60000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0084",
    "sort_order": 84,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "AL HARAMAIN — HARAMAIN GOLD OUDH",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 60000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0085",
    "sort_order": 85,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "AL HARAMAIN — HARAMAIN GOLD SAPPHIRE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 60000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0086",
    "sort_order": 86,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "ARABES DE NICHO — KAYALI YUM BONJEE MARSHMALLOW",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 35000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0087",
    "sort_order": 87,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "ARABES DE NICHO — KAYALI MAVI IN A BOTTLE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 35000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0088",
    "sort_order": 88,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "ARABES DE NICHO — KAYALI VANILLA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 35000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0089",
    "sort_order": 89,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "ARABES DE NICHO — KAYALI FLEUR MAJESTY",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 35000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0090",
    "sort_order": 90,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "BHARARA — BHARARA ROSE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 60000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0091",
    "sort_order": 91,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "BHARARA — BHARARA KING",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 60000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0092",
    "sort_order": 92,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "BHARARA — BHARARA SOLEIL",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 60000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0093",
    "sort_order": 93,
    "is_active": true
  },
  {
    "category_id": "cat-arabes",
    "name": "BHARARA — BHARARA GOLD EDITION",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 60000,
    "image_url": "/img/Categories/arabes.jpg",
    "code": "AVN-0094",
    "sort_order": 94,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "CHERRY LUXE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 24000,
    "image_url": "/img/Categories/tubitos.jpg",
    "code": "AVN-0095",
    "sort_order": 95,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "BEARY LOVE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 24000,
    "image_url": "/img/Categories/tubitos.jpg",
    "code": "AVN-0096",
    "sort_order": 96,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "PACIFIDREAM",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 24000,
    "image_url": "/img/Categories/tubitos.jpg",
    "code": "AVN-0097",
    "sort_order": 97,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "TITANS SPLASH",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 24000,
    "image_url": "/img/Categories/tubitos.jpg",
    "code": "AVN-0098",
    "sort_order": 98,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "PINK SUGAR",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 24000,
    "image_url": "/img/Categories/tubitos.jpg",
    "code": "AVN-0099",
    "sort_order": 99,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "COTTON CANDY",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 24000,
    "image_url": "/img/Categories/tubitos.jpg",
    "code": "AVN-0100",
    "sort_order": 100,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "BERRY BLAST",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 24000,
    "image_url": "/img/Categories/tubitos.jpg",
    "code": "AVN-0101",
    "sort_order": 101,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "SWEET CARAMEL",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 24000,
    "image_url": "/img/Categories/tubitos.jpg",
    "code": "AVN-0102",
    "sort_order": 102,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "UNICORN VANILLA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 24000,
    "image_url": "/img/Categories/tubitos.jpg",
    "code": "AVN-0103",
    "sort_order": 103,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "BUBBLE GUMM",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 24000,
    "image_url": "/img/Categories/tubitos.jpg",
    "code": "AVN-0104",
    "sort_order": 104,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "CHOCOLATE FUDGE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 24000,
    "image_url": "/img/Categories/tubitos.jpg",
    "code": "AVN-0105",
    "sort_order": 105,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "COOKIES DREAM",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 24000,
    "image_url": "/img/Categories/tubitos.jpg",
    "code": "AVN-0106",
    "sort_order": 106,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "CAROLINA HERRERA 212 VIP",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0107",
    "sort_order": 107,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "CAROLINA HERRERA LA BOMBA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0108",
    "sort_order": 108,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "CAROLINA HERRERA 212 VIP ROSE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0109",
    "sort_order": 109,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "CAROLINA HERRERA 212 HÉROES RED",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0110",
    "sort_order": 110,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "CAROLINA HERRERA 212 HÉROES ROSE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0111",
    "sort_order": 111,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "BVLGARI OMNIA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0112",
    "sort_order": 112,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "PACO RABANNE OLYMPEA BLOSSOM",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0113",
    "sort_order": 113,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "PACO RABANNE OLYMPEA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0114",
    "sort_order": 114,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "YVES SAINT LAURENT BLACK OPIUM",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0115",
    "sort_order": 115,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "VALENTINO DONNA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0116",
    "sort_order": 116,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "BRITNEY SPEARS RAINBOW FANTASY",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0117",
    "sort_order": 117,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "TOY GIRL",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0118",
    "sort_order": 118,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "GOOD GIRL",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0119",
    "sort_order": 119,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "LADY MILLION",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0120",
    "sort_order": 120,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "ONE MILLION",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0121",
    "sort_order": 121,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "ONE MILLION PRIVE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0122",
    "sort_order": 122,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "PACO RABANNE INVICTUS",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0123",
    "sort_order": 123,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "PACO RABANNE INVICTUS VICTORY",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0124",
    "sort_order": 124,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "PACO RABANNE INVICTUS VICTORY ELIXIR",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0125",
    "sort_order": 125,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "PACO RABANNE INVICTUS INTENSE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0126",
    "sort_order": 126,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "PACO RABANNE INVICTUS LEGEND",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0127",
    "sort_order": 127,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "PACO RABANNE EU DE PARFUM",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0128",
    "sort_order": 128,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "PACO RABANNE PHANTOM GOLD",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0129",
    "sort_order": 129,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "PACO RABANNE PHANTOM INTENSE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0130",
    "sort_order": 130,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "PACO RABANNE PHANTOM ELIXIR",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0131",
    "sort_order": 131,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "PACO RABANNE PHANTOM CLÁSICO",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0132",
    "sort_order": 132,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "PACO RABANNE PHANTOM",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0133",
    "sort_order": 133,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "PACO RABANNE PHANTOM PARFUM",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0134",
    "sort_order": 134,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "CALVIN KLEIN EUPHORIA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0135",
    "sort_order": 135,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "MOSCHINO TOY 2",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0136",
    "sort_order": 136,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "AZZARO WANTED BY NIGHT",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0137",
    "sort_order": 137,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "AZZARO WANTED  EAU DE TOILETTE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0138",
    "sort_order": 138,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "AZZARO THE MOST WANTED PARFUM",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0139",
    "sort_order": 139,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "AZZARO THE MOST WANTED INTENSE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0140",
    "sort_order": 140,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "AZZARO WANTED",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0141",
    "sort_order": 141,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "JEAN PAUL GAULTIER LE BEAU GARDEN  PARADISE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0142",
    "sort_order": 142,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "JEAN PAUL GAULTIER LE MALE  ELIXIR",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0143",
    "sort_order": 143,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "JEAN PAUL GAULTIER LE  MALE LE  PARFUM",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0144",
    "sort_order": 144,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "JEAN PAUL GAULTIER LE MALE ULTRA ELIXIR",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0145",
    "sort_order": 145,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "JEAN PAUL GAULTIER LE MALE LOVER",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0146",
    "sort_order": 146,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "JEAN PAUL GAULTIER LE BEAU",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0147",
    "sort_order": 147,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "JEAN PAUL GAULTIER LE  MALE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 30000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0148",
    "sort_order": 148,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "BILLIE EILISH — EILISH N1",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 45000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0149",
    "sort_order": 149,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "BILLIE EILISH — EILISH N2",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 45000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0150",
    "sort_order": 150,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "BILLIE EILISH — EILISH N3",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 45000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0151",
    "sort_order": 151,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "PARIS CÓRNER — MAWJ APPLETING",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 45000,
    "image_url": "/img/Categories/onlyyou.jpg",
    "code": "AVN-0152",
    "sort_order": 152,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "LATTAFA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0153",
    "sort_order": 153,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "RAEES",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0154",
    "sort_order": 154,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "AWAAN",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0155",
    "sort_order": 155,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "ANA ABIYEDH CLÁSICO",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0156",
    "sort_order": 156,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "ANA ABIYEDH ROUGE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0157",
    "sort_order": 157,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "YARA MOI",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0158",
    "sort_order": 158,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "YARA TOUS",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0159",
    "sort_order": 159,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "YARA PINK",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0160",
    "sort_order": 160,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "YARA CANDY",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0161",
    "sort_order": 161,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "NOBLE BLUSH",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0162",
    "sort_order": 162,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "VICTORIA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0163",
    "sort_order": 163,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "MUSAMAM WHITE  INTENSE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0164",
    "sort_order": 164,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "FAKHAR ROSE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0165",
    "sort_order": 165,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "ANGHAM SECOND SONG",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0166",
    "sort_order": 166,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "AMEERAT AL ARAB PRIVE ROSE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0167",
    "sort_order": 167,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "TERIAQ",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0168",
    "sort_order": 168,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "MAYAR NATURAL INTENSE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0169",
    "sort_order": 169,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "HAYAATI  FLORENCE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0170",
    "sort_order": 170,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "SUBLIME",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0171",
    "sort_order": 171,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "ECLAIRE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0172",
    "sort_order": 172,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "HONOR AND GLORY",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0173",
    "sort_order": 173,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "AMETHYST",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0174",
    "sort_order": 174,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "AMEERAT AL ARAB PRINCESS ARABIA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0175",
    "sort_order": 175,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "ASAD CLÁSICO",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0176",
    "sort_order": 176,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "ASAD ZANZÍBAR",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0177",
    "sort_order": 177,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "ASAD BOURBON",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0178",
    "sort_order": 178,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "QAED AL FURSAN NEGRO",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0179",
    "sort_order": 179,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "HAYAATI AL MALEKY",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0180",
    "sort_order": 180,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "HAYAATI CLÁSICO",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0181",
    "sort_order": 181,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "OUD FOR GLORY",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0182",
    "sort_order": 182,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "KHAMRAH CLÁSICO",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0183",
    "sort_order": 183,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "KHAMRAH QAWA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0184",
    "sort_order": 184,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "ARMAF",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0185",
    "sort_order": 185,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "CLUB DE NUIT WOMEN",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0186",
    "sort_order": 186,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "CLUB DE NUIT UNTOLD",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0187",
    "sort_order": 187,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "CLUB DE NUIT INTENSE MAN",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0188",
    "sort_order": 188,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "ODYSSEY — WHITE HOMME",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0189",
    "sort_order": 189,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "ODYSSEY — HOMME",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0190",
    "sort_order": 190,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "ODYSSEY — AOUD",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0191",
    "sort_order": 191,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "ODYSSEY — LIMONI",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0192",
    "sort_order": 192,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "ODYSSEY — SPECTRA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0193",
    "sort_order": 193,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "ODYSSEY — AQUA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0194",
    "sort_order": 194,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "ODYSSEY — CANDEE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0195",
    "sort_order": 195,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "ODYSSEY — MANDARÍN SKY",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0196",
    "sort_order": 196,
    "is_active": true
  },
  {
    "category_id": "cat-desodorantes",
    "name": "ODYSSEY — MANDARÍN SKY ELIXIR",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/desodorantes.jpg",
    "code": "AVN-0197",
    "sort_order": 197,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "AMORE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0198",
    "sort_order": 198,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "ANGEL Y DIABLO",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0199",
    "sort_order": 199,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "DYD LIGHT BLUE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0200",
    "sort_order": 200,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "RICH MIDORE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0201",
    "sort_order": 201,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "GOOD BLACK",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0202",
    "sort_order": 202,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "PARIS MILTON",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0203",
    "sort_order": 203,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "N5 MIDORE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0204",
    "sort_order": 204,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "FLOWER AIR MIDORE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0205",
    "sort_order": 205,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "ODANZA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0206",
    "sort_order": 206,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "MH MIDORE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0207",
    "sort_order": 207,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "LADY MILLION",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0208",
    "sort_order": 208,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "CHANCE MIDORE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0209",
    "sort_order": 209,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "OLIMPEAS",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0210",
    "sort_order": 210,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "LA VIDA ES BELLA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0211",
    "sort_order": 211,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "213 MIDORE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0212",
    "sort_order": 212,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "213 SEX MIDORE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0213",
    "sort_order": 213,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "HELLOWOMAN",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0214",
    "sort_order": 214,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "SUPERVIOLETA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0215",
    "sort_order": 215,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "COOL MIDORE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0216",
    "sort_order": 216,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "213 HEROS MEN",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0217",
    "sort_order": 217,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "213 SEX MEN",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0218",
    "sort_order": 218,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "213 CLASSIC MEN",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0219",
    "sort_order": 219,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "213 VIP MEN",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0220",
    "sort_order": 220,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "MIDORE MEN",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0221",
    "sort_order": 221,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "BLACK MIDORE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0222",
    "sort_order": 222,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "FAHRENHEIT",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0223",
    "sort_order": 223,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "XS MIDORE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0224",
    "sort_order": 224,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "ARMANI CODE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0225",
    "sort_order": 225,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "ONE MIDORE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0226",
    "sort_order": 226,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "SALVAGE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0227",
    "sort_order": 227,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "MIDORE KZO AIR",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0228",
    "sort_order": 228,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "CLASSIC MIDORE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0229",
    "sort_order": 229,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "BLUE MIDORE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0230",
    "sort_order": 230,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "RED MIDORE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0231",
    "sort_order": 231,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "MIDORE HERRERO",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0232",
    "sort_order": 232,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "AQUA DI MIDORE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0233",
    "sort_order": 233,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "213 HEROS FEM",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0234",
    "sort_order": 234,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "MIDORE IRRESISTIBLE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0235",
    "sort_order": 235,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "VERSACE CRYSTAL",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0236",
    "sort_order": 236,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "RALF",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0237",
    "sort_order": 237,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "MIDORE GIRL",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0238",
    "sort_order": 238,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "THE FORD",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0239",
    "sort_order": 239,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "BROSS",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0240",
    "sort_order": 240,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "COCODRILE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0241",
    "sort_order": 241,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "MH MEN",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0242",
    "sort_order": 242,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "AQUA DI MIDORE FOR MEN",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0243",
    "sort_order": 243,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "SPORT MIDORE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/midore.jpg",
    "code": "AVN-0244",
    "sort_order": 244,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "LA VIDA ES BELLA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/plata.jpg",
    "code": "AVN-0245",
    "sort_order": 245,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "SI GIORGIO ARMANI",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/plata.jpg",
    "code": "AVN-0246",
    "sort_order": 246,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "ISSEY MIYAKE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/plata.jpg",
    "code": "AVN-0247",
    "sort_order": 247,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "OLIMPEA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/plata.jpg",
    "code": "AVN-0248",
    "sort_order": 248,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "PURÉ XS",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/plata.jpg",
    "code": "AVN-0249",
    "sort_order": 249,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "JEAN PAUL GAULTIER DIVINE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/plata.jpg",
    "code": "AVN-0250",
    "sort_order": 250,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "DIOR ADDICT",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/plata.jpg",
    "code": "AVN-0251",
    "sort_order": 251,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "MOSCHINO BUBBLE GUMM",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/plata.jpg",
    "code": "AVN-0252",
    "sort_order": 252,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "LUNA NIÑA RICCI",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/plata.jpg",
    "code": "AVN-0253",
    "sort_order": 253,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "VERSACE CRYSTAL",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/miniaturas.jpg",
    "code": "AVN-0254",
    "sort_order": 254,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "POISON",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/miniaturas.jpg",
    "code": "AVN-0255",
    "sort_order": 255,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "I DONT",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/miniaturas.jpg",
    "code": "AVN-0256",
    "sort_order": 256,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "TOM FORD",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/miniaturas.jpg",
    "code": "AVN-0257",
    "sort_order": 257,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "SI ARMANI",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/miniaturas.jpg",
    "code": "AVN-0258",
    "sort_order": 258,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "SI PASIÓN ARMANI",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/miniaturas.jpg",
    "code": "AVN-0259",
    "sort_order": 259,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "FAME SILVER",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/miniaturas.jpg",
    "code": "AVN-0260",
    "sort_order": 260,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "FAME GOLD",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/miniaturas.jpg",
    "code": "AVN-0261",
    "sort_order": 261,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "FAME ROSE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/miniaturas.jpg",
    "code": "AVN-0262",
    "sort_order": 262,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "JOY",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/miniaturas.jpg",
    "code": "AVN-0263",
    "sort_order": 263,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "OLYMPEA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/miniaturas.jpg",
    "code": "AVN-0264",
    "sort_order": 264,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "TOM FORD BOSS",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/miniaturas.jpg",
    "code": "AVN-0265",
    "sort_order": 265,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "VERSACE EROS",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 10000,
    "image_url": "/img/Categories/miniaturas.jpg",
    "code": "AVN-0266",
    "sort_order": 266,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "YARA PINK",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/miniaturas.jpg",
    "code": "AVN-0267",
    "sort_order": 267,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "ERBA PURA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/miniaturas.jpg",
    "code": "AVN-0268",
    "sort_order": 268,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "ASAD CLÁSICO",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/miniaturas.jpg",
    "code": "AVN-0269",
    "sort_order": 269,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "ASAD ZANZÍBAR",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/miniaturas.jpg",
    "code": "AVN-0270",
    "sort_order": 270,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "ASAD BOURBON",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/miniaturas.jpg",
    "code": "AVN-0271",
    "sort_order": 271,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "YARA TOUS",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/miniaturas.jpg",
    "code": "AVN-0272",
    "sort_order": 272,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "YARA MOI",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/miniaturas.jpg",
    "code": "AVN-0273",
    "sort_order": 273,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "YARA PINK ELIXIR",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/miniaturas.jpg",
    "code": "AVN-0274",
    "sort_order": 274,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "MANDARÍN",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 2500,
    "image_url": "/img/Categories/tubitos.jpg",
    "code": "AVN-0275",
    "sort_order": 275,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "KHAMRAH CLÁSICO",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 2500,
    "image_url": "/img/Categories/tubitos.jpg",
    "code": "AVN-0276",
    "sort_order": 276,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "KHAMRAH DUKHAN",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 2500,
    "image_url": "/img/Categories/tubitos.jpg",
    "code": "AVN-0277",
    "sort_order": 277,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "KHAMRAH QAWA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 2500,
    "image_url": "/img/Categories/tubitos.jpg",
    "code": "AVN-0278",
    "sort_order": 278,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "ERBA PURA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 2500,
    "image_url": "/img/Categories/tubitos.jpg",
    "code": "AVN-0279",
    "sort_order": 279,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "9 PM",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 2500,
    "image_url": "/img/Categories/tubitos.jpg",
    "code": "AVN-0280",
    "sort_order": 280,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "SPECTRA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 2500,
    "image_url": "/img/Categories/tubitos.jpg",
    "code": "AVN-0281",
    "sort_order": 281,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "QAED AL FURSAN",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 2500,
    "image_url": "/img/Categories/tubitos.jpg",
    "code": "AVN-0282",
    "sort_order": 282,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "FAKHAR BLACK SILVER",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 2500,
    "image_url": "/img/Categories/tubitos.jpg",
    "code": "AVN-0283",
    "sort_order": 283,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "HIS CONFESSION",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 2500,
    "image_url": "/img/Categories/tubitos.jpg",
    "code": "AVN-0284",
    "sort_order": 284,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "ISLAND BLISS",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 2500,
    "image_url": "/img/Categories/tubitos.jpg",
    "code": "AVN-0285",
    "sort_order": 285,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "GIVE GOURMAND",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 2500,
    "image_url": "/img/Categories/tubitos.jpg",
    "code": "AVN-0286",
    "sort_order": 286,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "MUSAMAM",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 2500,
    "image_url": "/img/Categories/tubitos.jpg",
    "code": "AVN-0287",
    "sort_order": 287,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "ECLAIRE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 2500,
    "image_url": "/img/Categories/tubitos.jpg",
    "code": "AVN-0288",
    "sort_order": 288,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "YARA MOI",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 2500,
    "image_url": "/img/Categories/tubitos.jpg",
    "code": "AVN-0289",
    "sort_order": 289,
    "is_active": true
  },
  {
    "category_id": "cat-decants",
    "name": "YARA CANDY",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 2500,
    "image_url": "/img/Categories/tubitos.jpg",
    "code": "AVN-0290",
    "sort_order": 290,
    "is_active": true
  },
  {
    "category_id": "cat-pelo",
    "name": "SKALA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 7000,
    "image_url": "/img/Categories/pelo.jpg",
    "code": "AVN-0291",
    "sort_order": 291,
    "is_active": true
  },
  {
    "category_id": "cat-pelo",
    "name": "KARSEELL",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 18000,
    "image_url": "/img/Categories/pelo.jpg",
    "code": "AVN-0292",
    "sort_order": 292,
    "is_active": true
  },
  {
    "category_id": "cat-pelo",
    "name": "ACEITE KARSEELL",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 20000,
    "image_url": "/img/Categories/pelo.jpg",
    "code": "AVN-0293",
    "sort_order": 293,
    "is_active": true
  },
  {
    "category_id": "cat-pelo",
    "name": "HAIR CARE SET KARSEELL",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 35000,
    "image_url": "/img/Categories/pelo.jpg",
    "code": "AVN-0294",
    "sort_order": 294,
    "is_active": true
  },
  {
    "category_id": "cat-pelo",
    "name": "KIT TRAVEL SET KARSEELL",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 20000,
    "image_url": "/img/Categories/pelo.jpg",
    "code": "AVN-0295",
    "sort_order": 295,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "9PM NIGHT OUD",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0296",
    "sort_order": 296,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "ALTHAIR",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0297",
    "sort_order": 297,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "AMBER OUD AQUA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0298",
    "sort_order": 298,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "ANGHAM",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0299",
    "sort_order": 299,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "ANGEL FANTASM",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0300",
    "sort_order": 300,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "ASAD ZANZÍBAR",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0301",
    "sort_order": 301,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "BURBERRY HER",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0302",
    "sort_order": 302,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "CHER DIECIOCHO",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0303",
    "sort_order": 303,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "CHOCO OVERDOSE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0304",
    "sort_order": 304,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "CLUB DE NUIT BLING",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0305",
    "sort_order": 305,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "DEVOTION INTENSE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0306",
    "sort_order": 306,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "DEVOTION POUR HOMME",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0307",
    "sort_order": 307,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "ECLAIRE PISTACHE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0308",
    "sort_order": 308,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "FAME IN LOVE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0309",
    "sort_order": 309,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "GO MANGO",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0310",
    "sort_order": 310,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "GODDESS",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0311",
    "sort_order": 311,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "LE MALE ELIXIR ABSOLU",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0312",
    "sort_order": 312,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "LIBRE BERRY. CRUSH",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0313",
    "sort_order": 313,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "LIQUID BRUN",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0314",
    "sort_order": 314,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "LOST CHERRY",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0315",
    "sort_order": 315,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "MANDARÍN SKY ELIXIR",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0316",
    "sort_order": 316,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "MARSHMALLOW BLUSH",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0317",
    "sort_order": 317,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "MYSLF L",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0318",
    "sort_order": 318,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "NOBLE BLUSH",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0319",
    "sort_order": 319,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "POWER OF YOU",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0320",
    "sort_order": 320,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "STRONGER WITH YOU SANDALWOOD",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0321",
    "sort_order": 321,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "THE MOST WANTED INTENSE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0322",
    "sort_order": 322,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "TORINO 21",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0323",
    "sort_order": 323,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "VALENTINO BORN IN ROMA EXTRAVAGANZA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0324",
    "sort_order": 324,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "VALENTINO BORN IN ROMA PURPLE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0325",
    "sort_order": 325,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "VALENTINO UOMO BORN IN ROMA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0326",
    "sort_order": 326,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "VANILLA FRAK",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0327",
    "sort_order": 327,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "Y ELIXIR",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0328",
    "sort_order": 328,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "VALENTINO DONNA BORN IN ROMA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0329",
    "sort_order": 329,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "212 HÉROES",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0330",
    "sort_order": 330,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "212 NEW YORK",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0331",
    "sort_order": 331,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "212 SEXY",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0332",
    "sort_order": 332,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "212 VIP",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0333",
    "sort_order": 333,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "212VIP ROSE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0334",
    "sort_order": 334,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "AMOR AMOR",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0335",
    "sort_order": 335,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "BE DELICIOUS",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0336",
    "sort_order": 336,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "CLOUD",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0337",
    "sort_order": 337,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "FAME",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0338",
    "sort_order": 338,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "FLOWER",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0339",
    "sort_order": 339,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "GOOD GIRLS BLUSH",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0340",
    "sort_order": 340,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "J'ADORE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0341",
    "sort_order": 341,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "L'INTERDIT",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0342",
    "sort_order": 342,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "LA BOMBA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0343",
    "sort_order": 343,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "LA VIDA ES BELLA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0344",
    "sort_order": 344,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "LADY MILLION",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0345",
    "sort_order": 345,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "LIBRE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0346",
    "sort_order": 346,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "LIGHT BLUE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0347",
    "sort_order": 347,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "MISS DIOR",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0348",
    "sort_order": 348,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "MY WAY",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0349",
    "sort_order": 349,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "OLYMPEA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0350",
    "sort_order": 350,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "RALPH",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0351",
    "sort_order": 351,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "SCANDAL",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0352",
    "sort_order": 352,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "TOY 2 BUBBLE GUM",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0353",
    "sort_order": 353,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "212 VIP BLACK",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0354",
    "sort_order": 354,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "AQUA DI GIO PROFUMO",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0355",
    "sort_order": 355,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "BAD BOY DAZZILING GARDEN",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0356",
    "sort_order": 356,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "BORN IN ROMA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0357",
    "sort_order": 357,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "CREED AVENTUS",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0358",
    "sort_order": 358,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "EROS",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0359",
    "sort_order": 359,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "FAHRENHEIT",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0360",
    "sort_order": 360,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "INVICTUS",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0361",
    "sort_order": 361,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "INVICTUS AQUA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0362",
    "sort_order": 362,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "INVICTUS LEGEND",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0363",
    "sort_order": 363,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "INVICTUS VICTORY",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0364",
    "sort_order": 364,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "INVICTUS VICTORY ELIXIR",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0365",
    "sort_order": 365,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "KENZO HOMME",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0366",
    "sort_order": 366,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "L'EAU D'ISSEY",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0367",
    "sort_order": 367,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "LE MALE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0368",
    "sort_order": 368,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "MYSLF",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0369",
    "sort_order": 369,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "OMBRE NOMADE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0370",
    "sort_order": 370,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "ONE MILLION",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0371",
    "sort_order": 371,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "ONE MILLION ELIXIR",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0372",
    "sort_order": 372,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "ONE MILLION LUCKY",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0373",
    "sort_order": 373,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "POLO BLUE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0374",
    "sort_order": 374,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "POLO RED",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0375",
    "sort_order": 375,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "POWER OF SEDUCTION",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0376",
    "sort_order": 376,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "SAUVAGE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0377",
    "sort_order": 377,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "THE  MOST WANTED",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0378",
    "sort_order": 378,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "TOMMY HILFIGER",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0379",
    "sort_order": 379,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "TOY BOY",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0380",
    "sort_order": 380,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "ULTRA MALE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0381",
    "sort_order": 381,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "WANTED",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0382",
    "sort_order": 382,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "CK ONE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0383",
    "sort_order": 383,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "BACCARAT ROUGE 540",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0384",
    "sort_order": 384,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "ECLAIRE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0385",
    "sort_order": 385,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "OPULENT MUSK",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0386",
    "sort_order": 386,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "YARA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0387",
    "sort_order": 387,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "YARA. CANDY",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0388",
    "sort_order": 388,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "YARA ELIXIR",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0389",
    "sort_order": 389,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "YARA TOUS",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0390",
    "sort_order": 390,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "9PM",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0391",
    "sort_order": 391,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "ASAD",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0392",
    "sort_order": 392,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "BHARARA KING",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0393",
    "sort_order": 393,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "CLUB DE NUIT",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0394",
    "sort_order": 394,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "ACCENTO OVERDOSE",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0395",
    "sort_order": 395,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "AMBER GOLD",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0396",
    "sort_order": 396,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "ARABIANS TONKA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0397",
    "sort_order": 397,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "ERBA PURA",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0398",
    "sort_order": 398,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "KHAMRAH",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0399",
    "sort_order": 399,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "OUD FOR GLORY",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0400",
    "sort_order": 400,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "OUD MOOD",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0401",
    "sort_order": 401,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "SUBLIME",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0402",
    "sort_order": 402,
    "is_active": true
  },
  {
    "category_id": "cat-inspiraciones",
    "name": "AMBER OUD",
    "description": "Excelente fragancia. Ideal para toda ocasión.",
    "price": 15000,
    "image_url": "/img/Categories/extractos.jpg",
    "code": "AVN-0403",
    "sort_order": 403,
    "is_active": true
  }
];

  



export function filterAventusCategories(cats: any[]): any[] {
  if (!cats || !Array.isArray(cats)) return DEFAULT_AVENTUS_CATEGORIES;
  const filtered = cats.filter(c => {
    const name = (c.name || '').trim().toLowerCase();
    // Excluir categorías de otros rubros (embutidos, suplementos, etc.)
    if (/embutid|chorizo|salame|bondiola|matambre|proteín|creatin|suplement|pre-entren|vitamin|amino|quemador|ganador|barra|shaker|ropa|accesor/i.test(name)) {
      return false;
    }
    return ['perfume', 'perfumería', 'perfumeria', 'hombre', 'mujer', 'arabe', 'árabe', 'nacional', 'esencia', 'set', 'combo', 'tester', 'oferta', 'decant', 'unisex', 'fragancia', 'dulce', 'oud'].some(allowed => name.includes(allowed));
  });
  return filtered.length > 0 ? filtered : DEFAULT_AVENTUS_CATEGORIES;
}

export function filterAventusProducts(prods: any[]): any[] {
  if (!prods || !Array.isArray(prods)) return DEFAULT_AVENTUS_PRODUCTS;
  const filtered = prods.filter(p => {
    const code = (p.code || '').toUpperCase();
    const text = `${p.name || ''} ${p.description || ''}`.toLowerCase();
    // Excluir productos de otros rubros
    if (/protein|proteína|whey|creatin|nutrition|suplement|pre-entreno|bcaa|glutamin|gainer|lbs|star nutrition|titán|titan|chorizo|salame|bondiola|matambre|embutido|cerdo|vacio|costillas|jamon/i.test(text)) {
      return false;
    }
    return code.startsWith('HOM-') ||
           code.startsWith('MUJ-') ||
           code.startsWith('ARA-') ||
           code.startsWith('NAC-') ||
           code.startsWith('SET-') ||
           code.startsWith('TES-') ||
           /perfume|eau|edp|edt|fragancia|esencia|oud|â€¢rara|arabe|arabian|tester|decant|khamrah|sauvage|million|victory|good girl|alien|mademoiselle|flowerbomb|black opium|invictus|unique|avon|natura|lattafa|armaf|afnan|haramain|chanel|dior|armani|herrera|rabanne|versace|boss|mugler|lanco|ysl/i.test(text);
  });
  return filtered.length > 0 ? filtered : DEFAULT_AVENTUS_PRODUCTS;
}

export function filterAventusOrders(orders: any[]): any[] {
  if (!orders || !Array.isArray(orders)) return [];
  return orders.filter(o => {
    if (!o.items || !Array.isArray(o.items) || o.items.length === 0) return true;
    const hasUnrelatedItem = o.items.some((item: any) => {
      const text = `${item.name || ''} ${item.description || ''}`.toLowerCase();
      return /protein|proteína|whey|creatin|nutrition|lisa mayorista|suplement|pre-entreno|bcaa|glutamin|gainer|lbs|star nutrition|titan fuel|chorizo|salame|bondiola|matambre|embutido|cerdo/i.test(text);
    });
    return !hasUnrelatedItem;
  });
}

export function filterAventusBanners(banners: any[]): any[] {
  const defaultBanners = [
    { id: 'b1', image_url: '/img/Banner/banner1.svg', is_active: true, sort_order: 1 },
    { id: 'b2', image_url: '/img/Banner/banner2.svg', is_active: true, sort_order: 2 },
    { id: 'b3', image_url: '/img/Banner/banner3.svg', is_active: true, sort_order: 3 },
  ];
  if (!banners || !Array.isArray(banners) || banners.length === 0) return defaultBanners;
  const filtered = banners.filter(b => {
    const text = `${b.image_url || ''} ${b.link || ''}`.toLowerCase();
    return !/titan|suplement|fitness|protein|creatin|chorizo|salame|embutido/i.test(text);
  });
  return filtered.length > 0 ? filtered : defaultBanners;
}