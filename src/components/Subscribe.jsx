import React, { useEffect } from 'react';
import { EnvelopeIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import AOS from "aos";
import "aos/dist/aos.css";

const Subscribe = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: false, mirror: true });
  }, []);

  return (
    <section className="bg-black py-16 px-4 md:mt-20 mt-0 mb-20">
      <div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 text-white px-6"
        data-aos="fade-up"
      >
        {/* Icon + Text */}
        <div
          className="flex items-start md:items-center gap-4"
          data-aos="fade-right"
        >
          <EnvelopeIcon className="w-20 h-20 text-white" />
          <h2 className="text-2xl md:text-4xl font-bold leading-snug">
            Subscribe to our <br className="md:hidden" /> newsletter
          </h2>
        </div>

        {/* Email Form */}
        <div
          className="w-full md:w-auto flex flex-col space-y-8 mt-8 md:mt-0"
          data-aos="fade-left"
        >
          <div className="flex flex-col sm:flex-row gap-4 border bg-white p-2 rounded-md shadow-lg">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:w-72 px-4 py-3 rounded-md text-black placeholder:text-lg focus:outline-none"
            />
            <button className="bg-black text-white text-lg font-semibold px-8 py-3 rounded-md border border-white hover:bg-orange-400 transition">
              Subscribe
            </button>
          </div>
          <div className="flex items-start text-gray-300 text-base">
            <CheckCircleIcon className="w-6 h-6 mr-2 text-green-400 mt-1" />
            <span>Don’t worry, we won’t send you spam</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
