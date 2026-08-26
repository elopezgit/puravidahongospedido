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