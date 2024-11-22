import React from "react";
import Hero from "./Hero";
import About from "./About";

const Home = () => {
  return (
    <div className="mt[4rem] bg-[#0F0326] w-[100vw] min-h-[100vh]">
      <Hero />
      <About/>
    </div>
  );
};

export default Home;
