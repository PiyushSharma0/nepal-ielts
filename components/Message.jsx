import React from 'react';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';

const Message = () => {
  return (
    <section className="bg-[#E6F0FF] w-full py-12">
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto p-8 rounded-lg gap-4">
        <div className="flex-1 mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Let’s Hear From Our CEO</h2>
          <p className="text-gray-700 mb-4">
            Welcome to Online Class Nepal! I'm delighted to lead a dedicated and expert team who are committed to your success. With our flexible class timings, including early morning and evening sessions, along with unlimited mock tests and free recorded videos, you'll have the freedom to learn at your own pace.
          </p>
          <p className="text-lg font-semibold text-gray-900">Santosh Magar</p>
          <p className="text-gray-700 mb-6">CEO, Online Class Nepal</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 inline-flex items-center">
            <span>Watch Video</span>
            <FaPlay className="ml-2" />
          </button>
        </div>
        <div className="flex-1 relative">
          <Image 
            src="/pic2.jpeg" 
            alt="CEO Santosh Magar" 
            width={500} 
            height={400} 
            className="rounded-lg"
          />
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2">
            <div className="w-14 h-14 bg-white border-4 border-[#E6F0FF] rounded-full flex items-center justify-center">
              <FaPlay className="text-[#1273EB] w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
