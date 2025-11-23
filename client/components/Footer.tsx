import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, MessageCircle, Lock } from "lucide-react";

export default function Footer() {
  const whatsappNumber = "267722246002";
  const whatsappMessage = encodeURIComponent(
    "Hi Botswana SmartShop! I'd like to know more about your products.",
  );

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">✨</span>
              </div>
              <span className="font-bold text-lg text-gray-900">
                Botswana <span className="text-pink-600">SmartShop</span>
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Premium perfumes, nails, wigs, and accessories for the modern
              woman.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-gray-900">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  to="/perfumes"
                  className="text-sm text-gray-600 hover:text-pink-600 transition-colors"
                >
                  Perfumes
                </Link>
              </li>
              <li>
                <Link
                  to="/nails"
                  className="text-sm text-gray-600 hover:text-pink-600 transition-colors"
                >
                  Nails & Accessories
                </Link>
              </li>
              <li>
                <Link
                  to="/hair"
                  className="text-sm text-gray-600 hover:text-pink-600 transition-colors"
                >
                  Hair & Wigs
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-gray-600 hover:text-pink-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-gray-600 hover:text-pink-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-gray-900">Customer Service</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-pink-600 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-pink-600 transition-colors"
                >
                  Shipping Info
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-pink-600 transition-colors"
                >
                  Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-pink-600 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-gray-900">Contact Us</h3>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href="mailto:info@botswanasmartshop.com"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-pink-600 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
            <a
              href="tel:+267722246002"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-pink-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              +267 72 246 002
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-pink-600 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Gaborone, Botswana
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              © 2024 Botswana SmartShop. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-pink-600 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.521h-11.042V6.48h11.042v11.041zM12 6.99c-2.728 0-4.951 2.223-4.951 4.951s2.223 4.951 4.951 4.951 4.951-2.223 4.951-4.951-2.223-4.951-4.951-4.951zm4.951-2.97h-2.97v2.97h2.97v-2.97z" />
                </svg>
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-600 transition-colors"
                aria-label="WhatsApp"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a8.99 8.99 0 00-4.581 1.235l-.324.202-.335-.056C5.053 7.735 4.042 5.316 4.423 2.734c.446-3.119 3.266-5.546 6.514-5.546a6.521 6.521 0 016.362 6.374c.149 3.205-2.564 6.146-5.703 6.514-.577.049-1.127.035-1.588-.047l-.323-.049-.347.215a9.017 9.017 0 01-1.383.645l-.535.235-.56-.181-1.766-.577z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
