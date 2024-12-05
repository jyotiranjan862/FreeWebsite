import React from "react";

const Product = (props) => {
  return (
    <div className="min-h-[100vh] w-full bg-[#231838] ">
      {props?.id == "gaming" && (
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
            <div className="absolute md:left-5 z-10 flex flex-col items-start  justify-center h-full  text-white px-4 md:w-[80%] lg:w-[60%]">
              <h1 className="text-4xl md:text-[2.9rem] text-start lg:text-5xl xl:text-[3.6rem] font-semibold tracking-wide leading-tight lg:leading-[3.8rem] xl:leading-[4.5rem]">
                The world is changing,
                <br /> ready to <span className="text-[#D307D5]">Adapt</span> ?
              </h1>
              <p className="mt-4 text-md md:text-lg xl:text-xl tracking-wide text-start">
                Bring Properties to Life In real estate, visualization is
                everything. Our AR/VR solutions allow your clients to explore
                properties in stunning 3D detail, offering virtual walkthroughs
                that make location and time irrelevant. Prospective buyers can
                experience floor plans, customize interiors, and navigate .
              </p>
              <button className="mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition">
                Get Started
              </button>
            </div>
          </div>
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
    </div>
  );
};

export default Product;
