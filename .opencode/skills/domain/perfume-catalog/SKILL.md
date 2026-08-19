# perfume-catalog

## Objetivo
Generar o adaptar el catálogo completo de una perfumería (categorías, productos, precios ARS, badges, atributos olfativos) coherente con el mercado argentino actual.

## Cuándo usar
- Adaptar el catálogo de una tienda al rubro perfumería
- Completar productos faltantes, precios o descripciones
- Crear el seed SQL y el catálogo fallback (defaultCatalog) del tenant de perfumería

## Entradas
- Datos del negocio (Instagram, sucursales, WhatsApp, slogan, segmento mayorista/minorista)
- Contexto del storefront (categorías previas, tipos de producto soportados)
- Memoria del proyecto

## Procedimiento
1. Definir categorías del catálogo (recomendado):
   - Perfumes de Hombre
   - Perfumes de Mujer
   - Árabes & Premium
   - Nacionales & Esencia
   - Sets & Combos
   - Tester & Ofertas
2. Para cada producto definir: nombre real, formato (EDP/EDT + ml), precio ARS minorista (referencia editable), código SKU (ej: HOM-001, MUJ-001, ARA-001, NAC-001, SET-001, TES-001), badge (NUEVO/TOP VENTAS/ORIGINAL/TESTER/EDICIÓN LIMITADA), familia olfativa, notas (salida/cuerpo/fondo), duración, destino (Hombre/Mujer/Unisex).
3. Precios de referencia ARS 2026 (editar con la lista real del cliente):
   - Perfume de diseñador importado 50-100ml: $120.000 – $190.000
   - Tester (frasco sin caja): 25-40% menos que el importado
   - Árabes premium (Lattafa, Armaf, Afnan, Al Haramain): $35.000 – $70.000
   - Nacionales (Avon, Unique, etc.): $18.000 – $40.000
   - Sets/combos: $45.000 – $120.000
4. Redactar descripciones persuasivas sin inventar datos falsos: usar estructura "familia + sensación + ocasión + duración/estela".
5. Ampliar los filtros de limpieza (filter*Categories/Products/Orders/Banners) al nuevo rubro.
6. Generar seed SQL nuevo para el tenant (slug) sin tocar el seed anterior.

## Salida
- Catálogo default (TS) + seed SQL + banners fallback + keywords de búsqueda rápida
- Filtros generalistas actualizados
- Lista de precios marcada como "referencia editable" cuando no provenga de datos oficiales