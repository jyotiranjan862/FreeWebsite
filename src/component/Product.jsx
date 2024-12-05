import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  return (
    <div className="min-h-[100vh] w-full bg-[#231838] ">
      {id === "gaming" && (
        <>
          <div
            id="hero"
            className="relative w-full h-[calc(100vh-4rem)] overflow-hidden"
          >
            {/* Background Video */}
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
            >
              <source
                src="/public/4354243-uhd_3840_2160_25fps.gif"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="absolute md:left-5 z-10 flex flex-col items-start justify-center h-full text-white px-4 md:w-[80%] lg:w-[60%]">
              <h1 className="text-4xl md:text-[2.9rem] text-start lg:text-5xl xl:text-[3.6rem] font-semibold tracking-wide leading-tight lg:leading-[3.8rem] xl:leading-[4.5rem]">
                The world is changing,
                <br /> ready to <span className="text-[#D307D5]">Adapt</span> ?
              </h1>
              <p className="mt-4 text-md md:text-lg xl:text-xl tracking-wide text-start">
                Bring Properties to Life In real estate, visualization is
                everything. Our AR/VR solutions allow your clients to explore
                properties in stunning 3D detail, offering virtual walkthroughs
                that make location and time irrelevant. Prospective buyers can
                experience floor plans, customize interiors, and navigate.
              </p>
              <button className="mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition">
                Get Started
              </button>
            </div>
          </div>
          {/* Sections for "gaming" */}
          <div className="min-h-[100vh] px-12 pt-20">
            {/* Section 1 */}
            <div className="flex flex-col md:flex-row justify-between items-center w-[97%] gap-6 md:gap-0 pb-12">
              <div className="text-center md:text-left md:w-2/3">
                <h2 className="text-[1.5rem] sm:text-[2rem] text-[#D307D5] font-semibold tracking-wide">
                  Our Real Estate AR/VR Solutions Include
                </h2>
                <h3 className="text-gray-400 text-[1.2rem] sm:text-[1.4rem] tracking-wide mt-2">
                  3D Virtual Tours
                </h3>
                <p className="text-white tracking-wide font-normal mt-2">
                  Showcase properties with immersive, room-by-room explorations
                </p>
              </div>
              <div className="bg-white md:rotate-[70deg] rounded-2xl w-[10rem] h-[10rem] sm:w-[12rem] sm:h-[12rem] md:w-[15rem] md:h-[15rem]"></div>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col md:flex-row justify-between items-center w-[97%] gap-6 md:gap-12 pb-12">
              {/* Decorative Shape */}
              <div className="bg-white md:rotate-[70deg] rounded-2xl w-[10rem] h-[10rem] sm:w-[12rem] sm:h-[12rem] md:w-[15rem] md:h-[15rem] md:order-1 order-2"></div>

              {/* Text Section */}
              <div className="text-center md:text-left md:w-2/3 md:order-2 order-1">
                <h2 className="text-[1.5rem] sm:text-[2rem] text-[#D307D5] font-semibold tracking-wide">
                  Virtual Walkthroughs
                </h2>
                <h3 className="text-gray-400 text-[1.2rem] sm:text-[1.4rem] tracking-wide mt-2">
                  Customized Experiences
                </h3>
                <p className="text-white tracking-wide font-normal mt-2">
                  Allow clients to personalize their experiences and envision
                  their future.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="flex flex-col md:flex-row justify-between items-center w-[97%] gap-6 md:gap-6 pb-12">
              <div className="text-center md:text-left md:w-2/3">
                <h2 className="text-[1.5rem] sm:text-[2rem] text-[#D307D5] font-semibold tracking-wide">
                  Immersive Property Details
                </h2>
                <h3 className="text-gray-400 text-[1.2rem] sm:text-[1.4rem] tracking-wide mt-2">
                  Real-Time Visuals
                </h3>
                <p className="text-white tracking-wide font-normal mt-2">
                  Enhance decision-making with highly detailed, immersive
                  visuals.
                </p>
              </div>
              <div className="bg-white md:rotate-[70deg] rounded-2xl w-[10rem] h-[10rem] sm:w-[12rem] sm:h-[12rem] md:w-[15rem] md:h-[15rem]"></div>
            </div>
          </div>
        </>
      )}

      {id === "tourism" && (
        <>
          <div
            id="hero"
            className="relative w-full h-[calc(100vh-4rem)] overflow-hidden"
          >
            {/* Background Video */}
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
            >
              <source
                src="/public/tourism_video.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="absolute md:left-5 z-10 flex flex-col items-start justify-center h-full text-white px-4 md:w-[80%] lg:w-[60%]">
              <h1 className="text-4xl md:text-[2.9rem] text-start lg:text-5xl xl:text-[3.6rem] font-semibold tracking-wide leading-tight lg:leading-[3.8rem] xl:leading-[4.5rem]">
                Explore the World of Tourism,
                <br /> ready to <span className="text-[#D307D5]">Discover</span> ?
              </h1>
              <p className="mt-4 text-md md:text-lg xl:text-xl tracking-wide text-start">
                Experience the beauty and adventure of tourism like never before.
                Our virtual tours allow you to explore distant lands, unique cultures,
                and breathtaking landscapes all from the comfort of your home.
              </p>
              <button className="mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition">
                Start Your Journey
              </button>
            </div>
          </div>
          {/* Sections for "tourism" */}
          <div className="min-h-[100vh] px-12 pt-20">
            {/* Section 1 */}
            <div className="flex flex-col md:flex-row justify-between items-center w-[97%] gap-6 md:gap-0 pb-12">
              <div className="text-center md:text-left md:w-2/3">
                <h2 className="text-[1.5rem] sm:text-[2rem] text-[#D307D5] font-semibold tracking-wide">
                  Virtual Tourist Attractions
                </h2>
                <h3 className="text-gray-400 text-[1.2rem] sm:text-[1.4rem] tracking-wide mt-2">
                  Explore the World Virtually
                </h3>
                <p className="text-white tracking-wide font-normal mt-2">
                  Visit famous landmarks and explore hidden gems with a 360-degree
                  virtual tour experience.
                </p>
              </div>
              <div className="bg-white md:rotate-[70deg] rounded-2xl w-[10rem] h-[10rem] sm:w-[12rem] sm:h-[12rem] md:w-[15rem] md:h-[15rem]"></div>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col md:flex-row justify-between items-center w-[97%] gap-6 md:gap-12 pb-12">
              {/* Decorative Shape */}
              <div className="bg-white md:rotate-[70deg] rounded-2xl w-[10rem] h-[10rem] sm:w-[12rem] sm:h-[12rem] md:w-[15rem] md:h-[15rem] md:order-1 order-2"></div>

              {/* Text Section */}
              <div className="text-center md:text-left md:w-2/3 md:order-2 order-1">
                <h2 className="text-[1.5rem] sm:text-[2rem] text-[#D307D5] font-semibold tracking-wide">
                  Immersive Culture
                </h2>
                <h3 className="text-gray-400 text-[1.2rem] sm:text-[1.4rem] tracking-wide mt-2">
                  Discover New Traditions
                </h3>
                <p className="text-white tracking-wide font-normal mt-2">
                  Get a deeper understanding of cultures, customs, and traditions
                  from around the world.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="flex flex-col md:flex-row justify-between items-center w-[97%] gap-6 md:gap-6 pb-12">
              <div className="text-center md:text-left md:w-2/3">
                <h2 className="text-[1.5rem] sm:text-[2rem] text-[#D307D5] font-semibold tracking-wide">
                  Real-Time Travel Exploration
                </h2>
                <h3 className="text-gray-400 text-[1.2rem] sm:text-[1.4rem] tracking-wide mt-2">
                  Virtual Tour Guides
                </h3>
                <p className="text-white tracking-wide font-normal mt-2">
                  Let virtual tour guides help you plan your next adventure with
                  real-time travel tips and recommendations.
                </p>
              </div>
              <div className="bg-white md:rotate-[70deg] rounded-2xl w-[10rem] h-[10rem] sm:w-[12rem] sm:h-[12rem] md:w-[15rem] md:h-[15rem]"></div>
            </div>
          </div>
        </>
      )}

      {id === "travel" && (
        <>
          <div
            id="hero"
            className="relative w-full h-[calc(100vh-4rem)] overflow-hidden"
          >
            {/* Background Video */}
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
            >
              <source
                src="/public/travel_video.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="absolute md:left-5 z-10 flex flex-col items-start justify-center h-full text-white px-4 md:w-[80%] lg:w-[60%]">
              <h1 className="text-4xl md:text-[2.9rem] text-start lg:text-5xl xl:text-[3.6rem] font-semibold tracking-wide leading-tight lg:leading-[3.8rem] xl:leading-[4.5rem]">
                Travel the World, ready to{" "}
                <span className="text-[#D307D5]">Explore</span>?
              </h1>
              <p className="mt-4 text-md md:text-lg xl:text-xl tracking-wide text-start">
                Immerse yourself in breathtaking travel experiences with our
                virtual tours and travel guides that take you around the globe,
                all from the comfort of your home.
              </p>
              <button className="mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition">
                Start Your Adventure
              </button>
            </div>
          </div>
          {/* Sections for "travel" */}
          <div className="min-h-[100vh] px-12 pt-20">
            {/* Section 1 */}
            <div className="flex flex-col md:flex-row justify-between items-center w-[97%] gap-6 md:gap-0 pb-12">
              <div className="text-center md:text-left md:w-2/3">
                <h2 className="text-[1.5rem] sm:text-[2rem] text-[#D307D5] font-semibold tracking-wide">
                  Virtual Travel Destinations
                </h2>
                <h3 className="text-gray-400 text-[1.2rem] sm:text-[1.4rem] tracking-wide mt-2">
                  Explore Iconic Locations
                </h3>
                <p className="text-white tracking-wide font-normal mt-2">
                  Visit the world’s most iconic destinations with a virtual
                  experience that brings them to life.
                </p>
              </div>
              <div className="bg-white md:rotate-[70deg] rounded-2xl w-[10rem] h-[10rem] sm:w-[12rem] sm:h-[12rem] md:w-[15rem] md:h-[15rem]"></div>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col md:flex-row justify-between items-center w-[97%] gap-6 md:gap-12 pb-12">
              {/* Decorative Shape */}
              <div className="bg-white md:rotate-[70deg] rounded-2xl w-[10rem] h-[10rem] sm:w-[12rem] sm:h-[12rem] md:w-[15rem] md:h-[15rem] md:order-1 order-2"></div>

              {/* Text Section */}
              <div className="text-center md:text-left md:w-2/3 md:order-2 order-1">
                <h2 className="text-[1.5rem] sm:text-[2rem] text-[#D307D5] font-semibold tracking-wide">
                  Personalized Travel Plans
                </h2>
                <h3 className="text-gray-400 text-[1.2rem] sm:text-[1.4rem] tracking-wide mt-2">
                  Tailor-Made Experiences
                </h3>
                <p className="text-white tracking-wide font-normal mt-2">
                  Let us guide you in planning the perfect vacation with
                  personalized itineraries.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="flex flex-col md:flex-row justify-between items-center w-[97%] gap-6 md:gap-6 pb-12">
              <div className="text-center md:text-left md:w-2/3">
                <h2 className="text-[1.5rem] sm:text-[2rem] text-[#D307D5] font-semibold tracking-wide">
                  Adventure Awaits
                </h2>
                <h3 className="text-gray-400 text-[1.2rem] sm:text-[1.4rem] tracking-wide mt-2">
                  Explore Nature and More
                </h3>
                <p className="text-white tracking-wide font-normal mt-2">
                  Discover stunning nature trails, remote islands, and
                  exciting outdoor activities.
                </p>
              </div>
              <div className="bg-white md:rotate-[70deg] rounded-2xl w-[10rem] h-[10rem] sm:w-[12rem] sm:h-[12rem] md:w-[15rem] md:h-[15rem]"></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
