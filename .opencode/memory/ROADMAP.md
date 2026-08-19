# ROADMAP — AVENTUS Perfumería

## Lanzamiento (pendiente dueño)
- [ ] Ejecutar `sql/seed_aventus.sql` en la consola SQL de Supabase (empresa + categorías + banners + 38 productos)
- [ ] Confirmar precios reales con la lista oficial del dueño (hoy son referencia ARS)
- [ ] Subir fotos reales de frascos (hoy placeholders SVG de marca)
- [ ] Configurar alias/CBU reales de transferencia en Panel → Configuración
- [ ] Revisar metas OG/SEO y favicon en dominio definitivo

## Próximas mejoras
- [ ] Testers automatizados (Vitest/RTL) para carrito y checkout
- [ ] Code-splitting del bundle (hoy >500 kB, warning de Vite)
- [ ] Página de sucursales con Google Maps URLs
- [ ] Multi-foto por producto (galería)
- [ ] Stock por producto (hoy solo `is_active`)