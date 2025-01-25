import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import Head from "next/head";

const HomePage = () => {
  // State to control the visibility of the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Close modal when clicking outside the modal content
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  return (
    <>
      <Head>
        <title>Online IELTS & PTE Courses | Online Class Nepal</title>
        <meta
          name="description"
          content="Master IELTS and PTE exams with tailored online classes at Online Class Nepal. Expert instructors, personalized support, and proven strategies for your journey to success."
        />
      </Head>
      <section className="bg-[#E6F0FF] w-full mt-28 md:mt-0">
        <div className="container mx-auto px-6 md:px-40 flex flex-col lg:flex-row items-center justify-center relative">
          <div className="lg:w-1/2 text-left -mt-28 md:mt-0 lg:-mt-52">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 text-black">
              YOUR JOURNEY TO <span className="text-[#1273EB]">SUCCESS</span> STARTS
              HERE
            </h1>
            <p className="text-gray-700 mb-6 hidden md:block">
              Master IELTS and PTE exams with our tailored online classes. Expert
              instructors, personalized support, and proven strategies await. Start
              your journey to success today.
            </p>
            <div className="md:flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4 hidden">
              <Link
                href="https://forms.gle/yscHLNqqaHzkpP7f6"
                className="w-full md:w-auto bg-[#1273EB] flex items-center justify-center text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
              >
                Apply Now{" "}
                <MdKeyboardDoubleArrowRight className="text-2xl ml-2" />
              </Link>
              {/* Updated Link to open modal */}
              <a
                href="#"
                onClick={openModal}
                className="flex items-center text-[#1273EB] justify-center"
              >
                <FaPlayCircle className="text-2xl mr-2" />
                <span className="font-semibold">Watch how we do it</span>
              </a>
            </div>
          </div>
          {/* Image and Rating Sections */}
          <div className="md:w-1/2 flex flex-col items-center relative md:hidden">
            <Image
              src="/girl1.png"
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
              src="/girl1.png"
              alt="Student Image"
              width={400}
              height={400}
              className="rounded-md mb-4"
            />
            <div className="bg-white w-[246px] h-[140px] flex rounded p-4 shadow-md absolute md:left-[calc(50%-320px)] left-[calc(50%-380px)] top-[55%]">
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
            href="https://forms.gle/yscHLNqqaHzkpP7f6"
            className="w-full md:hidden bg-[#1273EB] flex items-center justify-center text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
          >
            Apply Now <MdKeyboardDoubleArrowRight className="text-2xl ml-2" />
          </Link>
          {/* Updated Link to open modal */}
          <a
            href="#"
            onClick={openModal}
            className="flex items-center text-[#1273EB] justify-center md:justify-start md:hidden mt-4 mb-4"
          >
            <FaPlayCircle className="text-2xl mr-2" />
            <span className="font-semibold">Watch how we do it</span>
          </a>
        </div>

        {/* Modal Implementation */}
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4"
            onClick={handleOverlayClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-modal-title"
          >
            <div className="bg-white rounded-lg overflow-hidden relative w-full max-w-3xl mx-auto">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 text-3xl font-bold focus:outline-none"
                aria-label="Close Modal"
              >
                &times;
              </button>
              {/* Responsive Video Container */}
              <div className="w-full relative" style={{ paddingTop: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded"
                  src="https://www.youtube.com/embed/X9mYTkW0uyc"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default HomePage;