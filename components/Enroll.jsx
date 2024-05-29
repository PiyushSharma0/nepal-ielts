import React from "react";
import Image from "next/image";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Enroll = () => {
  return (
    <section className="relative w-full h-[464px]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.png"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Background Image"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-40">
        <hr className="border-white w-1/4 rounded lg:w-1/12 mb-4 border-2" />
        <h1 className="text-2xl px-4 md:text-3xl font-normal text-center mb-2">
          Expert Online IELTS & PTE Preparation Courses
        </h1>
        <p className="text-base px-4 md:text-lg mb-4 text-center max-w-5xl mt-4">
          Achieve your dream scores! Join our interactive online courses with
          experienced tutors, personalized feedback, and proven strategies.
          Boost your scores and achieve your language goals.
        </p>
        <button className="px-4 py-2 bg-[#1273EB] flex justify-evenly items-center gap-2 text-white text-base font-medium rounded shadow hover:bg-[#0f63c9] mt-4">
          Enroll Now <MdKeyboardDoubleArrowRight className="text-2xl" />
        </button>
      </div>
    </section>
  );
};

export default Enroll;
