# ROADMAP — AVENTUS Perfumería

## Lanzamiento (pendiente dueño)
- [x] Ejecutar `sql/seed_aventus.sql` en producción (19/08: empresa + **9 categorías reales** + 3 banners + 11 productos de referencia)
- [x] Rediseño premium aplicado (mosaico categorías HD, banners JPG, logo oficial logoOk, WhatsApp nuevo)
- [ ] Pasar lista REAL de productos y precios → re-mapear a las 9 categorías y re-ejecutar seed (idempotente)
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