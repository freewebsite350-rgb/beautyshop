import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";

export default function Perfumes() {
  const whatsappNumber = "267722246002";
  const whatsappMessage = encodeURIComponent(
    "Hi! I'd like to know more about your perfume collection.",
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Perfume <span className="text-pink-600">Collection</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover our curated selection of premium fragrances that
                capture the essence of sophistication and elegance.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 md:p-12 border border-pink-100 shadow-lg">
              <div className="text-center">
                <div className="text-6xl mb-4">🌹</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Perfume Collection Coming Soon!
                </h2>
                <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                  We're curating an amazing selection of premium perfumes. In
                  the meantime, please reach out to our team to discuss your
                  fragrance preferences and we'll help you find the perfect
                  scent.
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
              Why Shop With Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-pink-50 rounded-lg border border-pink-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Authentic Fragrances
                </h3>
                <p className="text-gray-600">
                  All our perfumes are 100% authentic and sourced directly from
                  authorized distributors.
                </p>
              </div>
              <div className="p-6 bg-pink-50 rounded-lg border border-pink-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Expert Recommendations
                </h3>
                <p className="text-gray-600">
                  Our beauty experts are here to help you find the perfect
                  fragrance that matches your style.
                </p>
              </div>
              <div className="p-6 bg-pink-50 rounded-lg border border-pink-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Fast Delivery
                </h3>
                <p className="text-gray-600">
                  Quick and secure delivery across Botswana with real-time order
                  tracking.
                </p>
              </div>
              <div className="p-6 bg-pink-50 rounded-lg border border-pink-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  24/7 Support
                </h3>
                <p className="text-gray-600">
                  Our customer support team is available on WhatsApp and email
                  to assist you anytime.
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
