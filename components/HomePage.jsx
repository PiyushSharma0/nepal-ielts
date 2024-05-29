import Image from "next/image";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

const HomePage = () => {
  return (
    <section className="bg-[#E6F0FF] w-full mt-28 md:mt-0">
      <div className="container mx-auto px-6 md:px-40 flex flex-col md:flex-row items-center justify-center relative">
        <div className="md:w-1/2 text-left -mt-28 md:-mt-52">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-black">
            YOUR JOURNEY TO <span className="text-[#1273EB]">SUCCESS</span>{" "}
            STARTS HERE
          </h1>
          <p className="text-gray-700 mb-6 hidden md:block">
            Master IELTS and PTE exams with our tailored online classes. Expert
            instructors, personalized support, and proven strategies await.
            Start your journey to success today.
          </p>
          <div className="md:flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4 hidden">
            <Link
              href="/apply"
              className="w-full md:w-auto bg-[#1273EB] flex items-center justify-center text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
            >
              Apply Now <MdKeyboardDoubleArrowRight className="text-2xl ml-2" />
            </Link>
            <Link
              href="/watch"
              className="flex items-center text-[#1273EB] justify-center md:justify-start"
            >
              <FaPlayCircle className="text-2xl mr-2" />
              <span className="font-semibold">Watch how we do it</span>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col items-center relative md:hidden">
          <Image
            src="/girl.png"
            alt="Student Image"
            width={300}
            height={300}
            className="rounded-md mb-4"
          />
          <div className="bg-white w-[170px] h-[90px] flex rounded px-2 shadow-md absolute left-[calc(50%-185px)] top-[55%]">
            <div className="w-[60%] flex flex-col items-center justify-center space-y-2">
              <div className="text-2xl font-extrabold text-[#4285F4]">4.8</div>
              <div className="relative text-sm">
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
              <div className="text-[#6A6A6A] font-semibold text-lg md:text-2xl">
                Google
              </div>
              <div className="text-[#6A6A6A] text-[7px] md:text-xs">Average Rating</div>
              <FcGoogle className="text-lg md:text-4xl" />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:flex flex-col hidden items-center relative">
          <Image
            src="/girl.png"
            alt="Student Image"
            width={400}
            height={400}
            className="rounded-md mb-4"
          />
          <div className="bg-white w-[246px] h-[140px] flex rounded p-4 shadow-md absolute left-[calc(50%-380px)] top-[55%]">
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
              <div className="text-[#6A6A6A] font-semibold text-2xl">
                Google
              </div>
              <div className="text-[#6A6A6A] text-xs">Average Rating</div>
              <FcGoogle className="text-4xl" />
            </div>
          </div>
        </div>
        <p className="text-gray-700 mb-6 md:hidden">
          Master IELTS and PTE exams with our tailored online classes. Expert
          instructors, personalized support, and proven strategies await. Start
          your journey to success today.
        </p>
        <Link
          href="/apply"
          className="w-full md:hidden bg-[#1273EB] flex items-center justify-center text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
        >
          Apply Now <MdKeyboardDoubleArrowRight className="text-2xl ml-2" />
        </Link>
        <Link
          href="/watch"
          className="flex items-center text-[#1273EB] justify-center md:justify-start md:hidden mt-4 mb-4"
        >
          <FaPlayCircle className="text-2xl mr-2" />
          <span className="font-semibold">Watch how we do it</span>
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
