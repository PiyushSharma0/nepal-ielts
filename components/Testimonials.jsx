import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    text: "I never imagined I'd achieve a band score of 8, but thanks to Santosh sir's teaching style, it became possible. He focuses on all students, teaches in a friendly manner, and guides us through difficult problems, ensuring everyone excels in the IELTS exam. Plus, the unlimited mock tests prepared me thoroughly. I'm grateful for their support.",
    name: "Swagat Regmi",
    image: "/Swagat Regmi.jpeg",
  },
  {
    text: "Thanks to Online Class Nepal, I achieved an incredible band score of 8 in the IELTS exam! Honestly, I never thought I could reach this level, but their amazing online study materials and personalized guidance from the instructor made it possible. I'm really grateful to them for helping me succeed.",
    name: "Arpan KC",
    image: "/Arpan KC.png",
  },
  {
    text: "Thanks to Online Class Nepal, I achieved a Band 7.5 in my IELTS exam! Their unlimited mock tests and recorded videos were a huge help, especially when I couldn't attend live sessions. The teacher was brilliant and guided me through the writing section as I found writing tasks a bit difficult. I'm grateful for their support in my success.Definitely Online Class Nepal.",
    name: "Alex Shreshta",
    image: "/Alex Shrestha.jpeg"
  },
  {
    text: "Thanks to Online Class Nepal, achieving a score of 7.5 in my IELTS exam became a reality! Their exam booking service, coupled with the convenience of the exam book dating, made the entire process hassle-free. Additionally, the personalized guidance provided by my instructor played a crucial role in my success. I am grateful to Online Class Nepal for their exceptional services and dedicated assistance throughout my preparation journey!",
    name: "Arnab Singh",
    image: "/Arnab Singh.png",
  },
  {
    text: "With the assistance of Online Class Nepal, I achieved a score of 7.5.  Despite struggling with weak writing skills, Santosh sir provided continuous guidance throughout the sessions. Through group division and speaking practice sessions, I was able to improve significantly and attain a score of 7.5.",
    name: "Pranil Maharjan",
    image: "/Pranil Maharjan.jpeg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
  };

  const getTestimonialImage = (indexOffset) => {
    const index =
      (currentIndex + indexOffset + testimonials.length) % testimonials.length;
    return testimonials[index].image;
  };

  const getTestimonialName = (indexOffset) => {
    const index =
      (currentIndex + indexOffset + testimonials.length) % testimonials.length;
    return testimonials[index].name;
  };

  return (
    <section className="bg-[#E6F0FF] py-12 h-[560px]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-black ">
          Testimonials
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-justify px-8 md:px-24">
              <div className="relative mb-4 text-xl md:text-2xl">
                <span className="absolute left-0 -top-2 text-blue-500 text-4xl md:text-8xl">
                  ❝
                </span>
                <p className="inline-block text-base md:text-3xl mx-6 md:mx-20 text-black">{testimonial.text}</p>
                <span className="absolute right-0 -top-2 text-blue-500 text-4xl md:text-8xl">
                  ❞
                </span>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex justify-center items-center gap-3 md:mt-4 space-x-2">
          <div className="relative w-16 h-16">
            <Image
              src={getTestimonialImage(-2)}
              alt={getTestimonialName(-2)}
              width={64}
              height={64}
              className="rounded-full"
            />
          </div>
          <div className="relative w-24 h-24">
            <Image
              src={getTestimonialImage(-1)}
              alt={getTestimonialName(-1)}
              width={96}
              height={96}
              className="rounded-full"
            />
          </div>
          <div className="relative w-32 h-32">
            <Image
              src={getTestimonialImage(0)}
              alt={getTestimonialName(0)}
              width={128}
              height={128}
              className="rounded-full p-2"
            />
            <div
              className="absolute hidden md:block inset-0 rounded-full border-4 border-[#1273EB]"
              style={{
                clipPath:
                  "polygon(50% 100%, 0% 100%, 0% 0%, 100% 0%, 100% 60%, 50% 50%)",
                padding: "8px",
              }}
            />
            <div
              className="absolute md:hidden inset-0 rounded-full left-[2px] top-[2px] w-[86px] h-[86px] border-4 border-[#1273EB]"
            />
            <div className="relative inset-x-0 bottom-0 text-center md:my-4">
              <p className="font-semibold text-[13px] md:text-lg text-[#1E1F4B]">{getTestimonialName(0)}</p>
            </div>
          </div>
          <div className="relative w-24 h-24">
            <Image
              src={getTestimonialImage(1)}
              alt={getTestimonialName(1)}
              width={96}
              height={96}
              className="rounded-full"
            />
          </div>
          <div className="relative w-16 h-16">
            <Image
              src={getTestimonialImage(2)}
              alt={getTestimonialName(2)}
              width={64}
              height={64}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;