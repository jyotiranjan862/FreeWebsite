import React from "react";

const Review = () => {
  return (
    <div className="w-full min-h-[40vh] py-6">
      <h2 className="text-center text-[#D307D5] text-[2rem] md:text-[2.2rem] tracking-wide font-semibold">
        What we offer
      </h2>

      <div className="pt-12 flex justify-between">
        <div className="w-[20rem] border-r-[1px]  border-white">
            <div className="flex gap-4 items-center  ">
                <div className="rounded-full h-10 w-10 bg-white"></div>
                <h3 className="text-white font-semibold text-lg">Logon Paul</h3>
            </div>
            <h3 className="text-white tracking-wide text-[.9rem] py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis </h3>
        </div>

        <div className="w-[20rem] border-r-[1px]  border-white">
            <div className="flex gap-4 items-center  ">
                <div className="rounded-full h-10 w-10 bg-white"></div>
                <h3 className="text-white font-semibold text-lg">Logon Paul</h3>
            </div>
            <h3 className="text-white tracking-wide text-[.9rem] py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis </h3>
        </div>

        <div className="w-[20rem] border-r-[1px]  border-white">
            <div className="flex gap-4 items-center  ">
                <div className="rounded-full h-10 w-10 bg-white"></div>
                <h3 className="text-white font-semibold text-lg">Logon Paul</h3>
            </div>
            <h3 className="text-white tracking-wide text-[.9rem] py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis </h3>
        </div>
      </div>
    </div>
  );
};

export default Review;
