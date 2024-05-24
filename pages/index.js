import Header from "@/components/Header";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Message from "@/components/Message";
import Footer from "@/components/Footer";

import React from "react";
import SuccessStories from "@/components/SuccessStories";
import Enroll from "@/components/Enroll";
import Feedback from "@/components/Feedback";
import Testimonials from "@/components/Testimonials";

export default function index() {
  return (
    <div id="home" className="relative z-50 bg-[#E6F0FF]">
      <div className="bg-hero-pattern  bg-cover bg-no-repeat bg-center ">
        <Header />
        {/* <Navbar /> */}
        {/* <Hero /> */}
      </div>

      <About />
      <Stats />
      <SuccessStories />
      <Message />
      <Enroll />
      <Testimonials />
      <Feedback />
      <Footer />
    </div>
  );
}
