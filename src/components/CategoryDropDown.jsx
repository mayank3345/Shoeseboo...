import React from "react";

const CategoryDropDown = ({ open }) => {
  const menMenu = {
    cards: [
      { label: "SHOP ALL", image: "/images/shopall.jpg" },
      { label: "X LOWS", image: "/images/xlows.jpg" },
      { label: "AEON", image: "/images/aeon.jpg" },
      { label: "ALTER", image: "/images/alter.jpg" },
    ],
    links: ["Accessories", "Drops", "Gift Card", "Garage"],
  };

  return (
    <div
      className={`absolute top-15 left-0 w-full bg-white border-t shadow-xl z-50 overflow-hidden transition-all duration-300 ease-in-out ${
        open
          ? "opacity-100 max-h-[1000px] py-6"
          : "opacity-0 max-h-0 py-0 pointer-events-none"
      }`}
    >
      <div className="flex max-w-7xl mx-auto px-8 gap-0">
        {/* Left: 4-card Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 flex-1">
          {menMenu.cards.map((card, index) => (
            <div key={index} className="cursor-pointer hover:opacity-90">
              <img
                src={card.image}
                alt={card.label}
                className="w-full h-auto object-cover"
              />
              <p className="text-xl font-black mt-2">{card.label}</p>
            </div>
          ))}
        </div>

        {/* Right: Text Menu */}
        <div className="hidden md:block border-l pl-8">
          <ul className="space-y-4">
            {menMenu.links.map((text, idx) => (
              <li
                key={idx}
                className="text-lg font-semibold text-gray-700 hover:text-black cursor-pointer"
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryDropDown;
