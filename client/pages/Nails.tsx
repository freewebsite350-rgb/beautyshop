import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";

export default function Nails() {
  const whatsappNumber = "267722246002";
  const whatsappMessage = encodeURIComponent(
    "Hi! I'm interested in your nail accessories and products."
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Nails & <span className="text-pink-600">Accessories</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore our comprehensive range of nail care products, polish,
                accessories, and tools to elevate your nail game.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 md:p-12 border border-pink-100 shadow-lg">
              <div className="text-center">
                <div className="text-6xl mb-4">💅</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Nails & Accessories Coming Soon!
                </h2>
                <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                  We're building an extensive inventory of premium nail products.
                  Contact our team today to discuss your nail care needs and get
                  personalized recommendations.
                </p>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold rounded-lg hover:shadow-lg transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Nail Product Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-pink-50 rounded-lg border border-pink-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Gel Polish
                </h3>
                <p className="text-gray-600">
                  Premium gel polishes in hundreds of colors and finishes for
                  long-lasting manicures.
                </p>
              </div>
              <div className="p-6 bg-pink-50 rounded-lg border border-pink-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Nail Art & Decor
                </h3>
                <p className="text-gray-600">
                  Nail stickers, rhinestones, decals, and embellishments for
                  creative designs.
                </p>
              </div>
              <div className="p-6 bg-pink-50 rounded-lg border border-pink-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Nail Care Tools
                </h3>
                <p className="text-gray-600">
                  Professional-grade files, buffers, clippers, and care sets for
                  healthy nails.
                </p>
              </div>
              <div className="p-6 bg-pink-50 rounded-lg border border-pink-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Nail Tips & Extensions
                </h3>
                <p className="text-gray-600">
                  Quality artificial tips and extension materials for custom nail
                  designs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
