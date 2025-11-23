import { useState, useEffect } from "react";
import { LogOut, Plus, Trash2, AlertCircle, CheckCircle, Lock } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  category: "perfumes" | "nails" | "hair";
}

const ADMIN_PASSWORD = "mysmartshopgo"; // Tumi's admin password

export default function AdminDash() {
  // Auth State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [authError, setAuthError] = useState("");

  // Form State
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    category: "perfumes" as "perfumes" | "nails" | "hair",
  });

  const [products, setProducts] = useState<Product[]>([]);
  const [message, setMessage] = useState({ type: "", text: "" });

  // Load data on mount
  useEffect(() => {
    const savedAuth = sessionStorage.getItem("admin_authenticated");
    if (savedAuth === "true") {
      setIsLoggedIn(true);
    }
    loadProducts();
  }, []);

  const loadProducts = () => {
    const saved = localStorage.getItem("shop_products");
    if (saved) {
      setProducts(JSON.parse(saved));
    }
  };

  const saveProducts = (updated: Product[]) => {
    localStorage.setItem("shop_products", JSON.stringify(updated));
    setProducts(updated);
  };

  // ===== LOGIN =====
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");

    if (passwordInput === ADMIN_PASSWORD) {
      sessionStorage.setItem("admin_authenticated", "true");
      setIsLoggedIn(true);
      setPasswordInput("");
    } else {
      setAuthError("Incorrect password");
    }
  };

  // ===== LOGOUT =====
  const handleLogout = () => {
    sessionStorage.removeItem("admin_authenticated");
    setIsLoggedIn(false);
  };

  // ===== ADD PRODUCT =====
  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    if (
      !form.name ||
      !form.price ||
      !form.description ||
      !form.image ||
      !form.category
    ) {
      setMessage({ type: "error", text: "Please fill all fields" });
      return;
    }

    const newProduct: Product = {
      id: Date.now().toString(),
      name: form.name,
      price: form.price,
      description: form.description,
      image: form.image,
      category: form.category,
    };

    const updated = [...products, newProduct];
    saveProducts(updated);

    setForm({
      name: "",
      price: "",
      description: "",
      image: "",
      category: "perfumes",
    });

    setMessage({ type: "success", text: "Product added successfully!" });
    setTimeout(() => setMessage({ type: "", text: "" }), 3000);
  };

  // ===== DELETE PRODUCT =====
  const handleDelete = (id: string) => {
    const updated = products.filter((p) => p.id !== id);
    saveProducts(updated);
    setMessage({ type: "success", text: "Product deleted" });
    setTimeout(() => setMessage({ type: "", text: "" }), 2000);
  };

  // ===== LOGIN SCREEN =====
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 flex items-center justify-center p-4">
        <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-8 border border-pink-100">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              Admin <span className="text-pink-600">Panel</span>
            </h1>
            <p className="text-gray-600 mt-2">Manage your products</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {authError && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700 text-sm">
                <AlertCircle className="w-4 h-4" />
                {authError}
              </div>
            )}

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                Admin Password
              </label>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-900"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold rounded-lg hover:shadow-lg transition-all"
            >
              Login
            </button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-6">
            Default password: admin123
          </p>
        </div>
      </div>
    );
  }

  // ===== ADMIN DASHBOARD =====
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-pink-100 shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">
            <span className="text-pink-600">📦</span> Product Manager
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-medium text-sm"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-pink-100 p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Plus className="w-5 h-5 text-pink-600" />
                Add Product
              </h2>

              <form onSubmit={handleAddProduct} className="space-y-4">
                {message.text && (
                  <div
                    className={`p-3 rounded-lg flex items-center gap-2 text-sm ${
                      message.type === "success"
                        ? "bg-green-50 border border-green-200 text-green-700"
                        : "bg-red-50 border border-red-200 text-red-700"
                    }`}
                  >
                    {message.type === "success" ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <AlertCircle className="w-4 h-4" />
                    )}
                    {message.text}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-gray-900 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
                    placeholder="Product name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-900 mb-1">
                    Price
                  </label>
                  <input
                    type="text"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
                    placeholder="e.g., P299"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-900 mb-1">
                    Description
                  </label>
                  <textarea
                    value={form.description}
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm resize-none"
                    rows={2}
                    placeholder="Brief description"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-900 mb-1">
                    Image URL
                  </label>
                  <input
                    type="text"
                    value={form.image}
                    onChange={(e) => setForm({ ...form, image: e.target.value })}
                    className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
                    placeholder="https://..."
                  />
                  {form.image && (
                    <img
                      src={form.image}
                      alt="preview"
                      className="w-full h-20 object-cover rounded mt-2"
                      onError={() => (
                        <div className="text-xs text-red-600">Invalid URL</div>
                      )}
                    />
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-900 mb-1">
                    Category
                  </label>
                  <select
                    value={form.category}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        category: e.target.value as "perfumes" | "nails" | "hair",
                      })
                    }
                    className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
                  >
                    <option value="perfumes">Perfumes</option>
                    <option value="nails">Nails & Accessories</option>
                    <option value="hair">Hair & Wigs</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold rounded-lg hover:shadow-lg transition-all text-sm"
                >
                  Add Product
                </button>
              </form>
            </div>
          </div>

          {/* Products List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-pink-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Products ({products.length})
              </h2>

              {products.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <p>No products yet. Add one!</p>
                </div>
              ) : (
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="p-4 border border-pink-100 rounded-lg flex gap-4 hover:bg-pink-50 transition-colors"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 rounded object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-900 text-sm">
                          {product.name}
                        </h3>
                        <p className="text-pink-600 font-semibold text-sm">
                          {product.price}
                        </p>
                        <p className="text-gray-600 text-xs line-clamp-1">
                          {product.description}
                        </p>
                        <span className="inline-block text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded mt-1">
                          {product.category}
                        </span>
                      </div>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors self-start"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
