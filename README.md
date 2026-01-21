# 💍 Plata Mar Calderón - Tienda de Joyería Online

Tienda de e-commerce especializada en joyería de plata, oro y platino.

## 🌟 Características

- ✅ Catálogo de productos con categorías
- ✅ Sistema de autenticación de usuarios
- ✅ Carrito de compras
- ✅ Lista de deseos (Wishlist)
- ✅ Checkout integrado (preparado para MercadoPago)
- ✅ Gestión de órdenes
- ✅ Panel de administración
- ✅ Responsive design

## 🛠️ Tecnologías

- **Framework:** Next.js 16 (App Router)
- **Base de Datos:** PostgreSQL (Vercel Postgres)
- **ORM:** Prisma
- **Autenticación:** JWT / NextAuth
- **UI:** TailwindCSS + Radix UI
- **Gestión de Estado:** Zustand
- **Deployment:** Vercel

## 📦 Instalación

### Requisitos previos
- Node.js 18+
- npm o yarn

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/PatoDeving/marplata.git
cd marplata
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env
```

Edita `.env` y agrega tus variables:
- `DATABASE_URL` - Tu connection string de PostgreSQL
- `DIRECT_URL` - Direct connection (para migraciones)
- `JWT_SECRET` - Secret para JWT (genera con: `openssl rand -base64 32`)

4. **Configurar base de datos**
```bash
npx prisma generate
npx prisma migrate dev --name init
```

5. **Ejecutar en desarrollo**
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🚀 Deployment en Vercel

Consulta la guía completa en: [DEPLOYMENT-VERCEL.md](./DEPLOYMENT-VERCEL.md)

### Resumen rápido:

1. **Crear base de datos en Vercel**
   - Storage > Create Database > Postgres

2. **Conectar repositorio**
   - Import desde GitHub en vercel.com

3. **Configurar variables de entorno**
   - Settings > Environment Variables
   - Agregar `DATABASE_URL`, `DIRECT_URL`, `JWT_SECRET`

4. **Deploy automático**
   - Vercel detecta Next.js y hace deploy automáticamente

## 📁 Estructura del Proyecto

```
marplata/
├── app/                    # App Router de Next.js
│   ├── api/               # API Routes
│   ├── account/           # Cuenta de usuario
│   ├── cart/              # Carrito de compras
│   ├── checkout/          # Proceso de checkout
│   ├── login/             # Login
│   ├── register/          # Registro
│   ├── shop/              # Tienda
│   └── wishlist/          # Lista de deseos
├── components/            # Componentes React
│   ├── home/             # Componentes del home
│   ├── layout/           # Header, Footer, Nav
│   └── ui/               # Componentes UI reutilizables
├── lib/                  # Utilidades y helpers
├── prisma/               # Schema y migraciones
│   └── schema.prisma     # Definición de modelos
└── public/               # Archivos estáticos
    └── images/           # Imágenes de productos
```

## 🔐 Usuarios de Prueba (Development)

```
Admin:
Email: admin@test.com
Password: admin123

Usuario:
Email: user@test.com
Password: test123
```

**⚠️ CAMBIAR EN PRODUCCIÓN**

## 🛒 Funcionalidades Principales

### Para Clientes
- Navegación por categorías (Mujer, Niños, Artificial, etc.)
- Búsqueda de productos
- Carrito de compras persistente
- Lista de deseos
- Gestión de direcciones de envío
- Historial de órdenes

### Para Administradores
- Gestión de productos
- Gestión de órdenes
- Ver estadísticas de ventas

## 📝 Scripts Disponibles

```bash
npm run dev          # Desarrollo local
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Linter
npm run db:studio    # Prisma Studio (GUI para DB)
npm run db:migrate   # Crear migración
npm run db:push      # Push schema a DB
npm run db:seed      # Seed de datos iniciales
```

## 🔄 Próximas Funcionalidades

- [ ] Integración con MercadoPago
- [ ] Sistema de cupones/descuentos
- [ ] Notificaciones por email
- [ ] Panel de analytics
- [ ] Optimización de imágenes
- [ ] PWA (Progressive Web App)

## 📞 Contacto

- **WhatsApp:** [55 2971 1016](https://wa.me/525529711016)
- **Instagram:** [@platamarcalderon](https://www.instagram.com/platamarcalderon)
- **Facebook:** [PlatMarCalderon](https://www.facebook.com/PlatMarCalderon)

## 📄 Licencia

Este proyecto es privado y pertenece a Plata Mar Calderón.

---

Desarrollado con ❤️ para Plata Mar Calderón
