import React from "react";
import Hero from "./Hero";
import About from "./About";
import Offer from "./Offer";
import Newsletter from "./Newsletter";
import Review from "./Review";

const Home = () => {
  return (
    <div className="mt[4rem] bg-[#0F0326] w-[100vw] min-h-[100vh]">
      <Hero />
      <div className="w-[90%] mx-auto pb-10">
      <About/>
      <Offer/>
      <Newsletter/>
      <Review/>
      </div>
    </div>
  );
};

export default Home;
