// components/contact/ContactInfoCards.jsx
import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactInfoCards = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+254 759 466 446", "+254 712 345 678"],
      action: "tel:+254759466446",
      actionText: "Call Now",
      color: "from-green-400 to-emerald-400",
      delay: 0.1,
    },
    {
      icon: Mail,
      title: "Email",
      details: ["sales@fancytechintegration-kenya.com", "support@fti.co.ke"],
      action: "mailto:sales@fancytechintegration-kenya.com",
      actionText: "Send Email",
      color: "from-blue-400 to-cyan-400",
      delay: 0.2,
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["Bishop Magua Centre,", "Nairobi, Kenya"],
      action: "https://maps.google.com",
      actionText: "Get Directions",
      color: "from-purple-400 to-indigo-400",
      delay: 0.3,
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      color: "from-orange-400 to-red-400",
      delay: 0.4,
    },
  ];

  return (
    <section className="relative -mt-16 z-10 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: info.delay, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${info.color} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500`}
              />
              <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 border border-white/10 group-hover:border-transparent transition-all duration-500">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${info.color} p-3 mb-4 group-hover:scale-110 transition-transform`}
                >
                  <info.icon className="w-full h-full text-white" />
                </div>

                <h3
                  className={`text-xl font-bold mb-2 bg-gradient-to-r ${info.color} text-transparent bg-clip-text`}
                >
                  {info.title}
                </h3>

                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-400 text-sm">
                    {detail}
                  </p>
                ))}

                {info.action && (
                  <a
                    href={info.action}
                    className="inline-block mt-4 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    {info.actionText} →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoCards;
