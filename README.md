# AVENTUS — Perfumería Premium

Plataforma oficial de E-Commerce y Punto de Venta (POS) para **AVENTUS Perfumería** — *El paraíso de los perfumes 👑* · San Miguel de Tucumán · 8 años junto a vos 🤍

## Características Principales

- **Catálogo Premium de Perfumería**: **9 categorías reales del negocio** (Perfumes Árabes, Perfumes Extractos, Perfumes Midoré, Desodorantes Árabes, Perfumes ONLYYOU, Perfumes PLATA, Perfumes Miniaturas, Perfumes Tubitos, Productos de Pelo) con mosaico HD, productos de referencia con precios en ARS e imágenes de marca. El catálogo definitivo de productos/precios se carga con la lista real del dueño.
- **Identidad AVENTUS**: Paleta oro champagne (#C9A962) + negro cálido + marfil, tipografías Playfair Display + Outfit, logo oficial del cliente e imágenes HD propias (banners y categorías).
- **Interfaz Estilo PedidosYa Light**: Navegación ágil, tarjetas claras, buscador rápido por palabras clave (#Árabes, #Tester, #Original) y carrito flotante interactivo.
- **Seguimiento en Vivo y Pedidos por WhatsApp**: Pedidos integrados a WhatsApp (+54 381 510-2886) y seguimiento de estado en tiempo real (Pendiente → Armando Pedido → Entregado).
- **Punto de Venta (POS) Integrado**: Gestión operativa para mostrador con búsqueda rápida por código de producto.
- **Multi-Tenant**: Arquitectura por slug (`/aventus`, `/admin/aventus`) que permite convivir con otras empresas en la misma base.
- **Mayorista y Minorista**: Productos con enfoque de reventa (badges MAYORISTA) y venta al público general.

## Datos del Negocio

- **WhatsApp**: +54 381 510-2886
- **Instagram**: [@aventus.perfumeria](https://www.instagram.com/aventus.perfumeria)
- **Facebook**: Perfumería Aventus
- **Sucursales**: San Martín 629 (Galería Gran Vía, local 34) y Buenos Aires 61 (Galería Mercado, Showroom isla 3) — San Miguel de Tucumán
- **Envíos a todo el país** · Ventas por mayor y menor

## Tecnologías

- **Frontend**: React 19, TypeScript, Vite 8, Tailwind CSS v4, Framer Motion, Lucide Icons, React Router 7
- **Backend / DB**: Supabase (PostgreSQL + Realtime)

## Configuración de Base de Datos

> ⚠️ **Base de producción ya existente (multi-tenant con otros clientes):**
> Ejecutar **SOLO** el seed. NO correr `schema.sql` (las tablas ya existen) ni `fix_rls.sql` (seguridad global de todos los tenants).

```sql
-- ✅ BÁSICO: agregar AVENTUS como empresa nueva (no toca otros clientes)
-- 1. Seed de AVENTUS (empresa + 9 categorías reales + banners + productos de referencia)
sql/seed_aventus.sql

-- 2. OPCIONAL: habilita guardar Alias/CBU en el panel admin
--    (sin esto la app funciona; el carrito muestra "aventus.perfumeria" por defecto)
sql/migracion_alias_cbu.sql
```

> Si la base está **vacía o es nueva** (primera vez): correr primero `sql/schema.sql` (DDL), opcionalmente `sql/fix_rls.sql` (políticas RLS) y luego `sql/seed_aventus.sql`.

## Instalación y Desarrollo Local

```bash
# Instalar dependencias
npm install

# Configurar credenciales
copy .env.example .env   # luego completar URL y anon key de Supabase

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
```

## Acceso al Panel Admin

- `/admin/aventus` → Panel de administración (contraseñas en `.env`: `VITE_ADMIN_PASSWORD`, `VITE_COCINA_PASSWORD`, `VITE_OPERADOR_PASSWORD`)
- Roles: `admin` (todo), `cocina` (pedidos/preparación), `operador` (tomar pedido)
