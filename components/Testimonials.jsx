import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    text: "With the assistance of Online Class Nepal, I achieved a score of 7.5. Despite struggling with weak writing skills, Santosh sir provided continuous guidance throughout the sessions. Through group division and speaking practice sessions, I was able to improve significantly and attain a score of 7.5",
    name: "Bibita Joshi",
    position: "Founder of Varibo",
    image: "/Bibita Joshi.png", // Replace with the path to the testimonial image
  },
  {
    text: "With the assistance of Online Class Nepal, I achieved a score of 7.5. Despite struggling with weak writing skills, Santosh sir provided continuous guidance throughout the sessions. Through group division and speaking practice sessions, I was able to improve significantly and attain a score of 7.5",
    name: "Arpan KC",
    position: "Founder of Varibo",
    image: "/Arpan KC.png", // Replace with the path to the testimonial image
  },
  {
    text: "With the assistance of Online Class Nepal, I achieved a score of 7.5. Despite struggling with weak writing skills, Santosh sir provided continuous guidance throughout the sessions. Through group division and speaking practice sessions, I was able to improve significantly and attain a score of 7.5",
    name: "Arnab Singh",
    position: "Founder of Varibo",
    image: "/Arnab Singh.png", // Replace with the path to the testimonial image
  },
  {
    text: "With the assistance of Online Class Nepal, I achieved a score of 7.5. Despite struggling with weak writing skills, Santosh sir provided continuous guidance throughout the sessions. Through group division and speaking practice sessions, I was able to improve significantly and attain a score of 7.5",
    name: "Alex Shreshta",
    position: "Founder of Varibo",
    image: "/Alex Shrestha.jpeg", // Replace with the path to the testimonial image
  },
  {
    text: "With the assistance of Online Class Nepal, I achieved a score of 7.5. Despite struggling with weak writing skills, Santosh sir provided continuous guidance throughout the sessions. Through group division and speaking practice sessions, I was able to improve significantly and attain a score of 7.5",
    name: "Swagat Regmi",
    position: "Founder of Varibo",
    image: "/Swagat Regmi.jpeg", // Replace with the path to the testimonial image
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
    autoplaySpeed: 2500,
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
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          TESTIMONIALS
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center px-24">
              <div className="relative mb-4 text-xl md:text-2xl">
                <span className="absolute left-0 -top-2 text-blue-500 text-8xl">
                  ❝
                </span>
                <p className="inline-block mx-10">{testimonial.text}</p>
                <span className="absolute right-0 -top-2 text-blue-500 text-8xl">
                  ❞
                </span>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex justify-center mt-8 space-x-4">
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
              className="rounded-full"
              style={{ padding: "8px" }} // Add padding
            />
            <div
              className="absolute inset-0 rounded-full border-4 border-blue-500"
              style={{
                clipPath:
                  "polygon(50% 100%, 0% 100%, 0% 0%, 100% 0%, 100% 75%, 50% 75%)",
                padding: "8px" // Add padding
              }}
            />
            <div className="relative inset-x-0 bottom-0 text-center my-4">
              <p className="font-semibold text-lg">{getTestimonialName(0)}</p>
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
