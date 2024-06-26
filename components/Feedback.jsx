import React from "react";
import Image from "next/image";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

const Feedback = () => {
  return (
    <>
      <Head>
        <title>Student Testimonials & Updates | Online IELTS & PTE Courses</title>
        <meta
          name="description"
          content="Discover what our international students say about our IELTS & PTE preparation courses. Stay updated with our latest news and updates."
        />
      </Head>
      <section className="bg-white py-12 text-center">
        <div className="max-w-6xl mx-auto px-8">
          {/* Video Section */}
          <div className="mb-12">
            <h2 className="text-2xl lg:text-4xl font-semibold mb-4 text-black">
              What Our International Students Say
            </h2>
            <hr className="rounded border-2 border-[#1273EB] w-1/12 mb-4 mx-auto" />
            <div className="w-full max-w-4xl mx-auto">
              <div
                className="relative overflow-hidden"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  className="absolute top-6 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/LeYMumhIeBo?si=fKMu2SpmfZYnk9hl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Student Testimonial Video"
                  aria-label="Student Testimonial Video"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Updates Section */}
          <div className="-mb-6">
            <h3 className="text-2xl lg:text-4xl font-semibold mb-2 text-black">
              Stay Updated
            </h3>
            <div className="flex justify-center gap-2 mb-2">
              <div className="flex items-center">
                <img
                  src="/instagram-1-svgrepo-com.svg"
                  alt="Follow us on Instagram"
                  width="24"
                  height="24"
                />
                <p className="text-md mb-0 text-black">
                  &nbsp;onlineieltsptenepal
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 justify-center md:grid-cols-4">
              <div className="flex justify-center">
                <Image
                  src="/img1.png"
                  alt="IELTS Preparation Update 1"
                  width={500}
                  height={500}
                  className="w-full max-w-xs shadow-lg rounded-lg transition-transform duration-200 ease-in transform hover:scale-110"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/img2.png"
                  alt="IELTS Preparation Update 2"
                  width={500}
                  height={500}
                  className="w-full max-w-xs shadow-lg rounded-lg transition-transform duration-200 ease-in transform hover:scale-110"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/img3.png"
                  alt="IELTS Preparation Update 3"
                  width={500}
                  height={500}
                  className="w-full max-w-xs shadow-lg rounded-lg transition-transform duration-200 ease-in transform hover:scale-110"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/img4.png"
                  alt="IELTS Preparation Update 4"
                  width={500}
                  height={500}
                  className="w-full max-w-xs shadow-lg rounded-lg transition-transform duration-200 ease-in transform hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feedback;
