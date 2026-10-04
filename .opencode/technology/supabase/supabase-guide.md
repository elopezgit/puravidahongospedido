# Supabase — Guía Tecnológica

> **Complementario (ADR-006)** — La referencia técnica oficial es la skill global `supabase` de
> Supabase (`supabase/agent-skills`), que el agente carga bajo demanda, junto con el MCP oficial
> `supabase` para operar sobre el proyecto real. Esta guía fija las **reglas del proyecto**
> (Gobernanza AIBF, puertas de calidad, flujo de aprobación); la skill oficial resuelve el **cómo**
> técnico. Ante contradicción, prevalece la skill oficial en lo técnico y esta guía en las puertas
> de calidad y la aprobación.

## Versiones y compatibilidad
- Supabase CLI: `npm install -g supabase`
- `@supabase/supabase-js`: última estable
- `@supabase/ssr`: requerido para Next.js App Router
- Node: 18+ (20+ recomendado)
- Deno: 1.x (para Edge Functions)

## Comandos útiles

```bash
# Inicializar proyecto Supabase local
supabase init

# Iniciar servicios locales (PostgreSQL + Studio)
supabase start

# Detener servicios
supabase stop

# Generar tipos TypeScript desde esquema
supabase gen types typescript --local > src/lib/supabase/database.types.ts

# Crear migración
supabase migration new nombre_migracion

# Aplicar migraciones a base remota
supabase db push

# Deploy Edge Function
supabase functions deploy mi-funcion

# Ver logs de Edge Functions
supabase functions logs mi-funcion
```

## Servicios locales (supabase start)
- Studio: http://localhost:54323
- API: http://localhost:54321
- DB: postgresql://postgres:postgres@localhost:54322/postgres
- SMTP: http://localhost:54324 (email testing)
