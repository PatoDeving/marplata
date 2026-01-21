# 🚀 Inicio Rápido - Plata Mar Calderón

## 📍 Información Actualizada

Tu tienda ya está configurada con la información de **Plata Mar Calderón**:

### ✅ Lo que ya está listo:

- ✨ **Nombre:** PLATA MAR CALDERÓN
- 📱 **WhatsApp:** 55 2971 1016
- 📘 **Facebook:** [Plata Mar Calderón](https://www.facebook.com/PlatMarCalderon)
- 📷 **Instagram:** [@platamarcalderon](https://www.instagram.com/platamarcalderon)
- 💰 **30 productos** con precios en pesos mexicanos
- 🇲🇽 Todo en español

---

## 🎯 Acceso Rápido

### Para iniciar el servidor:
```bash
cd Jewellery-master
npm run dev
```

Luego abre: **http://localhost:3000**

### Credenciales de Admin:
- **Email:** admin@joyeria.com
- **Contraseña:** admin123

---

## ⚡ Ediciones Rápidas

### 1️⃣ Cambiar teléfono o redes sociales:
**Archivo:** `lib/config.ts`
```typescript
contact: {
  phone: "5529711016",           // ← Cambia aquí
  whatsapp: "525529711016",
},
social: {
  facebook: "https://...",       // ← Cambia aquí
  instagram: "https://...",      // ← Cambia aquí
},
```

### 2️⃣ Editar productos:
**Archivo:** `prisma/seed.ts` (línea 62)
```typescript
{
  name: 'Collar de Perlas',      // ← Nombre
  price: 60000,                  // ← Precio
  description: '...',            // ← Descripción
}
```
**Después de editar:** `npm run db:seed`

### 3️⃣ Cambiar nombre de la tienda:
**Archivo:** `lib/config.ts`
```typescript
storeName: "PLATA MAR CALDERÓN",  // ← Cambia aquí
```

---

## 📚 Documentación Completa

Para instrucciones detalladas, abre: **MANUAL-ADMINISTRADOR.md**

---

## ⚠️ Importante para la Demo

1. ✅ El servidor debe estar corriendo: `npm run dev`
2. ✅ Abre http://localhost:3000 en tu navegador
3. ✅ Comparte tu pantalla en Zoom
4. ✅ Navega por la tienda para mostrar los productos

### Datos para la demo:
- **30 productos** en español con precios en MXN
- **Contacto:** WhatsApp, Facebook, Instagram funcionando
- **Usuario de prueba:** usuario@ejemplo.com / test123

---

## 🔧 Solución Rápida de Problemas

**Problema:** El servidor no inicia
```bash
npm install
npm run dev
```

**Problema:** Los cambios no se ven
1. Presiona `Ctrl + C` para detener
2. Ejecuta `npm run dev` de nuevo
3. Recarga el navegador con `Ctrl + Shift + R`

**Problema:** Error en productos
```bash
npm run db:seed
```

---

## 📞 Contacto de la Clienta

- **Negocio:** Plata Mar Calderón
- **Especialidad:** Plata, oro y platino
- **Teléfono/WhatsApp:** 55 2971 1016
- **Instagram:** @platamarcalderon
- **Facebook:** Plata Mar Calderón

---

**¡Listo para tu demo!** 🎉
