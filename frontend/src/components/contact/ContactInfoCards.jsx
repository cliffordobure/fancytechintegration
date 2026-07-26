// components/contact/ContactInfoCards.jsx
import React from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const ContactInfoCards = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+211 929 097 920", "+211 924 710 022"],
      action: "tel:+211929097920",
      actionText: "Call Now",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["sales@fancytechintegration.com", "support@fti.com"],
      action: "mailto:sales@fancytechintegration.com",
      actionText: "Send Email",
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["Tranquil Centre, Konyokonyo", "Juba, South Sudan"],
      action:
        "https://www.google.com/maps?q=Fancy+Tech+Integration,+Juba,+South+Sudan&output=embed",
      actionText: "Get Directions",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Sun - Fri: 8:00 AM - 5:00 PM", "Closed on Saturday"],
    },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #f97316 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      <div className="relative container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-orange-400 via-blue-400 to-orange-400 text-transparent bg-clip-text">
              Get in Touch
            </span>
          </h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
            Reach out to us through any of these channels – we're here to help.
          </p>
        </div>

        {/* Contact info grid – plain, elegant, no cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <div key={index} className="group text-center md:text-left">
              {/* Icon with subtle circle background */}
              <div className="flex justify-center md:justify-start mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-orange-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="relative w-12 h-12 rounded-full bg-gray-800 border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 transition-colors">
                    <info.icon className="w-5 h-5 text-orange-400" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {info.title}
              </h3>

              {info.details.map((detail, i) => (
                <p key={i} className="text-gray-400 text-sm leading-relaxed">
                  {detail}
                </p>
              ))}

              {/* Action link – subtle arrow on hover */}
              {info.action && (
                <a
                  href={info.action}
                  target={info.action.startsWith("http") ? "_blank" : undefined}
                  rel={
                    info.action.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="inline-flex items-center gap-1 mt-3 text-sm text-orange-400 hover:text-orange-300 group-hover:gap-2 transition-all"
                >
                  {info.actionText}
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Divider with decorative dot */}
        <div className="relative my-12">
          <div className="border-t border-white/10" />
          <div className="absolute left-1/2 -top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-orange-500/50 border border-white/20" />
        </div>

        {/* Bottom note – contact hours and response time */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            <span className="text-orange-400">⚡</span> We respond to all
            inquiries within{" "}
            <span className="text-orange-300 font-medium">2-4 hours</span>{" "}
            during business days
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoCards;
