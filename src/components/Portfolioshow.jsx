import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import workspeed1 from "../assets/workspeed1.png";
import workspeed2 from "../assets/workspeed2.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Portfolioshow() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      {/* Section Header */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Discover how we helped world-class companies in the past
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
          <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-orange-500 transition">
            Contact Us
          </button>
          <button className="border border-black text-black px-6 py-2 rounded-md hover:border-orange-500 hover:text-orange-500 transition">
            Our Portfolio
          </button>
        </div>
      </div>

      {/* Card 1 */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center bg-gray-100 rounded-xl overflow-hidden"
        data-aos="fade-up"
      >
        {/* Image with Link */}
        <div className="w-full">
          <Link to="/portfolio/project-1">
            <img
              src={workspeed1}
              alt="Case Study 1"
              className="w-full h-auto object-cover rounded-xl hover:scale-105 transition-transform duration-500 cursor-pointer"
            />
          </Link>
        </div>

        {/* Content */}
        <div className="w-full p-6">
          <p className="text-blue-600 font-bold mb-2 text-lg md:text-xl">
            🏢 Company
          </p>
          <h3 className="text-xl md:text-3xl font-bold mb-4">
            How we improved Company’s new website speed by 78%
          </h3>
          <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
            We meticulously target specific keywords your audience uses,
            ensuring every click brings highly relevant traffic directly to your
            site. This isn’t guesswork.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center bg-gray-100 rounded-xl mt-8 overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {/* Content */}
        <div className="w-full order-2 md:order-1 p-6">
          <p className="text-blue-600 font-bold mb-2 text-lg md:text-xl">
            🏢 Company
          </p>
          <h3 className="text-xl md:text-3xl font-bold mb-4">
            How we improved Company’s new website speed by 78%
          </h3>
          <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
            We meticulously target specific keywords your audience uses,
            ensuring every click brings highly relevant traffic directly to your
            site. This isn’t guesswork.
          </p>
        </div>

        {/* Image with Link */}
        <div className="w-full order-1 md:order-2">
          <Link to="/portfolio/project-2">
            <img
              src={workspeed2}
              alt="Case Study 2"
              className="w-full h-auto object-cover rounded-xl hover:scale-105 transition-transform duration-500 cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
