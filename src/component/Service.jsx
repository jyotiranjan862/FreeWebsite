import React from "react";


const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('/path-to-your-service-image.jpg')`, // Replace with your image path
        }}
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>

        {/* Hero Content */}
        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-wide">
            Discover Our Expertise in Services
          </h1>
          <p className="text-lg md:text-2xl mt-4 max-w-2xl mx-auto">
            We deliver cutting-edge solutions that help businesses grow through
            innovative and customized services in AR/VR, Web Development, and
            more.
          </p>
          <a
            href="#services-list"
            className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg rounded-full shadow-lg transform transition-all hover:scale-110 hover:shadow-xl"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Services List */}
      <div
        id="services-list"
        className="py-16 bg-gray-100 transition-all duration-300 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-red-500"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {/* Service 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white">
            <h3 className="text-2xl font-semibold text-[#231838] mb-4">
              Augmented Reality
            </h3>
            <p className="text-gray-700">
              Create immersive experiences that captivate your audience and boost engagement with our AR solutions.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white">
            <h3 className="text-2xl font-semibold text-[#231838] mb-4">
              Virtual Reality
            </h3>
            <p className="text-gray-700">
              Immerse your customers in virtual worlds that bring your products or services to life.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-teal-400 hover:to-indigo-500 hover:text-white">
            <h3 className="text-2xl font-semibold text-[#231838] mb-4">
              360° Virtual Tours
            </h3>
            <p className="text-gray-700">
              Showcase your properties or products with high-quality, interactive 360° tours for an engaging customer experience.
            </p>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-b from-purple-600 to-pink-500 text-center py-16">
        <h3 className="text-3xl text-white font-semibold mb-4">
          Ready to Take Your Business to the Next Level?
        </h3>
        <p className="text-lg text-white mb-8">
          Get in touch with us today and start leveraging cutting-edge technology to transform your business.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-white text-purple-600 font-semibold text-lg rounded-full shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
        >
          Contact Us
        </a>
      </div>

      
    </div>
  );
};

export default Services;
