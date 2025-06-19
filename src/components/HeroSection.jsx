import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative bg-white z-0 top-0">
      {/* Background Image */}
      <div className="w-full h-[80vh] flex items-center justify-center px-6 md:px-20 bg-gray-100">
        {/* Image on Right */}
        <div className="absolute right-0 top-0 w-full h-full">
          <img
            src="/images/xlows-snow.jpg" // replace with your image path
            alt="X Lows Snow"
            className="w-full h-full object-cover object-right"
          />
        </div>

        {/* Content on Left */}
        <div className="relative z-10 text-left max-w-xl">
          <p className="text-lg md:text-xl font-medium text-gray-800 mb-2">
            Never melts
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-black mb-8">
            X LOWS SNOW
          </h1>
          <div className="flex gap-6">
            <Link
              to="/men"
              className="bg-yellow-300 text-black font-bold py-3 px-6 hover:bg-yellow-400 transition-all"
            >
              SHOP MEN
            </Link>
            <Link
              to="/women"
              className="bg-yellow-300 text-black font-bold py-3 px-6 hover:bg-yellow-400 transition-all"
            >
              SHOP WOMEN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
