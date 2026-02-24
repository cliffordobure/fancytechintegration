// components/admin/OrdersTable.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye,
  ChevronDown,
  ChevronUp,
  Package,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  CreditCard,
  Truck,
} from "lucide-react";
import OrderDetailsModal from "./OrderDetailsModal";

const OrdersTable = ({ orders, onUpdateStatus }) => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusColor = (status) => {
    const colors = {
      pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      processing: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      shipped: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      delivered: "bg-green-500/20 text-green-400 border-green-500/30",
      cancelled: "bg-red-500/20 text-red-400 border-red-500/30",
    };
    return colors[status] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
  };

  const getPaymentStatusColor = (status) => {
    const colors = {
      pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      paid: "bg-green-500/20 text-green-400 border-green-500/30",
      failed: "bg-red-500/20 text-red-400 border-red-500/30",
      refunded: "bg-gray-500/20 text-gray-400 border-gray-500/30",
    };
    return colors[status] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
  };

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Order Info
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Items
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Order Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Payment
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {orders.map((order, index) => (
                <React.Fragment key={order._id}>
                  <motion.tr
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-white/5 transition-colors cursor-pointer"
                    onClick={() =>
                      setExpandedRow(
                        expandedRow === order._id ? null : order._id,
                      )
                    }
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <Package size={16} className="text-purple-400" />
                        <span className="text-sm font-medium text-white">
                          {order.orderNumber}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <User size={16} className="text-gray-500" />
                        <span className="text-sm text-gray-300">
                          {order.customer.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-300">
                        {order.items.length} item(s)
                      </div>
                      <div className="text-xs text-gray-500">
                        {order.items
                          .slice(0, 2)
                          .map((item) => item.name)
                          .join(", ")}
                        {order.items.length > 2 && "..."}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-semibold text-purple-400">
                        KES {order.total.toLocaleString()}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={order.orderStatus}
                        onChange={(e) => {
                          e.stopPropagation();
                          onUpdateStatus(
                            order._id,
                            "orderStatus",
                            e.target.value,
                          );
                        }}
                        onClick={(e) => e.stopPropagation()}
                        className={`text-xs font-semibold rounded-full px-3 py-1 border ${getStatusColor(
                          order.orderStatus,
                        )} focus:outline-none cursor-pointer`}
                      >
                        <option value="pending" className="bg-gray-800">
                          Pending
                        </option>
                        <option value="processing" className="bg-gray-800">
                          Processing
                        </option>
                        <option value="shipped" className="bg-gray-800">
                          Shipped
                        </option>
                        <option value="delivered" className="bg-gray-800">
                          Delivered
                        </option>
                        <option value="cancelled" className="bg-gray-800">
                          Cancelled
                        </option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={order.paymentStatus}
                        onChange={(e) => {
                          e.stopPropagation();
                          onUpdateStatus(
                            order._id,
                            "paymentStatus",
                            e.target.value,
                          );
                        }}
                        onClick={(e) => e.stopPropagation()}
                        className={`text-xs font-semibold rounded-full px-3 py-1 border ${getPaymentStatusColor(
                          order.paymentStatus,
                        )} focus:outline-none cursor-pointer`}
                      >
                        <option value="pending" className="bg-gray-800">
                          Pending
                        </option>
                        <option value="paid" className="bg-gray-800">
                          Paid
                        </option>
                        <option value="failed" className="bg-gray-800">
                          Failed
                        </option>
                        <option value="refunded" className="bg-gray-800">
                          Refunded
                        </option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Calendar size={14} />
                        {formatDate(order.createdAt)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleViewDetails(order);
                          }}
                          className="p-2 text-gray-400 hover:text-purple-400 transition-colors"
                          title="View Details"
                        >
                          <Eye size={18} />
                        </motion.button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedRow(
                              expandedRow === order._id ? null : order._id,
                            );
                          }}
                          className="p-2 text-gray-400 hover:text-purple-400 transition-colors"
                        >
                          {expandedRow === order._id ? (
                            <ChevronUp size={18} />
                          ) : (
                            <ChevronDown size={18} />
                          )}
                        </button>
                      </div>
                    </td>
                  </motion.tr>

                  {/* Expanded Row Details */}
                  <AnimatePresence>
                    {expandedRow === order._id && (
                      <motion.tr
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <td colSpan="8" className="px-6 py-4 bg-white/5">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Customer Details */}
                            <div>
                              <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                                <User size={16} className="text-purple-400" />
                                Customer Details
                              </h4>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm">
                                  <Mail size={14} className="text-gray-500" />
                                  <span className="text-gray-300">
                                    {order.customer.email}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                  <Phone size={14} className="text-gray-500" />
                                  <span className="text-gray-300">
                                    {order.customer.phone}
                                  </span>
                                </div>
                                <div className="flex items-start gap-2 text-sm">
                                  <MapPin
                                    size={14}
                                    className="text-gray-500 mt-1"
                                  />
                                  <span className="text-gray-300">
                                    {order.customer.address.street},<br />
                                    {order.customer.address.city},{" "}
                                    {order.customer.address.county}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Payment & Shipping */}
                            <div>
                              <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                                <CreditCard
                                  size={16}
                                  className="text-purple-400"
                                />
                                Payment & Shipping
                              </h4>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm">
                                  <CreditCard
                                    size={14}
                                    className="text-gray-500"
                                  />
                                  <span className="text-gray-300 capitalize">
                                    {order.paymentMethod.replace("_", " ")}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                  <Truck size={14} className="text-gray-500" />
                                  <span className="text-gray-300 capitalize">
                                    {order.shippingMethod}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Order Items */}
                            <div>
                              <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                                <Package
                                  size={16}
                                  className="text-purple-400"
                                />
                                Items
                              </h4>
                              <div className="space-y-2">
                                {order.items.map((item, idx) => (
                                  <div
                                    key={idx}
                                    className="flex justify-between text-sm"
                                  >
                                    <span className="text-gray-400">
                                      {item.name} x{item.quantity}
                                    </span>
                                    <span className="text-purple-400">
                                      KES{" "}
                                      {(
                                        item.price * item.quantity
                                      ).toLocaleString()}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </td>
                      </motion.tr>
                    )}
                  </AnimatePresence>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Order Details Modal */}
      <OrderDetailsModal
        order={selectedOrder}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onUpdateStatus={onUpdateStatus}
      />
    </>
  );
};

export default OrdersTable;
