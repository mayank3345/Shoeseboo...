import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoePrints } from "react-icons/fa";

const GenderTabMenu = ({ mobileMenu }) => {
  const [activeTab, setActiveTab] = useState("men");

  const data = {
    men: {
      image: "/images/men-shoe.jpg", // Replace with actual path
      sneakers: [
        { name: "AEON", link: "/men/aeon" },
        { name: "COMET X", link: "/men/cometx" },
        { name: "ALTER", link: "/men/alter" },
      ],
      sections: ["The Vault", "Accessories", "Gift Card"],
    },
    women: {
      image: "/images/women-shoe.jpg", // Replace with actual path
      sneakers: [
        { name: "LUNA", link: "/women/luna" },
        { name: "STELLA", link: "/women/stella" },
        { name: "ECLIPSE", link: "/women/eclipse" },
      ],
      sections: ["The Vault", "Accessories", "Gift Card"],
    },
  };

  const current = data[activeTab];
  if (!mobileMenu) return null;
  return (
    <div className="bg-blue-600 text-white w-full p-4 h-full md:hidden transition-all duration-300">
      {/* Tabs */}
      <div className="flex gap-8 mb-4 text-lg font-bold">
        {["men", "women"].map((gender) => (
          <button
            key={gender}
            className={`${
              activeTab === gender ? "text-yellow-300" : "text-white"
            } uppercase tracking-wide`}
            onClick={() => setActiveTab(gender)}
          >
            {gender}
          </button>
        ))}
      </div>

      {/* Image */}
      <div className="mb-6">
        <img
          src={current.image}
          alt={`${activeTab} banner`}
          className="w-full max-h-72 object-cover rounded"
        />
      </div>

      {/* Sneakers */}
      <div className="mb-4">
        <h2 className="text-xl font-extrabold tracking-wide mb-2">SNEAKERS</h2>
        <ul className="space-y-2">
          {current.sneakers.map((sneaker) => (
            <li key={sneaker.name}>
              <Link
                to={sneaker.link}
                className="flex items-center gap-2 hover:underline"
              >
                <FaShoePrints />
                <span>{sneaker.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Other Sections */}
      <div className="space-y-3 font-extrabold tracking-wide">
        {current.sections.map((section) => (
          <Link
            key={section}
            to={`/${activeTab}/${section.toLowerCase().replace(/\s/g, "-")}`}
          >
            <div className="hover:underline">{section.toUpperCase()}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GenderTabMenu;
