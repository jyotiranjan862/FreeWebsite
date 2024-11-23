import React from "react";

const Offer = () => {
  return (
    <div className="w-full min-h-[60vh]">
      <h2 className="text-center text-[#D307D5] text-[2rem] md:text-[2.2rem] tracking-wide font-semibold">
        What we offer
      </h2>
      <div className=" flex justify-center md:justify-between mt-10 flex-wrap gap-8">
        <div className="md:w-[13rem] lg:w-[17rem] xl:w-[19.5rem]">
            <div className="h-[12.4rem] rounded-lg w-[full]  bg-white">

            </div>
            <h2 className="text-xl font-semibold  text-white text-center py-1">Gaming</h2>
            <p className="text-white tracking-wide  text-[.9rem] text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto h
            </p>
        </div>

        <div className="md:w-[13rem] lg:w-[17rem] xl:w-[19.5rem]">
            <div className="h-[12.4rem] rounded-lg w-[full]  bg-white">

            </div>
            <h2 className="text-xl font-semibold  text-white text-center py-1">Turism</h2>
            <p className="text-white tracking-wide  text-[.9rem] text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto h
            </p>
        </div>

        <div className="md:w-[13rem] lg:w-[17rem] xl:w-[19.5rem]">
            <div className="h-[12.4rem] rounded-lg w-[full]  bg-white">

            </div>
            <h2 className="text-xl font-semibold  text-white text-center py-1">Real Esaets</h2>
            <p className="text-white tracking-wide  text-[.9rem] text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto h
            </p>
        </div>
      </div>
    </div>
  );
};

export default Offer;
