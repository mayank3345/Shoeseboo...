import React from "react";
import {
  FaTruck,
  FaMoneyBillWave,
  FaExchangeAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-yellow-500 text-white">
      {/* First Section - Never Shy Never Sorry */}
      <div className="py-12 px-4 md:px-8 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">NEVER SHY</h1>
            <h2 className="text-3xl md:text-4xl font-bold">NEVER SORRY</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-800 p-4 rounded-full mb-4">
                <FaTruck className="text-2xl text-yellow-300" />
              </div>
              <h3 className="text-xl font-bold mb-2">Free shipping</h3>
              <p className="text-gray-100">Free shipping for all orders.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-800 p-4 rounded-full mb-4">
                <FaMoneyBillWave className="text-2xl text-yellow-300" />
              </div>
              <h3 className="text-xl font-bold mb-2">Cash on delivery</h3>
              <p className="text-gray-100">Cash on delivery at Zero Cost.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-800 p-4 rounded-full mb-4">
                <FaExchangeAlt className="text-2xl text-yellow-300" />
              </div>
              <h3 className="text-xl font-bold mb-2">Easy return</h3>
              <p className="text-gray-100">Free 7 day Return and Exchange.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section - Contact Info */}
      <div className="py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Get in Touch */}
          <div>
            <h3 className="text-2xl font-bold mb-6">GET IN TOUCH</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaWhatsapp className="text-yellow-300 mt-1 mr-3" />
                <div>
                  <p className="font-semibold">Whatsapp:</p>
                  <p className="text-gray-400">+91 9670664781</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-800 mr-3">✉</span>
                <div>
                  <p className="font-semibold">Support:</p>
                  <p className="text-gray-800">adimayank55@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3">✉</span>
                <div>
                  <p className="font-semibold">Marketing & Partnership:</p>
                  <p className="text-gray-400">partnership@wearcornet.com</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3">👔</span>
                <div>
                  <p className="font-semibold">Careers:</p>
                  <p className="text-gray-400">Apply Here</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Reach Us */}
          <div>
            <h3 className="text-2xl font-bold mb-6">REACH US</h3>
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-yellow-300 mt-1 mr-3" />
              <p className="text-gray-400">
                58, 60 Feet Rd, KHB Colony, 6th Block,
                <br />
                Koramangala, Bengaluru,
                <br />
                Karnataka 560095
              </p>
            </div>
          </div>

          {/* Social & Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">SOCIAL</h3>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="text-gray-400 hover:text-yellow-300">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-300">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-300">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-300">
                <FaLinkedin className="text-2xl" />
              </a>
            </div>

            <h3 className="text-2xl font-bold mb-6">QUICK LINKS</h3>
            <ul className="space-y-2">
              {[
                "HOME",
                "STORE LOCATOR",
                "MY ACCOUNT",
                "RETURN AND EXCHANGE PORTAL",
                "CONTACT US",
                "CARE",
                "FAQ",
                "T&C",
                "RETURN & EXCHANGES POLICY",
                "PRIVACY POLICY",
                "REFUND POLICY",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-300 hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-2xl font-bold mb-6">ABOUT US</h3>
            <ul className="space-y-2">
              {["ABOUT US", "CRAFTSMANSHIP", "VAULT", "GARAGE"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-300 hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-6 px-4 md:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>© 2025, Gralis Marketing Private Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
