import React from 'react';
import '../CSS/Hero.css';

const Hero = () => {
    return (
        <div id="hero" className="relative w-[100vw] h-[calc(100vh-4rem)] overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
            >
                <source src="/public/4354243-uhd_3840_2160_25fps.gif" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Dark Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h1 className="text-4xl md:text-[2.9rem] lg:text-5xl xl:text-6xl font-semibold tracking-wide leading-tight lg:leading-[3.8rem] xl:leading-[4.6rem]">
                    Unlock Immersive Experiences <br /> with Cutting-Edge AR/VR Solutions
                </h1>
                <p className="mt-4 text-md md:text-lg xl:text-xl tracking-wide">
                    Blending technology and industry expertise to captivate audiences and
                    drive engagement across Real Estate, Gaming, and Tourism.
                </p>
                <button className="mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition">
                    <a href="https://sherlockstudio.in/">Get Started</a>
                </button>
            </div>
        </div>
    );
};

export default Hero;
