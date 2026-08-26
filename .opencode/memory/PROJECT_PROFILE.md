# Perfil del Proyecto — AVENTUS Perfumería

## Información general
- **Nombre**: AVENTUS Perfumería OS (antes "MrCerdo OS", adaptado white-label)
- **Dominio**: eCommerce + POS de perfumería (originales, árabes premium, nacionales, tester) — San Miguel de Tucumán
- **Negocio**: "El paraíso de los perfumes 👑" · "8 años junto a vos 🤍" · @aventus.perfumeria · WhatsApp +54 381 510-2886
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
- **Logo**: `public/img/logo/aventus_perfumeria.jpg` (= `infoBase\logoOk.jfif`, 26 KB, logo oficial confirmado por el cliente; también copia `logoOk.jpg`)
- **Placeholders SVG (solo productos)**: `public/img/Perfumes/{hombre,mujer,arabes,nacionales,sets,tester,generico}.svg`; banners y categorías usan fotos JPG HD (`public/img/Banner/banner1..3.jpg`, `public/img/Categories/*.jpg`)

## Catálogo (9 categorías reales del cliente + 11 productos de referencia)
- **Categorías REALES**: Perfumes Árabes 🕌, Perfumes Extractos ⚗️, Perfumes Midoré 🛢️, Desodorantes Árabes 💨, Perfumes ONLYYOU 💛, Perfumes PLATA 🥈, Perfumes Miniaturas 🍾, Perfumes Tubitos 🧴, Productos de Pelo 💇 (aplicadas en storefront, seed SQL y DB de producción)
- **Códigos de referencia cargados**: ARA-001..008 (→ Perfumes Árabes), NAC-005/006 esencias (→ Perfumes Extractos), SET-004 kit decants (→ Perfumes Miniaturas). Perfumes Midoré, Desodorantes, ONLYYOU, PLATA, Tubitos y Pelo: SIN productos aún (cargar con lista real del cliente)
- **Precios**: valores de referencia ARS en `src/lib/defaultCatalog.ts` y `sql/seed_aventus.sql` — editables según lista real del dueño
- Imágenes HD por categoría: `public/img/Categories/{arabes,extractos,midore,desodorantes,onlyyou,plata,miniaturas,tubitos,pelo}.jpg` (además de hombre/mujer/nacionales/sets/tester)

## Calidad
- **Cobertura de pruebas**: Sin tests automatizados aún
- **Documentación**: AIBF framework + README actualizado a AVENTUS

## Estado
- **Fase**: Rediseño premium aplicado y seed EJECUTADO en producción (19/08/2026). Pendiente: lista REAL de productos/precios del cliente y alineación de fotos de productos.
- **CI/CD**: Netlify auto-deploy
- **Monitoreo**: No configurado

## Riesgos detectados
- Precios de catálogo son referencia y deben confirmarse con lista real del dueño
- Categorías reales ya aplicadas; los productos de referencia actuales (11) no reflejan el stock real — el cliente debe pasar su lista de productos/precios
- Imágenes de productos son placeholders SVG; categorías y banners ya usan fotos HD (Unsplash)
- El alias de transferencia default es `aventus.perfumeria` (confirmar CBU/alias reales en Configuración)
- Rol interno `cocina` se mantiene por compatibilidad (representa Preparación/Armado)