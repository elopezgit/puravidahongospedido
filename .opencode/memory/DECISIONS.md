# DECISIONS
Historial de decisiones.

## ADR-001 (19/08/2026) — Rebranding White-Label a AVENTUS Perfumería
- **Estado**: Aceptada
- **Contexto**: El sistema fue clonado desde un eCommerce de embutidos ("MrCerdo OS") con restos de suplementos ("Star Nutrition"). El dueño real es una perfumería: AVENTUS Perfumería (San Miguel de Tucumán).
- **Decisión**: Adaptar TODO el sistema al dominio perfumería manteniendo la arquitectura multi-tenant y sin borrar seeds legacy. Slug raíz `aventus`, storage key `aventus_cart`, nombre npm `aventus-perfumeria`.
- **Consecuencias**: Los filtros `filterAventus*` aíslan el rubro perfumería; los datos legacy permanecen en DB pero no se muestran. Identidad visual premium (oro/negro/marfil, Playfair Display).

## ADR-002 (19/08/2026) — Catálogo de Perfumería con Precios de Referencia
- **Estado**: Aceptada (con salvaguarda)
- **Contexto**: No se dispone de la lista oficial de precios del dueño; el PDF presente (Star Nutrition) es de rubro incorrecto.
- **Decisión**: Crear catálogo de 38 productos reales del mercado (Lattafa, Armaf, Dior, Chanel, etc.) con precios de referencia ARS 2026 marcados como editables en `defaultCatalog.ts` y `seed_aventus.sql`.
- **Consecuencias**: El dueño debe confirmar/ajustar precios antes del lanzamiento. El chat de WhatsApp incluye el detalle por producto para validación.

## ADR-003 (19/08/2026) — Datos de Contacto y Sucursales
- **Estado**: Aceptada
- **Decisión**: WhatsApp `5493815102886` (formato wa.me), Instagram `@aventus.perfumeria`, alias default `aventus.perfumeria`, banner "Envíos a todo el país". Sucursales documentadas en README (San Martín 629 / Buenos Aires 61, S.M. de Tucumán) sin hardcodear en UI.
- **Consecuencias**: El titular de transferencia en CartModal quedó "Aventus Perfumería" (editable en Configuración).

## ADR-004 (19/08/2026) — 9 Categorías Reales del Negocio
- **Estado**: Aceptada
- **Contexto**: El cliente pasó la data correcta del negocio: las categorías que realmente vende son 9 (Perfumes Árabes, Perfumes Extractos, Perfumes Midoré, Desodorantes Árabes, Perfumes ONLYYOU, Perfumes PLATA, Perfumes Miniaturas, Perfumes Tubitos, Productos de Pelo), reemplazando las 6 de referencia (Hombre/Mujer/Árabes/Nacionales/Sets/Tester).
- **Decisión**: Aplicar las 9 categorías reales en `defaultCatalog.ts`, mosaic/images del storefront (`ClientHome.tsx`), `CATEGORY_KEYWORDS_MAP` y `seed_aventus.sql`; re-mapear los productos de referencia que calzan (ARA-001..008 → Árabes; NAC-005/006 esencias → Extractos; SET-004 decants → Miniaturas) y **re-ejecutar el seed en producción** (runner Node). Los placeholders sin categoría real quedan ocultos hasta la lista oficial de productos.
- **Consecuencias**: La DB de producción de AVENTUS quedó con 9 categorías + 3 banners + 11 productos de referencia (verificado, otros 5 tenants intactos). El mosaico muestra las 9 categorías con fotos HD aunque algunas estén sin productos hasta cargar la lista real.

## ADR-005 (19/08/2026) — Logo Oficial (logoOk) y WhatsApp real
- **Estado**: Aceptada
- **Decisión**: `infoBase/logoOk.jfif` (26 KB), entregado por el cliente, es el logo oficial → copiado a `public/img/logo/aventus_perfumeria.jpg` y `logoOk.jpg`. WhatsApp real de pedidos: +54 381 510-2886 (`5493815102886`) aplicado globalmente (ClientHome, seed, README, memoria y `empresas.phone` en producción).
- **Consecuencias**: El modelo no pudo previsualizar el JPG (error AI_VISION); se adoptó logoOk por confirmación del cliente. Runner del seed corregido para no re-escribir el teléfono viejo.

## ADR-006 (27/09/2026) — Skills oficiales de Supabase como referencia técnica
- **Estado**: Aceptada
- **Contexto**: El material local de Supabase (`technology/supabase/supabase-guide.md`, `prompts/stacks/SUPABASE_PROMPT.md`, `playbooks/stacks/supabase.md`, `agents/supabase-expert.md`) es descriptivo y genérico: no cubre el detalle real de RLS, auth, Locks, índices compuestos ni los patrones finos de Postgres que Supabase mantiene al día. Además, el MCP oficial de Supabase da acceso real al esquema y a los logs del proyecto, que hoy no existe en el flujo.
- **Decisión**: Adoptar la capa oficial de Supabase como **fuente técnica**, instalada **globalmente** (fuera del repo, para no acoplar el proyecto a un proveedor): skill `supabase` + skill `supabase-postgres-best-practices` desde `supabase/agent-skills`, y el MCP remoto `supabase` con scoping `?project_ref=koirnjsbkwqqeyusmbgq` (autenticación OAuth por registro dinámico, sin PAT). El material AIBF **se conserva** y pasa a ser la capa de Gobierno. No se crea comando `/supabase`: las skills se cargan por detección, sin intervención manual.
- **Reparto de responsabilidades**: la **skill oficial** manda en el *cómo* técnico (esquema, RLS, auth, performance, CLI/MCP); el **framework AIBF** manda en el *cuándo* (Discovery, aprobación, puertas de calidad, ADRs, memoria). Ante contradicción técnica gana Supabase; ante conflicto con una puerta de calidad o el flujo de aprobación, gana AIBF y se escala al Coordinator.
- **Consecuencias**: (1) El agente dispone de herramientas reales (`list_tables`, `execute_sql`, `apply_migration`, `query_logs`, `get_advisors`, `generate_typescript_types`) en lugar de improvisar SQL. (2) El MCP está acotado a un único proyecto, pero **sin modo lectura**: `apply_migration` y escrituras son posibles, por lo que se mantiene la confirmación manual de cada tool call. (3) Las skills son globales, así que las comparten todos los proyectos del usuario y se actualizan con `npx skills update` sin commit. (4) El material local queda marcado como complementario con referencia a este ADR. (5) Reversión: `npx skills remove --global` y `opencode mcp remove supabase --global`.

## ADR-007 (04/10/2026) — Rebrand del repo a Pura Vida Hongos como tenant aislado
- **Estado**: Aceptada
- **Contexto**: El repo era un fork de "AVENTUS Perfumería". El cliente "Pura Vida Hongos" (elixires de hongos medicinales, Tucumán) necesita su propia fachada, sin rastro visible de Aventus, sobre la misma base multi-tenant. El landing de referencia (MVP incompleto) era la única fuente de catálogo. Además, los `filterAventus*` descartaban el catálogo de cualquier rubro que no fuera perfumería y caían en el fallback de AVENTUS: el nuevo tenant habría mostrado perfumes de otro cliente.
- **Decisión**: (1) Nuevo tenant `puravidahongos` (`2d97f105-e91c-481d-9ec2-61166905f3c3`) con 2 categorías, 15 productos `PV-001..PV-015` y 4 banners, sembrado con `sql/seed_puravidahongos.sql` (idempotente; `seed_aventus.sql` intacto). (2) Presentación aislada en `src/lib/tenantTheme.ts`: un tema por slug — Aventus conserva su copy exacto, Pura Vida usa el propio, y cualquier slug desconocido recibe un tema genérico sin datos ajenos. (3) Los `filterAventus*` se envuelven en `filterTenant*` y solo se aplican al slug `aventus`; el resto recibe los datos tal cual. (4) Logos y WhatsApp dinámicos desde `empresas`, sin rutas hardcodeadas. (5) Carrito persistido por tenant (`cart_<slug>`) con migración de la clave legacy `aventus_cart`. (6) Se conserva la redirección raíz `/` → `/aventus` para no alterar el comportamiento de los demás tenants.
- **Consecuencias**: `/puravidahongos` y `/admin/puravidahongos` funcionan con catálogo, banners y branding propios. Los otros 5 tenants verificados intactos tras la siembra (aventus: 403 productos / 5 categorías / 3 banners, sin cambios). Agregar un tenant nuevo = una fila en `empresas` + una entrada opcional en `tenantTheme.ts`, sin cambios de código.