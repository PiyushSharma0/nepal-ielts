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
        <FaArrowTrendUp className="text-5xl text-[#1273EB] mb-4" />
        <h1 className="text-3xl text-black font-bold mb-2">Our Achievements</h1>
        <p className="text-lg text-gray-400">
          We are proud of our students and their success stories
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto px-4 max-w-6xl">
        <div className="bg-white p-8 rounded shadow text-center">
          <h2 className="text-4xl font-bold text-[#1273EB] mb-2">
            {startCounting && <CountUp start={0} end={500} duration={2} />}+
          </h2>
          <p className="text-lg text-gray-600">Students</p>
        </div>
        <div className="bg-white p-8 rounded shadow text-center">
          <h2 className="text-4xl font-bold text-[#1273EB] mb-2">
            {startCounting && <CountUp start={0} end={7} duration={2} />}+
          </h2>
          <p className="text-lg text-gray-600">IELTS Band Achievers</p>
        </div>
        <div className="bg-white p-8 rounded shadow text-center">
          <h2 className="text-4xl font-bold text-[#1273EB] mb-2">
            {startCounting && <CountUp start={0} end={95} duration={2} />}%
          </h2>
          <p className="text-lg text-gray-600">1st Attempt Success Rate</p>
        </div>
        <div className="bg-white p-8 rounded shadow text-center">
          <h2 className="text-4xl font-bold text-[#1273EB] mb-2">
            {startCounting && (
              <CountUp start={0} end={4.8} decimals={1} duration={2} />
            )}
          </h2>
          <p className="text-lg text-gray-600">Google Rating</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
