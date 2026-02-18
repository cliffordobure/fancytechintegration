import SEO from '../components/SEO';

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Fancy Tech Integration Kenya - A leading technology company providing Starlink Kits, Networking Equipment, Laptops, Phones, and Software Solutions across Kenya."
        keywords={['About Fancy Tech Integration', 'F.T.I. Kenya', 'Company', 'Technology Solutions', 'Kenya']}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="text-4xl font-bold text-orange-500">F.T.I.</span>
            <h1 className="text-4xl font-bold mb-2">About Fancy Tech Integration</h1>
            <p className="text-lg text-gray-600">Kenya</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
              <p className="text-gray-700 mb-4">
                Fancy Tech Integration (F.T.I.) is a leading technology company that has been serving
                customers in South Sudan and is now expanding its operations to
                Kenya. We specialize in providing cutting-edge technology
                solutions, including software development, Starlink satellite
                internet kits, networking equipment, laptops, and mobile phones.
              </p>
              <p className="text-gray-700">
                Our mission is to bridge the digital divide in Kenya by making
                advanced technology accessible and affordable to businesses and
                individuals across the country.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Software Development</h3>
                  <p className="text-gray-700">
                    Custom software solutions tailored to your business needs.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Starlink Kits</h3>
                  <p className="text-gray-700">
                    High-speed satellite internet solutions for remote and
                    underserved areas.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Networking Equipment</h3>
                  <p className="text-gray-700">
                    Professional networking equipment and installation services
                    for technicians.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Laptops & Phones</h3>
                  <p className="text-gray-700">
                    Quality laptops and smartphones from leading manufacturers.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Quality: We provide only the best products and services</li>
                <li>Innovation: We stay ahead with the latest technology</li>
                <li>Customer Focus: Your satisfaction is our priority</li>
                <li>Integrity: We conduct business with honesty and transparency</li>
                <li>Accessibility: Making technology available to everyone</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
              <p className="text-gray-700 mb-4">
                With our extensive experience in South Sudan and now expanding
                to Kenya, we bring a unique understanding of the technology needs
                in the region. We offer:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Expert technical support and installation services</li>
                <li>Competitive pricing on all products</li>
                <li>Warranty and after-sales support</li>
                <li>Fast and reliable delivery across Kenya</li>
                <li>Custom solutions for businesses</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
