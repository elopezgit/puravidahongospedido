# Perfil del Proyecto — AVENTUS Perfumería

## Información general
- **Nombre**: AVENTUS Perfumería OS (antes "MrCerdo OS", adaptado white-label)
- **Dominio**: eCommerce + POS de perfumería (originales, árabes premium, nacionales, tester) — San Miguel de Tucumán
- **Negocio**: "El paraíso de los perfumes 👑" · "8 años junto a vos 🤍" · @aventus.perfumeria · WhatsApp +54 9 381 677-8749
- **Stack principal**: React 19 / TypeScript 6 / Vite 8 / Tailwind 4 / Supabase (PostgreSQL)
- **Equipo**: 1 desarrollador

## Arquitectura
- **Estilo**: SPA monolítico con multi-tenant por slug (`/:empresaSlug` y `/admin/:empresaSlug`)
- **Slug raíz**: `aventus` (redirige `/` → `/aventus`)
- **Frontend**: React 19 + Vite 8 + Tailwind 4 + Framer Motion + React Router 7 + Lucide
- **Backend**: Supabase (PostgreSQL + REST API)
- **Base de datos**: PostgreSQL 15 (Supabase)
- **Hosting**: Netlify
- **Multi-tenant**: conviven empresas en la misma DB; filtros `filterAventus*` aíslan datos del rubro perfumería respetando datos legacy (mrcerdo, suplementos)

## Identidad de marca
- **Paleta**: oro champagne `#C9A962` / hover `#A8863B` / light `#E4C87F`, negro cálido `#0C0A09`, superficie `#171310`, marfil `#FBF8F3`, amatista secundaria `#7A5C9E`
- **Tipografías**: Playfair Display (display) + Outfit (texto)
- **Logo**: `public/img/logo/aventus_perfumeria.jpg` (infoBase\aventusperfumerialogo.jpg, 150x150)
- **Placeholders SVG**: `public/img/Perfumes/{hombre,mujer,arabes,nacionales,sets,tester,generico}.svg` y `public/img/Banner/banner1..3.svg`

## Catálogo (38 productos)
- **Categorías**: Perfumes de Hombre 🧔, Perfumes de Mujer 👩, Árabes & Premium 🕌, Nacionales & Esencia 🇦🇷, Sets & Combos 🎁, Tester & Ofertas 💎
- **Códigos**: HOM-001..008, MUJ-001..008, ARA-001..008, NAC-001..006, SET-001..004, TES-001..004
- **Precios**: valores de referencia ARS en `src/lib/defaultCatalog.ts` y `sql/seed_aventus.sql` — editables según lista real del dueño

## Calidad
- **Cobertura de pruebas**: Sin tests automatizados aún
- **Documentación**: AIBF framework + README actualizado a AVENTUS

## Estado
- **Fase**: Adaptación white-label completada; pendiente deploy de seed + imágenes reales
- **CI/CD**: Netlify auto-deploy
- **Monitoreo**: No configurado

## Riesgos detectados
- Precios de catálogo son referencia y deben confirmarse con lista real del dueño
- Imágenes de productos son placeholders SVG (se esperan fotos reales de frascos)
- El alias de transferencia default es `aventus.perfumeria` (confirmar CBU/alias reales en Configuración)
- Rol interno `cocina` se mantiene por compatibilidad (representa Preparación/Armado)