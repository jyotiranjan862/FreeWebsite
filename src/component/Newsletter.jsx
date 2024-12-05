import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full min-h-[40vh] border-[.7px] border-[#dadada] rounded-lg  py-4 mt-[4rem]">
      <h2 className="text-center text-[1.7rem] md:text-[2.2rem] tracking-wide font-semibold text-white py-4">
        Subscribe To Our <span className=" text-[#D307D5] ">Newsletter</span>
      </h2>

      <p className="w-[90%] md:w-[70%] text-white text-sm md:text-md tracking-wide text-center m-auto">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi illum
        cumque repudiandae consectetur ipsum accusantium saepe mollitia quia
        optio labore! Omnis quasi et numquam atque laborum hic itaque dolores
      </p>
      <div className="w-full flex justify-center pt-5">
        <input type="text" className="w-[12rem] md:w-[18rem] h-8 md:h-10 rounded-l-lg px-4 font-semibold tracking-wide text-[.8rem] md:text-[1rem]" placeholder="Join Our NewsLetter" />
        <input 
  type="button" 
  value="Submit" 
  className="text-white font-semibold py-1 w-[5rem] md:w-[5.5rem] flex justify-center items-center bg-[#D307D5] text-[.86rem] md:text-[1rem]"
/>

      </div>
    </div>
  );
};

export default Newsletter;
