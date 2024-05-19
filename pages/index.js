import Header from "@/components/Header";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

import React from "react";

export default function index() {
  return (
    <div id="home" className="relative z-50 bg-[#E6F0FF]">
      <div className="bg-hero-pattern  bg-cover bg-no-repeat bg-center ">
        <Header />
        {/* <Navbar /> */}
        {/* <Hero /> */}
      </div>

      <Stats />

      {/* <About /> */}
      {/* <Experience /> */}
      <div>{/* <Contact /> */}</div>

      {/* <Tech /> */}
      <div id="team">{/* <Works /> */}</div>
      {/* <Feedbacks /> */}
      {/* <div className='relative z-0'> */}
      {/* <StarsCanvas /> */}
      {/* </div> */}
      <Footer />
    </div>
  );
}
