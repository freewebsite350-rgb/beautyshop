import { Link } from "react-router-dom";
import { ShoppingBag, Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-pink-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">✨</span>
            </div>
            <span className="font-bold text-lg text-gray-900">
              Botswana <span className="text-pink-600">SmartShop</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/perfumes"
              className="text-gray-700 hover:text-pink-600 font-medium transition-colors"
            >
              Perfumes
            </Link>
            <Link
              to="/nails"
              className="text-gray-700 hover:text-pink-600 font-medium transition-colors"
            >
              Nails & Accessories
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-pink-600 font-medium transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-pink-600 font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 hover:bg-pink-50 rounded-lg transition-colors">
              <Heart className="w-6 h-6 text-gray-700" />
            </button>
            <button className="p-2 hover:bg-pink-50 rounded-lg transition-colors relative">
              <ShoppingBag className="w-6 h-6 text-gray-700" />
              <span className="absolute top-1 right-1 w-5 h-5 bg-pink-600 text-white text-xs rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-pink-50 rounded-lg transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-pink-100">
            <div className="flex flex-col gap-3 pt-4">
              <Link
                to="/perfumes"
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors px-2 py-2"
              >
                Perfumes
              </Link>
              <Link
                to="/nails"
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors px-2 py-2"
              >
                Nails & Accessories
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors px-2 py-2"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors px-2 py-2"
              >
                Contact
              </Link>
              <div className="flex gap-3 pt-2">
                <button className="flex-1 p-2 hover:bg-pink-50 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <Heart className="w-5 h-5 text-gray-700" />
                  <span className="text-sm text-gray-700">Wishlist</span>
                </button>
                <button className="flex-1 p-2 hover:bg-pink-50 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-gray-700" />
                  <span className="text-sm text-gray-700">Cart</span>
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
