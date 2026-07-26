// pages/ContactPage.jsx
import React from "react";
import SEO from "../components/SEO";
import ContactHero from "../components/contact/ContactHero";
import ContactInfoCards from "../components/contact/ContactInfoCards";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import ContactMap from "../components/contact/ContactMap";
import ContactFAQ from "../components/contact/ContactFAQ";
import SupportCTA from "../components/contact/SupportCTA";

const ContactPage = () => {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Fancy Tech Integration South Sudan. Contact us for inquiries about our products and services including Starlink Kits, Networking Equipment, Laptops, and Phones."
        keywords={[
          "Contact",
          "Fancy Tech Integration South Sudan",
          "F.T.I. South Sudan",
          "Support",
          "Inquiry",
        ]}
      />

      <ContactHero />
      <ContactInfoCards />

      {/* Main Contact Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Form */}
              <div>
                <ContactForm />
              </div>

              {/* Right Column - Map & Info */}
              <div className="space-y-6">
                <ContactMap />
                <ContactInfo />
              </div>
            </div>

            {/* FAQ Section - Full Width */}
            <div className="mt-12">
              <ContactFAQ />
            </div>
          </div>
        </div>
      </section>

      <SupportCTA />
    </>
  );
};

export default ContactPage;
