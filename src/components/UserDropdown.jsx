import React from "react";
import { Link } from "react-router-dom";

const UserDropdown = ({ open }) => {
  if (!open) return null;

  return (
    <div className="absolute right-0 top-full mt-2 w-64 bg-white shadow-lg border rounded-lg  text-sm">
      <div className="p-4">
        <h2 className="font-bold text-black mb-1">Welcome</h2>
        <p className="text-gray-600 text-sm">
          To access account and manage orders
        </p>
        <Link to="/login">
          <button className="mt-3 w-full bg-yellow-300 text-black font-bold py-2 rounded shadow hover:bg-yellow-400 transition">
            Login / Signup
          </button>
        </Link>
      </div>

      <hr className="border-t my-2" />

      <ul className="px-4 py-2 space-y-3 font-semibold text-gray-800">
        <li>
          <Link to="/track-order" className="hover:text-black block transition">
            Track your Order
          </Link>
        </li>
        <li>
          <Link
            to="/store-locator"
            className="hover:text-black block transition"
          >
            Store Locator
          </Link>
        </li>
        <li>
          <Link to="/returns" className="hover:text-black block transition">
            Returns and Exchange
          </Link>
        </li>
        <li>
          <Link to="/garage" className="hover:text-black block transition">
            The Garage
          </Link>
        </li>
        <li>
          <Link to="/care" className="hover:text-black block transition">
            Care
          </Link>
        </li>
        <li>
          <Link to="/faq" className="hover:text-black block transition">
            FAQ
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserDropdown;
