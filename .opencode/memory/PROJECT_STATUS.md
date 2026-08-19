# Estado del Proyecto — AVENTUS Perfumería

## Estado general: 🟢 En curso (adaptación completada, validación final pendiente)

## Progreso
- **Completado**: ~95% (adaptación white-label; falta seed en prod + fotos/precios reales)
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
| Ejecutar seed_aventus.sql en Supabase | Pendiente dueño | Credenciales Supabase |
| Fotos y precios reales de productos | Pendiente dueño | Lista oficial |