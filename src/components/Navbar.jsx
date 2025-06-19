import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import CategoryDropDown from "./CategoryDropDown";
import UserDropdown from "./UserDropdown";
import GenderTabMenu from "./GenderTabMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      {/* Nav Bar */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-sm bg-white sm:text-xs z-50 relative">
        {/* Burger Icon */}
        <div className="md:hidden text-gray-800">
          <button onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Logo */}
        <div className="text-sm font-extrabold sm:text-xl">SHOESeboo...</div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 font-semibold text-gray-800">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1 cursor-pointer"
          >
            Men <ChevronDownIcon className="w-4 h-4" />
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1 cursor-pointer"
          >
            Women <ChevronDownIcon className="w-4 h-4" />
          </button>
          <button className="cursor-pointer">About Us</button>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <div className="relative">
            <button onClick={() => setUserOpen(!userOpen)}>
              <UserIcon className="w-6 h-6 text-gray-700" />
            </button>
            <UserDropdown open={userOpen} />
          </div>
          <div className="relative">
            <ShoppingBagIcon className="w-6 h-6 text-gray-700 cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </div>
        </div>

        <CategoryDropDown open={open} />
      </nav>

      {/* GenderTabMenu placed OUTSIDE the nav */}
      {mobileMenu && <GenderTabMenu mobileMenu={mobileMenu} />}
    </>
  );
};

export default Navbar;
