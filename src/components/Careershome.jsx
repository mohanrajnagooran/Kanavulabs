import React, { useEffect } from 'react';
import jobs from '../assets/jobs.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Careershome = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: false, mirror: true });
  }, []);

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Text Section */}
        <div
          className="text-center justify-center items-center"
          data-aos="fade-up"
        >
          <h1 className="text-4xl lg:text-6xl font-bold max-w-3xl mx-auto mb-5 p-2">
            Join our team of talented innovators
          </h1>
          <p className="max-w-3xl mx-auto text-gray-700">
            The team's clear communication and transparent process made
            development effortless. We're thrilled with the results—our new app
            not only looks great but is already delivering measurable impact.
          </p>
          <button className="bg-black text-white text-lg sm:text-xl px-10 py-3 mt-6 rounded-md hover:bg-orange-500 hover:scale-105 transition-transform duration-300">
            Browse open positions
          </button>
        </div>

        {/* Image Section */}
        <div className="mt-10" data-aos="zoom-in" data-aos-delay="200">
          <img
            src={jobs}
            alt="Careers"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Careershome;
