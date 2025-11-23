import { useState, useEffect } from "react";
import { LogOut, Upload, Trash2, AlertCircle, CheckCircle } from "lucide-react";

export default function Admin() {
  const API_BASE = "https://myapi.com";

  // Auth State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [authLoading, setAuthLoading] = useState(false);

  // Product Form State
  const [productForm, setProductForm] = useState({
    name: "",
    price: "",
    description: "",
    image_url: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [saving, setSaving] = useState(false);

  // Products List State
  const [products, setProducts] = useState<any[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState<number | null>(null);

  // Load token from localStorage on mount
  useEffect(() => {
    const savedToken = localStorage.getItem("shop_admin_token");
    if (savedToken) {
      setToken(savedToken);
      setIsLoggedIn(true);
      fetchProducts(savedToken);
    }
  }, []);

  // ===== LOGIN HANDLER =====
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    setAuthLoading(true);

    try {
      const response = await fetch(`${API_BASE}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      const newToken = data.token;

      setToken(newToken);
      setIsLoggedIn(true);
      localStorage.setItem("shop_admin_token", newToken);
      setEmail("");
      setPassword("");

      // Fetch products after login
      fetchProducts(newToken);
    } catch (error) {
      setAuthError(
        error instanceof Error ? error.message : "Login failed. Please try again."
      );
    } finally {
      setAuthLoading(false);
    }
  };

  // ===== LOGOUT HANDLER =====
  const handleLogout = () => {
    setIsLoggedIn(false);
    setToken(null);
    localStorage.removeItem("shop_admin_token");
    setProducts([]);
    setProductForm({ name: "", price: "", description: "", image_url: "" });
    setSelectedFile(null);
  };

  // ===== IMAGE UPLOAD HANDLER =====
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSelectedFile(file);
    setUploading(true);
    setFormError("");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(`${API_BASE}/products/upload-image`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Image upload failed");
      }

      const data = await response.json();
      setProductForm((prev) => ({ ...prev, image_url: data.image_url }));
      setFormSuccess("Image uploaded successfully!");
      setTimeout(() => setFormSuccess(""), 3000);
    } catch (error) {
      setFormError(
        error instanceof Error ? error.message : "Failed to upload image"
      );
    } finally {
      setUploading(false);
    }
  };

  // ===== SAVE PRODUCT HANDLER =====
  const handleSaveProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    setFormSuccess("");

    if (!productForm.name || !productForm.price || !productForm.description) {
      setFormError("Please fill in all required fields");
      return;
    }

    if (!productForm.image_url) {
      setFormError("Please upload an image");
      return;
    }

    setSaving(true);

    try {
      const response = await fetch(`${API_BASE}/products/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: productForm.name,
          price: productForm.price,
          description: productForm.description,
          image_url: productForm.image_url,
          token: token,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save product");
      }

      setFormSuccess("Product saved successfully!");
      setProductForm({ name: "", price: "", description: "", image_url: "" });
      setSelectedFile(null);

      // Clear success message after 3 seconds
      setTimeout(() => setFormSuccess(""), 3000);

      // Refresh products list
      if (token) {
        fetchProducts(token);
      }
    } catch (error) {
      setFormError(
        error instanceof Error ? error.message : "Failed to save product"
      );
    } finally {
      setSaving(false);
    }
  };

  // ===== FETCH PRODUCTS =====
  const fetchProducts = async (authToken: string) => {
    setLoadingProducts(true);
    try {
      const response = await fetch(`${API_BASE}/products/all`);

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      setProducts(Array.isArray(data) ? data : data.products || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoadingProducts(false);
    }
  };

  // ===== DELETE PRODUCT =====
  const handleDeleteProduct = async (productId: number) => {
    if (!token) return;

    setDeleteLoading(productId);

    try {
      const response = await fetch(
        `${API_BASE}/products/delete/${productId}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete product");
      }

      // Refresh products list
      fetchProducts(token);
    } catch (error) {
      console.error("Error deleting product:", error);
      setFormError("Failed to delete product");
    } finally {
      setDeleteLoading(null);
    }
  };

  // ===== LOGIN SCREEN =====
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border border-pink-100">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">✨</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              Shop <span className="text-pink-600">Admin</span>
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
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-900"
                placeholder="admin@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-900"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              disabled={authLoading}
              className="w-full px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
            >
              {authLoading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ===== ADMIN DASHBOARD =====
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-pink-100 shadow-sm sticky top-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Shop <span className="text-pink-600">Admin</span>
            </h1>
            <p className="text-sm text-gray-600">Welcome, {email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-medium"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-pink-100 p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Add New Product
              </h2>

              <form onSubmit={handleSaveProduct} className="space-y-4">
                {formError && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {formError}
                  </div>
                )}

                {formSuccess && (
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-700 text-sm">
                    <CheckCircle className="w-4 h-4" />
                    {formSuccess}
                  </div>
                )}

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Product Name *
                  </label>
                  <input
                    type="text"
                    value={productForm.name}
                    onChange={(e) =>
                      setProductForm((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-900 text-sm"
                    placeholder="e.g., Rose Perfume"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Price *
                  </label>
                  <input
                    type="number"
                    value={productForm.price}
                    onChange={(e) =>
                      setProductForm((prev) => ({
                        ...prev,
                        price: e.target.value,
                      }))
                    }
                    className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-900 text-sm"
                    placeholder="99.99"
                    step="0.01"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Description *
                  </label>
                  <textarea
                    value={productForm.description}
                    onChange={(e) =>
                      setProductForm((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-900 text-sm resize-none"
                    rows={3}
                    placeholder="Describe your product..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Product Image *
                  </label>
                  <label className="w-full px-4 py-3 border-2 border-dashed border-pink-300 rounded-lg cursor-pointer hover:bg-pink-50 transition-colors text-center">
                    <div className="flex flex-col items-center gap-2">
                      <Upload className="w-5 h-5 text-pink-600" />
                      <span className="text-sm font-medium text-gray-700">
                        {selectedFile ? selectedFile.name : "Click to upload"}
                      </span>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={uploading}
                      className="hidden"
                    />
                  </label>
                  {productForm.image_url && (
                    <div className="mt-2 p-2 bg-green-50 border border-green-200 rounded text-xs text-green-700">
                      ✓ Image uploaded
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={saving || uploading || !productForm.image_url}
                  className="w-full px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  {saving ? "Saving..." : "Save Product"}
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

              {loadingProducts ? (
                <div className="text-center py-12">
                  <p className="text-gray-600">Loading products...</p>
                </div>
              ) : products.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600">No products yet. Create one!</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left font-bold text-gray-900 py-3 px-4">
                          Name
                        </th>
                        <th className="text-left font-bold text-gray-900 py-3 px-4">
                          Price
                        </th>
                        <th className="text-left font-bold text-gray-900 py-3 px-4">
                          Image
                        </th>
                        <th className="text-right font-bold text-gray-900 py-3 px-4">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr
                          key={product.id}
                          className="border-b border-gray-100 hover:bg-gray-50"
                        >
                          <td className="py-3 px-4 text-gray-900 font-medium">
                            {product.name}
                          </td>
                          <td className="py-3 px-4 text-gray-700">
                            P{product.price}
                          </td>
                          <td className="py-3 px-4">
                            {product.image_url ? (
                              <img
                                src={product.image_url}
                                alt={product.name}
                                className="w-10 h-10 rounded object-cover"
                              />
                            ) : (
                              <span className="text-gray-400">—</span>
                            )}
                          </td>
                          <td className="py-3 px-4 text-right">
                            <button
                              onClick={() => handleDeleteProduct(product.id)}
                              disabled={deleteLoading === product.id}
                              className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors disabled:opacity-50"
                              title="Delete product"
                            >
                              {deleteLoading === product.id ? (
                                <div className="w-4 h-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
                              ) : (
                                <Trash2 className="w-4 h-4" />
                              )}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
