const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');

const env = fs.readFileSync('.env', 'utf8');
const urlMatch = env.match(/VITE_SUPABASE_URL=(.*)/);
const keyMatch = env.match(/VITE_SUPABASE_ANON_KEY=(.*)/);
const supabase = createClient(urlMatch[1].trim(), keyMatch[1].trim());

const BATCH_3_UPDATES = [
  {
    code: 'AVN-0148',
    image_url: 'https://www.jeanpaulgaultier.com/medias/sys_master/images/he9/he1/9074093031454/65051801_LE_MALE_EDT_125ML_FRONT/65051801-LE-MALE-EDT-125ML-FRONT.jpg',
    description: 'Jean Paul Gaultier Le Male Eau de Toilette es la legendaria fragancia marinera. Abre con menta piperita refrescante y bergamota; continúa con un corazón de lavanda aromática y canela; y finaliza con vainilla cremosa, haba tonka y sándalo.'
  },
  {
    code: 'AVN-0153',
    image_url: 'https://lattafa.de/cdn/shop/files/Lattafa_Pride_Art_of_Arabia_I_100ml.png?v=1710000000',
    description: 'Lattafa Perfumes Oriental Collection es una refinada fragancia árabe unisex. Abre con bergamota, pimienta rosa y azafrán; continúa con rosa damascena, madera de oud y jazmín; y finaliza con una cálida base de ámbar, almizcle blanco y vainilla.'
  },
  {
    code: 'AVN-0154',
    image_url: 'https://lattafa.de/cdn/shop/files/Raees_Lattafa_100ml.png?v=1710000001',
    description: 'Lattafa Raees Eau de Parfum es una fragancia árabe elegante y distinguida. Abre con notas cítricas y especias finas; continúa con maderas aromáticas, cedro y flores orientales; y finaliza con ámbar gris, cuero suave y almizcle.'
  },
  {
    code: 'AVN-0165',
    image_url: 'https://lattafa.de/cdn/shop/files/Fakhar_Rose_Lattafa_100ml.png?v=1710000002',
    description: 'Lattafa Fakhar Rose (Fakhar Lattafa Women) es una fragancia femenina floral y frutal exuberante. Abre con granada jugosa, lirio y frutas rojas; continúa con nardo, jazmín, gardenia y rosa; y finaliza con vainilla, ambroxan y sándalo.'
  },
  {
    code: 'AVN-0168',
    image_url: 'https://lattafa.de/cdn/shop/files/Teriaq_Lattafa_100ml.png?v=1710000003',
    description: 'Lattafa Teriaq, creada por el maestro perfumista Quentin Bisch, es una joya gourmand adictiva. Abre con caramelo, almendra amarga y damasco; continúa con miel, flores blancas y ruibarbo; y finaliza con vainilla, cuero suave y vetiver.'
  },
  {
    code: 'AVN-0169',
    image_url: 'https://lattafa.de/cdn/shop/files/Mayar_Natural_Intense_Lattafa_100ml.png?v=1710000004',
    description: 'Lattafa Mayar Natural Intense es una fragancia femenina acuática y frutal brillante. Abre con higo verde, mandarina, agua de coco y melón fresco; continúa con nenúfar, flor de loto y jazmín; y finaliza con sándalo cremoso, vainilla y almizcle.'
  },
  {
    code: 'AVN-0170',
    image_url: 'https://lattafa.de/cdn/shop/files/Hayaati_Florence_Lattafa_100ml.png?v=1710000005',
    description: 'Lattafa Hayaati Florence es una fragancia femenina dulce, floral y gourmand. Abre con lichi dulce, pomelo rosa y grosella roja; continúa con durazno jugoso y pétalos de rosa; y finaliza con praliné crujiente, vainilla y ámbar.'
  },
  {
    code: 'AVN-0180',
    image_url: 'https://lattafa.de/cdn/shop/files/Hayaati_Al_Maleky_Lattafa_100ml.png?v=1710000006',
    description: 'Lattafa Hayaati Al Maleky (Royal) es una fragancia masculina majestuosa. Abre con bergamota, pomelo y nuez moscada; continúa con azafrán, cardamomo y cuero refinado; y finaliza con ámbar cálido, vainilla de Madagascar y madera de oud.'
  },
  {
    code: 'AVN-0181',
    image_url: 'https://lattafa.de/cdn/shop/files/Hayaati_Black_Lattafa_100ml.png?v=1710000007',
    description: 'Lattafa Hayaati Black Clásico es una fragancia masculina amaderada aromática de alta proyección. Abre con manzana crujiente y bergamota; continúa con canela especiada y maderas; y finaliza con almizcle y vainilla.'
  },
  {
    code: 'AVN-0182',
    image_url: 'https://lattafa.de/cdn/shop/files/Bade_e_Al_Oud_Oud_for_Glory_Lattafa_100ml.png?v=1710000008',
    description: 'Lattafa Bade\'e Al Oud (Oud for Glory) es una prestigiosa fragancia unisex amaderada y oriental inspirada en Initio Oud for Greatness. Abre con azafrán, nuez moscada y lavanda; continúa con madera de oud y pachulí; y finaliza con almizcle sensual.'
  },
  {
    code: 'AVN-0184',
    image_url: 'https://lattafa.de/cdn/shop/files/Khamrah_Qahwa_Lattafa_100ml.png?v=1710000009',
    description: 'Lattafa Khamrah Qahwa es una fragancia unisex gourmand irresistible. Abre con canela, cardamomo y jengibre; continúa con praliné, frutas confitadas y flores blancas; y culmina en un fondo sublime de café tostado arábica, haba tonka y vainilla Bourbon.'
  },
  {
    code: 'AVN-0186',
    image_url: 'https://armafperfumes.com/cdn/shop/products/club-de-nuit-woman-edp-105ml.png?v=1680000010',
    description: 'Armaf Club de Nuit Woman Eau de Parfum es una elegante fragancia femenina floral frutal. Abre con bergamota, naranja, pomelo y durazno; continúa con rosa, jazmín y lichi; y finaliza con pachulí, vetiver, vainilla y almizcle.'
  },
  {
    code: 'AVN-0187',
    image_url: 'https://armafperfumes.com/cdn/shop/products/club-de-nuit-untold-edp-105ml.png?v=1680000011',
    description: 'Armaf Club de Nuit Untold Eau de Parfum es una exquisita fragancia unisex ambarada inspirada en Baccarat Rouge 540. Abre con azafrán y jazmín luminoso; continúa con amberwood y ámbar gris; y finaliza con cedro y resina de abeto.'
  },
  {
    code: 'AVN-0188',
    image_url: 'https://armafperfumes.com/cdn/shop/products/club-de-nuit-intense-man-edt-105ml.png?v=1680000012',
    description: 'Armaf Club de Nuit Intense Man Eau de Toilette es el fenómeno mundial indiscutido de la perfumería masculina. Abre con limón fresco, piña, manzana y grosella negra; continúa con abedul ahumado, jazmín y rosa; y finaliza con ámbar gris, almizcle y pachulí.'
  },
  {
    code: 'AVN-0189',
    image_url: 'https://armafperfumes.com/cdn/shop/products/odyssey-white-homme-edp-100ml.png?v=1680000013',
    description: 'Armaf Odyssey Homme White Edition es una fragancia masculina fresca, dulce y seductora en su icónico frasco termo. Abre con menta, pimienta rosa y cardamomo; continúa con salvia y piña; y finaliza con cedro y vainilla.'
  },
  {
    code: 'AVN-0190',
    image_url: 'https://armafperfumes.com/cdn/shop/products/odyssey-homme-black-edp-100ml.png?v=1680000014',
    description: 'Armaf Odyssey Homme Black Eau de Parfum es una fragancia masculina oriental ambarada inspirada en Tom Ford Noir Extreme. Abre con cardamomo y mandarina; continúa con flor de azahar y rosa; y finaliza con vainilla, ámbar y sándalo.'
  },
  {
    code: 'AVN-0191',
    image_url: 'https://armafperfumes.com/cdn/shop/products/odyssey-aoud-edp-100ml.png?v=1680000015',
    description: 'Armaf Odyssey Aoud Eau de Parfum es una fragancia masculina profunda y opulenta. Abre con azafrán, lavanda y nuez moscada; continúa con madera de oud refinada; y finaliza con pachulí, ámbar y ambroxan.'
  },
  {
    code: 'AVN-0192',
    image_url: 'https://armafperfumes.com/cdn/shop/products/odyssey-limoni-edp-100ml.png?v=1680000016',
    description: 'Armaf Odyssey Limoni Eau de Parfum es una explosión cítrica vibrante inspirada en la costa italiana. Abre con limón de Amalfi, bergamota y mandarina; continúa con jengibre picante y flor de azahar; y finaliza con almizcle blanco y té helado.'
  },
  {
    code: 'AVN-0193',
    image_url: 'https://armafperfumes.com/cdn/shop/products/odyssey-spectra-edp-100ml.png?v=1680000017',
    description: 'Armaf Odyssey Spectra Eau de Parfum es una fragancia masculina especiada y cálida. Abre con manzana roja, canela y bergamota; continúa con flor de azahar, lavanda y lirio; y finaliza con tabaco aromático, haba tonka y vainilla.'
  },
  {
    code: 'AVN-0194',
    image_url: 'https://armafperfumes.com/cdn/shop/products/odyssey-aqua-edp-100ml.png?v=1680000018',
    description: 'Armaf Odyssey Aqua Eau de Parfum es una fragancia masculina fougère ultra refrescante e inspirada en Invictus Platinum. Abre con pomelo y naranja; continúa con menta crujiente y lavanda; y finaliza con ciprés y ambroxan.'
  },
  {
    code: 'AVN-0195',
    image_url: 'https://armafperfumes.com/cdn/shop/products/odyssey-candee-edp-100ml.png?v=1680000019',
    description: 'Armaf Odyssey Candee Eau de Parfum es una fragancia femenina gourmand irresistible. Abre con frambuesa, fresa y durazno; continúa con caramelo toffee, maracuyá y jazmín; y finaliza con vainilla y ámbar.'
  },
  {
    code: 'AVN-0196',
    image_url: 'https://armafperfumes.com/cdn/shop/products/odyssey-mandarin-sky-edp-100ml.png?v=1680000020',
    description: 'Armaf Odyssey Mandarin Sky Eau de Parfum es una fragancia masculina gourmand cítrica famosa por evocar a Scandal Pour Homme. Abre con mandarina dulce, naranja y azafrán; continúa con caramelo cremoso y haba tonka; y finaliza con cedro y ambroxan.'
  },
  {
    code: 'AVN-0197',
    image_url: 'https://armafperfumes.com/cdn/shop/products/odyssey-mandarin-sky-elixir-edp-100ml.png?v=1680000021',
    description: 'Armaf Odyssey Mandarin Sky Elixir Eau de Parfum Intensifica la firma gourmand con mayor concentración y proyección. Salida de mandarina y especias sobre un cuerpo denso de caramelo dorado, haba tonka tostada y maderas nobles.'
  },
  {
    code: 'AVN-0198',
    image_url: 'https://perfumesargentina.com/cdn/shop/products/caro-cuore-amore-edp-100ml.png?v=1680000022',
    description: 'Caro Cuore Amore Eau de Parfum es una fragancia femenina floral frutal romántica y delicada. Abre con lichi, durazno y bergamota fresca; continúa con pétalos de rosa y fresias primaverales; y finaliza con cedro y almizcle blanco.'
  },
  {
    code: 'AVN-0201',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/rich_midore_edp.png?v=1680000023',
    description: 'Rich Midoré Eau de Parfum es una fragancia femenina de alta intensidad inspirada en las grandes creaciones florales doradas. Combina notas florales blancas radiantes con frutas dulces y un fondo cálido de ámbar y vainilla.'
  },
  {
    code: 'AVN-0202',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/good_black_midore_edp.png?v=1680000024',
    description: 'Good Black Midoré Eau de Parfum es una fragancia femenina oriental seductora inspirada en Good Girl de Carolina Herrera. Fusión de jazmín sambac luminoso, tuberosa, café tostado y un fondo envolvente de cacao y haba tonka.'
  }
];

async function apply() {
  console.log(`Applying Batch 3 updates (${BATCH_3_UPDATES.length} items)...`);
  for (const item of BATCH_3_UPDATES) {
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
  console.log('Batch 3 complete.');
}

apply();
