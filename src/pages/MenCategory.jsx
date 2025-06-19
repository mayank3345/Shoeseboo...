import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const MenCategory = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">SNEAKERS</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-600">MEN</h2>
          <div className="w-20 h-1 bg-black mx-auto mt-4"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="w-full md:w-1/4">
            <div className="sticky top-24">
              <h3 className="text-2xl font-bold mb-6">SNEAKERS</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/sneakers"
                    className="text-lg font-medium hover:underline"
                  >
                    VIEW ALL
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sneakers/aion"
                    className="text-lg font-medium hover:underline"
                  >
                    AION
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sneakers/alter"
                    className="text-lg font-medium hover:underline"
                  >
                    ALTER
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sneakers/x-lows"
                    className="text-lg font-medium hover:underline"
                  >
                    X LOWS
                  </Link>
                </li>
              </ul>

              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">BESTSELLER</h3>
                <div className="space-y-2">
                  {[1, 2].map((item) => (
                    <div key={item} className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gray-200"></div>
                      <div>
                        <p className="font-medium">Product Name {item}</p>
                        <p className="text-gray-600">₹5,999</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="group">
                  <div className="aspect-square bg-gray-100 mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gray-300 group-hover:opacity-90 transition-opacity"></div>
                  </div>
                  <h3 className="text-xl font-bold">Sneaker Model {item}</h3>
                  <p className="text-gray-600">₹6,999</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenCategory;
