import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 -right-2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow cursor-pointer z-10 border border-[#1273EB]"
      onClick={onClick}
    >
      <svg
        className="w-6 h-6 text-[#1273EB]"
        fill="none"
        stroke="#1273EB"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 -left-2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow cursor-pointer z-10 border border-[#1273EB]"
      onClick={onClick}
    >
      <svg
        className="w-6 h-6 text-[#1273EB]"
        fill="none"
        stroke="#1273EB"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
      </svg>
    </div>
  );
};

const SuccessStories = () => {
  const settings = {
    dots: false,  // Remove dots
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,  // Remove dots
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        }
      }
    ]
  };

  const stories = [
    { name: 'Swagat Regmi', score: '8.0', img: '/Swagat Regmi.jpeg' },
    { name: 'Arpan KC', score: '8.0', img: '/Arpan KC.png' },
    { name: 'Alex Shrestha', score: '7.5', img: '/Alex Shrestha.jpeg' },
    { name: 'Arnab Singh', score: '7.5', img: '/Arnab Singh.png' },
    { name: 'Pranil Maharjan', score: '7.5', img: '/Pranil Maharjan.jpeg' },
    { name: 'Bibita Joshi', score: '7.0', img: '/Bibita Joshi.png' },
    { name: 'Esther Magar', score: '7.0', img: '/Esther.jpg' },
    { name: 'Sugriv Khadka', score: '7.0', img: '/Sugriv Khadka.jpeg' },
    { name: 'Prahar Lamsal', score: '7.0', img: '/Prahar.jpeg' },
    { name: 'Helen Shrestha', score: '7.0', img: '/Helen Shrestha.png' },
  ];

  return (
    <section className="bg-white w-full py-12">
      <div className="max-w-6xl mx-auto px-8 relative">
        <h2 className="text-2xl font-bold text-center mb-8 text-black">OUR SUCCESS STORIES</h2>
        <Slider {...settings}>
          {stories.map((story, index) => (
            <div key={index} className="p-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Image 
                  src={story.img} 
                  alt={story.name} 
                  width={300} 
                  height={300} 
                  className="object-cover w-full"
                />
                <div className="p-4">
                  <h3 className="text-center font-semibold text-lg text-black">{story.name}</h3>
                  <p className="text-center text-[#1273EB] text-2xl font-bold">{story.score}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SuccessStories;
