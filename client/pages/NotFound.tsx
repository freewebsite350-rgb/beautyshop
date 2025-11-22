import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-8xl mb-6">😕</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist. It might have been
            moved or deleted.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold rounded-lg hover:shadow-lg transition-all"
            >
              Go Home
            </Link>
            <Link
              to="/perfumes"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-pink-600 font-bold rounded-lg border-2 border-pink-200 hover:bg-pink-50 transition-all"
            >
              Shop Now
            </Link>
          </div>

          <p className="text-gray-600 mt-8">
            Need help? Contact us on{" "}
            <a
              href="https://wa.me/267722246002"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-bold hover:underline"
            >
              WhatsApp
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
