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
-- NOTA: Las categorías son LAS 9 REALES del negocio (pasadas por el cliente).
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
    ('aventus', 'AVENTUS Perfumería', '5493815102886',
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
  -- 3. CATEGORÍAS (9 REALES del negocio)
  -- ============================================================
  DECLARE
    cat_arabes_id uuid;
    cat_extractos_id uuid;
    cat_midore_id uuid;
    cat_desodorantes_id uuid;
    cat_onlyyou_id uuid;
    cat_plata_id uuid;
    cat_miniaturas_id uuid;
    cat_tubitos_id uuid;
    cat_pelo_id uuid;
  BEGIN
    INSERT INTO categories (empresa_id, name, icon, sort_order) VALUES
      (v_emp_id, 'Perfumes Árabes',      '🕌', 1),
      (v_emp_id, 'Perfumes Extractos',   '⚗️', 2),
      (v_emp_id, 'Perfumes Midoré',      '🛢️', 3),
      (v_emp_id, 'Desodorantes Árabes',  '💨', 4),
      (v_emp_id, 'Perfumes ONLYYOU',     '💛', 5),
      (v_emp_id, 'Perfumes PLATA',       '🥈', 6),
      (v_emp_id, 'Perfumes Miniaturas',  '🍾', 7),
      (v_emp_id, 'Perfumes Tubitos',     '🧴', 8),
      (v_emp_id, 'Productos de Pelo',    '💇', 9);

    SELECT id INTO cat_arabes_id FROM categories WHERE empresa_id = v_emp_id AND name = 'Perfumes Árabes' LIMIT 1;
    SELECT id INTO cat_extractos_id FROM categories WHERE empresa_id = v_emp_id AND name = 'Perfumes Extractos' LIMIT 1;
    SELECT id INTO cat_midore_id FROM categories WHERE empresa_id = v_emp_id AND name = 'Perfumes Midoré' LIMIT 1;
    SELECT id INTO cat_desodorantes_id FROM categories WHERE empresa_id = v_emp_id AND name = 'Desodorantes Árabes' LIMIT 1;
    SELECT id INTO cat_onlyyou_id FROM categories WHERE empresa_id = v_emp_id AND name = 'Perfumes ONLYYOU' LIMIT 1;
    SELECT id INTO cat_plata_id FROM categories WHERE empresa_id = v_emp_id AND name = 'Perfumes PLATA' LIMIT 1;
    SELECT id INTO cat_miniaturas_id FROM categories WHERE empresa_id = v_emp_id AND name = 'Perfumes Miniaturas' LIMIT 1;
    SELECT id INTO cat_tubitos_id FROM categories WHERE empresa_id = v_emp_id AND name = 'Perfumes Tubitos' LIMIT 1;
    SELECT id INTO cat_pelo_id FROM categories WHERE empresa_id = v_emp_id AND name = 'Productos de Pelo' LIMIT 1;

    -- ============================================================
    -- 4. BANNERS (3)
    -- ============================================================
    INSERT INTO banners (empresa_id, image_url, title, subtitle, is_active, sort_order) VALUES
      (v_emp_id, '/img/Banner/banner1.jpg', 'EL PARAÍSO DE LOS PERFUMES', '8 años junto a vos 🤍', true, 1),
      (v_emp_id, '/img/Banner/banner2.jpg', 'PERFUMES ÁRABES PREMIUM', 'Lattafa · Armaf · Afnan · Al Haramain', true, 2),
      (v_emp_id, '/img/Banner/banner3.jpg', 'ENVÍOS A TODO EL PAÍS', 'Ventas por mayor y menor · WhatsApp', true, 3);

    -- ============================================================
    -- 5. PRODUCTOS (de referencia — se reemplazan con la lista real)
    --    PERFUMES ÁRABES (8)
    -- ============================================================
    INSERT INTO products (empresa_id, category_id, name, description, price, image_url, code, sort_order, is_active) VALUES
    (v_emp_id, cat_arabes_id, 'Fakhar Black Eau de Parfum 100ml — Lattafa',
     'Elegancia árabe moderna: lavanda, geranio y vainilla sobre madera de sándalo. Sofisticada, limpia y con gran proyección. El sándalo se roba todo el protagonismo.',
     45000, '/img/Perfumes/arabes.jpg', 'ARA-001', 1, true),
    (v_emp_id, cat_arabes_id, 'Khamrah Eau de Parfum 100ml — Lattafa',
     'El betseller árabe del momento. Canela, dátil y vainilla con tonos de ron y haba tonka: dulce, cálido y perfecto para el invierno. Adictivo de principio a fin.',
     58000, '/img/Perfumes/arabes.jpg', 'ARA-002', 2, true),
    (v_emp_id, cat_arabes_id, 'Yara Eau de Parfum 100ml — Lattafa',
     'Dulzura femenina con alma árabe. Frutos rojos, orquídea y vainilla cremosa con un toque de almizcle: femenino, delicado y muy agradable. El favorito de las argentinas.',
     48000, '/img/Perfumes/arabes.jpg', 'ARA-003', 3, true),
    (v_emp_id, cat_arabes_id, 'Club de Nuit Intense Man Eau de Parfum 105ml — Armaf',
     'La bestia de la perfumería árabe. Limón, piña y abedul con un fondo ambarado: potente, ácida y con una proyección legendaria. Calidad premium a precio árabe.',
     52000, '/img/Perfumes/arabes.jpg', 'ARA-004', 4, true),
    (v_emp_id, cat_arabes_id, 'Asad Eau de Parfum 100ml — Lattafa',
     'Frescura especiada con alma de león. Pimienta negra, café y tabaco sobre vainilla y ámbar: masculino, moderno y elegante. Un caballero árabe en frasco.',
     42000, '/img/Perfumes/arabes.jpg', 'ARA-005', 5, true),
    (v_emp_id, cat_arabes_id, 'Oud 24 Hours Eau de Parfum 100ml — Al Haramain',
     'El lujo del oud. Miel, ámbar y madera de oud con tonos de azafrán: intensa, costosa y majestuosa. Para los que buscan dejar una estela de realeza.',
     56000, '/img/Perfumes/arabes.jpg', 'ARA-006', 6, true),
    (v_emp_id, cat_arabes_id, 'Supremacy Silver Eau de Parfum 100ml — Afnan',
     'Frescura que conquista. Piña, bergamota y notas marinas con un fondo de ámbar y madera: limpio, poderoso y sorprendentemente elegante. Calidad árabe premium.',
     49000, '/img/Perfumes/arabes.jpg', 'ARA-007', 7, true),
    (v_emp_id, cat_arabes_id, 'Oud & Rose — Esencia Árabe 50ml — Selección Aventus',
     'Nuestra selección exclusiva de esencia árabe: oud ahumado y rosa de Damasco sobre ámbar. Alta concentración, gotas que duran todo el día. Perfecta para revender.',
     38000, '/img/Perfumes/arabes.jpg', 'ARA-008', 8, true);

    -- ============================================================
    -- 5b. PERFUMES EXTRACTOS (2, de referencia)
    -- ============================================================
    INSERT INTO products (empresa_id, category_id, name, description, price, image_url, code, sort_order, is_active) VALUES
    (v_emp_id, cat_extractos_id, 'Esencia Vainilla & Ámbar 50ml — Selección Aventus',
     'Nuestra esencia más vendida. Vainilla bourbon, ámbar y haba tonka: dulce, cálida y compacta. Ideal para el día a día, para combinar o para revender.',
     18000, '/img/Perfumes/extractos.jpg', 'NAC-005', 10, true),
    (v_emp_id, cat_extractos_id, 'Árabe Premium — Esencia 30ml — Selección Aventus',
     'La puerta de entrada al mundo árabe. Concentración altísima en frasco chico: jazmín, ámbar y almizcle. Perfecta para probar, regalar o vender por mayor.',
     16000, '/img/Perfumes/extractos.jpg', 'NAC-006', 11, true);

    -- ============================================================
    -- 5c. PERFUMES MINIATURAS (1, de referencia)
    -- ============================================================
    INSERT INTO products (empresa_id, category_id, name, description, price, image_url, code, sort_order, is_active) VALUES
    (v_emp_id, cat_miniaturas_id, 'Kit Viajero: 3 Decants 10ml a elección',
     'Tres miniaturas de 10ml (decants) de las fragancias que elijas: ideal para probar antes de comprar el frasco grande, para viajar o para un regalo original.',
     24000, '/img/Perfumes/miniaturas.jpg', 'SET-004', 20, true);

    -- NOTA: Perfumes Midoré, Desodorantes Árabes, Perfumes ONLYYOU,
    -- Perfumes PLATA, Perfumes Tubitos y Productos de Pelo quedan sin
    -- productos de referencia: se cargan con la lista real del cliente.

  END;
END $$;