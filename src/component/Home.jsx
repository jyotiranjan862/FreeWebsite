import React from "react";
// import HomePage from "./HomePage";
import About from "./About";
import Offer from "./Offer";
import Newsletter from "./Newsletter";
import Review from "./Review";
import Footor from "./Footor";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className="mt[4rem] bg-[#0F0326] w-[100vw] min-h-[100vh] overflow-hidden">
      {/* <Header/> */}
      {/* <HomePage /> */}
      <Hero/>
      <div className="w-[90%] mx-auto pb-10">
        <About />
        <Offer />
        <Newsletter />
        <Review />
        
      </div>
      <Footor />
    </div>
  );
};

export default Home;
