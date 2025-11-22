import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const whatsappNumber = "267722246002";
  const whatsappMessage = encodeURIComponent(
    "Hi Botswana SmartShop! I'd like to get in touch.",
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Get In <span className="text-pink-600">Touch</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Have questions or need assistance? We're here to help! Contact
                us anytime.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Contact Info Cards */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 shadow-sm hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  WhatsApp
                </h3>
                <p className="text-gray-600 mb-2">
                  Chat with us instantly on WhatsApp
                </p>
                <p className="text-green-600 font-bold">+267 72 246 002</p>
              </a>

              <a
                href="mailto:info@botswanasmartshop.com"
                className="p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl border border-pink-200 shadow-sm hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 mb-2">
                  Send us an email and we'll respond within 24 hours
                </p>
                <p className="text-pink-600 font-bold">
                  info@botswanasmartshop.com
                </p>
              </a>

              <a
                href="tel:+267722246002"
                className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200 shadow-sm hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600 mb-2">
                  Call us to speak with a team member
                </p>
                <p className="text-purple-600 font-bold">+267 72 246 002</p>
              </a>
            </div>

            {/* Hours and Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Business Hours
                  </h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <span className="font-semibold">Monday - Friday:</span> 9:00
                    AM - 6:00 PM
                  </p>
                  <p>
                    <span className="font-semibold">Saturday:</span> 10:00 AM -
                    4:00 PM
                  </p>
                  <p>
                    <span className="font-semibold">Sunday:</span> 11:00 AM -
                    3:00 PM
                  </p>
                  <p className="pt-2 text-sm">
                    WhatsApp available 24/7 for urgent inquiries
                  </p>
                </div>
              </div>

              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Location</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p className="font-semibold">Botswana SmartShop</p>
                  <p>Gaborone, Botswana</p>
                  <p className="pt-2 text-sm">
                    Available for meetups and consultations by appointment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-pink-50">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Send us a Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-xl border border-pink-100 shadow-lg"
            >
              <div className="mb-6">
                <label className="block text-gray-900 font-bold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-900 font-bold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-900 font-bold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-900 font-bold mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
                  rows={5}
                  placeholder="Tell us more about your inquiry..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold rounded-lg hover:shadow-lg transition-all"
              >
                Send Message
              </button>
            </form>

            <p className="text-center text-gray-600 mt-6">
              Or chat with us on{" "}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 font-bold hover:underline"
              >
                WhatsApp
              </a>{" "}
              for instant support
            </p>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "What are your delivery times?",
                  a: "We typically deliver within 2-3 business days in Gaborone and 3-5 days for other areas.",
                },
                {
                  q: "Do you offer international shipping?",
                  a: "Currently, we deliver within Botswana only. Contact us for international inquiries.",
                },
                {
                  q: "What is your return policy?",
                  a: "We offer 30-day returns for unused products. Contact us for details.",
                },
                {
                  q: "Can I cancel my order?",
                  a: "You can cancel orders within 24 hours of placement. Contact us immediately.",
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="p-4 border-l-4 border-pink-500 bg-pink-50 rounded"
                >
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
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
