import React, { useState, useEffect } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

const ProductCard = ({ product }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovering, setHovering] = useState(false);

  const { title, price, images, badge } = product;

  useEffect(() => {
    let interval;
    if (hovering) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 2000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [hovering, images.length]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className="relative border hover:shadow-md transition duration-300 bg-white rounded-lg overflow-hidden"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute top-2 left-2 bg-red-500 text-white font-bold text-xs sm:text-sm px-2 sm:px-3 py-1 z-10">
          {badge.toUpperCase()}
        </div>
      )}

      {/* Image Swapper */}
      <div className="relative">
        <img
          src={images[currentIndex]}
          alt={title}
          className="w-full h-60 sm:h-72 md:h-80 object-contain transition-all"
        />

        {/* Navigation buttons on hover */}
        {hovering && images.length > 1 && (
          <>
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full text-sm sm:text-base"
              onClick={handlePrev}
            >
              ‹
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full text-sm sm:text-base"
              onClick={handleNext}
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* Details */}
      <div className="p-3 sm:p-4">
        <h3 className="font-semibold text-base sm:text-lg">{title}</h3>
        <p className="text-sm sm:text-md mt-1">₹ {price}</p>
      </div>

      {/* Plus Icon */}
      <div className="absolute bottom-4 right-4 bg-gray-100 p-2 sm:p-2.5 rounded-full hover:bg-gray-200 cursor-pointer">
        <PlusIcon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
      </div>
    </div>
  );
};

export default ProductCard;
