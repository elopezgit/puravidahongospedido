-- ============================================================
-- SEED AVENTUS — Perfumería Premium
-- ============================================================
-- El paraíso de los perfumes 👑 · 8 años junto a vos 🤍
-- San Miguel de Tucumán · Envíos a todo el país · Mayor y menor
--
-- ⚠️ BASE DE PRODUCCIÓN YA EXISTENTE (multi-tenant, otros clientes):
--    Ejecutar en la consola SQL de Supabase:
--      1. SOLO este archivo (NO ejecutar schema.sql: las tablas ya existen
--         y los demás tenants NO deben tocarse).
--      2. (Opcional) migracion_alias_cbu.sql solo si se quiere guardar
--         alias/CBU desde el panel admin.
--
-- El seed es idempotente y aislado: crea/actualiza SOLO el tenant
-- "aventus" (slug) y borra/reinserta únicamente sus categorías,
-- banners y productos. No toca datos de otros clientes.
--
-- NOTA: Los precios son valores de referencia ARS (editar según lista real).
-- ============================================================

DO $$
DECLARE
  v_emp_id uuid;
BEGIN
  -- ============================================================
  -- 1. EMPRESA: AVENTUS Perfumería
  -- NOTA: Columnas adaptadas a la DB real de producción (no tiene
  --       alias/cbu en empresas; el frontend usa "aventus.perfumeria"
  --       como alias por defecto para transferencias).
  -- ============================================================
  INSERT INTO empresas (slug, name, phone, instagram_url, maps_url, logo_url, is_active)
  VALUES
    ('aventus', 'AVENTUS Perfumería', '5493816778749',
     'https://www.instagram.com/aventus.perfumeria', NULL,
     '/img/logo/aventus_perfumeria.jpg', true)
  ON CONFLICT (slug) DO UPDATE SET
    name = EXCLUDED.name,
    phone = EXCLUDED.phone,
    instagram_url = EXCLUDED.instagram_url,
    logo_url = EXCLUDED.logo_url;

  SELECT id INTO v_emp_id FROM empresas WHERE slug = 'aventus' LIMIT 1;

  -- ============================================================
  -- 2. LIMPIAR datos previos del tenant AVENTUS
  -- ============================================================
  DELETE FROM products  WHERE empresa_id = v_emp_id;
  DELETE FROM banners   WHERE empresa_id = v_emp_id;
  DELETE FROM categories WHERE empresa_id = v_emp_id;

  -- ============================================================
  -- 3. CATEGORÍAS (6)
  -- ============================================================
  DECLARE
    cat_hombres_id uuid;
    cat_mujeres_id uuid;
    cat_arabes_id uuid;
    cat_nacionales_id uuid;
    cat_sets_id uuid;
    cat_tester_id uuid;
  BEGIN
    INSERT INTO categories (empresa_id, name, icon, sort_order) VALUES
      (v_emp_id, 'Perfumes de Hombre', '🧔', 1),
      (v_emp_id, 'Perfumes de Mujer', '👩', 2),
      (v_emp_id, 'Árabes & Premium', '🕌', 3),
      (v_emp_id, 'Nacionales & Esencia', '🇦🇷', 4),
      (v_emp_id, 'Sets & Combos', '🎁', 5),
      (v_emp_id, 'Tester & Ofertas', '💎', 6);

    SELECT id INTO cat_hombres_id FROM categories WHERE empresa_id = v_emp_id AND name = 'Perfumes de Hombre' LIMIT 1;
    SELECT id INTO cat_mujeres_id FROM categories WHERE empresa_id = v_emp_id AND name = 'Perfumes de Mujer' LIMIT 1;
    SELECT id INTO cat_arabes_id FROM categories WHERE empresa_id = v_emp_id AND name = 'Árabes & Premium' LIMIT 1;
    SELECT id INTO cat_nacionales_id FROM categories WHERE empresa_id = v_emp_id AND name = 'Nacionales & Esencia' LIMIT 1;
    SELECT id INTO cat_sets_id FROM categories WHERE empresa_id = v_emp_id AND name = 'Sets & Combos' LIMIT 1;
    SELECT id INTO cat_tester_id FROM categories WHERE empresa_id = v_emp_id AND name = 'Tester & Ofertas' LIMIT 1;

    -- ============================================================
    -- 4. BANNERS (3)
    -- ============================================================
    INSERT INTO banners (empresa_id, image_url, title, subtitle, is_active, sort_order) VALUES
      (v_emp_id, '/img/Banner/banner1.svg', 'EL PARAÍSO DE LOS PERFUMES', '8 años junto a vos 🤍', true, 1),
      (v_emp_id, '/img/Banner/banner2.svg', 'PERFUMES ÁRABES PREMIUM', 'Lattafa · Armaf · Afnan · Al Haramain', true, 2),
      (v_emp_id, '/img/Banner/banner3.svg', 'ENVÍOS A TODO EL PAÍS', 'Ventas por mayor y menor · WhatsApp', true, 3);

    -- ============================================================
    -- 5. PRODUCTOS — PERFUMES DE HOMBRE (8)
    -- ============================================================
    INSERT INTO products (empresa_id, category_id, name, description, price, image_url, code, sort_order, is_active) VALUES
    (v_emp_id, cat_hombres_id, '1 Million Eau de Toilette 100ml — Paco Rabanne',
     'El éxito de Paco Rabanne: explosivo, elegante y adictivo. Notas de cuero, canela y ámbar que lo convirtieron en un ícono mundial. Perfecto para salir de noche y dejar huella.',
     148000, '/img/Perfumes/hombre.svg', 'HOM-001', 1, true),
    (v_emp_id, cat_hombres_id, 'Invictus Victory Eau de Parfum 100ml — Paco Rabanne',
     'El campeón que evolucionó. Café, vainilla y miel sobre una base ambarada: vibrante, victorioso e irresistible. La fragancia de los que no se rinden.',
     162000, '/img/Perfumes/hombre.svg', 'HOM-002', 2, true),
    (v_emp_id, cat_hombres_id, 'Sauvage Eau de Parfum 100ml — Dior',
     'El rugido de la noche estrellada. Bergamota de Calabria y pimienta sobre un fondo mineral y ambarado. Fresco, salvaje y absolutamente magnético.',
     176000, '/img/Perfumes/hombre.svg', 'HOM-003', 3, true),
    (v_emp_id, cat_hombres_id, 'Bleu de Chanel Eau de Parfum 100ml — Chanel',
     'La elegancia absoluta en un frasco. Cítricos frescos, incienso y madera de cedro: sofisticado, versátil y con clase. El favorito de los que saben.',
     182000, '/img/Perfumes/hombre.svg', 'HOM-004', 4, true),
    (v_emp_id, cat_hombres_id, 'Acqua di Giò Profondo Parfum 100ml — Giorgio Armani',
     'La profundidad del mar Mediterráneo. Agua marina, romero y minerales sobre una base de pachulí y ámbar. Fresco, masculino y con mucho carácter.',
     168000, '/img/Perfumes/hombre.svg', 'HOM-005', 5, true),
    (v_emp_id, cat_hombres_id, 'The One for Men Eau de Parfum 100ml — Dolce & Gabbana',
     'Seducción pura. Tabaco, ámbar y especias cálidas: una fragancia íntima y envolvente pensada para las noches especiales. Elegancia italiana en estado puro.',
     138000, '/img/Perfumes/hombre.svg', 'HOM-006', 6, true),
    (v_emp_id, cat_hombres_id, '212 VIP Men Eau de Parfum 80ml — Carolina Herrera',
     'El glamour de Nueva York en una fragancia. Ron, café y cuero sobre un fondo ambarado: potente, festiva y muy sensual. Para los que viven la noche VIP.',
     158000, '/img/Perfumes/hombre.svg', 'HOM-007', 7, true),
    (v_emp_id, cat_hombres_id, 'Hugo Boss Bottled Eau de Toilette 100ml — Boss',
     'El clásico elegante de Boss. Manzana, ciruela y canela sobre cedro y oliva: cálido, varonil y siempre acertado. Ideal para el día a día con estilo.',
     122000, '/img/Perfumes/hombre.svg', 'HOM-008', 8, true);

    -- ============================================================
    -- 5b. PRODUCTOS — PERFUMES DE MUJER (8)
    -- ============================================================
    INSERT INTO products (empresa_id, category_id, name, description, price, image_url, code, sort_order, is_active) VALUES
    (v_emp_id, cat_mujeres_id, 'Good Girl Eau de Parfum 80ml — Carolina Herrera',
     'Tacón de caramelo, jazmín y cacao: la dualidad perfecta entre lo dulce y lo poderoso. Una fragancia que no pasa desapercibida, para mujeres con actitud.',
     158000, '/img/Perfumes/mujer.svg', 'MUJ-001', 10, true),
    (v_emp_id, cat_mujeres_id, 'Alien Eau de Parfum 60ml — Mugler',
     'Un universo propio. Jazmín sambac sobre ámbar gris y maderas blancas: intensa, misteriosa y adictiva. La fragancia de las mujeres que no se comparan con nadie.',
     148000, '/img/Perfumes/mujer.svg', 'MUJ-002', 11, true),
    (v_emp_id, cat_mujeres_id, 'La Vie Est Belle Eau de Parfum 75ml — Lancôme',
     'La sonrisa hecha perfume. Iris, praliné de almendras y vainilla gourmand: dulce, luminosa y llena de vida. La elección de millones de mujeres en el mundo.',
     155000, '/img/Perfumes/mujer.svg', 'MUJ-003', 12, true),
    (v_emp_id, cat_mujeres_id, 'Black Opium Eau de Parfum 50ml — Yves Saint Laurent',
     'El lado oscuro y adictivo de YSL. Café, vainilla y flor de azahar: una fragancia intensa, sensual y moderna. Para noches que se vuelven inolvidables.',
     152000, '/img/Perfumes/mujer.svg', 'MUJ-004', 13, true),
    (v_emp_id, cat_mujeres_id, 'Coco Mademoiselle Eau de Parfum 100ml — Chanel',
     'La elegancia moderna de Chanel. Naranja, rosa y pachulí: fresca, femenina y sofisticada. El perfume que toda mujer clásica y actual sueña tener.',
     185000, '/img/Perfumes/mujer.svg', 'MUJ-005', 14, true),
    (v_emp_id, cat_mujeres_id, 'Si Eau de Parfum 75ml — Giorgio Armani',
     'La fuerza de la mujer contemporánea. Grosella negra, rosa de mayo y vainilla: elegante, delicada y con carácter. Un "sí" que nunca se olvida.',
     150000, '/img/Perfumes/mujer.svg', 'MUJ-006', 15, true),
    (v_emp_id, cat_mujeres_id, 'Flowerbomb Eau de Parfum 100ml — Viktor & Rolf',
     'Una explosión floral. Jazmín, rosa y osmanthus sobre almizcle y pachulí: exuberante, femenina y romántica. Imposible pasar desapercibida.',
     160000, '/img/Perfumes/mujer.svg', 'MUJ-007', 16, true),
    (v_emp_id, cat_mujeres_id, 'Miss Dior Eau de Parfum 100ml — Dior',
     'Cuento de hadas en versión moderna. Peonía, rosa de Grasse y madera de cedro: floral, chic y delicadamente empolvada. El clásico que enamora.',
     178000, '/img/Perfumes/mujer.svg', 'MUJ-008', 17, true);-- ============================================================
    -- 5c. PRODUCTOS — ÁRABES & PREMIUM (8)
    -- ============================================================
    INSERT INTO products (empresa_id, category_id, name, description, price, image_url, code, sort_order, is_active) VALUES
    (v_emp_id, cat_arabes_id, 'Fakhar Black Eau de Parfum 100ml — Lattafa',
     'Elegancia árabe moderna: lavanda, geranio y vainilla sobre madera de sándalo. Sofisticada, limpia y con gran proyección. El sándalo se roba todo el protagonismo.',
     45000, '/img/Perfumes/arabes.svg', 'ARA-001', 20, true),
    (v_emp_id, cat_arabes_id, 'Khamrah Eau de Parfum 100ml — Lattafa',
     'El betseller árabe del momento. Canela, dátil y vainilla con tonos de ron y haba tonka: dulce, cálido y perfecto para el invierno. Adictivo de principio a fin.',
     58000, '/img/Perfumes/arabes.svg', 'ARA-002', 21, true),
    (v_emp_id, cat_arabes_id, 'Yara Eau de Parfum 100ml — Lattafa',
     'Dulzura femenina con alma árabe. Frutos rojos, orquídea y vainilla cremosa con un toque de almizcle: femenino, delicado y muy agradable. El favorito de las argentinas.',
     48000, '/img/Perfumes/arabes.svg', 'ARA-003', 22, true),
    (v_emp_id, cat_arabes_id, 'Club de Nuit Intense Man Eau de Parfum 105ml — Armaf',
     'La bestia de la perfumería árabe. Limón, piña y abedul con un fondo ambarado: potente, ácida y con una proyección legendaria. Calidad premium a precio árabe.',
     52000, '/img/Perfumes/arabes.svg', 'ARA-004', 23, true),
    (v_emp_id, cat_arabes_id, 'Asad Eau de Parfum 100ml — Lattafa',
     'Frescura especiada con alma de león. Pimienta negra, café y tabaco sobre vainilla y ámbar: masculino, moderno y elegante. Un caballero árabe en frasco.',
     42000, '/img/Perfumes/arabes.svg', 'ARA-005', 24, true),
    (v_emp_id, cat_arabes_id, 'Oud 24 Hours Eau de Parfum 100ml — Al Haramain',
     'El lujo del oud. Miel, ámbar y madera de oud con tonos de azafrán: intensa, costosa y majestuosa. Para los que buscan dejar una estela de realeza.',
     56000, '/img/Perfumes/arabes.svg', 'ARA-006', 25, true),
    (v_emp_id, cat_arabes_id, 'Supremacy Silver Eau de Parfum 100ml — Afnan',
     'Frescura que conquista. Piña, bergamota y notas marinas con un fondo de ámbar y madera: limpio, poderoso y sorprendentemente elegante. Calidad árabe premium.',
     49000, '/img/Perfumes/arabes.svg', 'ARA-007', 26, true),
    (v_emp_id, cat_arabes_id, 'Oud & Rose — Esencia Árabe 50ml — Selección Aventus',
     'Nuestra selección exclusiva de esencia árabe: oud ahumado y rosa de Damasco sobre ámbar. Alta concentración, gotas que duran todo el día. Perfecta para revender.',
     38000, '/img/Perfumes/arabes.svg', 'ARA-008', 27, true);

    -- ============================================================
    -- 5d. PRODUCTOS — NACIONALES & ESENCIA (6)
    -- ============================================================
    INSERT INTO products (empresa_id, category_id, name, description, price, image_url, code, sort_order, is_active) VALUES
    (v_emp_id, cat_nacionales_id, 'Deseo para Él Eau de Toilette 100ml — Avon',
     'El clásico masculino de Avon. Notas cítricas y amaderadas con un toque especiado: fresco, confiable y siempre accesible. Calidad nacional de confianza.',
     28000, '/img/Perfumes/nacionales.svg', 'NAC-001', 30, true),
    (v_emp_id, cat_nacionales_id, 'Far Away Eau de Parfum 50ml — Avon',
     'Un viaje a oriente. Ámbar, especias y flores exóticas: cálida, exótica y muy presente. Una de las favoritas entre las mujeres que aman las fragancias intensas.',
     32000, '/img/Perfumes/nacionales.svg', 'NAC-002', 31, true),
    (v_emp_id, cat_nacionales_id, 'Unique Homme Eau de Parfum 100ml',
     'Perfumería nacional premium. Bergamota y pimienta con fondo de cedro y ámbar: fresco, elegante y sorprendentemente duradero. El mejor costo-beneficio del catálogo.',
     24000, '/img/Perfumes/nacionales.svg', 'NAC-003', 32, true),
    (v_emp_id, cat_nacionales_id, 'Mujer Elegance Eau de Parfum 100ml — De Muriel',
     'Floral frutal con carácter: peonía, grosella y vainilla cremosa. Femenina, luminosa y perfecta para el día. Perfumería argentina con estándar internacional.',
     22000, '/img/Perfumes/nacionales.svg', 'NAC-004', 33, true),
    (v_emp_id, cat_nacionales_id, 'Esencia Vainilla & Ámbar 50ml — Selección Aventus',
     'Nuestra esencia más vendida. Vainilla bourbon, ámbar y haba tonka: dulce, cálida y compacta. Ideal para el día a día, para combinar o para revender.',
     18000, '/img/Perfumes/nacionales.svg', 'NAC-005', 34, true),
    (v_emp_id, cat_nacionales_id, 'Árabe Premium — Esencia 30ml — Selección Aventus',
     'La puerta de entrada al mundo árabe. Concentración altísima en frasco chico: jazmín, ámbar y almizcle. Perfecta para probar, regalar o vender por mayor.',
     16000, '/img/Perfumes/nacionales.svg', 'NAC-006', 35, true);

    -- ============================================================
    -- 5e. PRODUCTOS — SETS & COMBOS (4)
    -- ============================================================
    INSERT INTO products (empresa_id, category_id, name, description, price, image_url, code, sort_order, is_active) VALUES
    (v_emp_id, cat_sets_id, 'Combo 2x1 ¡Elegís Vos! (2 x 50ml árabes)',
     'Elegí 2 fragancias árabes de 50ml de nuestra selección y llevá las dos al mejor precio. Ideal para probar, combinar o armar tu propio regalo.',
     59000, '/img/Perfumes/sets.svg', 'SET-001', 40, true),
    (v_emp_id, cat_sets_id, 'Set Dúo Hombre: EDT 100ml + Body Spray',
     'El combo completo para el hombre: tu fragancia favorita en EDT 100ml + body spray a juego para durar todo el día. Regalo que nunca falla.',
     98000, '/img/Perfumes/sets.svg', 'SET-002', 41, true),
    (v_emp_id, cat_sets_id, 'Set Dúo Mujer: EDP 50ml + Body Loción',
     'Elegancia completa: EDP 50ml + loción corporal de la misma fragancia para potenciar y cuidar. El regalo perfecto para romper corazones.',
     92000, '/img/Perfumes/sets.svg', 'SET-003', 42, true),
    (v_emp_id, cat_sets_id, 'Kit Viajero: 3 Decants 10ml a elección',
     'Tres miniaturas de 10ml (decants) de las fragancias que elijas: ideal para probar antes de comprar el frasco grande, para viajar o para un regalo original.',
     24000, '/img/Perfumes/sets.svg', 'SET-004', 43, true);

    -- ============================================================
    -- 5f. PRODUCTOS — TESTER & OFERTAS (4)
    -- ============================================================
    INSERT INTO products (empresa_id, category_id, name, description, price, image_url, code, sort_order, is_active) VALUES
    (v_emp_id, cat_tester_id, 'Tester Invictus Eau de Parfum 100ml (Display)',
     'El frasco de exhibición original (sin caja) de Invictus EDP. Mismo perfume 100% original, a un precio mucho menor. Sensacional para consumo personal.',
     98000, '/img/Perfumes/tester.svg', 'TES-001', 50, true),
    (v_emp_id, cat_tester_id, 'Tester Good Girl Eau de Parfum 80ml (Display)',
     'Good Girl versión tester: frasco de exhibición sin caja, mismo perfume original a precio especial. El tacón de caramelo que todas quieren, con descuento.',
     99000, '/img/Perfumes/tester.svg', 'TES-002', 51, true),
    (v_emp_id, cat_tester_id, 'Tester 1 Million Eau de Toilette 100ml (Display)',
     'El clásico de Paco Rabanne en versión tester (sin caja). Cuero, canela y ámbar. Mismo perfume original, el mejor precio de la línea.',
     92000, '/img/Perfumes/tester.svg', 'TES-003', 52, true),
    (v_emp_id, cat_tester_id, 'Oferta Flash: EDP Árabe 100ml a elección',
     'Semana de locos: llevate un EDP árabe de 100ml de nuestra selección a un precio de remate. Stock limitado, cuando se termina se termina.',
     29900, '/img/Perfumes/tester.svg', 'TES-004', 53, true);

  END;
END $$;