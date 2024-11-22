import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full min-h-[40vh] border-[.7px] border-[#dadada] rounded-lg mt-6 py-4 ">
      <h2 className="text-center text-[2.2rem] tracking-wide font-semibold text-white py-4">
        Subscribe To Our <span className=" text-[#D307D5] ">Newsletter</span>
      </h2>

      <p className="w-[70%] text-white text-md tracking-wide text-center m-auto">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi illum
        cumque repudiandae consectetur ipsum accusantium saepe mollitia quia
        optio labore! Omnis quasi et numquam atque laborum hic itaque dolores
      </p>
      <div className="w-full flex justify-center pt-5">
        <input type="text" className="w-[18rem] h-10 rounded-l-lg px-4 font-semibold tracking-wide" placeholder="Join Our NewsLetter" />
        <button className="text-white font-semibold py-1 w-[5.5rem] flex justify-center items-center bg-purple-400">Submit</button>
      </div>
    </div>
  );
};

export default Newsletter;
