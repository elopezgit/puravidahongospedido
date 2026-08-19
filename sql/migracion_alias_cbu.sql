-- ============================================================
-- MIGRACIÓN OPCIONAL — alias y cbu en empresas
-- ============================================================
-- ⚠️ OPCIONAL: solo ejecutar si se quiere que el panel admin
--    ("Configuración de la empresa") pueda guardar el Alias de
--    Transferencia y el CBU/CVU.
--
-- Sin esta migración, la app funciona igual (el carrito muestra
-- el alias "aventus.perfumeria" por defecto), pero el botón
-- "Guardar" de Configuración falla con:
--   "column empresas.alias does not exist"
-- porque la base real de producción NO tiene esas columnas.
--
-- Es 100% aditiva y segura para los demás tenants:
--   • Agrega 2 columnas NULLABLES (no obliga datos)
--   • IF NOT EXISTS → no falla si se ejecuta dos veces
--   • No modifica ni borra datos existentes
-- ============================================================

ALTER TABLE public.empresas
  ADD COLUMN IF NOT EXISTS alias text,
  ADD COLUMN IF NOT EXISTS cbu text;