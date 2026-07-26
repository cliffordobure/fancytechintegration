// components/contact/ContactFAQ.jsx
import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Where are you located in Juba, South Sudan?",
      answer:
        "We are in Tranquil centre, Rm G3, ground floor, along Konyokonyo - Juba road, next to trinity office, opposite Konyo bus park, South Sudan. Our office is easily accessible from all major areas of the city.",
    },
    {
      question: "Do you offer on-site consultations?",
      answer:
        "Yes! We provide free on-site consultations for businesses in Juba and surrounding areas.",
    },
    {
      question: "What payment methods and currencies do you accept?",
      answer:
        "We accept payments in South Sudanese Pounds (SSP) and US Dollars (USD) through bank transfers, cash, and major credit cards.",
    },
    {
      question: "Do you provide installation services?",
      answer:
        "Absolutely! Our expert technicians provide professional installation for all our products, including Starlink kits, cctv or laptops software installs.",
    },
    {
      question: "What is your warranty policy?",
      answer:
        "Most of our products come with a minimum 1-year warranty. Extended warranty options are available for most products.",
    },
  ];

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-blue-500 p-2">
          <HelpCircle className="w-full h-full text-white" />
        </div>
        <h2 className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-orange-400 to-blue-400 text-transparent bg-clip-text">
            Frequently Asked Questions
          </span>
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-white/10 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-4 py-3 flex items-center justify-between text-left"
            >
              <span className="text-gray-300 font-medium">{faq.question}</span>
              <ChevronDown className="w-5 h-5 text-orange-400" />
            </button>

            {openIndex === index && (
              <div className="px-4 pb-3">
                <p className="text-gray-400 text-sm">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactFAQ;
