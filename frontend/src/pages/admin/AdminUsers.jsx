import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { fetchAdminUsers, createAdminUser } from "../../store/slices/authSlice";
import toast from "react-hot-toast";
import SEO from "../../components/SEO";
import { Users, Plus, Sparkles, Shield } from "lucide-react";

const AdminUsers = () => {
  const dispatch = useDispatch();
  const { adminUsers, loading, error } = useSelector((state) => state.auth);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    dispatch(fetchAdminUsers());
  }, [dispatch]);

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    try {
      await dispatch(
        createAdminUser({
          name: formData.name.trim(),
          email: formData.email.trim(),
          password: formData.password,
        }),
      ).unwrap();
      toast.success("Admin user created successfully");
      setFormData({ name: "", email: "", password: "" });
      setShowForm(false);
      dispatch(fetchAdminUsers());
    } catch (err) {
      toast.error(err || "Failed to create admin user");
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "—";
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <>
      <SEO
        title="Admin Users"
        description="Manage admin users for Fancy Tech Integration"
      />

      <div className="min-h-screen bg-gray-900 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-between items-center gap-4 mb-8"
          >
            <div>
              <h1 className="text-4xl font-bold mb-2">
                <span className="bg-gradient-to-r from-blue-400 via-blue-400 to-blue-400 text-transparent bg-clip-text">
                  Admin Users
                </span>
              </h1>
              <p className="text-gray-400">
                Add and manage admin users with full access to products,
                articles, and orders
              </p>
            </div>
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity }}
                className="hidden md:block"
              >
                <Sparkles size={32} className="text-blue-400/30" />
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowForm(!showForm)}
                className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Plus size={20} />
                {showForm ? "Cancel" : "Add Admin User"}
              </motion.button>
            </div>
          </motion.div>

          {/* Add Admin Form */}
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <h2 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                <Shield size={20} className="text-blue-400" />
                New Admin User
              </h2>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                    placeholder="admin@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Password * (min 6 characters)
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    minLength={6}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                    placeholder="••••••••"
                  />
                </div>
                <div className="md:col-span-3 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm(false);
                      setFormData({ name: "", email: "", password: "" });
                    }}
                    className="px-4 py-2 rounded-lg border border-white/10 text-gray-300 hover:bg-white/5"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium disabled:opacity-50"
                  >
                    {loading ? "Creating…" : "Create Admin"}
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* Admin Users Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
          >
            <div className="p-6 border-b border-white/10">
              <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                <Users size={20} className="text-blue-400" />
                Admin users ({adminUsers?.length ?? 0})
              </h2>
              <p className="text-sm text-gray-400 mt-1">
                These users can manage products, articles, orders, and add other
                admins.
              </p>
            </div>
            {adminUsers?.length === 0 ? (
              <div className="p-12 text-center text-gray-400">
                No admin users yet. Use &quot;Add Admin User&quot; to create
                one.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-white/10">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">
                        Role
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">
                        Created
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {adminUsers?.map((user) => (
                      <tr key={user._id} className="hover:bg-white/5">
                        <td className="px-6 py-4 text-sm font-medium text-white">
                          {user.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-300">
                          {user.email}
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-400">
                            {user.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-400">
                          {formatDate(user.createdAt)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AdminUsers;
