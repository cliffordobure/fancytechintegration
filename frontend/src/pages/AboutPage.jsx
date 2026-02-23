// pages/AboutPage.jsx
import SEO from "../components/SEO";
import WhatWeDo from "../components/WhatWeDo";
import CoreValues from "../components/CoreValues";
import WhyChooseUs from "../components/WhyChooseUs";
import AboutHero from "../components/AboutHero";

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Fancy Tech Integration Kenya - A leading technology company providing Starlink Kits, Networking Equipment, Laptops, Phones, and Software Solutions across Kenya."
        keywords={[
          "About Fancy Tech Integration",
          "F.T.I. Kenya",
          "Company",
          "Technology Solutions",
          "Kenya",
        ]}
      />

      <AboutHero />

      {/* Who We Are Section - Keep as is or transform with dark theme */}
      <section className="relative py-24 overflow-hidden bg-gray-900">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #8b5cf6 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-sm font-semibold text-purple-400 inline-block mb-4">
                ABOUT US
              </span>
              <h2 className="text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                  Who We Are
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                <span className="font-semibold text-purple-400">
                  Fancy Tech Integration (F.T.I.)
                </span>{" "}
                is a leading technology company that has been serving customers
                in South Sudan and is now expanding its operations to Kenya. We
                specialize in providing cutting-edge technology solutions,
                including software development, Starlink satellite internet
                kits, networking equipment, laptops, and mobile phones.
              </p>

              <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <p className="text-lg text-gray-200 font-medium">
                  Our mission is to bridge the digital divide in Kenya by making
                  advanced technology accessible and affordable to businesses
                  and individuals across the country.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatWeDo />
      <CoreValues />
      <WhyChooseUs />
    </>
  );
};

export default AboutPage;
