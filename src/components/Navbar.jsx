// src/components/Navbar.jsx
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import CategoryDropDown from "./CategoryDropDown";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleSetOpen = () => {
    setOpen(!open);
  };
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-sm bg-white sm:text-xm">
      {/* Logo */}

      <div className="text-3xl font-bold tracking-wide">SHOESeboo...</div>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-8 font-semibold text-gray-800">
        <button
          onClick={handleSetOpen}
          className="flex items-center gap-1 cursor-pointer"
        >
          Men <ChevronDownIcon className="w-4 h-4" />
        </button>
        <button
          onClick={handleSetOpen}
          className="flex items-center gap-1 cursor-pointer"
        >
          Women <ChevronDownIcon className="w-4 h-4" />
        </button>
        <button className="flex items-center gap-1 cursor-pointer">
          About Us
        </button>
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-6">
        <UserIcon className="w-6 h-6 text-gray-700 cursor-pointer" />

        {/* Cart with Badge */}
        <div className="relative">
          <ShoppingBagIcon className="w-6 h-6 text-gray-700 cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            0
          </span>
        </div>
      </div>
      <CategoryDropDown open={open} />
    </nav>
  );
};

export default Navbar;
