import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const Stats = () => {
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    setStartCounting(true);
  }, []);

  return (
    <section className="bg-[#E6F0FF] py-16">
      <div className="flex flex-col items-center text-center mb-12">
        <FaArrowTrendUp className="text-3xl md:text-5xl text-[#1273EB] mb-4" />
        <h1 className="text-2xl md:text-3xl text-black font-semibold mb-2">
          OUR IMPACTS IN NUMBERS
        </h1>
        <p className="text-lg text-gray-400 px-3">
          Everything you need to convert, engage, and retain more users.
        </p>
      </div>
      <div className="grid grid-cols-2 justify-center items-center lg:grid-cols-4 gap-8 mx-auto my-auto px-4 max-w-6xl">
        <div className="bg-white p-8 rounded shadow text-center">
          <h2 className="text-3xl md:text-4xl font-semibold md:font-bold text-[#1273EB] mb-2 py-[10px] md:py-4">
            {startCounting && <CountUp start={0} end={500} duration={2} />}+
          </h2>
          <p className="text-lg text-black">Students</p>
        </div>
        <div className="bg-white p-8 rounded shadow text-center">
          <h2 className="text-3xl md:text-4xl font-semibold md:font-bold text-[#1273EB] mb-2 md:py-4">
            {startCounting && <CountUp start={0} end={7} duration={2} />}+
          </h2>
          <p className="text-md md:text-xl text-black">IELTS Band Achievers</p>
        </div>
        <div className="bg-white p-8 rounded shadow text-center">
          <h2 className="text-3xl md:text-4xl font-semibold md:font-bold text-[#1273EB] mb-2">
            {startCounting && <CountUp start={0} end={95} duration={2} />}%
          </h2>
          <p className="text-md md:text-xl text-black">1st Attempt Success Rate</p>
        </div>
        <div className="bg-white p-8 rounded shadow text-center">
          <h2 className="text-3xl md:text-4xl font-semibold md:font-bold text-[#1273EB] mb-2 py-[10px] md:py-4">
            {startCounting && (
              <CountUp start={0} end={4.8} decimals={1} duration={2} />
            )}
          </h2>
          <p className="text-lg text-black">Google Rating</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
