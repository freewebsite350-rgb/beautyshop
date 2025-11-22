import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";

export default function Hair() {
  const whatsappNumber = "267722246002";
  const whatsappMessage = encodeURIComponent(
    "Hi! I'm interested in your hair pieces and wigs collection."
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Hair Pieces & <span className="text-pink-600">Wigs</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Transform your look with our premium collection of wigs, hair pieces,
                extensions, and hair accessories designed for every style and occasion.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 md:p-12 border border-pink-100 shadow-lg">
              <div className="text-center">
                <div className="text-6xl mb-4">💇</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Hair & Wigs Coming Soon!
                </h2>
                <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                  We're building an exclusive collection of premium wigs and hair
                  pieces. Contact our team today to discuss your hair transformation
                  goals and get personalized styling recommendations.
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
              Our Hair Product Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-pink-50 rounded-lg border border-pink-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  100% Human Hair Wigs
                </h3>
                <p className="text-gray-600">
                  Premium quality human hair wigs in various lengths, textures,
                  and colors for a natural look.
                </p>
              </div>
              <div className="p-6 bg-pink-50 rounded-lg border border-pink-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Synthetic Wigs
                </h3>
                <p className="text-gray-600">
                  Durable and affordable synthetic wigs that maintain their style
                  and are easy to care for.
                </p>
              </div>
              <div className="p-6 bg-pink-50 rounded-lg border border-pink-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Hair Extensions
                </h3>
                <p className="text-gray-600">
                  Clip-in, tape-in, and sew-in extensions to add length, volume,
                  and texture to your natural hair.
                </p>
              </div>
              <div className="p-6 bg-pink-50 rounded-lg border border-pink-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Hair Accessories & Care
                </h3>
                <p className="text-gray-600">
                  Wig caps, hair styling tools, care products, and accessories
                  to keep your hair looking perfect.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-pink-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Shop Hair with Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded-lg border border-pink-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Premium Quality
                </h3>
                <p className="text-gray-600">
                  All our wigs and hair pieces are 100% authentic and sourced
                  from trusted international suppliers.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg border border-pink-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Expert Styling Advice
                </h3>
                <p className="text-gray-600">
                  Our hair specialists are available to help you choose the
                  perfect style for your face shape and preferences.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg border border-pink-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Fast Delivery
                </h3>
                <p className="text-gray-600">
                  Quick and secure delivery across Botswana with real-time order
                  tracking and proper packaging.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg border border-pink-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Care & Maintenance Support
                </h3>
                <p className="text-gray-600">
                  We provide detailed care instructions and are available 24/7 to
                  answer questions about your purchase.
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
