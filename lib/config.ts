/**
 * CONFIGURACIÓN DE LA TIENDA
 *
 * Este archivo contiene toda la información de la tienda que puedes editar fácilmente.
 * Modifica los valores aquí y los cambios se aplicarán en toda la aplicación.
 */

export const storeConfig = {
  // INFORMACIÓN BÁSICA DE LA TIENDA
  storeName: "PLATA MAR CALDERÓN",
  storeSlogan: "Plata, oro y platino de la más alta calidad",
  storeDescription: "Expertos en joyería fina de plata, oro y platino. Diseños únicos y calidad excepcional para cada ocasión.",

  // CONTACTO
  contact: {
    phone: "5529711016",
    whatsapp: "525529711016", // Incluye código de país sin el +
    email: "contacto@platamarcalderon.com", // Puedes cambiar este email
  },

  // REDES SOCIALES
  social: {
    facebook: "https://www.facebook.com/PlatMarCalderon",
    instagram: "https://www.instagram.com/platamarcalderon",
    // Puedes agregar más redes sociales aquí:
    // twitter: "https://twitter.com/tuusuario",
    // tiktok: "https://www.tiktok.com/@tuusuario",
  },

  // ENVÍO
  shipping: {
    freeShippingMinimum: 2000, // En pesos mexicanos
    message: "Envío gratis en compras mayores a $2,000 MXN",
  },

  // MONEDA
  currency: {
    symbol: "$",
    code: "MXN",
    name: "Pesos Mexicanos",
  },

  // ESPECIALIDADES (mostrado en el footer)
  specialties: "Plata, oro y platino",

  // HORARIO DE ATENCIÓN (opcional - puedes agregarlo al footer)
  businessHours: {
    weekdays: "Lun - Vie: 9:00 AM - 7:00 PM",
    saturday: "Sábado: 10:00 AM - 6:00 PM",
    sunday: "Domingo: Cerrado",
  },

  // UBICACIÓN (opcional)
  location: {
    city: "Ciudad de México",
    state: "CDMX",
    country: "México",
  },
};

// Función helper para formatear precios
export const formatPrice = (price: number): string => {
  return `${storeConfig.currency.symbol}${price.toLocaleString('es-MX')}`;
};

// Función helper para el link de WhatsApp
export const getWhatsAppLink = (message: string = ""): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${storeConfig.contact.whatsapp}${message ? `?text=${encodedMessage}` : ''}`;
};

// Función helper para el link de llamada
export const getPhoneLink = (): string => {
  return `tel:+${storeConfig.contact.whatsapp}`;
};
