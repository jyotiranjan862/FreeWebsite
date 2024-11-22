import React from "react";

const About = () => {
  return (
    <div className="h-[50vh] w-full relative flex justify-center items-center">
      <div className="h-[80%] w-[100%] bg-[#231838] rounded-lg p-4 relative">
        <h2 className="text-[2.2rem] tracking-wide font-semibold text-[#D307D5] ">
          About Us
        </h2>
        <div className="flex justify-between py-2">
          <div className="w-[67%]">
            <p className="text-white tracking-wide text-[1rem] pb-3">
              Welcome to [Your Company Name], where we blend cutting-edge AR/VR
              technology with industry expertise to create impactful, immersive
              experiences that drive engagement and revenue for businesses
              across Real Estate, Gaming, and Tourism. With our solutions, you
              can unlock the potential of augmented and virtual reality to
              captivate customers and stand out in competitive markets
            </p>
            <a href="#" className="text-purple-600 ">
              Learn More
            </a>
          </div>
          {/* <div className="relative">
            <div className="w-[8rem] rounded-lg h-[10rem] bg-white">

            </div>
            <div className="w-[8rem] rounded-lg h-[10rem] bg-red-400 absolute top-4 right-20">
                
            </div>
          </div> */}
        </div>
        <div className="w-[8.6rem] rounded-lg h-[10rem] bg-white absolute bottom-4 right-10"></div>
        <div className="w-[8.6rem] rounded-lg h-[10rem] bg-red-400 absolute top-4 right-32"></div>
      </div>
    </div>
  );
};

export default About;
