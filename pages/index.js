import Header from "@/components/Header";
import Footer from "@/components/Footer";

import React from 'react'

export default function index() {
  return (
    <div id="home" className="relative z-50 bg-[#E6F0FF]">
      <div className="absolute -z-50">
        <div className="bg-white">
          <div className="star-field">
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
          </div>
        </div>
        <div id="large-header" className="large-header hidden xl:block">
          <canvas id="demo-canvas"></canvas>
        </div>
      </div>
      <div className="bg-hero-pattern  bg-cover bg-no-repeat bg-center ">
        <Header />
        {/* <Navbar /> */}
        {/* <Hero /> */}
      </div>

      {/* <About /> */}
      {/* <Experience /> */}
      <div>
        {/* <Contact /> */}
      </div>

      {/* <Tech /> */}
      <div id="team">
        {/* <Works /> */}
      </div>
      {/* <Feedbacks /> */}
      {/* <div className='relative z-0'> */}
      {/* <StarsCanvas /> */}
      {/* </div> */}
      <Footer />
    </div >
  )
}
