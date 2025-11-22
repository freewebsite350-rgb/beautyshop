import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Sparkles, Target } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                About <span className="text-pink-600">Botswana SmartShop</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Bringing premium beauty products and exceptional customer service
                to women across Botswana.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p>
                Botswana SmartShop was founded with a simple mission: to make
                premium beauty products accessible and affordable for every woman
                in Botswana. We believe that everyone deserves to feel confident,
                beautiful, and empowered.
              </p>
              <p>
                What started as a passion project has grown into a trusted online
                beauty boutique, serving thousands of satisfied customers across
                the country. We carefully curate every product in our collection
                to ensure the highest quality and authenticity.
              </p>
              <p>
                Our commitment to excellence extends beyond just products. We're
                dedicated to providing exceptional customer service, fast delivery,
                and personalized beauty advice to help you find exactly what you need.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl border border-pink-100 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Customer First
                </h3>
                <p className="text-gray-600">
                  Your satisfaction is our priority. We listen to your feedback
                  and continuously improve our service.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-pink-100 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Quality & Authenticity
                </h3>
                <p className="text-gray-600">
                  Every product is 100% authentic and sourced from authorized
                  distributors to guarantee quality.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-pink-100 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Empowerment
                </h3>
                <p className="text-gray-600">
                  We believe in empowering women to feel confident and beautiful
                  in their own skin.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Botswana SmartShop?
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "100% Authentic Products",
                  description:
                    "Every item is verified authentic and sourced from trusted suppliers.",
                },
                {
                  title: "Fast & Reliable Delivery",
                  description:
                    "We deliver quickly across Botswana with real-time order tracking.",
                },
                {
                  title: "Expert Support",
                  description:
                    "Our knowledgeable team is available 24/7 to help with recommendations.",
                },
                {
                  title: "Best Prices",
                  description:
                    "We offer competitive pricing without compromising on quality.",
                },
                {
                  title: "Easy Returns",
                  description:
                    "Hassle-free returns and exchanges within 30 days of purchase.",
                },
                {
                  title: "Secure Shopping",
                  description:
                    "Your personal and payment information is protected with modern encryption.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 border-l-4 border-pink-500 bg-pink-50 rounded"
                >
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  emoji: "👩‍💼",
                  name: "Keitumetse",
                  role: "Founder & CEO",
                },
                {
                  emoji: "👩‍💻",
                  name: "Naledi",
                  role: "Product Manager",
                },
                {
                  emoji: "👩‍🔬",
                  name: "Thabiso",
                  role: "Customer Support Lead",
                },
              ].map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-pink-100 shadow-sm text-center"
                >
                  <div className="text-5xl mb-4">{member.emoji}</div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-pink-600 font-medium">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
