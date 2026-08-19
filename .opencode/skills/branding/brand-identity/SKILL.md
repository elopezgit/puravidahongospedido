# brand-identity

## Objetivo
Definir y aplicar una identidad visual premium coherente para la tienda (paleta, tipografía, tokens, favicon, splash, header, footer) manteniendo accesibilidad.

## Cuándo usar
- Al re-marcar la tienda a una nueva marca
- Al ajustar colores/estilos de forma global sin tocar cada componente a mano

## Entradas
- Referencias de marca del cliente (logo, Instagram, slogan, rubro)
- Archivos de estilo: src/lib/design-tokens.ts, src/index.css, index.html, public/img/logo

## Procedimiento (referencia rápida para AVENTUS Perfumería)
1. Paleta premium perfumería:
   - primary (oro): `#C9A962`; hover `#A8863B`; light `#E4C87F`
   - primary-bg `rgba(201,169,98,0.12)`; ring `rgba(201,169,98,0.30)`
   - dark-bg `#0C0A09`; dark-surface `#171310`; dark-border `#2B2218`
   - fondo claro marfil: `#FBF8F3` / alt `#F3EDE2`
2. Tipografía: display `'Playfair Display', serif` (lujo) + body `'Outfit', sans-serif`. Importar ambas en index.css.
3. Gradientes: de `#C9A962` a `#A8863B` para CTA; mantener botones con contraste blanco sobre dorado oscuro (verificar contraste AA; si el dorado es claro usar texto negro).
4. Actualizar tokens y clases utilitarias (focus-ring) con el primary nuevo.
5. Favicon/title/meta: index.html con descripción del negocio real.
6. Splash: nombre, slogan y año de trayectoria del cliente (ej: "8 años junto a vos").
7. Badges: usar "ORIGINAL", "NUEVO", "TOP VENTAS", "TESTER", "ÁRABE PREMIUM" según producto.

## Salida
- design-tokens.ts y index.css coherentes con la nueva marca
- index.html con SEO correcto
- Logo copiado y referenciado correctamente