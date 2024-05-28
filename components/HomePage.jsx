import Image from "next/image";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

const HomePage = () => {
  return (
    <section className="bg-[#E6F0FF] w-full">
      <div className="container mx-auto px-40 flex flex-col md:flex-row items-center justify-center relative">
        <div className="md:w-1/2 text-center md:text-left -mt-52">
          <h1 className="text-4xl font-bold mb-4">
            YOUR JOURNEY TO <span className="text-[#1273EB]">SUCCESS</span> STARTS HERE
          </h1>
          <p className="text-gray-700 mb-6">
            Master IELTS and PTE exams with our tailored online classes. Expert
            instructors, personalized support, and proven strategies await.
            Start your journey to success today.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link
              href="/apply"
              className="bg-[#1273EB] flex gap-1 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
            >
              Apply Now <MdKeyboardDoubleArrowRight className="text-2xl" />
            </Link>
            <Link
              href="/watch"
              className="flex gap-2 items-center text-[#1273EB]"
            >
              <FaPlayCircle className="text-2xl" />
              <span className="font-semibold">Watch how we do it</span>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col items-center">
          <Image
            src="/girl.png"
            alt="Student Image"
            width={400}
            height={400}
            className="rounded-md mb-4"
          />
          <div className="bg-white w-[246px] h-[140px] flex rounded p-4 shadow-md absolute left-[calc(50%-80px)] top-[55%]">
            <div className="w-[60%] flex flex-col items-center justify-center space-y-2">
              <div className="text-5xl font-extrabold text-[#4285F4]">4.8</div>
              <div className="relative text-2xl">
                <div className="text-gray-300">★★★★★</div>
                <div
                  className="absolute top-0 left-0 overflow-hidden text-yellow-400"
                  style={{ width: "92%" }}
                >
                  ★★★★★
                </div>
              </div>
            </div>
            <div className="w-[40%] flex flex-col items-center justify-center space-y-1">
              <div className="text-[#6A6A6A] font-semibold text-2xl">Google</div>
              <div className="text-[#6A6A6A] text-xs">Average Rating</div>
              <FcGoogle className="text-4xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;