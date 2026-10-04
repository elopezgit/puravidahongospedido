-- ============================================================
-- SEED PURA VIDA HONGOS — Hongos Medicinales
-- ============================================================
-- Aislado al tenant "puravidahongos". No afecta a otros tenants.
-- Ejecutar en consola SQL de Supabase (SOLO este archivo).
-- ============================================================

DO $$
DECLARE
  v_emp_id uuid;
  cat_simples_id uuid;
  cat_blends_id uuid;
BEGIN
  -- 1. EMPRESA: PURA VIDA HONGOS
  INSERT INTO empresas (slug, name, phone, instagram_url, maps_url, logo_url, is_active)
  VALUES
    ('puravidahongos', 'Pura Vida Hongos', '5493816483779',
     'https://instagram.com/hongospuravida', NULL,
     '/img/logo/puravidahongos_logo.svg', true)
  ON CONFLICT (slug) DO UPDATE SET
    name = EXCLUDED.name,
    phone = EXCLUDED.phone,
    instagram_url = EXCLUDED.instagram_url,
    logo_url = EXCLUDED.logo_url;

  SELECT id INTO v_emp_id FROM empresas WHERE slug = 'puravidahongos' LIMIT 1;

  -- 2. LIMPIAR DATOS DEL TENANT
  DELETE FROM products WHERE empresa_id = v_emp_id;
  DELETE FROM banners WHERE empresa_id = v_emp_id;
  DELETE FROM categories WHERE empresa_id = v_emp_id;

  -- 3. CATEGORÍAS
  INSERT INTO categories (empresa_id, name, icon, sort_order) VALUES
    (v_emp_id, 'Elixires Simples', '🍄', 1),
    (v_emp_id, 'Blends', '✨', 2);

  SELECT id INTO cat_simples_id FROM categories WHERE empresa_id = v_emp_id AND name = 'Elixires Simples' LIMIT 1;
  SELECT id INTO cat_blends_id  FROM categories WHERE empresa_id = v_emp_id AND name = 'Blends' LIMIT 1;

  -- 4. PRODUCTOS - ELIXIRES SIMPLES (10)
  INSERT INTO products (empresa_id, category_id, name, description, price, image_url, code, sort_order, is_active) VALUES
    (v_emp_id, cat_simples_id, 'Melena de León', 'Melena de León - Elixir simple', 21700, '/img/puravidahongos/p-melena-de-leon.webp', 'PV-001', 1, true),
    (v_emp_id, cat_simples_id, 'Reishi', 'Reishi - Elixir simple', 22100, '/img/puravidahongos/p-reishi.webp', 'PV-002', 2, true),
    (v_emp_id, cat_simples_id, 'Cordyceps', 'Cordyceps - Elixir simple', 22100, '/img/puravidahongos/p-cordyceps.webp', 'PV-003', 3, true),
    (v_emp_id, cat_simples_id, 'Cola de Pavo', 'Cola de Pavo - Elixir simple', 22100, '/img/puravidahongos/p-cola-de-pavo.webp', 'PV-004', 4, true),
    (v_emp_id, cat_simples_id, 'Shiitake', 'Shiitake - Elixir simple', 21700, '/img/puravidahongos/p-shiitake.webp', 'PV-005', 5, true),
    (v_emp_id, cat_simples_id, 'Champiñón del Sol', 'Champiñón del Sol - Elixir simple', 27300, '/img/puravidahongos/p-champignon-del-sol.webp', 'PV-006', 6, true),
    (v_emp_id, cat_simples_id, 'Ashwagandha', 'Ashwagandha - Elixir simple', 24300, '/img/puravidahongos/p-ashwagandha.webp', 'PV-007', 7, true),
    (v_emp_id, cat_simples_id, 'Tremella', 'Tremella - Elixir simple', 21600, '/img/puravidahongos/p-tremella.webp', 'PV-008', 8, true),
    (v_emp_id, cat_simples_id, 'Rhodiola', 'Rhodiola - Elixir simple', 24300, '/img/puravidahongos/p-rhodiola.webp', 'PV-009', 9, true),
    (v_emp_id, cat_simples_id, 'Maitake', 'Maitake - Elixir simple', 20000, '/img/puravidahongos/p-maitake.webp', 'PV-010', 10, true);

  -- 5. PRODUCTOS - BLENDS (5)
  INSERT INTO products (empresa_id, category_id, name, description, price, image_url, code, sort_order, is_active) VALUES
    (v_emp_id, cat_blends_id, 'Descanso Profundo', 'Blend para descanso profundo', 31100, '/img/puravidahongos/p-descanso-profundo.webp', 'PV-B01', 1, true),
    (v_emp_id, cat_blends_id, 'Energía y Enfoque', 'Blend para energía y enfoque', 29000, '/img/puravidahongos/p-energia-y-enfoque.webp', 'PV-B02', 2, true),
    (v_emp_id, cat_blends_id, 'Energía y Rendimiento', 'Blend para energía y rendimiento', 29000, '/img/puravidahongos/p-energia-y-rendimiento.webp', 'PV-B03', 3, true),
    (v_emp_id, cat_blends_id, 'Cognitivo y Antiestrés', 'Blend cognitivo y antiestrés', 29000, '/img/puravidahongos/p-cognitivo-y-antiestres.webp', 'PV-B04', 4, true),
    (v_emp_id, cat_blends_id, 'Inmuno Balance', 'Blend inmuno balance', 29000, '/img/puravidahongos/p-inmuno-balance.webp', 'PV-B05', 5, true);
END $$;