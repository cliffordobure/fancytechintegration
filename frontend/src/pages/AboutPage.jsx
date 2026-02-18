import SEO from '../components/SEO';

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Fancy Tech Integration Kenya - A leading technology company providing Starlink Kits, Networking Equipment, Laptops, Phones, and Software Solutions across Kenya."
        keywords={['About Fancy Tech Integration', 'F.T.I. Kenya', 'Company', 'Technology Solutions', 'Kenya']}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4">
              <span className="text-5xl font-bold text-orange-500">F.T.I.</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Fancy Tech Integration</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-6">Kenya</p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Bridging the digital divide in Kenya with cutting-edge technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Who We Are</h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 md:p-12">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <span className="font-semibold text-primary-700">Fancy Tech Integration (F.T.I.)</span> is a leading technology company that has been serving
                customers in South Sudan and is now expanding its operations to
                Kenya. We specialize in providing cutting-edge technology
                solutions, including software development, Starlink satellite
                internet kits, networking equipment, laptops, and mobile phones.
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <p className="text-lg text-gray-800 font-medium">
                  Our mission is to bridge the digital divide in Kenya by making
                  advanced technology accessible and affordable to businesses and
                  individuals across the country.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Comprehensive technology solutions tailored to your needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-500">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Software Development</h3>
                <p className="text-gray-600 leading-relaxed">
                  Custom software solutions tailored to your business needs.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-orange-500">
                <div className="text-4xl mb-4">🛰️</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Starlink Kits</h3>
                <p className="text-gray-600 leading-relaxed">
                  High-speed satellite internet solutions for remote and
                  underserved areas.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-green-500">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Networking Equipment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Professional networking equipment and installation services
                  for technicians.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-purple-500">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Laptops & Phones</h3>
                <p className="text-gray-600 leading-relaxed">
                  Quality laptops and smartphones from leading manufacturers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
                <div className="text-4xl mb-3">⭐</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">Quality</h3>
                <p className="text-sm text-gray-700">Only the best products and services</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <div className="text-4xl mb-3">🚀</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">Innovation</h3>
                <p className="text-sm text-gray-700">Staying ahead with latest technology</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                <div className="text-4xl mb-3">👥</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">Customer Focus</h3>
                <p className="text-sm text-gray-700">Your satisfaction is our priority</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                <div className="text-4xl mb-3">🤝</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">Integrity</h3>
                <p className="text-sm text-gray-700">Honesty and transparency always</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl">
                <div className="text-4xl mb-3">🌍</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">Accessibility</h3>
                <p className="text-sm text-gray-700">Technology available to everyone</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
              <p className="text-gray-200 mt-4 max-w-2xl mx-auto text-lg">
                With our extensive experience in South Sudan and now expanding
                to Kenya, we bring a unique understanding of the technology needs
                in the region.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl mb-3">🛠️</div>
                <h3 className="text-xl font-bold mb-2">Expert Support</h3>
                <p className="text-gray-200">Technical support and installation services</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
                <p className="text-gray-200">Best prices on all products</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl mb-3">🛡️</div>
                <h3 className="text-xl font-bold mb-2">Warranty & Support</h3>
                <p className="text-gray-200">Comprehensive after-sales support</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl mb-3">🚚</div>
                <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
                <p className="text-gray-200">Reliable delivery across Kenya</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-xl font-bold mb-2">Custom Solutions</h3>
                <p className="text-gray-200">Tailored solutions for businesses</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl mb-3">📞</div>
                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                <p className="text-gray-200">Always here when you need us</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
