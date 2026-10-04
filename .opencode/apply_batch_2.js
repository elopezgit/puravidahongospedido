const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');

const env = fs.readFileSync('.env', 'utf8');
const urlMatch = env.match(/VITE_SUPABASE_URL=(.*)/);
const keyMatch = env.match(/VITE_SUPABASE_ANON_KEY=(.*)/);
const supabase = createClient(urlMatch[1].trim(), keyMatch[1].trim());

const BATCH_2_UPDATES = [
  {
    code: 'AVN-0108',
    image_url: 'https://www.carolinaherrera.com/medias/sys_master/images/ha7/h8b/9446210240542/65171922_212HEROES_EDP_80ML_FRONT/65171922-212HEROES-EDP-80ML-FRONT.jpg',
    description: 'Carolina Herrera La Bomba (212 Heroes For Her) Eau de Parfum es una fragancia femenina floral, frutal y ambarada. Abre con frambuesa jugosa y mandarina; desarrolla un corazón de flor de azahar y jazmín; y finaliza con sándalo y cedro. Un aroma audaz, efervescente y juvenil.'
  },
  {
    code: 'AVN-0109',
    image_url: 'https://www.carolinaherrera.com/medias/sys_master/images/h6a/h7d/9446209847326/65089704_212VIPROSE_EDP_80ML_FRONT/65089704-212VIPROSE-EDP-80ML-FRONT.jpg',
    description: 'Carolina Herrera 212 VIP Rosé es una fragancia femenina Eau de Parfum floral, frutal y amaderada. Abre con notas chispeantes de Champagne Rosé y pimienta rosa; continúa con flor de durazno y rosas frescas; y finaliza con un fondo sensual de queenwood y almizcle blanco.'
  },
  {
    code: 'AVN-0112',
    image_url: 'https://media.bulgari.com/is/image/bulgari/41982_Omnia_Amethyste_EDT_65ml_01.png',
    description: 'Bvlgari Omnia Amethyste es una fragancia femenina floral ambarada inspirada en la gema amatista. Abre con savia verde y pomelo rosado; continúa con notas de iris y capullo de rosa de Bulgaria; y finaliza con maderas solares y heliotropo. Elegante, fresca y delicada.'
  },
  {
    code: 'AVN-0116',
    image_url: 'https://www.valentino-beauty.us/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-valentino-master-catalog/default/dw10fc51fe/Fragrance/Donna/3614272761453_donna_born_in_roma_edp_100ml.png',
    description: 'Valentino Donna Born in Roma Eau de Parfum es una fragancia femenina de alta costura moderna. Combina tres variedades de jazmín con grosella negra y pimienta rosa, asentada sobre un acorde lujoso de vainilla Bourbon y notas amaderadas de cachemira.'
  },
  {
    code: 'AVN-0119',
    image_url: 'https://www.carolinaherrera.com/medias/sys_master/images/h1d/h52/9446209191966/65103444_GOODGIRL_EDP_80ML_FRONT/65103444-GOODGIRL-EDP-80ML-FRONT.jpg',
    description: 'Carolina Herrera Good Girl Eau de Parfum es una fragancia femenina floral oriental icónica por su frasco en forma de stiletto. Combina la luminosidad del jazmín sambac y la tuberosa con la faceta oscura y adictiva del cacao tostado y el haba tonka.'
  },
  {
    code: 'AVN-0120',
    image_url: 'https://www.rabanne.com/medias/sys_master/images/he2/h1a/9074092441630/65051877_LADY_MILLION_EDP_80ML_FRONT/65051877-LADY-MILLION-EDP-80ML-FRONT.jpg',
    description: 'Rabanne Lady Million Eau de Parfum es una fragancia femenina floral frutal en forma de diamante dorado. Abre con neroli, naranja amarga y frambuesa; continúa con flor de azahar y jazmín sambac; y finaliza con miel blanca deliciosa y pachulí vibrante.'
  },
  {
    code: 'AVN-0121',
    image_url: 'https://www.rabanne.com/medias/sys_master/images/h66/h14/9074092507166/65051835_1MILLION_EDT_100ML_FRONT/65051835-1MILLION-EDT-100ML-FRONT.jpg',
    description: 'Rabanne 1 Million Eau de Toilette es una fragancia masculina amaderada especiada presentada en el célebre lingote de oro. Abre con mandarina roja, pomelo y menta; continúa con canela y rosa; y finaliza con cuero rubio, ámbar y pachulí blanco.'
  },
  {
    code: 'AVN-0123',
    image_url: 'https://www.rabanne.com/medias/sys_master/images/h82/h18/9074092572702/65051851_INVICTUS_EDT_100ML_FRONT/65051851-INVICTUS-EDT-100ML-FRONT.jpg',
    description: 'Rabanne Invictus Eau de Toilette es la fragancia del triunfo en forma de copa trofeo. Combina la frescura marina y el pomelo con hojas de laurel y jazmín, sobre una base magnética de madera de guayaco, ámbar gris y pachulí.'
  },
  {
    code: 'AVN-0124',
    image_url: 'https://www.rabanne.com/medias/sys_master/images/h8e/h9b/9074092769310/65156683_INVICTUS_VICTORY_EDPE_100ML_FRONT/65156683-INVICTUS-VICTORY-EDPE-100ML-FRONT.jpg',
    description: 'Rabanne Invictus Victory Eau de Parfum Extreme es una fragancia masculina oriental sensual y poderosa. Abre con limón picante y pimienta rosa; continúa con incienso profundo y lavanda; y finaliza con haba tonka tostada, vainilla intensa y ámbar.'
  },
  {
    code: 'AVN-0125',
    image_url: 'https://www.rabanne.com/medias/sys_master/images/hb3/h95/9248451854366/65176182_INVICTUS_VICTORY_ELIXIR_PARFUM_100ML_FRONT/65176182-INVICTUS-VICTORY-ELIXIR-PARFUM-100ML-FRONT.jpg',
    description: 'Rabanne Invictus Victory Elixir Parfum Intense es la máxima expresión de la victoria. Abre con cardamomo, lavanda y pimienta negra; continúa con incienso aromático y pachulí indonesio; y culmina en una sobredosis de licor de vainilla y haba tonka.'
  },
  {
    code: 'AVN-0126',
    image_url: 'https://www.rabanne.com/medias/sys_master/images/h9c/ha8/9074092638238/65107936_INVICTUS_INTENSE_EDT_100ML_FRONT/65107936-INVICTUS-INTENSE-EDT-100ML-FRONT.jpg',
    description: 'Rabanne Invictus Intense es una fragancia masculina magnética y ambarada. Abre con flor de azahar y pimienta negra; continúa con licor de whisky y laurel; y finaliza con ámbar gris, sal marina y maderas minerales.'
  },
  {
    code: 'AVN-0127',
    image_url: 'https://www.rabanne.com/medias/sys_master/images/h58/h22/9074092703774/65140889_INVICTUS_LEGEND_EDP_100ML_FRONT/65140889-INVICTUS-LEGEND-EDP-100ML-FRONT.jpg',
    description: 'Rabanne Invictus Legend Eau de Parfum es un choque de frescura ardiente. Abre con sal marina, pomelo y notas oceánicas; continúa con geranio, laurel y especias; y finaliza con ámbar rojo y madera de guayaco.'
  },
  {
    code: 'AVN-0128',
    image_url: 'https://www.rabanne.com/medias/sys_master/images/hd9/h78/9248452182046/65176166_1MILLION_ROYAL_PARFUM_100ML_FRONT/65176166-1MILLION-ROYAL-PARFUM-100ML-FRONT.jpg',
    description: 'Rabanne 1 Million Royal Eau de Parfum es una fragancia masculina amaderada ambarada que desafía los límites. Combina lavanda fresca, cardamomo y bergamota con madera de cedro elegante y un fondo cálido y balsámico de benjuí.'
  },
  {
    code: 'AVN-0129',
    image_url: 'https://www.rabanne.com/medias/sys_master/images/h47/hbb/9195033755678/65166299_PHANTOM_LEGION_EDT_100ML_FRONT/65166299-PHANTOM-LEGION-EDT-100ML-FRONT.jpg',
    description: 'Rabanne Phantom Legion / Gold Edition es una edición de colección de la icónica fragancia robótica. Combina notas de limón energizante, lavanda cremosa y un fondo de vainilla sensual y vetiver amaderado.'
  },
  {
    code: 'AVN-0130',
    image_url: 'https://www.rabanne.com/medias/sys_master/images/h20/ha1/9446210633758/65187642_PHANTOM_INTENSE_EDP_100ML_FRONT/65187642-PHANTOM-INTENSE-EDP-100ML-FRONT.jpg',
    description: 'Rabanne Phantom Intense Eau de Parfum es una fragancia masculina oriental fougère misteriosa y magnética. Abre con cardamomo helado, limón y ruibarbo; continúa con flor de lavanda y geranio; y finaliza con vainilla y bálsamo de Tolú.'
  },
  {
    code: 'AVN-0131',
    image_url: 'https://www.rabanne.com/medias/sys_master/images/h77/h12/9446210764830/65198214_PHANTOM_ELIXIR_PARFUM_100ML_FRONT/65198214-PHANTOM-ELIXIR-PARFUM-100ML-FRONT.jpg',
    description: 'Rabanne Phantom Elixir Parfum Intense combina notas de salida acuáticas minerales con un corazón de oud ahumado refinado y un fondo envolvente de vainilla negra y cuero suave.'
  },
  {
    code: 'AVN-0132',
    image_url: 'https://www.rabanne.com/medias/sys_master/images/h42/h2a/9195033493534/65156641_PHANTOM_EDT_100ML_FRONT/65156641-PHANTOM-EDT-100ML-FRONT.jpg',
    description: 'Rabanne Phantom Clásico Eau de Toilette es la primera fragancia conectada nacida del encuentro entre la artesanía y la inteligencia artificial. Fusión de lavanda energizante, limón verde y vainilla amaderada cremosa.'
  },
  {
    code: 'AVN-0133',
    image_url: 'https://www.rabanne.com/medias/sys_master/images/h42/h2a/9195033493534/65156641_PHANTOM_EDT_100ML_FRONT/65156641-PHANTOM-EDT-100ML-FRONT.jpg',
    description: 'Rabanne Phantom Eau de Toilette representa la audacia futurista. Combina notas cítricas de limón italiano, un corazón aromático de lavanda francesa y un fondo adictivo de vainilla de Madagascar y pachulí.'
  },
  {
    code: 'AVN-0134',
    image_url: 'https://www.rabanne.com/medias/sys_master/images/h55/h43/9312845660190/65176208_PHANTOM_PARFUM_100ML_FRONT/65176208-PHANTOM-PARFUM-100ML-FRONT.jpg',
    description: 'Rabanne Phantom Parfum es una fragancia masculina nocturna y seductora. Abre con cardamomo picante, bergamota y ruibarbo; continúa con lavanda aterciopelada y cedro; y finaliza con vainilla pura y vetiver haitiano.'
  },
  {
    code: 'AVN-0136',
    image_url: 'https://www.moschino.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/M/O/MOSCHINO_TOY2_100ML.jpg',
    description: 'Moschino Toy 2 Eau de Parfum es la icónica fragancia femenina en el frasco del oso de cristal satinado. Abre con manzana Granny Smith y mandarina; continúa con magnolia, jazmín y peonía; y finaliza con sándalo y almizcle limpio.'
  },
  {
    code: 'AVN-0142',
    image_url: 'https://www.jeanpaulgaultier.com/medias/sys_master/images/h48/hb2/9248452313118/65187600_LE_BEAU_PARADISE_GARDEN_EDP_125ML_FRONT/65187600-LE-BEAU-PARADISE-GARDEN-EDP-125ML-FRONT.jpg',
    description: 'Jean Paul Gaultier Le Beau Paradise Garden Eau de Parfum es un viaje a un edén tropical y seductor. Abre con agua de coco refrescante y menta; continúa con higo verde jugoso y jengibre; y finaliza con sándalo y haba tonka.'
  },
  {
    code: 'AVN-0143',
    image_url: 'https://www.jeanpaulgaultier.com/medias/sys_master/images/h12/h5a/9248452444190/65176140_LE_MALE_ELIXIR_PARFUM_125ML_FRONT/65176140-LE-MALE-ELIXIR-PARFUM-125ML-FRONT.jpg',
    description: 'Jean Paul Gaultier Le Male Elixir Parfum es una fragancia masculina incandescente. Abre con menta fresca y lavanda; continúa con benjuí dulce y notas ambaradas; y culmina con haba tonka tostada, miel dorada y tabaco refinado.'
  },
  {
    code: 'AVN-0144',
    image_url: 'https://www.jeanpaulgaultier.com/medias/sys_master/images/h17/hbf/9074092834846/65156625_LE_MALE_LE_PARFUM_EDPI_125ML_FRONT/65156625-LE-MALE-LE-PARFUM-EDPI-125ML-FRONT.jpg',
    description: 'Jean Paul Gaultier Le Male Le Parfum Eau de Parfum Intense es el capitán de la elegancia. Abre con cardamomo potente; continúa con lavanda noble e iris empolvado; y finaliza con una estela cálida y adictiva de vainilla oriental.'
  },
  {
    code: 'AVN-0145',
    image_url: 'https://www.jeanpaulgaultier.com/medias/sys_master/images/he8/hc4/9074092900382/65051819_ULTRA_MALE_EDTI_125ML_FRONT/65051819-ULTRA-MALE-EDTI-125ML-FRONT.jpg',
    description: 'Jean Paul Gaultier Ultra Male Eau de Toilette Intense es una fragancia irresistible para la noche. Abre con pera negra jugosa, bergamota y menta; continúa con canela, salvia y comino; y finaliza con vainilla negra, ámbar y maderas de cedro.'
  },
  {
    code: 'AVN-0146',
    image_url: 'https://www.jeanpaulgaultier.com/medias/sys_master/images/h12/h2a/9446210895902/65198256_LE_MALE_LOVER_EDP_125ML_FRONT/65198256-LE-MALE-LOVER-EDP-125ML-FRONT.jpg',
    description: 'Jean Paul Gaultier Le Male Lover Eau de Parfum es una fragancia sensual con tatuajes marineros grabados. Abre con pimienta blanca y lima; continúa con notas marinas y ámbar gris salino; y finaliza con vainilla dulce y maderas cálidas.'
  },
  {
    code: 'AVN-0147',
    image_url: 'https://www.jeanpaulgaultier.com/medias/sys_master/images/hcd/h41/9074092965918/65140863_LE_BEAU_EDT_125ML_FRONT/65140863-LE-BEAU-EDT-125ML-FRONT.jpg',
    description: 'Jean Paul Gaultier Le Beau Eau de Toilette es la tentación en el jardín de Gaultier. Combina la frescura chispeante de la bergamota con el corazón exótico de madera de coco y la calidez envolvente del haba tonka.'
  }
];

async function apply() {
  console.log(`Applying Batch 2 updates (${BATCH_2_UPDATES.length} items)...`);
  for (const item of BATCH_2_UPDATES) {
    const { error } = await supabase
      .from('products')
      .update({
        image_url: item.image_url,
        description: item.description
      })
      .eq('code', item.code);
    
    if (error) {
      console.error(`Error updating ${item.code}:`, error.message);
    } else {
      console.log(`[OK] Updated ${item.code}`);
    }
  }
  console.log('Batch 2 complete.');
}

apply();
