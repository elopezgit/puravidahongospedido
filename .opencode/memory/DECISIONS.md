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
- **Decisión**: WhatsApp `5493816778749` (formato wa.me), Instagram `@aventus.perfumeria`, alias default `aventus.perfumeria`, banner "Envíos a todo el país". Sucursales documentadas en README (San Martín 629 / Buenos Aires 61, S.M. de Tucumán) sin hardcodear en UI.
- **Consecuencias**: El titular de transferencia en CartModal quedó "Aventus Perfumería" (editable en Configuración).