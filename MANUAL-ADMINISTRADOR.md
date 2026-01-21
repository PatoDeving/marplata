# 📚 Manual del Administrador - Plata Mar Calderón

## 🎯 Índice
1. [Acceso al Sistema](#acceso-al-sistema)
2. [Cómo Editar la Información de la Tienda](#cómo-editar-la-información-de-la-tienda)
3. [Cómo Agregar/Editar Productos](#cómo-agregar-editar-productos)
4. [Cómo Cambiar Precios](#cómo-cambiar-precios)
5. [Cómo Actualizar Redes Sociales](#cómo-actualizar-redes-sociales)
6. [Cómo Iniciar/Detener el Servidor](#cómo-iniciar-detener-el-servidor)
7. [Solución de Problemas](#solución-de-problemas)

---

## 🔐 Acceso al Sistema

### Credenciales de Administrador
- **Email:** admin@joyeria.com
- **Contraseña:** admin123

⚠️ **IMPORTANTE:** Cambia esta contraseña después de tu primera sesión por seguridad.

### Para cambiar la contraseña de admin:
1. Abre el archivo `.env` en la carpeta del proyecto
2. Busca la línea `ADMIN_PASSWORD="admin123"`
3. Cámbiala por tu nueva contraseña: `ADMIN_PASSWORD="tu_nueva_contraseña"`
4. Guarda el archivo
5. Ejecuta en la terminal:
   ```bash
   cd Jewellery-master
   npm run db:seed
   ```

---

## 📝 Cómo Editar la Información de la Tienda

### Archivo Principal de Configuración
Toda la información de contacto, redes sociales y configuración de la tienda está en UN SOLO ARCHIVO para facilitar la edición:

**Archivo:** `lib/config.ts`

### Qué puedes editar:

```typescript
// NOMBRE DE LA TIENDA
storeName: "PLATA MAR CALDERÓN",

// TELÉFONO Y WHATSAPP
contact: {
  phone: "5529711016",
  whatsapp: "525529711016",
  email: "contacto@platamarcalderon.com",
},

// REDES SOCIALES
social: {
  facebook: "https://www.facebook.com/PlatMarCalderon",
  instagram: "https://www.instagram.com/platamarcalderon",
},

// ENVÍO GRATIS
shipping: {
  freeShippingMinimum: 2000, // Cambia el monto mínimo aquí
},
```

### Pasos para editar:
1. Abre el archivo `lib/config.ts` con cualquier editor de texto
2. Modifica los valores entre comillas `"..."`
3. Guarda el archivo
4. Reinicia el servidor (ver sección [Cómo Iniciar/Detener el Servidor](#cómo-iniciar-detener-el-servidor))

---

## 🛍️ Cómo Agregar/Editar Productos

### Archivo de Productos
**Archivo:** `prisma/seed.ts`

### Para EDITAR un producto existente:

1. Abre `prisma/seed.ts`
2. Busca el producto que quieres editar (línea 62 en adelante)
3. Ejemplo de un producto:

```typescript
{
  name: 'Collar de Perlas',                    // ← Cambia el nombre aquí
  slug: 'collar-perlas',                       // ← URL amigable (sin espacios, minúsculas)
  description: 'Hermoso collar de perlas...',  // ← Cambia la descripción
  price: 60000,                                // ← Precio en pesos
  originalPrice: 90000,                        // ← Precio original (opcional, para descuentos)
  image: 'https://images.unsplash.com/...',   // ← URL de la imagen
  category: 'women',                           // ← Categoría: women, men, unisex
  inStock: true,                               // ← true = disponible, false = agotado
  stockQuantity: 25,                           // ← Cantidad en inventario
  rating: 5.0,                                 // ← Calificación (0-5)
  reviewCount: 15,                             // ← Número de reseñas
},
```

4. Guarda el archivo
5. Actualiza la base de datos:
   ```bash
   cd Jewellery-master
   npm run db:seed
   ```

### Para AGREGAR un nuevo producto:

1. Copia uno de los productos existentes
2. Pégalo al final de la lista (antes del `];`)
3. Modifica todos los valores
4. **IMPORTANTE:** El `slug` debe ser único (no puede repetirse)
5. Guarda y ejecuta `npm run db:seed`

### Ejemplo de nuevo producto:
```typescript
{
  name: 'Anillo de Compromiso Diamante',
  slug: 'anillo-compromiso-diamante',
  description: 'Hermoso anillo de compromiso con diamante de 1 quilate.',
  price: 150000,
  originalPrice: 200000,
  image: 'https://tu-url-de-imagen.com/anillo.jpg',
  category: 'women',
  inStock: true,
  stockQuantity: 5,
  rating: 5.0,
  reviewCount: 10,
},
```

---

## 💰 Cómo Cambiar Precios

### Cambiar precios individuales:
1. Abre `prisma/seed.ts`
2. Busca el producto
3. Cambia el valor de `price: 60000` por el nuevo precio
4. Guarda y ejecuta `npm run db:seed`

### Cambiar precios masivamente:

Si quieres aumentar o disminuir todos los precios en un porcentaje:

1. Abre `prisma/seed.ts`
2. Usa buscar y reemplazar en tu editor
3. Por ejemplo, para aumentar 10%:
   - Busca cada precio
   - Multiplica por 1.10

**Tip:** Puedes pedirle a un desarrollador que haga un script para cambios masivos.

---

## 📱 Cómo Actualizar Redes Sociales

### Método Rápido (Recomendado):
1. Abre `lib/config.ts`
2. Ve a la sección `social:`
3. Actualiza las URLs:
   ```typescript
   social: {
     facebook: "https://www.facebook.com/TuPagina",
     instagram: "https://www.instagram.com/tuusuario",
   },
   ```
4. Guarda y reinicia el servidor

### Agregar más redes sociales:

Ejemplo para agregar TikTok:
```typescript
social: {
  facebook: "https://www.facebook.com/PlatMarCalderon",
  instagram: "https://www.instagram.com/platamarcalderon",
  tiktok: "https://www.tiktok.com/@platamarcalderon",
},
```

Luego necesitarás editar `components/layout/Footer.tsx` para agregar el ícono.

---

## 🚀 Cómo Iniciar/Detener el Servidor

### Para INICIAR el servidor:

```bash
# 1. Abre la terminal
# 2. Ve a la carpeta del proyecto
cd Jewellery-master

# 3. Inicia el servidor
npm run dev
```

El servidor se iniciará en: http://localhost:3000

### Para DETENER el servidor:
- Presiona `Ctrl + C` en la terminal

### Para reiniciar después de cambios:
```bash
# 1. Detén el servidor (Ctrl + C)
# 2. Inicia de nuevo
npm run dev
```

---

## 🔧 Solución de Problemas

### Problema: El servidor no inicia
**Solución:**
```bash
# Elimina node_modules e instala de nuevo
rm -rf node_modules
npm install
npm run dev
```

### Problema: Los cambios no se ven
**Solución:**
1. Detén el servidor (Ctrl + C)
2. Reinicia: `npm run dev`
3. Recarga la página en el navegador (Ctrl + Shift + R)

### Problema: Error en la base de datos
**Solución:**
```bash
cd Jewellery-master
rm -f prisma/dev.db
npm run db:push
npm run db:seed
```

### Problema: Olvidé mi contraseña de admin
**Solución:**
1. Abre `.env`
2. Cambia `ADMIN_PASSWORD="admin123"`
3. Ejecuta `npm run db:seed`

---

## 📞 Estructura de Archivos Importantes

```
Jewellery-master/
├── lib/
│   └── config.ts              ← CONFIGURACIÓN PRINCIPAL (EDITA AQUÍ)
├── prisma/
│   └── seed.ts                ← PRODUCTOS (EDITA AQUÍ)
├── components/
│   └── layout/
│       ├── Header.tsx         ← Encabezado del sitio
│       └── Footer.tsx         ← Pie de página
├── .env                       ← Contraseñas y configuración
└── MANUAL-ADMINISTRADOR.md    ← Este archivo
```

---

## ✅ Lista de Verificación Rápida

Antes de hacer cambios importantes:

- [ ] Hice un respaldo de los archivos que voy a modificar
- [ ] Tengo el servidor detenido antes de hacer cambios en la base de datos
- [ ] Verifiqué que no haya errores de sintaxis (comillas, comas, etc.)
- [ ] Probé los cambios en localhost antes de publicar
- [ ] Los enlaces de redes sociales funcionan correctamente
- [ ] Los precios están en pesos mexicanos
- [ ] Las imágenes de productos se ven correctamente

---

## 🎨 Personalización Avanzada

### Cambiar colores del sitio:
Archivo: `app/globals.css`
Busca las variables CSS y cámbialas.

### Cambiar el logo:
1. Reemplaza el texto en `components/layout/Header.tsx` línea 182
2. O agrega una imagen logo en `public/` y usa un componente Image

### Cambiar textos del sitio:
Busca el texto en los archivos `.tsx` y cámbialo directamente.

---

## 📧 Contacto para Soporte Técnico

Si necesitas ayuda con cambios más complejos:
- Documenta exactamente qué quieres cambiar
- Toma capturas de pantalla
- Guarda los mensajes de error si los hay

---

**Última actualización:** Enero 2026
**Versión:** 1.0
