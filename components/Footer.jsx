import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { SlSocialInstagram } from "react-icons/sl";
import Image from 'next/image'


import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center bg-white py-8">
      <div className="md:w-2/3 w-full px-4 text-center">
        <div className="flex flex-col items-center">
          <hr className="border-gray-400 w-full mb-4 xl:w-1/3 md:border-white" />
          <div className="flex flex-col items-center mb-2">
            <Image
              src="/logo.png"
              alt="logo"
              width={256}
              height={128}
              className="w-64 xl:w-80 object-contain block mb-2"
            />
            <div className="flex flex-row items-center -mb-2">
              <Image
                src="/OIN.png"
                alt="logo"
                width={128}
                height={128}
                className="w-20 xl:w-28 object-contain block"
              />
              <Image
                src="/OPN.png"
                alt="logo"
                width={128}
                height={128}
                className="w-24 xl:w-40 object-contain block"
              />
            </div>
          </div>
          <p className="text-gray-600 mb-8 text-sm lg:text-lg">
            A place where success is not just a destination but a fulfilling and
            flexible learning experience tailored to your unique schedule and
            aspirations.
          </p>
          <div className="lg:flex flex-row space-x-4 mb-4 justify-center items-center hidden">
            <Link
              href="#home"
              className="text-gray-600 hover:text-gray-800 uppercase"
            >
              Home
            </Link>
            <span className="text-[#1273EB]" style={{ fontSize: "24px" }}>
              •
            </span>
            <Link
              href="#about"
              className="text-gray-600 hover:text-gray-800 uppercase"
            >
              About Us
            </Link>
            <span className="text-[#1273EB]" style={{ fontSize: "24px" }}>
              •
            </span>
            <Link
              href="#message"
              className="text-gray-600 hover:text-gray-800 uppercase"
            >
              Message from the CEO
            </Link>
            <span className="text-[#1273EB]" style={{ fontSize: "24px" }}>
              •
            </span>
            <Link
              href="#testimonials"
              className="text-gray-600 hover:text-gray-800 uppercase"
            >
              Testimonials
            </Link>
            <span className="text-[#1273EB]" style={{ fontSize: "24px" }}>
              •
            </span>
            <Link
              href="#contact"
              className="text-gray-600 hover:text-gray-800 uppercase"
            >
              Contact Us
            </Link>
          </div>
          <hr className="border-gray-400 w-full mb-4 xl:w-1/3" />
          <div className="flex flex-row space-x-4 mb-8">
            <Link href="tel:+977 9802335996" target="_blank">
              <IoCall className="lg:text-5xl sm:text-3xl text-2xl text-blue-600 hover:text-red-600 hover:cursor-pointer" />
            </Link>
            <Link href="mailto:info@onlineclassnepal.com.np" target="_blank">
              <MdEmail className="lg:text-5xl sm:text-3xl text-2xl text-blue-600 hover:text-red-600 hover:cursor-pointer" />
            </Link>
            <Link href="https://www.facebook.com/onlineieltsnp" target="_blank">
              <FaFacebook className="lg:text-5xl sm:text-3xl text-2xl text-blue-600 hover:text-red-600 hover:cursor-pointer" />
            </Link>
            <Link
              href="https://www.instagram.com/onlineptenepal/"
              target="_blank"
            >
              <SlSocialInstagram className="lg:text-5xl sm:text-3xl text-2xl bg-white text-blue-600 hover:text-red-600 hover:cursor-pointer" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/online-ielts-pte-nepal/?viewAsMember=true"
              target="_blank"
            >
              <FaLinkedin className="lg:text-5xl sm:text-3xl  text-2xl bg-white text-blue-600 hover:text-red-600 hover:cursor-pointer" />
            </Link>
          </div>
          <p className="text-gray-400 text-xs md:text-sm">
            Copyright © 2024 Online Class Nepal. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
