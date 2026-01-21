import Link from "next/link";
import { Facebook, Instagram, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">PLATA MAR CALDERÓN</h3>
            <p className="text-slate-400 text-sm mb-4">
              Expertos en joyería fina de plata, oro y platino.
              Diseños únicos y calidad excepcional para cada ocasión.
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="https://wa.me/525529711016" className="hover:text-primary">
                  55 2971 1016
                </a>
              </p>
              <p>
                <span className="font-medium">Especialidad:</span> Plata, oro y platino
              </p>
            </div>
            <div className="flex gap-4 mt-4">
              <Link
                href="https://www.facebook.com/PlatMarCalderon"
                target="_blank"
                className="hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/platamarcalderon"
                target="_blank"
                className="hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://wa.me/525529711016"
                target="_blank"
                className="hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/shop" className="hover:text-primary transition-colors">
                  Tienda
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-primary transition-colors">
                  Mi Carrito
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="hover:text-primary transition-colors">
                  Lista de Deseos
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Servicio al Cliente</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Información de Envío
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Devoluciones
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Garantía
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contáctanos</h4>
            <p className="text-sm text-slate-400 mb-4">
              ¿Tienes preguntas? ¡Estamos aquí para ayudarte!
            </p>
            <div className="space-y-3">
              <a
                href="https://wa.me/525529711016"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors text-center text-sm"
              >
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/platamarcalderon"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-md transition-colors text-center text-sm"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Plata Mar Calderón. Todos los derechos reservados.</p>
          <div className="mt-4 md:mt-0">
            <p className="text-xs">Plata, oro y platino de la más alta calidad</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
