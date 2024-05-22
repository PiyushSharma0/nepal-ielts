import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SuccessStories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const stories = [
    { name: 'Bibika Joshi', score: '7.5', img: '/bibika.jpg' },
    { name: 'Sugriv Khadka', score: '7.0', img: '/sugriv.jpg' },
    { name: 'Pranil Maharjan', score: '6.5', img: '/pranil.jpg' },
    { name: 'Hikmat Poudel', score: '6.0', img: '/hikmat.jpg' },
    // Add more stories as needed
  ];

  return (
    <section className="bg-white w-full py-12">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-2xl font-bold text-center mb-8">OUR SUCCESS STORIES</h2>
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
                  <h3 className="text-center font-semibold text-lg">{story.name}</h3>
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
