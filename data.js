// ─── CONFIGURACIÓN DE AVENTUS PERFUMES ──────────────────────────────
const WA_NUMBERS = ['3814651789'];
const INSTAGRAM_USER = '';
const ADDRESS_TEXT = '';

const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxPBn2bWx4mr8Csru-FLmcejJaqq_vQwDmvK9u_4snMTs09vP7jrok7LNw5IFnK2UStSw/exec';

const MENU = [
  {
    id: 1,
    cat: 'masculinas',
    name: 'Jean Paul Gaultier Le Male Lover',
    desc: 'Una fragancia que celebra el amor con una mezcla embriagadora de lavanda y vainilla. Más dulce y envolvente que el original, con un toque moderno y seductor.',
    notes: '💎 Notas de Salida: Bergamota, Cardamomo | Corazón: Lavanda, Iris | Fondo: Haba Tonka, Vainilla, Cuero',
    longevity: '⏱️ Duración: 8-10 horas | Estela: Fuerte',
    volume: '125 ml',
    price: 280000,
    unitType: 'unidad',
    img: 'img/productos/perf2.jfif',
    emoji: '💎',
    tags: ['premium', 'noche', 'intenso'],
    hot: true,
    rating: 4.9
  },
  {
    id: 2,
    cat: 'masculinas',
    name: 'Jean Paul Gaultier Le Male Ultra Elixir',
    desc: 'La concentración más intensa de la línea Le Male. Una explosión de lavanda con matices de miel y tabaco que crean una estela inolvidable.',
    notes: '💎 Notas de Salida: Lavanda, Menta, Bergamota | Corazón: Canela, Miel | Fondo: Tabaco, Cuero, Ámbar',
    longevity: '⏱️ Duración: 10-12 horas | Estela: Muy fuerte',
    volume: '125 ml',
    price: 265000,
    unitType: 'unidad',
    img: 'img/productos/perf3.jfif',
    emoji: '👑',
    tags: ['premium', 'noche', 'intenso'],
    hot: true,
    rating: 4.8
  },
  {
    id: 3,
    cat: 'masculinas',
    name: 'Jean Paul Gaultier Le Male Le Parfum',
    desc: 'Una interpretación más oscura y sensual del clásico Le Male. La lavanda se combina con el cuero y la vainilla para crear una fragancia magnética y profunda.',
    notes: '💎 Notas de Salida: Cardamomo, Bergamota | Corazón: Lavanda, Iris | Fondo: Vainilla, Haba Tonka, Cuero',
    longevity: '⏱️ Duración: 8-10 horas | Estela: Moderada a fuerte',
    volume: '125 ml',
    price: 250000,
    unitType: 'unidad',
    img: 'img/productos/perf1.jfif',
    emoji: '🌙',
    tags: ['premium', 'noche', 'oriental'],
    hot: false,
    rating: 4.7
  },
  {
    id: 4,
    cat: 'orientales',
    name: 'French Avenue Veneno',
    desc: 'Una fragancia audaz y misteriosa con acordes especiados y amaderados. El azafrán y el cuero se entrelazan con un fondo dulce de vainilla.',
    notes: '🌶️ Notas de Salida: Pimienta Rosa, Azafrán | Corazón: Cuero, Pachulí | Fondo: Ámbar, Vainilla, Almizcle',
    longevity: '⏱️ Duración: 6-8 horas | Estela: Moderada',
    volume: '100 ml',
    price: 95000,
    unitType: 'unidad',
    img: 'img/productos/perf4.jfif',
    emoji: '🌶️',
    tags: ['oriental', 'noche', 'popular'],
    hot: true,
    rating: 4.6
  },
  {
    id: 5,
    cat: 'orientales',
    name: 'French Avenue Veneno Bianco',
    desc: 'La versión más luminosa y fresca de Veneno. Notas afrutadas y florales se combinan con una base cremosa de sándalo y almizcle.',
    notes: '🌸 Notas de Salida: Bergamota, Pera | Corazón: Jazmín, Azahar | Fondo: Sándalo, Almizcle, Vainilla',
    longevity: '⏱️ Duración: 6-8 horas | Estela: Moderada',
    volume: '100 ml',
    price: 95000,
    unitType: 'unidad',
    img: 'img/productos/perfm5.jfif',
    emoji: '🤍',
    tags: ['floral', 'día', 'popular'],
    hot: false,
    rating: 4.5
  },
  {
    id: 6,
    cat: 'femeninas',
    name: 'Armaf Miss Armaf Catwalk',
    desc: 'Una fragancia femenina y vibrante que captura la esencia de la pasarela. Notas cítricas y afrutadas con un corazón floral y un fondo cremoso.',
    notes: '🍑 Notas de Salida: Mandarina, Frutos Rojos | Corazón: Rosa, Jazmín | Fondo: Almizcle, Sándalo, Vainilla',
    longevity: '⏱️ Duración: 5-7 horas | Estela: Moderada',
    volume: '100 ml',
    price: 75000,
    unitType: 'unidad',
    img: 'img/productos/perfm6.jfif',
    emoji: '🌹',
    tags: ['floral', 'día', 'popular', 'dulce'],
    hot: true,
    rating: 4.4
  }
];
