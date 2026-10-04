# Perfil del Proyecto — Pura Vida Hongos

> Este repositorio es un fork white-label del panel AVENTUS. El branding por
> defecto del repo es **Pura Vida Hongos**; el tenant `aventus` sigue siendo un
> cliente válido de la misma base de datos y conserva su propia identidad.

## Información general
- **Nombre**: Pura Vida Hongos (antes "AVENTUS Perfumería OS", fork white-label)
- **Dominio**: eCommerce + POS de elixires de hongos medicinales (50 ml) — Tucumán, Argentina
- **Negocio**: "Medicina ancestral, accesible y llena de vida" · @hongospuravida · linktr.ee/hongospuravida2 · WhatsApp +54 9 381 648-3779 · hongospuravida.com
- **Stack principal**: React 19 / TypeScript 6 / Vite 8 / Tailwind 4 / Supabase (PostgreSQL)
- **Equipo**: 1 desarrollador

## Tenants de la base de datos compartida (`koirnjsbkwqqeyusmbgq`)
| slug | Negocio | Productos | Notas |
|---|---|---|---|
| `puravidahongos` | Pura Vida Hongos | 15 | Tenant principal de este repo |
| `aventus` | AVENTUS Perfumería | 403 | Cliente original, intacto |
| `tuslibrosya` | Tus Libros Ya | 149 | Intacto |
| `TuPedido` | TuPedido | 4 | Intacto |
| `Punto 25 Delivery` | Punto 25 Delivery | 49 | Intacto |
| `Titan Fuel Suplementos` | Titan Fuel | 446 | Intacto |

## Arquitectura
- **Estilo**: SPA monolítico con multi-tenant por slug (`/:empresaSlug` y `/admin/:empresaSlug`)
- **Slug raíz**: `aventus` (redirige `/` → `/aventus`; sin cambios para no afectar tenants)
- **Frontend**: React 19 + Vite 8 + Tailwind 4 + Framer Motion + React Router 7 + Lucide
- **Backend**: Supabase (PostgreSQL + REST API)
- **Base de datos**: PostgreSQL 15 (Supabase)
- **Hosting**: Netlify
- **Multi-tenant**: todas las tablas cuelgan de `empresas.id` (`empresa_id`). La
  presentación se aísla con `src/lib/tenantTheme.ts` (un tema por slug) y el
  alcance de datos con los wrappers `filterTenant*` de `src/lib/defaultCatalog.ts`.

## Aislamiento por tenant (reglas críticas)
1. **Nunca** aplicar `filterAventus*` a un tenant distinto de `aventus`: esos
   filtros descartan catálogos de otros rubros y caen en el fallback de AVENTUS.
   Usar siempre `filterTenantCategories/Products/Orders/Banners(slug, datos)`.
2. **Nunca** insertar datos sin `empresa_id`. Cada escritura filtra por tenant.
3. El carrito se persiste por tenant (`cart_<slug>`) vía `setCartScope(slug)`;
   la clave legacy `aventus_cart` se migra al scope `aventus`.
4. Un slug sin entrada en `tenantTheme.ts` recibe un tema genérico construido con
   el nombre de la empresa: nunca se muestran datos de otro cliente.

## Identidad de marca
- **Paleta**: oro `#D6AE6A` / champagne `#C9A962` / hover `#A8863B`, fondo oscuro `#0B0906`, superficie `#171310`, marfil `#FBF8F3`
- **Tipografías**: Playfair Display (display) + Outfit (texto)
- **Logo**: `public/img/logo/puravidahongos_logo.svg` (marca hongos en oro sobre oscuro, según identidad de Instagram). Fallback genérico multi-tenant: `public/img/logo/generico.svg`
- **Imágenes de catálogo**: `public/img/puravidahongos/p-*.webp` (15 productos) + `carrusel-1..4.webp` (banners), copiadas del landing de referencia
- **Placeholders legacy del tenant aventus**: `public/img/Perfumes/*.svg`, `public/img/Banner/*.jpg`, `public/img/Categories/*.jpg` (no los usa Pura Vida)

## Catálogo Pura Vida Hongos (15 productos · 2 categorías)
- **Categorías**: `Elixires Simples` 🍄 (10 elixires de un solo hongo) · `Blends` ✨/🍵 (5 mezclas)
- **Códigos**: `PV-001..PV-010` (elixires) · `PV-011..PV-015` (blends)
- **Precios**: ARS 21600–34000 (50 ml). Fuente: landing de referencia.
- **Seed**: `sql/seed_puravidahongos.sql` (idempotente). NO modificar `sql/seed_aventus.sql`.

## Catálogo (9 categorías reales del cliente + 11 productos de referencia)
- **Categorías REALES**: Perfumes Árabes 🕌, Perfumes Extractos ⚗️, Perfumes Midoré 🛢️, Desodorantes Árabes 💨, Perfumes ONLYYOU 💛, Perfumes PLATA 🥈, Perfumes Miniaturas 🍾, Perfumes Tubitos 🧴, Productos de Pelo 💇 (aplicadas en storefront, seed SQL y DB de producción)
- **Códigos de referencia cargados**: ARA-001..008 (→ Perfumes Árabes), NAC-005/006 esencias (→ Perfumes Extractos), SET-004 kit decants (→ Perfumes Miniaturas). Perfumes Midoré, Desodorantes, ONLYYOU, PLATA, Tubitos y Pelo: SIN productos aún (cargar con lista real del cliente)
- **Precios**: valores de referencia ARS en `src/lib/defaultCatalog.ts` y `sql/seed_aventus.sql` — editables según lista real del dueño
- Imágenes HD por categoría: `public/img/Categories/{arabes,extractos,midore,desodorantes,onlyyou,plata,miniaturas,tubitos,pelo}.jpg` (además de hombre/mujer/nacionales/sets/tester)

## Calidad
- **Cobertura de pruebas**: Sin tests automatizados aún
- **Documentación**: AIBF framework + README actualizado a AVENTUS
- **Asistencia técnica Supabase (ADR-006)**: skill global `supabase` + `supabase-postgres-best-practices` (`supabase/agent-skills`, en `~\.agents\skills\`) y MCP oficial `supabase` con scoping `project_ref=koirnjsbkwqqeyusmbgq` (configurado en `~/.config/opencode/opencode.jsonc`, pendiente de sign-in por `/mcps`). Globales, fuera del repo; actualizar con `npx skills update`.

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