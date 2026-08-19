# Memoria del Proyecto — AVENTUS Perfumería

## Última sesión (19/08/2026)
- **Tarea realizada**: Verificación de compatibilidad del seed contra la DB real de Supabase (multi-tenant con 5 clientes: punto25, topedebar, tuslibrosya, mrcerdo, alcione). Se adaptó `seed_aventus.sql` al esquema real.
- **Hallazgos DB real**:
  - Tabla `empresas` real NO tiene columnas `alias` ni `cbu` (el schema.sql del repo sí las tenía).
  - `categories`/`products`/`banners` reales: columnas compatibles con el seed (ya con datos de otros tenants: 38 categorías, 558 productos, 12 banners).
  - Slug `aventus` NO existe aún → el seed lo crea como cliente nuevo.
  - `seed_aventus.sql` fue corregido: se quitaron `alias`/`cbu` del INSERT/ON CONFLICT de empresas. El frontend ya tenía fallback (`displayAlias = empresaAlias || 'aventus.perfumeria'` en CartModal).
  - Bug latente descubierto: el panel admin "Configuración" guarda `alias`/`cbu` contra `empresas` → falla para TODOS los tenants en la DB real (columnas inexistentes). Se creó `sql/migracion_alias_cbu.sql` (ALTER TABLE ADD COLUMN IF NOT EXISTS, aditiva y segura) como OPCIONAL; requiere aprobación del usuario.
  - README actualizado: en base existente solo se corre `seed_aventus.sql` (+ migración opcional); schema/fix_rls solo para base nueva.
- **Agentes involucrados**: Coordinator
- **Decisiones tomadas**:
  - Slug raíz `aventus` (redirect en `App.tsx`), storage key `aventus_cart`, nombre npm `aventus-perfumeria`.
  - Identidad premium: paleta oro/negro/marfil (`design-tokens.ts`), Playfair Display + Outfit (`index.css`), logo oficial en `public/img/logo/aventus_perfumeria.jpg`.
  - `defaultCatalog.ts` reescrito: interfaces con atributos de perfumería (gender, family, EDT/EDP/tester/decant, notas, duración, estela), 6 categorías y 38 productos con precios de referencia ARS y badges (ORIGINAL, TOP VENTAS, ÁRABE, TESTER, COMBO, NACIONAL, MAYORISTA, OFERTA, BEST SELLER, EDICIÓN LIMITADA, NUEVO, REGALO).
  - Filtros `filterAventusCategories/Products/Orders/Banners` que excluyen residuos de embutidos/suplementos por regex (protege contra datos legacy sucios en la DB multi-tenant).
  - Todos los modales cliente y paneles admin adaptados: textos "cocina"→"preparación/armado", íconos PiggyBank/Coffee/Utensils→Gem/Package/Sparkles, color rojo `#A12C25`→oro, alias default `aventus.perfumeria`, "MrCerdo OS"→"AVENTUS OS".
  - `index.html` con title/meta/favicon AVENTUS (apunta a `favicon.svg` vectorial con monograma "A" dorado); `README.md` y `.env.example` actualizados.
  - Creación de agentes `perfume-domain-expert` y `brand-adaptation-specialist`, y skills `perfume-catalog`, `brand-adaptation`, `brand-identity`.
  - Seed `sql/seed_aventus.sql` (empresa + 6 categorías + 3 banners + 38 productos), idempotente y aislado al tenant `aventus`.
  - **Limpieza de residuos legacy (sesión 19/08/2026)**: se BORRARON `sql/seed_mrcerdo.sql`, `sql/seed_suplementos_OLD_BACKUP.sql`, `sql/cleanup_mrcerdo.sql`, `scripts/parse_lisamayorista_pdf.py`, `public/img/Catalogo/**`, `public/img/logo/logoMrCerdo.jpg`, `public/img/Banner/bannertupedido.png`. Se reescribieron `public/favicon.svg` (era "MC" de MrCerdo) y `src/utils/brandLogos.tsx` (tenía 10 marcas de suplementos STAR/GOLD/ENA/etc → logo AVENTUS único). `public/icons.svg` (sprite social) y `sql/fix_rls.sql` (RLS) son neutrales y se conservan. README/seed ya no referencian cleanup_mrcerdo.

## Estado actual
- **Fase del proyecto**: Adaptación white-label completada — pendiente validación final y producción
- **Funcionalidades completadas**:
  - Storefront cliente con marca AVENTUS (splash, banner, buscador, categorías, carrito flotante oro)
  - Modales cliente (ProductModal, CartModal, OrderTrackerModal) con branding y textos de perfumería
  - Admin dashboard + POS con branding oro y textos de preparación/armado
  - Catálogo default con 38 productos de perfumería y 6 categorías
  - Seed SQL de AVENTUS listo para ejecutar
- **Bloqueos activos**: Ninguno

## Historial de cambios recientes
| Fecha | Cambio | Responsable | Estado |
|---|---|---|---|
| 19/08/2026 | Adaptación white-label completa a AVENTUS Perfumería (UI, branding, catálogo, seed, assets, docs) | Coordinator | ✅ |
| 19/08/2026 | Creación de agentes perfume-domain-expert y brand-adaptation-specialist + skills de dominio y branding | Coordinator | ✅ |
| 19/08/2026 | Modales cliente y paneles admin con textos de perfumería (sin residuos de embutidos/suplementos) | Coordinator | ✅ |
| 19/08/2026 | **SEED EJECUTADO EN PRODUCCIÓN**: empresa `aventus` creada vía PostgREST (runner Node `run_seed_aventus.mjs` en temp). Verificado: 6 categorías, 3 banners, 38 productos; otros 5 tenants intactos (punto25, topedebar, tuslibrosya, mrcerdo, alcione). Empresa ID: 29689fc3-9d06-46fe-824c-7a3f73659aaf | Coordinator | ✅ |
| 19/08/2026 | Verificación de compatibilidad DB real + corrección seed (alias/cbu inexistentes) | Coordinator | ✅ |
| 19/08/2026 | Limpieza final de residuos legacy: borrado de seeds/script/media de MrCerdo y suplementos, favicon y brandLogos reescritos a AVENTUS, README/seed sin referencias a cleanup_mrcerdo | Coordinator | ✅ |
| 19/08/2026 | Build de producción verde (`npm run build`) + auditoría de residuos OK (solo exclusiones intencionales en defaultCatalog) | Coordinator | ✅ |
| 13/07/2026 | (Histórico MrCerdo) Catálogo oficial de embutidos, simplicación multi-tenant | Coordinator | ✅ |

## Lecciones aprendidas
- El framework de filtros regex (`filterAventus*`) es la defensa principal contra datos legacy sucios de otros rubros (embutidos/suplementos) en la DB multi-tenant.
- La identidad premium (oro champagne + Playfair Display) comunica el posicionamiento "perfumería premium" mucho mejor que la paleta roja original.
- Los precios son de referencia (ARS 2026) y deben editarse con la lista real del dueño antes de lanzar.
- El merge de archivos SQL con PowerShell 5.1 corrompe UTF-8: concatenar con `cmd /c copy /b` preserva bytes.

## Próximos pasos
- [x] Adaptación completa de UI/UX a AVENTUS
- [x] Seed SQL de AVENTUS creado
- [ ] Ejecutar `sql/seed_aventus.sql` en la consola SQL de Supabase
- [ ] Confirmar precios reales y fotos de productos con el dueño
- [ ] Configurar alias/CBU reales en el panel de Configuración
- [ ] Validar build final y auditoría de residuos (`npm run build` + grep)
- [ ] Tests automatizados E2E