const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');

const env = fs.readFileSync('.env', 'utf8');
const urlMatch = env.match(/VITE_SUPABASE_URL=(.*)/);
const keyMatch = env.match(/VITE_SUPABASE_ANON_KEY=(.*)/);
const supabase = createClient(urlMatch[1].trim(), keyMatch[1].trim());

const REMAINING_UPDATES = [
  // BATCH 4 (AVN-0204 to AVN-0239)
  {
    code: 'AVN-0204',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/n5_midore.png?v=1680000030',
    description: 'N° 5 Midoré Eau de Parfum es una refinada fragancia femenina inspirada en la mítica creación de Chanel. Abre con aldehídos luminosos, neroli e ylang-ylang; continúa con rosa de mayo y jazmín; y finaliza con sándalo, vainilla y vetiver.'
  },
  {
    code: 'AVN-0205',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/flower_air_midore.png?v=1680000031',
    description: 'Flower Air Midoré Eau de Parfum es una fragancia femenina floral y etérea inspirada en Flower in the Air de Kenzo. Abre con frambuesa jugosa y pimienta rosa; continúa con rosa deslumbrante, magnolia y gardenia; y finaliza con almizcle blanco.'
  },
  {
    code: 'AVN-0206',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/odanza_midore.png?v=1680000032',
    description: 'Odanza Midoré Eau de Parfum es una fragancia femenina floral frutal vibrante inspirada en Organza de Givenchy. Fusión de gardenia, nuez moscada, flor de azahar y nardo con un fondo majestuoso de vainilla, ámbar y madera de guayaco.'
  },
  {
    code: 'AVN-0207',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/mh_midore.png?v=1680000033',
    description: 'MH Midoré Eau de Parfum es una fragancia femenina sofisticada inspirada en 212 de Carolina Herrera. Combina flor de azahar, mandarina y flor de cactus con lirio blanco, gardenia, camelia y una base de sándalo y almizcle satinado.'
  },
  {
    code: 'AVN-0208',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/lady_million_midore.png?v=1680000034',
    description: 'Lady Million Midoré Eau de Parfum es una fragancia femenina floral frutal dorada inspirada en Lady Million de Rabanne. Abre con naranja amarga y frambuesa; continúa con jazmín y azahar; y finaliza con miel blanca y pachulí.'
  },
  {
    code: 'AVN-0209',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/chance_midore.png?v=1680000035',
    description: 'Chance Midoré Eau de Parfum es una fragancia femenina floral chispeante inspirada en Chance de Chanel. Abre con pimienta rosa; continúa con jazmín e iris; y finaliza con pachulí, vainilla y almizcle blanco.'
  },
  {
    code: 'AVN-0210',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/olimpeas_midore.png?v=1680000036',
    description: 'Olimpeas Midoré Eau de Parfum es una fragancia femenina oriental floral inspirada en Olympéa de Rabanne. Fusión icónica de vainilla salada, mandarina verde, jazmín acuático, ámbar gris y madera de cachemira.'
  },
  {
    code: 'AVN-0211',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/la_vida_es_bella_midore.png?v=1680000037',
    description: 'La Vida es Bella Midoré Eau de Parfum es un tributo a la alegría y feminidad inspirado en La Vie Est Belle de Lancôme. Abre con grosella negra y pera; continúa con iris noble, jazmín y azahar; y finaliza con praliné, vainilla, pachulí y haba tonka.'
  },
  {
    code: 'AVN-0214',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/hellowoman_midore.png?v=1680000038',
    description: 'Hellowoman Midoré Eau de Parfum es una fragancia femenina fresca, juvenil y adictiva inspirada en Halloween de Jesús del Pozo. Combina notas marinas, violeta, magnolia y lirio de los valles con sándalo, incienso y mirra.'
  },
  {
    code: 'AVN-0215',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/supervioleta_midore.png?v=1680000039',
    description: 'Supervioleta Midoré Eau de Parfum es una fragancia femenina oriental floral inspirada en Ultraviolet de Paco Rabanne. Abre con pimienta fresca y pimiento morrón; continúa con violeta japonesa, osmanto y jazmín; y finaliza con vainilla y cedro.'
  },
  {
    code: 'AVN-0216',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/cool_midore.png?v=1680000040',
    description: 'Cool Midoré Eau de Parfum es una fragancia fresca y oceánica inspirada en Cool Water de Davidoff. Abre con notas acuáticas, menta y lavanda; continúa con cilantro y geranio; y finaliza con ámbar, cedro, tabaco y almizcle.'
  },
  {
    code: 'AVN-0221',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/midore_men.png?v=1680000041',
    description: 'Midoré Men Eau de Parfum es una fragancia masculina amaderada aromática de estilo clásico y distinguido. Fusión de cítricos italianos, lavanda, cardamomo, cedro noble y cuero suave.'
  },
  {
    code: 'AVN-0222',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/black_midore.png?v=1680000042',
    description: 'Black Midoré Eau de Parfum es una fragancia masculina oscura y magnética inspirada en Polo Black de Ralph Lauren. Abre con mango helado, salvia y mandarina; continúa con pachulí negro; y finaliza con madera de sándalo y haba tonka.'
  },
  {
    code: 'AVN-0223',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/fahrenheit_midore.png?v=1680000043',
    description: 'Fahrenheit Midoré Eau de Parfum es una fragancia masculina amaderada floral inspirada en Fahrenheit de Dior. Famosa por su acorde distintivo de violeta, mandarina siciliana, nuez moscada, cuero y madera de cedro.'
  },
  {
    code: 'AVN-0224',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/xs_midore.png?v=1680000044',
    description: 'XS Midoré Eau de Parfum es una fragancia masculina aromática especiada inspirada en Black XS de Rabanne. Abre con limón de Calabria y salvia; continúa con praliné negro, canela y cardamomo; y finaliza con palo de rosa y ámbar negro.'
  },
  {
    code: 'AVN-0226',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/one_midore.png?v=1680000045',
    description: 'One Midoré Eau de Parfum es una fragancia unisex fresca, limpia y atemporal inspirada en CK One de Calvin Klein. Combina notas cítricas de bergamota y mandarina con té verde, lirio de los valles y almizcle blanco.'
  },
  {
    code: 'AVN-0227',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/salvage_midore.png?v=1680000046',
    description: 'Salvage Midoré Eau de Parfum es una fragancia masculina poderosa y fresca inspirada en Sauvage de Dior. Abre con bergamota de Calabria y pimienta de Sichuan; continúa con lavanda y geranio; y finaliza con una estela de ambroxan y cedro.'
  },
  {
    code: 'AVN-0228',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/kzo_air_midore.png?v=1680000047',
    description: 'KZO Air Midoré Eau de Parfum es una fragancia masculina marina y verde inspirada en Kenzo Homme. Combina acordes oceánicos con pino, cedro, nuez moscada y sándalo para una sensación de libertad natural.'
  },
  {
    code: 'AVN-0229',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/classic_midore.png?v=1680000048',
    description: 'Classic Midoré Eau de Parfum es una fragancia masculina fougère clásica e imponente. Abre con notas cítricas y lavanda; continúa con salvia y geranio; y finaliza con vetiver, musgo de roble y sándalo.'
  },
  {
    code: 'AVN-0230',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/blue_midore.png?v=1680000049',
    description: 'Blue Midoré Eau de Parfum es una fragancia masculina acuática y fresca inspirada en Polo Blue de Ralph Lauren. Fusión de melón jugoso, pepino fresco, albahaca, gamuza suave y maderas ambaradas.'
  },
  {
    code: 'AVN-0231',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/red_midore.png?v=1680000050',
    description: 'Red Midoré Eau de Parfum es una fragancia masculina apasionada y enérgica inspirada en Polo Red de Ralph Lauren. Abre con pomelo rojo, arándano y limón; continúa con azafrán rojo y lavanda; y finaliza con café tostado y ámbar.'
  },
  {
    code: 'AVN-0232',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/midore_herrero.png?v=1680000051',
    description: 'Midoré Herrero Eau de Parfum es una fragancia masculina elegante y cosmopolita inspirada en Herrera For Men de Carolina Herrera. Abre con romero, lavanda y cítricos; continúa con clavo, geranio y trébol; y finaliza con tabaco rubio y sándalo.'
  },
  {
    code: 'AVN-0235',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/midore_irresistible.png?v=1680000052',
    description: 'Midoré Irresistible Eau de Parfum es una fragancia femenina encantadora inspirada en Very Irresistible de Givenchy. Fusión de cinco rosas emblemáticas combinadas con anís estrellado, verbena y hojas de pachulí.'
  },
  {
    code: 'AVN-0237',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/ralf_midore.png?v=1680000053',
    description: 'Ralf Midoré Eau de Parfum es una fragancia femenina fresca, floral y frutal inspirada en Ralph de Ralph Lauren. Abre con manzana verde crujiente y mandarina; continúa con fresia y magnolia; y finaliza con almizcle suave.'
  },
  {
    code: 'AVN-0238',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/midore_girl.png?v=1680000054',
    description: 'Midoré Girl Eau de Parfum es una fragancia femenina audaz y sensual inspirada en Good Girl de Carolina Herrera. Notas de jazmín sambac, nardo, café negro, cacao amargo y haba tonka tostada.'
  },
  {
    code: 'AVN-0239',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/midore_the_ford.png?v=1680000055',
    description: 'Midoré The Ford Eau de Parfum es una fragancia de alta gama inspirada en las creaciones exclusivas de Tom Ford. Perfil amaderado, especiado y ambarado con acordes de cardamomo, madera de oud, vetiver y cuero suave.'
  },

  // BATCH 5 (AVN-0240 to AVN-0281)
  {
    code: 'AVN-0240',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/midore_bross.png?v=1680000056',
    description: 'Midoré Bross Eau de Parfum es una fragancia masculina clásica inspirada en Boss Bottled de Hugo Boss. Abre con manzana crujiente y cítricos; continúa con canela y clavo; y finaliza con vainilla, sándalo y vetiver.'
  },
  {
    code: 'AVN-0241',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/midore_cocodrile.png?v=1680000057',
    description: 'Midoré Cocodrile Eau de Parfum es una fragancia masculina deportiva y limpia inspirada en Lacoste Blanc (L.12.12). Abre con pomelo, cardamomo y romero; continúa con nardos e ylang-ylang; y finaliza con cedro y gamuza.'
  },
  {
    code: 'AVN-0242',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/mh_men_midore.png?v=1680000058',
    description: 'MH Men Midoré Eau de Parfum es una fragancia masculina fresca y moderna inspirada en 212 Men de Carolina Herrera. Abre con hojas verdes frescas, pomelo y jengibre; continúa con gardenia y salvia; y finaliza con madera de guayaco y almizcle.'
  },
  {
    code: 'AVN-0244',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/sport_midore.png?v=1680000059',
    description: 'Sport Midoré Eau de Parfum es una fragancia masculina dinámica y energizante inspirada en Allure Homme Sport de Chanel. Abre con mandarina, naranja y notas marinas; continúa con pimienta y cedro; y finaliza con haba tonka y almizcle blanco.'
  },
  {
    code: 'AVN-0248',
    image_url: 'https://www.rabanne.com/medias/sys_master/images/ha2/h3b/9074093162526/65051869_OLYMPEA_EDP_80ML_FRONT/65051869-OLYMPEA-EDP-80ML-FRONT.jpg',
    description: 'Rabanne Olympéa Eau de Parfum es la fragancia de una diosa moderna. Fusión divina de vainilla salada única con mandarina verde fresca, flor de jengibre y jazmín acuático sobre una base sublime de madera de cachemira y ámbar gris.'
  },
  {
    code: 'AVN-0250',
    image_url: 'https://www.jeanpaulgaultier.com/medias/sys_master/images/h57/h26/9248452575262/65176124_DIVINE_EDP_100ML_FRONT/65176124-DIVINE-EDP-100ML-FRONT.jpg',
    description: 'Jean Paul Gaultier Gaultier Divine Eau de Parfum celebra la feminidad divina en un frasco con corsé cónico dorado. Combina un toque de sal marina con majestuosas flores de lis y un acorde irresistible de merengue dulce.'
  },
  {
    code: 'AVN-0251',
    image_url: 'https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw4f5ef49a/Y0063401/Y0063401_C006340100_E01_ZHC.jpg',
    description: 'Dior Addict Eau de Parfum es una fragancia femenina oriental floral cautivadora e hipnótica. Abre con flor de naranjo y hojas de mandarina; continúa con jazmín sambac voluptuoso; y finaliza con vainilla Bourbon profunda y sensual.'
  },
  {
    code: 'AVN-0252',
    image_url: 'https://www.moschino.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/M/O/MOSCHINO_TOY2_BUBBLE_GUM_100ML.jpg',
    description: 'Moschino Toy 2 Bubble Gum Eau de Toilette es la fragancia pop en el icónico oso rosa. Abre con acorde alegre de chicle dulce y cítricos confitados; continúa con rosa búlgara, durazno y jengibre; y finaliza con cedro y almizcle sedoso.'
  },
  {
    code: 'AVN-0255',
    image_url: 'https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw10467cf8/Y0014201/Y0014201_C001420100_E01_ZHC.jpg',
    description: 'Dior Poison Eau de Toilette es una legendaria fragancia oriental especiada y magnética. Combina ciruela oscura, frutos del bosque y canela con flor de azahar, miel salvaje, incienso opulento, vainilla y opopónaco.'
  },
  {
    code: 'AVN-0256',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/i_dont_le_parfum.png?v=1680000060',
    description: 'I Don\'t Le Parfum (Inspiración Idôle de Lancôme) es una fragancia femenina floral luminosa. Abre con pera jugosa y bergamota; continúa con rosa de mayo, rosa turca y jazmín de la India; y finaliza con almizcle blanco y vainilla.'
  },
  {
    code: 'AVN-0257',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/tom_ford_inspiration.png?v=1680000061',
    description: 'Tom Ford Private Blend Inspiración es una fragancia unisex opulenta y vanguardista. Destaca por sus notas ricas de cuero negro, cardamomo, jazmín nocturno, madera de oud y ámbar dorado.'
  },
  {
    code: 'AVN-0258',
    image_url: 'https://www.giorgioarmanibeauty-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-giorgio-armani-master-catalog/default/dw9e1e7fef/Fragrance/Armani-Si/Si-EDP/si-eau-de-parfum.png',
    description: 'Giorgio Armani Sì Eau de Parfum es un homenaje a la feminidad moderna e independiente. Abre con néctar de grosella negra; continúa con rosa de mayo y fresia elegante; y finaliza con vainilla, maderas rubias y pachulí.'
  },
  {
    code: 'AVN-0259',
    image_url: 'https://www.giorgioarmanibeauty-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-giorgio-armani-master-catalog/default/dw18b6e6ad/Fragrance/Armani-Si/Si-Passione/si-passione-eau-de-parfum.png',
    description: 'Giorgio Armani Sì Passione Eau de Parfum es una fragancia floral frutal radiante y apasionada en su botella roja laqueada. Combina grosella negra chispeante, pera jugosa y pimienta rosa con jazmín y vainilla cálida.'
  },
  {
    code: 'AVN-0260',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/fame_silver.png?v=1680000062',
    description: 'Fame Silver (Inspirado en Rabanne Fame) es una fragancia femenina floral frutal chispeante. Combina mango tropical jugoso con jazmín puro y un fondo adictivo de incienso cremoso, vainilla y sándalo.'
  },
  {
    code: 'AVN-0261',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/gold_fame.png?v=1680000063',
    description: 'Gold Fame (Inspirado en Rabanne Fame Gold) es una fragancia femenina floral dulce y sofisticada. Abre con mango y mandarina dulce; continúa con jazmín e incienso dorado; y finaliza con vainilla y sándalo.'
  },
  {
    code: 'AVN-0262',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/fame_rose.png?v=1680000064',
    description: 'Fame Rose (Inspirado en Rabanne Fame Blooming Pink) es una fragancia femenina irresistible y glamorosa. Fusión de mango jugoso, bergamota, flor de jazmín radiante, incienso sensual y vainilla suave.'
  },
  {
    code: 'AVN-0263',
    image_url: 'https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dwe7f58be6/Y0785420/Y0785420_C078542000_E01_ZHC.jpg',
    description: 'Dior Joy Eau de Parfum es una oda al placer y la felicidad. Abre con bergamota y mandarina cítrica; continúa con rosa de Grasse y jazmín luminoso; y finaliza con sándalo cálido, cedro y almizcles blancos envolventes.'
  },
  {
    code: 'AVN-0264',
    image_url: 'https://www.rabanne.com/medias/sys_master/images/ha2/h3b/9074093162526/65051869_OLYMPEA_EDP_80ML_FRONT/65051869-OLYMPEA-EDP-80ML-FRONT.jpg',
    description: 'Rabanne Olympéa Eau de Parfum es una fragancia femenina oriental fresca de presencia magnética. Notas de jazmín de agua, mandarina verde y flor de jengibre combinadas con vainilla salada y madera de cachemira.'
  },
  {
    code: 'AVN-0265',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/tom_ford_boss.png?v=1680000065',
    description: 'Tom Ford Boss Inspiración es una exclusiva fragancia masculina amaderada especiada. Fusión distinguida de maderas finas, cardamomo de Guatemala, vetiver terroso, cuero oscuro y un toque de ámbar cálido.'
  },
  {
    code: 'AVN-0266',
    image_url: 'https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwcf3eb4f5/original/90_R740010-R100MLS_RNUL_20_ErosEaudeToilette100ml-Fragrances-Versace-online-store_0_0.png',
    description: 'Versace Eros Eau de Toilette es la fragancia masculina del amor y la pasión mitológica. Abre con menta fresca, manzana verde y limón italiano; continúa con haba tonka y geranio; y finaliza con vainilla de Madagascar y cedro.'
  },
  {
    code: 'AVN-0268',
    image_url: 'https://xerjoff.com/cdn/shop/files/Erba-Pura-100ml.png?v=1690000000',
    description: 'Xerjoff Erba Pura Eau de Parfum es una fragancia nicho unisex famosa por su explosión de frutas mediterráneas. Abre con naranja siciliana, bergamota de Calabria y limón; continúa con frutas dulces; y finaliza con almizcle blanco y vainilla.'
  },
  {
    code: 'AVN-0275',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/mandarin_midore.png?v=1680000066',
    description: 'Mandarín Sky Inspiración es una fragancia fresca, chispeante y luminosa. Abre con jugo de mandarina fresca, naranja dulce y salvia; continúa con flor de azahar y caramelo; y finaliza con cedro y almizcle limpio.'
  },
  {
    code: 'AVN-0277',
    image_url: 'https://lattafa.de/cdn/shop/files/Khamrah_Dukhan_Lattafa_100ml.png?v=1710000025',
    description: 'Lattafa Khamrah Dukhan es la versión ahumada y misteriosa de la icónica Khamrah. Abre con pimiento picante, mandarina y especias ahumadas; continúa con incienso, flor de azahar y cistus; y finaliza con tabaco dulce, haba tonka y ámbar.'
  },
  {
    code: 'AVN-0278',
    image_url: 'https://lattafa.de/cdn/shop/files/Khamrah_Qahwa_Lattafa_100ml.png?v=1710000009',
    description: 'Lattafa Khamrah Qahwa es una exquisita fragancia unisex con aroma a café arábica recién tostado, canela, cardamomo, praliné crujiente, flores blancas y un fondo cálido de benjuí y vainilla Bourbon.'
  },
  {
    code: 'AVN-0279',
    image_url: 'https://xerjoff.com/cdn/shop/files/Erba-Pura-100ml.png?v=1690000000',
    description: 'Xerjoff Erba Pura Eau de Parfum es una obra maestra de la perfumería italiana. Fusión vibrante de cítricos sicilianos, canasta de frutas exóticas y una fijación legendaria de ámbar y almizcle blanco.'
  },
  {
    code: 'AVN-0281',
    image_url: 'https://armafperfumes.com/cdn/shop/products/odyssey-spectra-edp-100ml.png?v=1680000017',
    description: 'Armaf Odyssey Spectra Eau de Parfum es una fragancia masculina cálida y especiada. Abre con canela y bergamota; continúa con flor de azahar y lavanda; y finaliza con tabaco aromático, haba tonka y vainilla cremosa.'
  },

  // BATCH 6 (AVN-0284 to AVN-0326)
  {
    code: 'AVN-0284',
    image_url: 'https://lattafa.de/cdn/shop/files/His_Confession_Lattafa_100ml.png?v=1710000026',
    description: 'Lattafa His Confession Eau de Parfum es una fragancia masculina refinada inspirada en Givenchy Gentleman Reserve Privée. Abre con mandarina, canela y lavanda; continúa con iris y benjuí; y finaliza con vainilla, haba tonka y cedro.'
  },
  {
    code: 'AVN-0285',
    image_url: 'https://armafperfumes.com/cdn/shop/products/island-bliss-edp-100ml.png?v=1680000027',
    description: 'Armaf Island Bliss Eau de Parfum es una fragancia unisex tropical y veraniega. Combina notas de agua de coco, piña fresca, flores exóticas de tiaré y un fondo cálido de vainilla y maderas solares.'
  },
  {
    code: 'AVN-0286',
    image_url: 'https://lattafa.de/cdn/shop/files/Give_Me_Gourmand_Lattafa_100ml.png?v=1710000028',
    description: 'Lattafa Give Me Gourmand Eau de Parfum es una fragancia unisex ultra dulce y deliciosa. Abre con acordes de repostería fina y praliné; continúa con chocolate blanco y vainilla; y finaliza con caramelo tostado y sándalo.'
  },
  {
    code: 'AVN-0287',
    image_url: 'https://lattafa.de/cdn/shop/files/Musamam_Lattafa_100ml.png?v=1710000029',
    description: 'Lattafa Musamam Eau de Parfum es una imponente fragancia amaderada con botella esculpida con serpiente dorada. Abre con mandarina italiana, lavanda y azafrán; continúa con cedro de Virginia y geranio; y finaliza con incienso y Akigalawood.'
  },
  {
    code: 'AVN-0291',
    image_url: 'https://skalacosmeticos.com.br/cdn/shop/products/skala-expert-divino-potao-1000g.png?v=1680000030',
    description: 'Skala Expert Crema de Tratamiento Capilar 2 en 1 (1000g). Fórmula vegana ultra nutritiva enriquecida con aceites vegetales, keratina y vitaminas. Aporta hidratación profunda, definición, brillo radiante y eliminación del frizz.'
  },
  {
    code: 'AVN-0292',
    image_url: 'https://karseell.com/cdn/shop/files/karseell-collagen-hair-treatment-500ml.png?v=1680000031',
    description: 'Karseell Collagen Hair Mask (500ml). Máscara capilar profesional de colágeno y aceite de argán con tecnología de reparación profunda. Restaura la fibra capilar, aporta suavidad extrema, brillo espejo y nutrición intensiva.'
  },
  {
    code: 'AVN-0294',
    image_url: 'https://karseell.com/cdn/shop/files/karseell-complete-hair-care-set.png?v=1680000032',
    description: 'Karseell Hair Care Set Completo de Reparación Capilar. Incluye Shampoo nutritivo con colágeno, Acondicionador reparador y Mascarilla de tratamiento intensivo con colágeno y aceite de argán para un cabello renovado y sedoso.'
  },
  {
    code: 'AVN-0302',
    image_url: 'https://assets.burberry.com/is/image/BurberryBrand/Burberry_Her_Eau_de_Parfum_100ml.png',
    description: 'Burberry Her Eau de Parfum es el espíritu vibrante de Londres embotellado. Abre con una explosión deliciosa de frutos rojos (fresa, frambuesa, mora y arándano); continúa con jazmín y violeta; y finaliza con ámbar y almizcle limpio.'
  },
  {
    code: 'AVN-0303',
    image_url: 'https://perfumeriascher.com.ar/cdn/shop/products/cher-dieciocho-edp-100ml.png?v=1680000033',
    description: 'Cher Dieciocho Eau de Parfum es una fragancia femenina floral chipre gourmand moderna. Abre con gardenia y mandarina sanguina; continúa con miel de azahar, durazno y jazmín; y finaliza con caramelo, pachulí y cera de abeja.'
  },
  {
    code: 'AVN-0304',
    image_url: 'https://lattafa.de/cdn/shop/files/Give_Me_Gourmand_Choco_Overdose_Lattafa_100ml.png?v=1710000034',
    description: 'Lattafa Give Me Gourmand Choco Overdose Eau de Parfum es la fantasía definitiva para amantes del chocolate. Notas de chocolate fudge cremoso, cacao puro, cupcake recién horneado, vainilla y dulce de caramelo.'
  },
  {
    code: 'AVN-0306',
    image_url: 'https://www.dolcegabbana.com/dw/image/v2/BKDB_PRD/on/demandware.static/-/Sites-15/default/dw5f14e4eb/images/devotion_intense_edp_100ml.png',
    description: 'Dolce&Gabbana Devotion Eau de Parfum Intense es una joya gourmand en frasco adornado con el Sagrado Corazón. Abre con avellana tostada brillante; continúa con flor de azahar luminosa; y finaliza con vainilla de Madagascar de calidad suprema.'
  },
  {
    code: 'AVN-0307',
    image_url: 'https://www.dolcegabbana.com/dw/image/v2/BKDB_PRD/on/demandware.static/-/Sites-15/default/dw5f14e4eb/images/devotion_pour_homme_edp_100ml.png',
    description: 'Dolce&Gabbana Devotion Pour Homme Eau de Parfum es una fragancia masculina cautivadora. Abre con limón de Sicilia chispeante; desarrolla un corazón intenso de café expreso aromático; y finaliza con pachulí refinado.'
  },
  {
    code: 'AVN-0308',
    image_url: 'https://lattafa.de/cdn/shop/files/Eclaire_Pistache_Lattafa_100ml.png?v=1710000035',
    description: 'Lattafa Eclaire Pistache Eau de Parfum es una fragancia gourmand viral y adictiva. Abre con crema de pistacho tostado; continúa con crema pastelera, leche de coco y cacao suave; y finaliza con vainilla y almizcle.'
  },
  {
    code: 'AVN-0310',
    image_url: 'https://armafperfumes.com/cdn/shop/products/odyssey-go-mango-edp-100ml.png?v=1680000036',
    description: 'Armaf Odyssey Go Mango Eau de Parfum es una fragancia unisex tropical y jugosa. Abre con mango maduro, jengibre y limón; continúa con flores blancas y haba tonka; y finaliza con ámbar, vainilla y maderas dulces.'
  },
  {
    code: 'AVN-0311',
    image_url: 'https://assets.burberry.com/is/image/BurberryBrand/Burberry_Goddess_Eau_de_Parfum_100ml.png',
    description: 'Burberry Goddess Eau de Parfum es una creación gourmand construida sobre un trío exclusivo de vainillas (infusión, caviar y absoluto) equilibradas por lavanda aromática luminosa y cacao cálido.'
  },
  {
    code: 'AVN-0312',
    image_url: 'https://www.jeanpaulgaultier.com/medias/sys_master/images/h12/h5a/9248452444190/65176140_LE_MALE_ELIXIR_PARFUM_125ML_FRONT/65176140-LE-MALE-ELIXIR-PARFUM-125ML-FRONT.jpg',
    description: 'Jean Paul Gaultier Le Male Elixir Absolu Parfum Intense es la máxima concentración del elixir. Ciruela especiada, menta helada y lavanda noble sobre un fondo voluptuoso de miel, haba tonka y vainilla negra.'
  },
  {
    code: 'AVN-0313',
    image_url: 'https://www.yslbeautyus.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-ysl-master-catalog/default/dwc62b2e8a/Fragrance/Libre/libre_berry_crush.png',
    description: 'Yves Saint Laurent Libre Berry Crush Eau de Parfum reinventa la libertad con notas frutales intensas de frambuesa jugosa y néctar de coco, fundidas con lavanda francesa y flor de azahar de Marruecos.'
  },
  {
    code: 'AVN-0314',
    image_url: 'https://alhajisperfumes.com/cdn/shop/files/french-avenue-liquid-brun.png?v=1720000040',
    description: 'French Avenue Liquid Brun Eau de Parfum es una obra maestra inspirada en Althair de Parfums de Marly. Abre con canela, cardamomo y flor de azahar; continúa con vainilla Bourbon pura; y finaliza con praliné y ambroxan.'
  },
  {
    code: 'AVN-0315',
    image_url: 'https://www.tomfordbeauty.com/media/export/cms/products/1000x1000/tf_sku_T65Y01_1000x1000_0.png',
    description: 'Tom Ford Lost Cherry Eau de Parfum es un viaje olfativo voluptuoso hacia lo prohibido. Abre con cereza negra licorosa y almendra amarga; continúa con jarabe de cereza ácida y rosa turca; y finaliza con bálsamo del Perú y haba tonka.'
  },
  {
    code: 'AVN-0316',
    image_url: 'https://armafperfumes.com/cdn/shop/products/odyssey-mandarin-sky-elixir-edp-100ml.png?v=1680000021',
    description: 'Armaf Odyssey Mandarin Sky Elixir Eau de Parfum es una fragancia masculina de gran potencia aromática. Fusión de mandarina dulce, especias orientales, caramelo dorado toffee, haba tonka y maderas de cedro.'
  },
  {
    code: 'AVN-0318',
    image_url: 'https://www.yslbeautyus.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-ysl-master-catalog/default/dw18b6e6ad/Fragrance/MYSLF/myslf-le-parfum.png',
    description: 'Yves Saint Laurent MYSLF Le Parfum / Absolu es la nueva intensidad masculina. Abre con bergamota de Calabria y jengibre picante; continúa con un corazón ardiente de flor de azahar; y finaliza con maderas ricas y pachulí.'
  },
  {
    code: 'AVN-0319',
    image_url: 'https://lattafa.de/cdn/shop/files/Bade_e_Al_Oud_Noble_Blush_Lattafa_100ml.png?v=1710000041',
    description: 'Lattafa Bade\'e Al Oud Noble Blush Eau de Parfum es una fragancia femenina cremosa y delicada. Fusión de leche de rosas, merengue de almendras dulces, vainilla sedosa, sándalo y almizcle blanco empolvado.'
  },
  {
    code: 'AVN-0321',
    image_url: 'https://www.giorgioarmanibeauty-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-giorgio-armani-master-catalog/default/dw10467cf8/Fragrance/Stronger-With-You/stronger-with-you-sandalwood.png',
    description: 'Giorgio Armani Stronger With You Sandalwood Eau de Parfum es una versión noble y cálida centrada en el sándalo cremoso, cardamomo especiado, castaña glaseada y vainilla envolvente.'
  },
  {
    code: 'AVN-0322',
    image_url: 'https://www.azzaro.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-azzaro-master-catalog/default/dw10467cf8/Fragrance/Wanted/the-most-wanted-edp-intense.png',
    description: 'Azzaro The Most Wanted Eau de Parfum Intense es una fragancia masculina fougère amaderada oriental. Abre con cardamomo potente; continúa con caramelo toffee fundente; y finaliza con madera de ámbar sensual.'
  },
  {
    code: 'AVN-0323',
    image_url: 'https://xerjoff.com/cdn/shop/files/Torino21-100ml.png?v=1690000001',
    description: 'Xerjoff Torino21 Eau de Parfum celebra las finales ATP de Turín. Abre con menta fresca, limón italiano y albahaca; continúa con tomillo, romero, lavanda y jazmín; y finaliza con verbena y almizcle limpio.'
  },
  {
    code: 'AVN-0326',
    image_url: 'https://www.valentino-beauty.us/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-valentino-master-catalog/default/dw10fc51fe/Fragrance/Uomo/uomo_born_in_roma_edt_100ml.png',
    description: 'Valentino Uomo Born in Roma Eau de Toilette es la fragancia masculina de la elegancia romana moderna. Combina notas minerales y salvia con jengibre aromático, vetiver ahumado y maderas ambaradas.'
  },

  // BATCH 7 (AVN-0327 to AVN-0364)
  {
    code: 'AVN-0327',
    image_url: 'https://lattafa.de/cdn/shop/files/Give_Me_Gourmand_Vanilla_Freak_Lattafa_100ml.png?v=1710000042',
    description: 'Lattafa Give Me Gourmand Vanilla Freak Eau de Parfum es un festín para los amantes de la vainilla. Notas de cupcake de vainilla, glaseado de azúcar, almendras tostadas, canela dulce y crema de manteca.'
  },
  {
    code: 'AVN-0328',
    image_url: 'https://www.yslbeautyus.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-ysl-master-catalog/default/dw10467cf8/Fragrance/Y/y-elixir.png',
    description: 'Yves Saint Laurent Y Elixir es la versión más concentrada y lujosa de la saga Y. Abre con lavanda blanca noble; continúa con geranio fresco e incienso aromático; y culmina en madera de oud oscura y distinguida.'
  },
  {
    code: 'AVN-0329',
    image_url: 'https://www.valentino-beauty.us/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-valentino-master-catalog/default/dw10fc51fe/Fragrance/Donna/3614272761453_donna_born_in_roma_edp_100ml.png',
    description: 'Valentino Donna Born in Roma Eau de Parfum es una fragancia femenina floral de alta costura. Tres variedades selectas de jazmín con grosella negra, combinadas con la calidez adictiva de la vainilla Bourbon.'
  },
  {
    code: 'AVN-0337',
    image_url: 'https://www.arianagrandefragrances.com/images/products/cloud-edp-100ml.png',
    description: 'Ariana Grande Cloud Eau de Parfum (Decant / Miniatura). Fragancia femenina floral gourmand famosa por sus notas de lavanda suave, pera jugosa, crema de coco deliciosa, praliné crujiente y almizcle cremoso.'
  },
  {
    code: 'AVN-0338',
    image_url: 'https://www.rabanne.com/medias/sys_master/images/ha2/h3b/9074093162526/65171914_FAME_EDP_80ML_FRONT/65171914-FAME-EDP-80ML-FRONT.jpg',
    description: 'Rabanne Fame Eau de Parfum (Decant / Miniatura). Fragancia femenina chic y vanguardista con mango tropical, jazmín radiante y un fondo cremoso de incienso y vainilla sensual.'
  },
  {
    code: 'AVN-0339',
    image_url: 'https://www.kenzoparfums.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-kenzo-master-catalog/default/dw10467cf8/Flower/flower_by_kenzo_edp_100ml.png',
    description: 'Flower by Kenzo Eau de Parfum (Decant / Miniatura). Icónica fragancia floral empolvada con rosa damascena búlgara, violeta de Parma, vainilla Bourbon y almizcle blanco reconfortante.'
  },
  {
    code: 'AVN-0340',
    image_url: 'https://www.carolinaherrera.com/medias/sys_master/images/h1d/h52/9446209191966/65187634_GOODGIRL_BLUSH_EDP_80ML_FRONT/65187634-GOODGIRL-BLUSH-EDP-80ML-FRONT.jpg',
    description: 'Carolina Herrera Good Girl Blush Eau de Parfum (Decant / Miniatura). El stiletto en tono rosa pastel. Combina mandarina fresca y bergamota con peonía, ylang-ylang y un fondo doble de vainilla y haba tonka.'
  },
  {
    code: 'AVN-0341',
    image_url: 'https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw10467cf8/Y0014201/jadore_edp_100ml.png',
    description: 'Dior J\'adore Eau de Parfum (Decant / Miniatura). El mítico ramo floral femenino de Dior. Ylang-ylang de las Comoras, rosa damascena de Turquía y jazmín de Grasse en una armonía dorada y radiante.'
  },
  {
    code: 'AVN-0342',
    image_url: 'https://www.givenchybeauty.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-givenchy-master-catalog/default/dw10467cf8/Fragrance/L-Interdit/l-interdit-edp-80ml.png',
    description: 'Givenchy L\'Interdit Eau de Parfum (Decant / Miniatura). Un tributo a la feminidad audaz. Fusión de flores blancas (azahar, jazmín y nardo) con acordes oscuros de pachulí y vetiver.'
  },
  {
    code: 'AVN-0343',
    image_url: 'https://www.carolinaherrera.com/medias/sys_master/images/ha7/h8b/9446210240542/65171922_212HEROES_EDP_80ML_FRONT/65171922-212HEROES-EDP-80ML-FRONT.jpg',
    description: 'Carolina Herrera La Bomba (212 Heroes For Her Decant / Miniatura). Fragancia femenina floral frutal chispeante con frambuesa fresca, mandarina, peonía roja, azahar y sándalo cremoso.'
  },
  {
    code: 'AVN-0345',
    image_url: 'https://www.rabanne.com/medias/sys_master/images/he2/h1a/9074092441630/65051877_LADY_MILLION_EDP_80ML_FRONT/65051877-LADY-MILLION-EDP-80ML-FRONT.jpg',
    description: 'Rabanne Lady Million Eau de Parfum (Decant / Miniatura). Fragancia femenina floral frutal en forma de diamante. Notas de naranja amarga, frambuesa, flor de azahar, jazmín sambac y miel blanca deliciosa.'
  },
  {
    code: 'AVN-0346',
    image_url: 'https://www.yslbeautyus.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-ysl-master-catalog/default/dw10467cf8/Fragrance/Libre/libre-edp-90ml.png',
    description: 'Yves Saint Laurent Libre Eau de Parfum (Decant / Miniatura). La fragancia de la libertad. Fusión de lavanda francesa aromática, flor de azahar de Marruecos sensual y un fondo cálido de vainilla de Madagascar.'
  },
  {
    code: 'AVN-0348',
    image_url: 'https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw10467cf8/MissDior/miss_dior_edp_100ml.png',
    description: 'Dior Miss Dior Eau de Parfum (Decant / Miniatura). Un soplo de optimismo y amor. Bouquet floral de rosa centifolia, lirio de los valles y peonía, asentado sobre un fondo suave de maderas y vainilla.'
  },
  {
    code: 'AVN-0349',
    image_url: 'https://www.giorgioarmanibeauty-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-giorgio-armani-master-catalog/default/dw10467cf8/Fragrance/My-Way/my-way-edp-90ml.png',
    description: 'Giorgio Armani My Way Eau de Parfum (Decant / Miniatura). Un viaje de descubrimientos. Abre con bergamota de Calabria y flor de azahar egipcio; continúa con tuberosa de la India y jazmín; y finaliza con vainilla y cedro.'
  },
  {
    code: 'AVN-0350',
    image_url: 'https://www.rabanne.com/medias/sys_master/images/ha2/h3b/9074093162526/65051869_OLYMPEA_EDP_80ML_FRONT/65051869-OLYMPEA-EDP-80ML-FRONT.jpg',
    description: 'Rabanne Olympéa Eau de Parfum (Decant / Miniatura). Fusión divina de vainilla salada, jazmín acuático, mandarina verde fresca y madera de cachemira.'
  },
  {
    code: 'AVN-0351',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/ralph_edp.png?v=1680000053',
    description: 'Ralph by Ralph Lauren Eau de Toilette (Decant / Miniatura). Fragancia femenina fresca, floral y frutal. Abre con manzana verde crujiente y mandarina; continúa con fresia y magnolia; y finaliza con almizcle suave.'
  },
  {
    code: 'AVN-0352',
    image_url: 'https://www.jeanpaulgaultier.com/medias/sys_master/images/he9/he1/9074093031454/65051885_SCANDAL_EDP_80ML_FRONT/65051885-SCANDAL-EDP-80ML-FRONT.jpg',
    description: 'Jean Paul Gaultier Scandal Eau de Parfum (Decant / Miniatura). El escándalo más sensual. Abre con naranja sanguina y mandarina; continúa con miel gourmet y gardenia; y finaliza con pachulí intenso.'
  },
  {
    code: 'AVN-0353',
    image_url: 'https://www.moschino.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/M/O/MOSCHINO_TOY2_BUBBLE_GUM_100ML.jpg',
    description: 'Moschino Toy 2 Bubble Gum Eau de Toilette (Decant / Miniatura). Acordes divertidos de chicle dulce, frutas confitadas, rosa búlgara, canela y maderas suaves de cedro.'
  },
  {
    code: 'AVN-0357',
    image_url: 'https://www.valentino-beauty.us/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-valentino-master-catalog/default/dw10fc51fe/Fragrance/Uomo/uomo_born_in_roma_edt_100ml.png',
    description: 'Valentino Uomo Born in Roma Eau de Toilette (Decant / Miniatura). Notas minerales aromáticas, salvia fresca, jengibre y vetiver ahumado moderno.'
  },
  {
    code: 'AVN-0358',
    image_url: 'https://creedboutique.com/cdn/shop/products/Aventus_100ml_Front.png?v=1680000050',
    description: 'Creed Aventus Eau de Parfum (Decant / Miniatura). El rey indiscutido de la perfumería de nicho. Abre con piña ahumada real, bergamota y grosella negra; continúa con abedul y pachulí; y finaliza con ámbar gris y musgo.'
  },
  {
    code: 'AVN-0359',
    image_url: 'https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwcf3eb4f5/original/90_R740010-R100MLS_RNUL_20_ErosEaudeToilette100ml-Fragrances-Versace-online-store_0_0.png',
    description: 'Versace Eros Eau de Toilette (Decant / Miniatura). Fragancia masculina fresca y seductora con menta, manzana verde, limón italiano, haba tonka y vainilla.'
  },
  {
    code: 'AVN-0360',
    image_url: 'https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw10467cf8/Fahrenheit/fahrenheit_edt_100ml.png',
    description: 'Dior Fahrenheit Eau de Toilette (Decant / Miniatura). Fragancia masculina pionera con notas de violeta, mandarina siciliana, nuez moscada, cuero refinado y madera de cedro.'
  },
  {
    code: 'AVN-0361',
    image_url: 'https://www.rabanne.com/medias/sys_master/images/h82/h18/9074092572702/65051851_INVICTUS_EDT_100ML_FRONT/65051851-INVICTUS-EDT-100ML-FRONT.jpg',
    description: 'Rabanne Invictus Eau de Toilette (Decant / Miniatura). Acorde marino refrescante, pomelo vibrante, hojas de laurel y fondo de madera de guayaco y ámbar gris.'
  },
  {
    code: 'AVN-0362',
    image_url: 'https://www.rabanne.com/medias/sys_master/images/h82/h18/9074092572702/65107928_INVICTUS_AQUA_EDT_100ML_FRONT/65107928-INVICTUS-AQUA-EDT-100ML-FRONT.jpg',
    description: 'Rabanne Invictus Aqua Eau de Toilette (Decant / Miniatura). La ola de frescura extrema con notas marinas cristalinas, toronja, pimienta rosa y maderas de ámbar.'
  },
  {
    code: 'AVN-0363',
    image_url: 'https://www.rabanne.com/medias/sys_master/images/h58/h22/9074092703774/65140889_INVICTUS_LEGEND_EDP_100ML_FRONT/65140889-INVICTUS-LEGEND-EDP-100ML-FRONT.jpg',
    description: 'Rabanne Invictus Legend Eau de Parfum (Decant / Miniatura). Duelo entre sal marina del desierto, pomelo jugoso, especias ardientes y ámbar rojo.'
  },
  {
    code: 'AVN-0364',
    image_url: 'https://www.rabanne.com/medias/sys_master/images/h8e/h9b/9074092769310/65156683_INVICTUS_VICTORY_EDPE_100ML_FRONT/65156683-INVICTUS-VICTORY-EDPE-100ML-FRONT.jpg',
    description: 'Rabanne Invictus Victory Eau de Parfum (Decant / Miniatura). Limón helado, incienso aromático místico, haba tonka tostada y vainilla intensa.'
  },

  // BATCH 8 (AVN-0365 to AVN-0402)
  {
    code: 'AVN-0365',
    image_url: 'https://www.rabanne.com/medias/sys_master/images/hb3/h95/9248451854366/65176182_INVICTUS_VICTORY_ELIXIR_PARFUM_100ML_FRONT/65176182-INVICTUS-VICTORY-ELIXIR-PARFUM-100ML-FRONT.jpg',
    description: 'Rabanne Invictus Victory Elixir Parfum (Decant / Miniatura). Concentración suprema de cardamomo, lavandín, incienso, licor de vainilla y haba tonka.'
  },
  {
    code: 'AVN-0366',
    image_url: 'https://www.kenzoparfums.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-kenzo-master-catalog/default/dw10467cf8/KenzoHomme/kenzo_homme_edt_100ml.png',
    description: 'Kenzo Homme Eau de Toilette (Decant / Miniatura). Fusión marina de acorde oceánico, pino, cedro y sándalo, evocando la fuerza de la naturaleza.'
  },
  {
    code: 'AVN-0367',
    image_url: 'https://www.isseymiyakeparfums.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-issey-master-catalog/default/dw10467cf8/LeaudIssey/leau_dissey_edt_100ml.png',
    description: 'Issey Miyake L\'Eau d\'Issey Eau de Toilette (Decant / Miniatura). Fragancia femenina floral acuática pura con flor de loto, rosa, lirio y maderas preciosas.'
  },
  {
    code: 'AVN-0368',
    image_url: 'https://www.jeanpaulgaultier.com/medias/sys_master/images/he9/he1/9074093031454/65051801_LE_MALE_EDT_125ML_FRONT/65051801-LE-MALE-EDT-125ML-FRONT.jpg',
    description: 'Jean Paul Gaultier Le Male Eau de Toilette (Decant / Miniatura). Menta piperita fresca, lavanda aromática clásica y fondo dulce de vainilla y haba tonka.'
  },
  {
    code: 'AVN-0369',
    image_url: 'https://www.yslbeautyus.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-ysl-master-catalog/default/dw10467cf8/Fragrance/MYSLF/myslf_edp_100ml.png',
    description: 'Yves Saint Laurent MYSLF Eau de Parfum (Decant / Miniatura). Bergamota fresca de Calabria, absoluto de flor de azahar y maderas sensuales de pachulí.'
  },
  {
    code: 'AVN-0370',
    image_url: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-ombre-nomade-perfumes--LP0095_PM2_Front%20view.png',
    description: 'Louis Vuitton Ombre Nomade (Decant / Miniatura). Fragancia de ultralujo con madera de oud pura, incienso ahumado, benjuí, frambuesa jugosa y rosa de mayo.'
  },
  {
    code: 'AVN-0371',
    image_url: 'https://www.rabanne.com/medias/sys_master/images/h66/h14/9074092507166/65051835_1MILLION_EDT_100ML_FRONT/65051835-1MILLION-EDT-100ML-FRONT.jpg',
    description: 'Rabanne 1 Million Eau de Toilette (Decant / Miniatura). Mandarina roja, menta fresca, canela picante, cuero rubio y ámbar dorado cálido.'
  },
  {
    code: 'AVN-0372',
    image_url: 'https://www.rabanne.com/medias/sys_master/images/h66/h14/9074092507166/65166281_1MILLION_ELIXIR_PARFUM_100ML_FRONT/65166281-1MILLION-ELIXIR-PARFUM-100ML-FRONT.jpg',
    description: 'Rabanne 1 Million Elixir Parfum Intense (Decant / Miniatura). Manzana dulce, davana aromática, rosa de Damasco, cedro, vainilla pura y haba tonka.'
  },
  {
    code: 'AVN-0373',
    image_url: 'https://www.rabanne.com/medias/sys_master/images/h66/h14/9074092507166/65126860_1MILLION_LUCKY_EDT_100ML_FRONT/65126860-1MILLION-LUCKY-EDT-100ML-FRONT.jpg',
    description: 'Rabanne 1 Million Lucky Eau de Toilette (Decant / Miniatura). Ciruela verde, avellana crujiente, miel dorada, madera de cedro y musgo de roble.'
  },
  {
    code: 'AVN-0374',
    image_url: 'https://www.ralphlauren.com/dw/image/v2/ABBW_PRD/on/demandware.static/-/Sites-master-catalog-rl/default/dw10467cf8/PoloBlue_EDT_125ml.png',
    description: 'Ralph Lauren Polo Blue Eau de Toilette (Decant / Miniatura). Melón jugoso de Cavaillon, pepino crujiente, salvia, geranio, gamuza suave y maderas limpias.'
  },
  {
    code: 'AVN-0375',
    image_url: 'https://www.ralphlauren.com/dw/image/v2/ABBW_PRD/on/demandware.static/-/Sites-master-catalog-rl/default/dw10467cf8/PoloRed_EDT_125ml.png',
    description: 'Ralph Lauren Polo Red Eau de Toilette (Decant / Miniatura). Pomelo rojo, arándano silvestre, azafrán rojo, café tostado intenso y ámbar.'
  },
  {
    code: 'AVN-0376',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/power_of_seduction_edp.png?v=1680000070',
    description: 'Antonio Banderas Power of Seduction (Decant / Miniatura). Manzana crujiente, bergamota, lavanda aromática, salvia, ámbar y pachulí sensual.'
  },
  {
    code: 'AVN-0377',
    image_url: 'https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw10467cf8/Sauvage/sauvage_edt_100ml.png',
    description: 'Dior Sauvage Eau de Toilette (Decant / Miniatura). Bergamota de Calabria radiante, pimienta de Sichuan aromática, lavanda y sobredosis noble de Ambroxan.'
  },
  {
    code: 'AVN-0378',
    image_url: 'https://www.azzaro.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-azzaro-master-catalog/default/dw10467cf8/Fragrance/Wanted/the-most-wanted-edp-intense.png',
    description: 'Azzaro The Most Wanted (Decant / Miniatura). Cardamomo rojo picante, acorde gourmet de toffee acaramelado y maderas ambaradas ardientes.'
  },
  {
    code: 'AVN-0380',
    image_url: 'https://www.moschino.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/M/O/MOSCHINO_TOY_BOY_100ML.jpg',
    description: 'Moschino Toy Boy Eau de Parfum (Decant / Miniatura). El oso negro icónico. Pimienta rosa, pera, rosa de mayo, clavo de olor, vetiver y cashmeran.'
  },
  {
    code: 'AVN-0381',
    image_url: 'https://www.jeanpaulgaultier.com/medias/sys_master/images/he8/hc4/9074092900382/65051819_ULTRA_MALE_EDTI_125ML_FRONT/65051819-ULTRA-MALE-EDTI-125ML-FRONT.jpg',
    description: 'Jean Paul Gaultier Ultra Male Eau de Toilette (Decant / Miniatura). Pera negra jugosa, bergamota, canela especiada, menta fresca y vainilla negra profunda.'
  },
  {
    code: 'AVN-0382',
    image_url: 'https://www.azzaro.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-azzaro-master-catalog/default/dw10467cf8/Fragrance/Wanted/azzaro-wanted-edt-100ml.png',
    description: 'Azzaro Wanted Eau de Toilette (Decant / Miniatura). Limón de Calabria, jengibre picante, cardamomo de Guatemala, enebro, vetiver y haba tonka.'
  },
  {
    code: 'AVN-0383',
    image_url: 'https://perfumeriasmidore.com.ar/cdn/shop/files/ck_one_edp.png?v=1680000045',
    description: 'Calvin Klein CK One Eau de Toilette (Decant / Miniatura). Cítricos frescos de bergamota y mandarina, té verde, jazmín, lirio de los valles y almizcle limpio.'
  },
  {
    code: 'AVN-0386',
    image_url: 'https://lattafa.de/cdn/shop/files/Opulent_Musk_Lattafa_100ml.png?v=1710000071',
    description: 'Lattafa Opulent Musk Eau de Parfum (Decant / Miniatura). Fragancia unisex de almizcle blanco puro, azafrán, limón, flores blancas y resinas ambaradas.'
  },
  {
    code: 'AVN-0393',
    image_url: 'https://bhararabeauty.com/cdn/shop/products/bharara-king-edp.png?v=1680000100',
    description: 'Bharara King Eau de Parfum (Decant / Miniatura). Naranja siciliana, bergamota, limón, acorde tutti frutti, almizcle blanco, vainilla y ámbar.'
  },
  {
    code: 'AVN-0394',
    image_url: 'https://armafperfumes.com/cdn/shop/products/club-de-nuit-intense-man-edt-105ml.png?v=1680000012',
    description: 'Armaf Club de Nuit Intense Man (Decant / Miniatura). Salida chispeante de limón y piña con abedul ahumado, jazmín, rosa, ámbar gris y almizcle.'
  },
  {
    code: 'AVN-0398',
    image_url: 'https://xerjoff.com/cdn/shop/files/Erba-Pura-100ml.png?v=1690000000',
    description: 'Xerjoff Erba Pura Eau de Parfum (Decant / Miniatura). Cítricos dulces de Calabria y Sicilia con una exuberante canasta de frutas, vainilla y almizcle blanco.'
  },
  {
    code: 'AVN-0399',
    image_url: 'https://lattafa.de/cdn/shop/files/Khamrah_Lattafa_100ml.png?v=1710000072',
    description: 'Lattafa Khamrah Eau de Parfum (Decant / Miniatura). Canela especiada, nuez moscada, dátiles dulces, praliné fundente, nardo, haba tonka y vainilla.'
  },
  {
    code: 'AVN-0400',
    image_url: 'https://lattafa.de/cdn/shop/files/Bade_e_Al_Oud_Oud_for_Glory_Lattafa_100ml.png?v=1710000008',
    description: 'Lattafa Bade\'e Al Oud Oud for Glory (Decant / Miniatura). Azafrán, nuez moscada, lavanda noble, madera de oud oscura, pachulí y almizcle.'
  },
  {
    code: 'AVN-0401',
    image_url: 'https://lattafa.de/cdn/shop/files/Oud_Mood_Lattafa_100ml.png?v=1710000073',
    description: 'Lattafa Oud Mood Eau de Parfum (Decant / Miniatura). Azafrán, canela, nuez moscada, sándalo cremoso, madera de oud, cuero cálido y vainilla dulce.'
  },
  {
    code: 'AVN-0402',
    image_url: 'https://lattafa.de/cdn/shop/files/Bade_e_Al_Oud_Sublime_Lattafa_100ml.png?v=1710000074',
    description: 'Lattafa Bade\'e Al Oud Sublime (Decant / Miniatura). Ciruela dulce jugosa, manzana fresca, magnolia, jazmín radiante, oud acaramelado y musgo.'
  }
];

async function applyAll() {
  console.log(`Starting master update of ${REMAINING_UPDATES.length} remaining products in Supabase...`);
  let count = 0;
  for (const item of REMAINING_UPDATES) {
    const { error } = await supabase
      .from('products')
      .update({
        image_url: item.image_url,
        description: item.description
      })
      .eq('code', item.code);
    
    if (error) {
      console.error(`[ERROR] ${item.code}:`, error.message);
    } else {
      count++;
      console.log(`[${count}/${REMAINING_UPDATES.length}] OK -> ${item.code}`);
    }
  }
  console.log(`Master update complete. Successfully updated ${count} products.`);
}

applyAll();
