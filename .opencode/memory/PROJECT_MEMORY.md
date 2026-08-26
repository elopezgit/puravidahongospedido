# Memoria del Proyecto — AVENTUS Perfumería

## Última sesión (19/08/2026)
- **Tarea realizada**: Aplicadas las **9 categorías REALES del negocio** (pasadas por el cliente) en storefront, seed SQL y DB de producción. Logo oficial del cliente (`infoBase/logoOk.jfif`) copiado como logo AVENTUS. Re-seed en producción vía runner.
- **Resumen de la aplicación**:
  - `defaultCatalog.ts`: `DEFAULT_AVENTUS_CATEGORIES` reescrito con las 9 reales (Perfumes Árabes, Perfumes Extractos, Perfumes Midoré, Desodorantes Árabes, Perfumes ONLYYOU, Perfumes PLATA, Perfumes Miniaturas, Perfumes Tubitos, Productos de Pelo); productos de referencia re-mapeados (ARA-001..008 → cat-arabes, NAC-005/006 esencias → cat-extractos, SET-004 decants → cat-miniaturas); whitelist de `filterAventusCategories` ampliada (extracto, midoré, desodorante, onlyyou, plata, miniatura, tubito, pelo, capilar, bruma, aceite). Productos placeholders que no calzan con categorías reales (HOM/MUJ/NAC-001..4/SET-001..3/TES) quedan en el fallback pero INVISIBLES (ids de categorías inexistentes) hasta la lista real.
  - `ClientHome.tsx`: `CATEGORY_IMAGES` con 9 claves normalizadas + helper `normalizeKey` (lookup sin tildes/minúsculas); `CATEGORY_KEYWORDS_MAP` con las 9 categorías + 'todas'; keywords por categoría adaptadas.
  - `sql/seed_aventus.sql`: 9 categorías + 3 banners + 11 productos de referencia; comentario de categorías pendientes de carga real.
  - Runner actualizado (`run_seed_aventus.mjs`): phone corregido a `5493815102886` (¡antes estaba el viejo!) y `catByPlaceholder` con los 9 nombres.
  - **Seed re-ejecutado en producción**: 9 categorías, 3 banners, 11 productos. Verificado: otros 5 tenants intactos (alcione 9/18/3, mrcerdo 9/318/0, punto25 8/49/2, topedebar 5/24/4, tuslibrosya 7/149/3). Empresa AVENTUS: phone `5493815102886` OK.
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
  - `defaultCatalog.ts` reescrito: interfaces con atributos de perfumería (gender, family, EDT/EDP/tester/decant, notas, duración, estela). Luego ampliado a las 9 categorías REALES del cliente (19/08) con productos de referencia re-mapeados (11 visibles) y precios de referencia ARS.
  - Filtros `filterAventusCategories/Products/Orders/Banners` que excluyen residuos de embutidos/suplementos por regex (protege contra datos legacy sucios en la DB multi-tenant).
  - Todos los modales cliente y paneles admin adaptados: textos "cocina"→"preparación/armado", íconos PiggyBank/Coffee/Utensils→Gem/Package/Sparkles, color rojo `#A12C25`→oro, alias default `aventus.perfumeria`, "MrCerdo OS"→"AVENTUS OS".
  - `index.html` con title/meta/favicon AVENTUS (apunta a `favicon.svg` vectorial con monograma "A" dorado); `README.md` y `.env.example` actualizados.
  - Creación de agentes `perfume-domain-expert` y `brand-adaptation-specialist`, y skills `perfume-catalog`, `brand-adaptation`, `brand-identity`.
  - Seed `sql/seed_aventus.sql` (empresa + **9 categorías reales** + 3 banners + 11 productos de referencia), idempotente y aislado al tenant `aventus`; EJECUTADO en producción 19/08/2026.
  - **Limpieza de residuos legacy (sesión 19/08/2026)**: se BORRARON `sql/seed_mrcerdo.sql`, `sql/seed_suplementos_OLD_BACKUP.sql`, `sql/cleanup_mrcerdo.sql`, `scripts/parse_lisamayorista_pdf.py`, `public/img/Catalogo/**`, `public/img/logo/logoMrCerdo.jpg`, `public/img/Banner/bannertupedido.png`. Se reescribieron `public/favicon.svg` (era "MC" de MrCerdo) y `src/utils/brandLogos.tsx` (tenía 10 marcas de suplementos STAR/GOLD/ENA/etc → logo AVENTUS único). `public/icons.svg` (sprite social) y `sql/fix_rls.sql` (RLS) son neutrales y se conservan. README/seed ya no referencian cleanup_mrcerdo.

## Estado actual
- **Fase del proyecto**: Rediseño premium + 9 categorías reales aplicadas — seed ejecutado en producción; pendiente catálogo real de productos/precios
- **Funcionalidades completadas**:
  - Storefront cliente con marca AVENTUS (splash, banner, buscador, **mosaico premium de 9 categorías reales con fotos HD**, carrito flotante oro)
  - Modales cliente (ProductModal, CartModal, OrderTrackerModal) con branding y textos de perfumería
  - Admin dashboard + POS con branding oro y textos de preparación/armado
  - Catálogo de referencia: 9 categorías reales + 11 productos de referencia (el resto se carga con lista real)
  - Seed SQL de AVENTUS ejecutado en producción (9 cat/3 banners/11 prods)
- **Bloqueos activos**: Ninguno

## Historial de cambios recientes
| Fecha | Cambio | Responsable | Estado |
|---|---|---|---|
| 19/08/2026 | Adaptación white-label completa a AVENTUS Perfumería (UI, branding, catálogo, seed, assets, docs) | Coordinator | ✅ |
| 19/08/2026 | Creación de agentes perfume-domain-expert y brand-adaptation-specialist + skills de dominio y branding | Coordinator | ✅ |
| 19/08/2026 | Modales cliente y paneles admin con textos de perfumería (sin residuos de embutidos/suplementos) | Coordinator | ✅ |
| 19/08/2026 | Banners HD: reemplazados los 3 SVG por fotos JPG de promoción de perfumes (public/img/Banner/banner1..3.jpg, Unsplash ~211-463 KB). Actualizadas referencias en ClientHome fallback, defaultCatalog, seed SQL Y DB real de AVENTUS (PATCH por sort_order). SVGs borrados, build verde | Coordinator | ✅ |
| 19/08/2026 | Rediseño de categorías storefront: mosaico premium (grid asimétrico 4-col, hero 2x2, cards altas/anchas/media), fotos HD de perfume (Unsplash) en public/img/Categories/ (hombre/mujer/arabes/nacionales/sets/tester .jpg), overlay oscuro + serif, contador de productos, reemplazo de emojis y CATEGORY_COLORS por CATEGORY_IMAGES; build verde | Coordinator | ✅ |
| 19/08/2026 | **9 CATEGORÍAS REALES aplicadas en todo**: DEFAULT_AVENTUS_CATEGORIES + CATEGORY_IMAGES/KEYWORDS normalizados en ClientHome + seed SQL + DB de producción (re-seed vía runner: 9 cat/3 banners/11 prods; otros 5 tenants intactos). Productos de referencia re-mapeados (ARA→Árabes, NAC-005/6→Extractos, SET-004→Miniaturas); placeholders sin categoría real quedan ocultos. Runner corregido: phone `5493815102886` + 9 placeholders | Coordinator | ✅ |
| 19/08/2026 | **WhatsApp actualizado a +54 381 510-2886** (`5493815102886`) en ClientHome, seed, README, memoria y DB real de AVENTUS (empresas.phone); grep global 0 refs al número viejo; build verde | Coordinator | ✅ |
| 19/08/2026 | **Logo oficial aplicado**: `infoBase/logoOk.jfif` (26 KB) copiado a `public/img/logo/aventus_perfumeria.jpg` y `logoOk.jpg` (confirmado por el cliente; el modelo no pudo previsualizar JPG por error AI_VISION) | Coordinator | ✅ |
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
- [x] Seed SQL de AVENTUS creado y EJECUTADO en producción (9 categorías reales + 11 productos de referencia)
- [x] Rediseño premium: mosaico de categorías con fotos HD, banners JPG HD, logo oficial logoOk aplicado
- [x] WhatsApp +54 381 510-2886 aplicado en todo (código + DB)
- [ ] **Lista REAL de productos y precios del cliente** → re-mapear productos a las 9 categorías (hoy ya aplicadas) y re-ejecutar seed (idempotente)
- [ ] Confirmar alias/CBU reales en el panel de Configuración (o ejecutar migracion_alias_cbu.sql con aprobación)
- [ ] Validar build final y auditoría de residuos (`npm run build` + grep)
- [ ] Tests automatizados E2E