# brand-adaptation

## Objetivo
Ejecutar de forma sistemática la conversión white-label de una app clonada a una nueva marca/negocio, auditar residuos de la marca anterior y dejar todo compilando.

## Cuándo usar
- Cuando el proyecto fue copiado de otra tienda (otro rubro/marca) y debe quedar 100% adaptado
- Cada vez que se detecten textos, rutas, claves o datos del negocio anterior

## Entradas
- Lista de detectados de la marca/negocio anterior (grep)
- Identidad nueva (paleta, tipografía, slogan, datos de contacto)
- Estructura del código (páginas cliente/admin/POS, componentes, lib, sql, public)

## Procedimiento
1. grep de marca anterior: `mrcerdo|MrCerdo|MR CERDO|cerdo|chorizo|salame|bondiola|matambre|embutido|suplement|whey|titan|logoMrCerdo` en src/, public/, sql/, *.md, configs.
2. Mapear equivalencias semánticas: cocina→preparación/armado, charcutería→perfumería, "agregá tus embutidos"→"agregá tus perfumes", titular transferencia, alias, placeholder del modal.
3. Aplicar identidad: tokens de color/tipografía, gradientes, badges, splash, header, footer admin, favicon, title/meta.
4. Reescribir catálogo default + filtros al nuevo rubro y actualizar TODOS los imports.
5. Actualizar storage keys y slug raíz; dejar multi-tenant intacto.
6. Assets: copiar logo nuevo a public/img/logo, crear placeholders SVG de producto/banner.
7. Seed SQL nuevo para el tenant; documentar orden de ejecución.
8. Actualizar README, package.json name, .env.example, memoria del proyecto.
9. Validar: `npm run build`; grep final de residuos; revisar el storefront en modo cliente y admin.

## Salida
- Repo sin residuos visibles de la marca anterior (UI), build verde
- Catálogo y seeds del nuevo negocio
- Memoria actualizada con el nuevo perfil