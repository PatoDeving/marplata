# 🚀 Guía de Deployment en Vercel con Postgres

## 📋 Requisitos Previos
- Cuenta de Vercel (gratis)
- Cuenta de GitHub (para conectar el repositorio)
- Proyecto subido a GitHub

---

## 🗄️ PASO 1: Crear Base de Datos en Vercel

### 1.1 Accede a Vercel Dashboard
1. Ve a [vercel.com](https://vercel.com) e inicia sesión
2. Selecciona tu proyecto (o créalo primero)

### 1.2 Crear Postgres Database
1. En el dashboard de Vercel, ve a **Storage**
2. Click en **Create Database**
3. Selecciona **Postgres** (Powered by Neon)
4. Elige un nombre para tu base de datos (ej: `jewellery-db`)
5. Selecciona la región más cercana a tus usuarios
6. Click en **Create**

### 1.3 Conectar Database al Proyecto
1. Una vez creada la DB, ve a la pestaña **Connect**
2. Selecciona tu proyecto de Vercel
3. Click en **Connect**

### 1.4 Copiar Variables de Entorno
1. Ve a la pestaña **.env.local**
2. Verás variables como:
   ```bash
   POSTGRES_URL="..."
   POSTGRES_PRISMA_URL="..."
   POSTGRES_URL_NON_POOLING="..."
   ```
3. Copia **POSTGRES_PRISMA_URL** como `DATABASE_URL`
4. Copia **POSTGRES_URL_NON_POOLING** como `DIRECT_URL`

---

## ⚙️ PASO 2: Configurar Variables de Entorno

### 2.1 En Vercel Dashboard
1. Ve a tu proyecto en Vercel
2. Click en **Settings** > **Environment Variables**
3. Agrega las siguientes variables:

```bash
DATABASE_URL = [tu-postgres-prisma-url]
DIRECT_URL = [tu-postgres-url-non-pooling]
JWT_SECRET = [genera-uno-con: openssl rand -base64 32]
NEXTAUTH_SECRET = [genera-otro-secret]
NODE_ENV = production
```

### 2.2 Generar Secrets Seguros
En tu terminal local, genera secrets:
```bash
openssl rand -base64 32
```

Usa diferentes valores para `JWT_SECRET` y `NEXTAUTH_SECRET`.

---

## 📦 PASO 3: Preparar el Proyecto

### 3.1 Crear Migraciones (Local)
En tu computadora, con la base de datos conectada:

```bash
cd Jewellery-master
npm install
npx prisma migrate dev --name init
```

Esto creará las tablas en tu base de datos de Vercel.

### 3.2 Verificar (Opcional)
Abre Prisma Studio para verificar que las tablas se crearon:
```bash
npx prisma studio
```

---

## 🌐 PASO 4: Deploy en Vercel

### Opción A: Deploy desde GitHub (Recomendado)

1. **Sube el proyecto a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Jewellery store"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/tu-repo.git
   git push -u origin main
   ```

2. **Conecta a Vercel:**
   - Ve a [vercel.com/new](https://vercel.com/new)
   - Click en **Import Git Repository**
   - Selecciona tu repositorio
   - Vercel detectará automáticamente que es Next.js
   - Click en **Deploy**

### Opción B: Deploy con Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

---

## 🎨 PASO 5: Subir Imágenes de Productos

### Opción 1: Usar `/public` folder (Simple)
1. Coloca tus fotos en `public/images/products/`
2. En tu código, referencia como: `/images/products/anillo.jpg`
3. Haz commit y push a GitHub

### Opción 2: Usar Cloudinary o Vercel Blob (Recomendado)
Para imágenes grandes o muchas fotos, considera:
- **Vercel Blob Storage** (de pago)
- **Cloudinary** (gratis hasta cierto límite)
- **AWS S3** (opción profesional)

---

## 🔧 PASO 6: Post-Deploy

### 6.1 Seed de Datos Iniciales (Opcional)
Si quieres agregar productos de ejemplo:
```bash
# Local con DB de Vercel conectada
npm run db:seed
```

### 6.2 Verificar Deployment
1. Vercel te dará una URL: `https://tu-proyecto.vercel.app`
2. Visita la URL y verifica que todo funcione
3. Registra un usuario de prueba
4. Agrega productos al carrito

---

## 🐛 Troubleshooting

### Error: "Can't reach database server"
- Verifica que `DATABASE_URL` y `DIRECT_URL` estén correctos
- Asegúrate de haber corrido `prisma generate`

### Error: "Prisma Client not found"
- Agrega `postinstall: "prisma generate"` en package.json (ya está)
- Re-deploy el proyecto

### Las imágenes no cargan
- Verifica que las rutas sean correctas (`/images/...`)
- Asegúrate de que las imágenes estén en la carpeta `public/`

---

## 📝 Checklist Final

- [ ] Base de datos Postgres creada en Vercel
- [ ] Variables de entorno configuradas en Vercel
- [ ] Migraciones ejecutadas (`prisma migrate`)
- [ ] Proyecto subido a GitHub
- [ ] Conectado a Vercel
- [ ] Deploy exitoso
- [ ] Sitio funciona correctamente
- [ ] Imágenes de productos subidas

---

## 🔐 Seguridad Post-Deploy

1. **Cambia las contraseñas por defecto** de admin
2. **No compartas** tu `JWT_SECRET` o `NEXTAUTH_SECRET`
3. **Habilita HTTPS** (Vercel lo hace automáticamente)
4. **Monitorea** los logs de Vercel regularmente

---

## 📞 Siguientes Pasos

1. Integrar **MercadoPago** para pagos
2. Configurar **dominio personalizado** (ej: `platamarcalderon.com`)
3. Agregar **Analytics** (Vercel Analytics o Google Analytics)
4. Configurar **emails transaccionales** (SendGrid, Resend)

---

¡Tu tienda de joyería está lista! 🎉
