import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Sparkles,
  ShoppingBag,
  Truck,
  Heart,
  MessageCircle,
} from "lucide-react";
import { useState, useEffect } from "react";

interface CustomProduct {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  category: "perfumes" | "nails" | "hair";
}

export default function Index() {
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [customProducts, setCustomProducts] = useState<CustomProduct[]>([]);
  const whatsappNumber = "267722246002";
  const whatsappMessage = encodeURIComponent(
    "Hi Botswana SmartShop! I'm interested in your products. Can you help me?",
  );

  // Load custom products from localStorage
  useEffect(() => {
    const loadCustomProducts = () => {
      const saved = localStorage.getItem("shop_products");
      if (saved) {
        try {
          setCustomProducts(JSON.parse(saved));
        } catch (e) {
          console.error("Failed to parse products:", e);
        }
      }
    };

    loadCustomProducts();

    // Listen for storage changes (when admin adds products)
    const handleStorageChange = () => {
      loadCustomProducts();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // PWA Install Prompt
  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setDeferredPrompt(null);
      }
      setShowInstallPrompt(false);
    }
  };

  // Default products
  const defaultPerfumes = [
    {
      id: 1,
      name: "Blossom Dreams",
      price: "P299",
      image: "🌹",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Rose Elegance",
      price: "P349",
      image: "🌸",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Jasmine Garden",
      price: "P329",
      image: "🌼",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Lavender Bliss",
      price: "P319",
      image: "💜",
      rating: 4.8,
    },
  ];

  const defaultNails = [
    {
      id: 1,
      name: "Gel Polish Collection",
      price: "P199",
      image: "💅",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Nail Art Stickers",
      price: "P99",
      image: "✨",
      rating: 4.7,
    },
    {
      id: 3,
      name: "Diamond Nail Tips",
      price: "P149",
      image: "💎",
      rating: 4.8,
    },
    {
      id: 4,
      name: "Nail Brush Set",
      price: "P179",
      image: "🎨",
      rating: 4.6,
    },
  ];

  const defaultHair = [
    {
      id: 1,
      name: "Human Hair Wigs",
      price: "P799",
      image: "💇",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Synthetic Wigs",
      price: "P399",
      image: "💁",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Hair Extensions",
      price: "P599",
      image: "✂️",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Wig Accessories Pack",
      price: "P249",
      image: "👑",
      rating: 4.9,
    },
  ];

  // Merge default products with custom products from localStorage
  const customPerfumes = customProducts
    .filter((p) => p.category === "perfumes")
    .map((p) => ({
      id: parseInt(p.id) || Math.random(),
      name: p.name,
      price: p.price,
      image: p.image,
      rating: 5,
      description: p.description,
    }));

  const customNails = customProducts
    .filter((p) => p.category === "nails")
    .map((p) => ({
      id: parseInt(p.id) || Math.random(),
      name: p.name,
      price: p.price,
      image: p.image,
      rating: 5,
      description: p.description,
    }));

  const customHairProds = customProducts
    .filter((p) => p.category === "hair")
    .map((p) => ({
      id: parseInt(p.id) || Math.random(),
      name: p.name,
      price: p.price,
      image: p.image,
      rating: 5,
      description: p.description,
    }));

  // Combine default and custom products
  const perfumeProducts = [...defaultPerfumes, ...customPerfumes];
  const nailProducts = [...defaultNails, ...customNails];
  const hairProducts = [...defaultHair, ...customHairProds];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* PWA Install Prompt - Native App Style */}
      {showInstallPrompt && (
        <div className="fixed inset-0 bg-black/40 flex items-end sm:items-center justify-center z-50 p-4">
          <div className="w-full sm:w-full max-w-sm bg-white rounded-3xl sm:rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 sm:slide-in-from-center">
            {/* Header with gradient */}
            <div className="bg-gradient-to-b from-pink-500 to-rose-600 pt-8 pb-6 px-6 text-white text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/30">
                <span className="text-5xl">💄</span>
              </div>
              <h3 className="font-bold text-2xl mb-2">Botswana SmartShop</h3>
              <p className="text-sm opacity-90">Beauty & Accessories</p>
            </div>

            {/* Content */}
            <div className="px-6 py-6">
              <h4 className="font-bold text-lg text-gray-900 mb-2">
                Get Quick Access
              </h4>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Install Botswana SmartShop on your home screen to access
                products, place orders, and chat with our team anytime.
              </p>

              {/* Features list */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-pink-600 font-bold text-lg flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-sm text-gray-700">
                    Instant access without opening a browser
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-600 font-bold text-lg flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-sm text-gray-700">
                    Offline browsing of your favorites
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-600 font-bold text-lg flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-sm text-gray-700">
                    Push notifications for new products
                  </span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="px-6 pb-6 space-y-3">
              <button
                onClick={handleInstall}
                className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold rounded-xl hover:shadow-lg hover:from-pink-600 hover:to-rose-700 transition-all active:scale-95"
              >
                Install App
              </button>
              <button
                onClick={() => setShowInstallPrompt(false)}
                className="w-full px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-xl hover:bg-gray-200 transition-all active:scale-95"
              >
                Not Now
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-rose-50 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Content */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-pink-600 font-bold text-sm">
                    Welcome to Beauty
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Elevate Your{" "}
                  <span className="bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
                    Beauty Essence
                  </span>
                </h1>

                <p className="text-lg text-gray-600">
                  Discover premium perfumes and exquisite nail accessories from
                  Botswana's most trusted beauty boutique. Curated with passion
                  for the modern woman.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/perfumes"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    Shop Perfumes
                  </Link>
                  <Link
                    to="/nails"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-pink-600 font-bold rounded-lg border-2 border-pink-200 hover:bg-pink-50 transition-all"
                  >
                    Nails & Accessories
                  </Link>
                </div>

                <div className="flex gap-4 text-sm text-gray-600 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">✓</span>
                    <span>Free Delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">✓</span>
                    <span>Premium Quality</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">✓</span>
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative h-96 md:h-full flex items-center justify-center">
                <div className="absolute w-72 h-72 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full blur-3xl opacity-40 animate-pulse" />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2e059630d1c64d6eab9280f9a9735a4a%2F4562d30af9c248e19f7c61e82a0a4e50?format=webp&width=800"
                  alt="Botswana SmartShop - Premium nail and beauty services"
                  className="relative w-full max-w-sm h-96 md:h-full md:max-w-md object-cover rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Why Choose{" "}
              <span className="text-pink-600">Botswana SmartShop</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Fast Delivery
                </h3>
                <p className="text-gray-600">
                  Quick and secure delivery across Botswana. Track your orders
                  in real-time.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Premium Quality
                </h3>
                <p className="text-gray-600">
                  Authentic products from trusted international and local
                  brands.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Customer Care
                </h3>
                <p className="text-gray-600">
                  Dedicated support team available on WhatsApp & email 24/7.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Perfumes */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Featured <span className="text-pink-600">Perfumes</span>
                </h2>
                <p className="text-gray-600 mt-2">
                  Discover our curated collection of luxurious fragrances
                </p>
              </div>
              <Link
                to="/perfumes"
                className="hidden md:inline-flex text-pink-600 font-bold hover:text-rose-600 transition-colors"
              >
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {perfumeProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-pink-100"
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi! I'm interested in ${product.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative bg-gradient-to-br from-pink-100 to-rose-100 h-48 flex items-center justify-center overflow-hidden cursor-pointer hover:bg-pink-200 transition-colors block"
                  >
                    {product.image?.startsWith("data:") ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                        {product.image}
                      </span>
                    )}
                  </a>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm text-gray-600">
                        {product.rating} (reviews)
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-pink-600">
                        {product.price}
                      </span>
                      <button className="p-2 bg-pink-100 text-pink-600 rounded-lg hover:bg-pink-600 hover:text-white transition-colors">
                        <ShoppingBag className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/perfumes"
              className="md:hidden block text-center mt-8 text-pink-600 font-bold hover:text-rose-600 transition-colors"
            >
              View All Perfumes →
            </Link>
          </div>
        </section>

        {/* Featured Nails */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Nails & <span className="text-pink-600">Accessories</span>
                </h2>
                <p className="text-gray-600 mt-2">
                  Elevate your nail game with our premium collection
                </p>
              </div>
              <Link
                to="/nails"
                className="hidden md:inline-flex text-pink-600 font-bold hover:text-rose-600 transition-colors"
              >
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {nailProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-pink-200"
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi! I'm interested in ${product.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative bg-white h-48 flex items-center justify-center overflow-hidden cursor-pointer hover:bg-pink-100 transition-colors block"
                  >
                    {product.image?.startsWith("data:") ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                        {product.image}
                      </span>
                    )}
                  </a>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm text-gray-600">
                        {product.rating} (reviews)
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-pink-600">
                        {product.price}
                      </span>
                      <button className="p-2 bg-pink-100 text-pink-600 rounded-lg hover:bg-pink-600 hover:text-white transition-colors">
                        <ShoppingBag className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/nails"
              className="md:hidden block text-center mt-8 text-pink-600 font-bold hover:text-rose-600 transition-colors"
            >
              View All Nails & Accessories →
            </Link>
          </div>
        </section>

        {/* Featured Hair & Wigs */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Hair & <span className="text-pink-600">Wigs</span>
                </h2>
                <p className="text-gray-600 mt-2">
                  Transform your look with our premium collection of wigs and
                  hair pieces
                </p>
              </div>
              <Link
                to="/hair"
                className="hidden md:inline-flex text-pink-600 font-bold hover:text-rose-600 transition-colors"
              >
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {hairProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-pink-200"
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi! I'm interested in ${product.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative bg-white h-48 flex items-center justify-center overflow-hidden cursor-pointer hover:bg-pink-100 transition-colors block"
                  >
                    {product.image?.startsWith("data:") ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                        {product.image}
                      </span>
                    )}
                  </a>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm text-gray-600">
                        {product.rating} (reviews)
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-pink-600">
                        {product.price}
                      </span>
                      <button className="p-2 bg-pink-100 text-pink-600 rounded-lg hover:bg-pink-600 hover:text-white transition-colors">
                        <ShoppingBag className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/hair"
              className="md:hidden block text-center mt-8 text-pink-600 font-bold hover:text-rose-600 transition-colors"
            >
              View All Hair & Wigs →
            </Link>
          </div>
        </section>

        {/* WhatsApp CTA Section */}
        <section className="py-12 md:py-20 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Personalized Assistance?
            </h2>
            <p className="text-white text-lg mb-8 opacity-90">
              Chat with our beauty experts on WhatsApp for product
              recommendations, custom orders, and exclusive offers!
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-green-600 font-bold text-lg rounded-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
            </a>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              What Our Customers Say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Thabiso",
                  text: "Amazing quality perfumes! The fast delivery and excellent customer service impressed me.",
                  rating: 5,
                },
                {
                  name: "Naledi",
                  text: "Best nail accessories in Botswana. The variety and prices are unbeatable!",
                  rating: 5,
                },
                {
                  name: "Zama",
                  text: "Love this shop! The WhatsApp support team helped me find the perfect fragrance.",
                  rating: 5,
                },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-pink-100 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">{testimonial.text}</p>
                  <p className="font-bold text-gray-900">
                    — {testimonial.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-8">
              Subscribe to get exclusive offers, new product launches, and
              beauty tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold rounded-lg hover:shadow-lg transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
