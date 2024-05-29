import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { GoHome, GoInfo } from "react-icons/go";
import { BsEnvelope } from "react-icons/bs";
import { LuQuote } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-[#E6F0FF] px-4 flex items-center justify-between lg:justify-evenly">
      <div className="flex items-center">
        <img src="OIN.png" alt="logo" className="w-20 md:w-32 m-0 p-0" />
        <img src="OPN.png" alt="logo" className="w-24 md:w-48 m-0 p-0" />
      </div>
      <nav className="hidden lg:flex space-x-8 text-gray-600 text-lg font-semibold">
        <Link href="#home">Home</Link>
        <Link href="#about">About Us</Link>
        <Link href="#message">Message From The CEO</Link>
        <Link href="#testimonials">Testimonials</Link>
        <Link
          href="#contact"
          className="bg-[#1273EB] text-white px-4 py-2 -mt-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Contact Us
        </Link>
      </nav>
      <div className="lg:hidden">
        <button onClick={toggleSidebar} className="text-2xl text-gray-600">
          <FaBars />
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 lg:hidden">
          <div className="fixed top-0 right-0 w-5/6 bg-white h-full z-50 shadow-lg">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <img src="OIN.png" alt="logo" className="w-24 m-0 p-0" />
                <img src="OPN.png" alt="logo" className="w-32 m-0 p-0" />
              </div>
              <button
                onClick={toggleSidebar}
                className="text-2xl text-gray-600"
              >
                <FaTimes />
              </button>
            </div>
            <nav className="flex flex-col space-y-6 mt-8 text-gray-600 text-lg font-semibold px-4">
              <Link
                href="#home"
                className="flex items-center space-x-2"
                onClick={toggleSidebar}
              >
                <GoHome className="text-2xl" />
                <span>Home</span>
              </Link>
              <Link
                href="#about"
                className="flex items-center space-x-2"
                onClick={toggleSidebar}
              >
                <GoInfo className="text-2xl" />
                <span>About Us</span>
              </Link>
              <Link
                href="#message"
                className="flex items-center space-x-2"
                onClick={toggleSidebar}
              >
                <BsEnvelope className="text-2xl" />
                <span>Message From The CEO</span>
              </Link>
              <Link
                href="#testimonials"
                className="flex items-center space-x-2"
                onClick={toggleSidebar}
              >
                <LuQuote className="text-2xl" />
                <span>Testimonials</span>
              </Link>
              <Link
                href="#contact"
                className="flex items-center space-x-2"
                onClick={toggleSidebar}
              >
                <IoCallOutline className="text-2xl" />
                <span>Contact Us</span>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
