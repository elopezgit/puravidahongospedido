# Estado del Proyecto — AVENTUS Perfumería

## Estado general: 🟢 En curso (rediseño premium + 9 categorías reales + seed en producción; falta lista real de productos/precios)

## Progreso
- **Completado**: ~95% (adaptación white-label; rediseño premium; 9 categorías reales aplicadas y seed ejecutado en producción; falta lista real de productos/precios del dueño)
- **Sprint actual**: Lanzamiento AVENTUS
- **Velocidad del equipo**: N/A (proyecto individual)

## Bloqueos activos
| Bloqueo | Impacto | Dueño | Estado |
|---|---|---|---|
| (ninguno) | | | |

## Riesgos
| Riesgo | Probabilidad | Impacto | Mitigación |
|---|---|---|---|
| Precios de referencia no coinciden con lista real del dueño | Media | Medio | Confirmar antes de lanzar; chat WhatsApp valida por pedido |
| Imágenes placeholder SVG hasta tener fotos reales | Media | Bajo | Los SVG ya son de marca; reemplazar por fotos gradualmente |
| Alias/CBU de transferencia aún no confirmados | Media | Medio | Panel Configuración permite editarlos en runtime |

## Métricas recientes
- **Cobertura de pruebas**: 0%
- **Deuda técnica**: Baja
- **Issues abiertos**: 0

## Próximos hitos
| Hito | Fecha | Dependencias |
|---|---|---|
| Build verde (`npm run build`) | 19/08/2026 | Ninguna |
| Auditoría de residuos (grep mrcerdo/chorizo/suplement en src) | 19/08/2026 | Ninguna |
| Ejecutar seed_aventus.sql en Supabase | 19/08/2026 | ✅ (runner PostgREST: 9 categorías reales + 3 banners + 11 productos de referencia) |
| Fotos y precios reales de productos | Pendiente dueño | Lista oficial |