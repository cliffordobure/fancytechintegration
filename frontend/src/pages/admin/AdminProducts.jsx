// pages/admin/AdminProducts.jsx
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../store/slices/productSlice";
import toast from "react-hot-toast";
import SEO from "../../components/SEO";
import ProductStats from "../../components/admin/ProductStats";
import ProductTable from "../../components/admin/ProductTable";
import ProductModal from "../../components/admin/ProductModal";
import { Package, Plus, Sparkles } from "lucide-react";

const AdminProducts = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts({ limit: 100 }));
  }, [dispatch]);

<<<<<<< HEAD
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;
    
    setUploading(true);

    try {
      const uploadPromises = files.map(async (file) => {
        try {
          const formData = new FormData();
          formData.append('image', file);
          
          console.log('Uploading file:', file.name, 'Size:', file.size, 'Type:', file.type);
          
          const response = await api.post('/upload', formData);
          console.log('Upload response:', response.data);
          
          return response.data;
        } catch (fileError) {
          console.error('Error uploading file:', file.name, fileError);
          throw fileError;
        }
      });

      const responses = await Promise.all(uploadPromises);
      console.log('All uploads completed:', responses);
      
      const imagePaths = responses.map((res) => {
        // Try multiple possible response formats
        return res.path || res.url || res.secure_url || res.data?.path || res.data?.url;
      }).filter(Boolean); // Remove any undefined values
      
      if (imagePaths.length === 0) {
        throw new Error('No image URLs returned from server');
      }
      
      setFormData({
        ...formData,
        images: [...formData.images, ...imagePaths],
      });
      toast.success(`${imagePaths.length} image(s) uploaded successfully`);
    } catch (error) {
      console.error('Upload error details:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        statusText: error.response?.statusText,
        config: error.config,
      });
      
      let errorMessage = 'Failed to upload images';
      
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.response?.status === 500) {
        errorMessage = 'Server error. Please check if Cloudinary is configured.';
      } else if (error.response?.status === 401) {
        errorMessage = 'Authentication failed. Please login again.';
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      toast.error(errorMessage);
    } finally {
      setUploading(false);
      // Reset file input
      e.target.value = '';
    }
  };

  const handleRemoveImage = (index) => {
    setFormData({
      ...formData,
      images: formData.images.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validate required fields
      if (!formData.name || !formData.description || !formData.price) {
        toast.error('Please fill in all required fields: Name, Description, and Price');
        return;
      }

      // Parse price - use existing price if editing and new price is invalid
      const priceValue = formData.price 
        ? parseFloat(formData.price) 
        : (editingProduct?.price || 0);
      
      if (isNaN(priceValue) || priceValue <= 0) {
        toast.error('Please enter a valid price');
        return;
      }

      const productData = {
        ...formData,
        name: formData.name.trim(),
        description: formData.description.trim(),
        price: priceValue,
        originalPrice: formData.originalPrice && formData.originalPrice !== ''
          ? parseFloat(formData.originalPrice)
          : undefined,
        stockQuantity: formData.stockQuantity && formData.stockQuantity !== ''
          ? parseInt(formData.stockQuantity) || 0
          : 0,
        seoKeywords: formData.seoKeywords
          ? formData.seoKeywords.split(',').map((k) => k.trim()).filter(k => k)
          : [],
      };

      if (editingProduct) {
        await dispatch(
          updateProduct({ id: editingProduct._id, productData })
        ).unwrap();
        toast.success('Product updated successfully');
      } else {
        await dispatch(createProduct(productData)).unwrap();
        toast.success('Product created successfully');
      }

      setShowModal(false);
      resetForm();
    } catch (error) {
      const errorMessage = error?.message || error || 'Failed to save product';
      toast.error(errorMessage);
    }
  };

=======
>>>>>>> 795d7f03ea5961971c777abef996ca0807587df5
  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await dispatch(deleteProduct(id)).unwrap();
        toast.success("Product deleted successfully");
      } catch (error) {
        toast.error(error || "Failed to delete product");
      }
    }
  };

  const handleSubmit = async (productData) => {
    try {
      if (editingProduct) {
        await dispatch(
          updateProduct({ id: editingProduct._id, productData }),
        ).unwrap();
        toast.success("Product updated successfully");
      } else {
        await dispatch(createProduct(productData)).unwrap();
        toast.success("Product created successfully");
      }
      setShowModal(false);
      setEditingProduct(null);
    } catch (error) {
      toast.error(error || "Failed to save product");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingProduct(null);
  };

  return (
    <>
      <SEO
        title="Product Management"
        description="Manage products for Fancy Tech Integration Kenya"
      />

      <div className="min-h-screen bg-gray-900 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-between items-center mb-8"
          >
            <div>
              <h1 className="text-4xl font-bold mb-2">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
                  Product Management
                </span>
              </h1>
              <p className="text-gray-400">
                Manage your product inventory, pricing, and availability
              </p>
            </div>
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity }}
                className="hidden md:block"
              >
                <Sparkles size={32} className="text-purple-400/30" />
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setEditingProduct(null);
                  setShowModal(true);
                }}
                className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Plus size={20} />
                Add New Product
              </motion.button>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <ProductStats products={products} />

          {/* Products Table */}
          <ProductTable
            products={products}
            onEdit={handleEdit}
            onDelete={handleDelete}
            loading={loading}
          />

          {/* Product Modal */}
          <ProductModal
            isOpen={showModal}
            onClose={handleCloseModal}
            product={editingProduct}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default AdminProducts;
