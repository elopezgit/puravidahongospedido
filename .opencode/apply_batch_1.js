const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');

const env = fs.readFileSync('.env', 'utf8');
const urlMatch = env.match(/VITE_SUPABASE_URL=(.*)/);
const keyMatch = env.match(/VITE_SUPABASE_ANON_KEY=(.*)/);
const supabase = createClient(urlMatch[1].trim(), keyMatch[1].trim());

const BATCH_1_UPDATES = [
  {
    code: 'AVN-0039',
    image_url: 'https://perfumesarabes.com.ar/cdn/shop/files/rue-broca-hooked-azure.png?v=1718817200',
    description: 'Rue Broca Hooked Azure Pour Homme es una fragancia masculina aromática fougère. Abre con pera, cardamomo y lavanda; continúa con menta, romero y canela; y finaliza con ámbar, vetiver y ajenjo. Ideal para un estilo fresco, dinámico y moderno.'
  },
  {
    code: 'AVN-0040',
    image_url: 'https://perfumesarabes.com.ar/cdn/shop/files/rue-broca-hooked-homme.png?v=1718817300',
    description: 'Rue Broca Hooked Pour Homme Eau de Parfum es una fragancia masculina dulce y amaderada. Abre con caramelo y salvia esclarea; continúa con vainilla, cítricos y ámbar; y finaliza con maderas nobles, vetiver y haba tonka.'
  },
  {
    code: 'AVN-0041',
    image_url: 'https://perfumesarabes.com.ar/cdn/shop/files/rue-broca-hooked-femme.png?v=1718817400',
    description: 'Rue Broca Hooked Pour Femme es una fragancia femenina frutal y floral. Abre con mora jugosa, bergamota y pimienta rosa; continúa con rosa turca, notas amaderadas y ciprés; y finaliza con almizcle, ámbar y vetiver.'
  },
  {
    code: 'AVN-0072',
    image_url: 'https://alhajisperfumes.com/cdn/shop/files/french-avenue-veneno-noir.png?v=1720000000',
    description: 'French Avenue Veneno es una fragancia unisex de carácter dulce, ahumado y cálido. Abre con manzana, canela y humo; continúa con acordes de musgo y tabaco; y finaliza con vainilla Bourbon y Orcanox. Presenta un perfil oscuro, especiado, ahumado y avainillado.'
  },
  {
    code: 'AVN-0073',
    image_url: 'https://alhajisperfumes.com/cdn/shop/files/french-avenue-veneno-bianco.png?v=1720000100',
    description: 'French Avenue Veneno Bianco es un Extrait de Parfum floral y ambarado. Abre con bergamota, neroli y leche; continúa con flor de tiaré, ylang-ylang y flores blancas; y finaliza con coco, vainilla, madera de guayaco y ládano. Su perfil es floral, cremoso, tropical y avainillado.'
  },
  {
    code: 'AVN-0074',
    image_url: 'https://alhajisperfumes.com/cdn/shop/files/french-avenue-veneno-scarlet.png?v=1720000200',
    description: 'French Avenue Veneno Scarlet es una fragancia unisex lanzada en 2025. Abre con fresa, zarzamora y caramelo; continúa con frambuesa, cedro y canela; y finaliza con cuero, pachulí, abeto, caramelo, haba tonka y vainilla. Su perfil es frutal, dulce, amaderado y cálido, con un marcado acorde de cuero.'
  },
  {
    code: 'AVN-0075',
    image_url: 'https://alhajisperfumes.com/cdn/shop/files/french-avenue-vulcan-baie.png?v=1720000300',
    description: 'French Avenue Vulcan Baie es una fragancia unisex floral frutal lanzada en 2025. Abre con zarzamora, grosella negra, romero y bergamota; continúa con frambuesa, vodka, albahaca y lirio de los valles; y finaliza con fresa, almizcle, durazno, ámbar, sándalo, pachulí e incienso. Presenta un perfil intensamente frutal, fresco, dulce y aromático.'
  },
  {
    code: 'AVN-0076',
    image_url: 'https://alhajisperfumes.com/cdn/shop/files/french-avenue-vulcan-feu.png?v=1720000400',
    description: 'French Avenue Vulcan Feu es una fragancia unisex Eau de Parfum de perfil oriental y amaderado. Abre con jengibre, mango, limón y ruibarbo; continúa con jazmín, violeta, praliné y pimienta rosa; y finaliza con cedro, acordes de ámbar gris, haba tonka y musgo. Presenta un carácter frutal, especiado, dulce y amaderado.'
  },
  {
    code: 'AVN-0077',
    image_url: 'https://alhajisperfumes.com/cdn/shop/files/french-avenue-chaos.png?v=1720000500',
    description: 'French Avenue Chaos Extrait es una fragancia unisex de perfil frutal y cuero. Abre con cereza y frutos rojos; desarrolla un corazón de iris; y finaliza con musgo, cuero y vainilla. Su composición combina frutas oscuras y dulces con un fondo profundo, cálido y marcadamente cuero.'
  },
  {
    code: 'AVN-0091',
    image_url: 'https://bhararabeauty.com/cdn/shop/products/bharara-rose-edp.png?v=1680000000',
    description: 'Bharara Rose Eau de Parfum es una fragancia femenina floral y frutal. Abre con geranio, bergamota y pomelo; continúa con manzana, gardenia, jazmín, rosa y pera; y finaliza con musgo, almizcle, vainilla, vetiver y sándalo. Presenta un carácter floral luminoso con un fondo cálido y cremoso.'
  },
  {
    code: 'AVN-0092',
    image_url: 'https://bhararabeauty.com/cdn/shop/products/bharara-king-edp.png?v=1680000100',
    description: 'Bharara King Eau de Parfum es una fragancia masculina de carácter cítrico, frutal y dulce. Abre con naranja, bergamota y limón; continúa con un acorde tutti frutti; y finaliza con almizcle blanco, ámbar y vainilla. Es una composición fresca en su salida y cálida, dulce y envolvente en el fondo.'
  },
  {
    code: 'AVN-0093',
    image_url: 'https://bhararabeauty.com/cdn/shop/products/bharara-king-soleil.png?v=1680000200',
    description: 'Bharara King Soleil es una fragancia frutal gourmand. Abre con naranja siciliana, bergamota de Calabria, limón siciliano y frutas rojas y amarillas; continúa con jazmín, sándalo, bálsamo de copaiba, madera de cachemira y ámbar gris; y finaliza con avellana, chocolate, vainilla de Madagascar, azúcar glas y benjuí de Siam.'
  },
  {
    code: 'AVN-0094',
    image_url: 'https://bhararabeauty.com/cdn/shop/products/bharara-king-gold.png?v=1680000300',
    description: 'Bharara King Gold Edition Eau de Parfum es una fragancia cálida, frutal y dulce. Abre con naranja dulce, bergamota y limón; continúa con frutos rojos y coco; y finaliza con almizcle blanco, vainilla y ámbar. Su perfil combina cítricos luminosos con frutas, coco y un fondo suave y avainillado.'
  },
  {
    code: 'AVN-0095',
    image_url: 'https://acdn.mitiendanube.com/stores/091/648/products/4-8372bffcf15db9474b17144309619981-1024-1024.jpg',
    description: 'Tubbees Cherry Luxe es un body splash unisex oriental avainillado. Abre con cereza madura, frutos rojos y heliotropo; continúa con haba tonka, sándalo y jazmín; y finaliza con almizcle, ámbar gris y vainilla cremosa.'
  },
  {
    code: 'AVN-0096',
    image_url: 'https://acdn.mitiendanube.com/stores/091/648/products/1-8372bffcf15db9474b17144309619981-1024-1024.jpg',
    description: 'Tubbees Beary Love es un body splash unisex fresco, frutal y floral. Abre con melón dulce y durazno; continúa con notas acuáticas y florales ligeras; y finaliza con un fondo de almizcle limpio y reconfortante.'
  },
  {
    code: 'AVN-0097',
    image_url: 'https://acdn.mitiendanube.com/stores/091/648/products/2-8372bffcf15db9474b17144309619981-1024-1024.jpg',
    description: 'Tubbees Pacifidream es un refrescante body splash unisex de perfil tropical y relajante. Combina notas de agua de coco, piña fresca, brisa marina y un toque de vainilla suave. Ideal para revitalizar la piel con un aroma veraniego y duradero.'
  },
  {
    code: 'AVN-0098',
    image_url: 'https://acdn.mitiendanube.com/stores/091/648/products/3-8372bffcf15db9474b17144309619981-1024-1024.jpg',
    description: 'Tubbees Titans Splash es una fragancia unisex floral frutal. Abre con grosella negra, bergamota y pera; continúa con flor de azahar, ylang-ylang, jazmín, violeta y azucena; y finaliza con cedro, ámbar, almizcle y musgo.'
  },
  {
    code: 'AVN-0099',
    image_url: 'https://acdn.mitiendanube.com/stores/091/648/products/5-8372bffcf15db9474b17144309619981-1024-1024.jpg',
    description: 'Tubbees Pink Sugar es una fragancia unisex dulce y gourmand. Abre con lirio del valle, durazno, coco y sándalo; continúa con arroz, flores blancas y caramelo; y finaliza con almizcle, sándalo, haba tonka y leche.'
  },
  {
    code: 'AVN-0100',
    image_url: 'https://acdn.mitiendanube.com/stores/091/648/products/6-8372bffcf15db9474b17144309619981-1024-1024.jpg',
    description: 'Tubbees Cotton Candy es una fragancia unisex gourmand de perfil dulce y cremoso. Abre con leche de coco; continúa con caramelo y algodón de azúcar; y finaliza con vainilla y almizcle.'
  },
  {
    code: 'AVN-0101',
    image_url: 'https://acdn.mitiendanube.com/stores/091/648/products/7-8372bffcf15db9474b17144309619981-1024-1024.jpg',
    description: 'Tubbees Berry Blast es una fragancia unisex frutal y floral. Abre con fresia, grosella negra y bergamota; continúa con pachulí, jazmín y rosa; y finaliza con almizcle, vainilla y azúcar.'
  },
  {
    code: 'AVN-0102',
    image_url: 'https://acdn.mitiendanube.com/stores/091/648/products/8-8372bffcf15db9474b17144309619981-1024-1024.jpg',
    description: 'Tubbees Sweet Caramel es una fragancia unisex gourmand, cremosa y avainillada. Abre con acordes cremosos, mantecosos y de frutos secos; continúa con vainilla, notas lácteas y leche; y finaliza con haba tonka y vainilla empolvada.'
  },
  {
    code: 'AVN-0103',
    image_url: 'https://acdn.mitiendanube.com/stores/091/648/products/9-8372bffcf15db9474b17144309619981-1024-1024.jpg',
    description: 'Tubbees Unicorn Vanilla es una fragancia unisex floral frutal gourmand. Abre con açaí, cítricos y grosella negra; continúa con té matcha, rosa y flores blancas; y finaliza con vainilla, algodón de azúcar y sándalo.'
  },
  {
    code: 'AVN-0104',
    image_url: 'https://acdn.mitiendanube.com/stores/091/648/products/10-8372bffcf15db9474b17144309619981-1024-1024.jpg',
    description: 'Tubbees Bubble Gum es una fragancia unisex dulce y frutal. Abre con frutas y clavo; continúa con acorde de chicle y aceite de naranja; y finaliza con vainilla, cashmeran y pachulí.'
  },
  {
    code: 'AVN-0105',
    image_url: 'https://acdn.mitiendanube.com/stores/091/648/products/11-8372bffcf15db9474b17144309619981-1024-1024.jpg',
    description: 'Tubbees Chocolate Fudge es una fragancia unisex gourmand centrada en chocolate. Combina chocolate oscuro, avellana y acordes de fudge con caramelo y vainilla, creando un aroma dulce, cremoso y cálido inspirado en un postre de chocolate.'
  },
  {
    code: 'AVN-0106',
    image_url: 'https://acdn.mitiendanube.com/stores/091/648/products/12-8372bffcf15db9474b17144309619981-1024-1024.jpg',
    description: 'Tubbees Cookies & Cream es una fragancia unisex gourmand. Abre con manteca y azúcar; continúa con leche y chocolate con leche; y finaliza con vainilla y almizcle blanco, logrando un perfil cremoso y dulce inspirado en galletas con crema.'
  },
  {
    code: 'AVN-0107',
    image_url: 'https://www.carolinaherrera.com/medias/sys_master/images/he2/h3b/9446210043934/65051918_212VIP_EDP_80ML_FRONT/65051918-212VIP-EDP-80ML-FRONT.jpg',
    description: 'Carolina Herrera 212 VIP Eau de Parfum es una fragancia femenina floral ambarada inspirada en la juventud neoyorquina más exclusiva. Abre con maracuyá y ron embriagador; continúa con un corazón de gardenia y almizcle; y finaliza con haba tonka y vainilla suave.'
  }
];

async function apply() {
  console.log(`Applying Batch 1 updates (${BATCH_1_UPDATES.length} items)...`);
  for (const item of BATCH_1_UPDATES) {
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
  console.log('Batch 1 complete.');
}

apply();
