import React from "react";
import { Link } from "react-router-dom"; // Make sure to import Link for navigation


const Service = () => {
  return (
    <>
    <div>
      {/* Hero Section */}
      <div
        className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('/path-to-your-image.jpg')` }} // Replace with your image path
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>
        <div className="relative text-center text-white px-6 animate__animated animate__fadeIn">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-wide animate__animated animate__fadeIn animate__delay-1s">
            Transforming Business with AR/VR
          </h1>
          <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto animate__animated animate__fadeIn animate__delay-2s">
            Discover the future of business with our innovative Augmented Reality and Virtual Reality solutions.
          </p>
          <Link
            to="/services" // Navigate to the Services page
            className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg rounded-full shadow-lg hover:scale-105 transform transition"
          >
            Our Services
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <div
        id="services"
        className="min-h-screen bg-gradient-to-b from-[#231838] to-[#2c1f4f] py-16 flex justify-center items-center"
      >
        <div className="w-[90%] md:w-[80%] lg:w-[70%] bg-[#2a1e4a] rounded-xl shadow-lg p-8 relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D307D5] text-center mb-8 animate__animated animate__fadeIn animate__delay-3s">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transform transition animate__animated animate__fadeIn animate__delay-4s">
              <h3 className="text-2xl font-semibold text-[#231838] mb-4">Augmented Reality</h3>
              <p className="text-gray-700">
                Revolutionize customer experiences with immersive AR applications that allow businesses to engage their audience in new, exciting ways.
              </p>
            </div>
            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transform transition animate__animated animate__fadeIn animate__delay-5s">
              <h3 className="text-2xl font-semibold text-[#231838] mb-4">Virtual Reality</h3>
              <p className="text-gray-700">
                Dive into the world of Virtual Reality with tailor-made solutions that offer fully immersive, interactive experiences for your customers.
              </p>
            </div>
            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transform transition animate__animated animate__fadeIn animate__delay-6s">
              <h3 className="text-2xl font-semibold text-[#231838] mb-4">360° Virtual Tours</h3>
              <p className="text-gray-700">
                Give your customers a virtual tour experience of real estate properties, businesses, or tourist destinations with our 360° virtual tours.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              to="/contact" // Navigate to the Contact page
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg rounded-full shadow-lg hover:scale-105 transform transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Service;
