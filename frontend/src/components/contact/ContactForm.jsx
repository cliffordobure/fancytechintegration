// components/contact/ContactForm.jsx
import React, { useState } from "react";
import {
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success(
        "Thank you for your message! We will get back to you soon.",
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
      <h2 className="text-3xl font-bold mb-2">
        <span className="bg-gradient-to-r from-orange-400 to-blue-400 text-transparent bg-clip-text">
          Send us a Message
        </span>
      </h2>
      <p className="text-gray-400 mb-8">
        Fill out the form below and we'll get back to you within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
              placeholder="John Sebit"
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
              placeholder="john@example.com"
            />
          </div>
        </div>

        {/* Phone Field */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Phone Number
          </label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onFocus={() => setFocusedField("phone")}
              onBlur={() => setFocusedField(null)}
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
              placeholder="+211 929 097 920"
            />
          </div>
        </div>

        {/* Subject Field */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Subject *
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onFocus={() => setFocusedField("subject")}
              onBlur={() => setFocusedField(null)}
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
              placeholder="How can we help you?"
            />
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Message *
          </label>
          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              required
              rows="5"
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-4 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
              placeholder="Tell us more about your needs..."
            />
          </div>
        </div>

        {/* Submit Button – static */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 ${
            isSubmitting ? "opacity-75 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
