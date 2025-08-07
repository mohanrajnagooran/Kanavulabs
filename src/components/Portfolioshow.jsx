import React from "react";
import workspeed1 from "../assets/workspeed1.png";
import workspeed2 from "../assets/workspeed2.png";

export default function Portfolioshow() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
      {/* Section Header */}
      <div className="text-center mb-12">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:mb-0 mb-5  bg-gray-100 rounded-b-xl">
        {/* Image */}
        <div className="w-full">
          <img
            src={workspeed1}
            alt="Case Study 1"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="w-full p-2">
          <p className="text-blue-600 font-bold mb-2 text-xl md:text-2xl">
            🏢 Company
          </p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            How we improved Company’s new website speed by 78%
          </h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            We meticulously target specific keywords your audience uses,
            ensuring every click brings highly relevant traffic directly to
            your site. This isn’t guesswork.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-100 rounded-b-xl">
        {/* Content */}
        <div className="w-full order-2 md:order-1 p-2">
          <p className="text-blue-600 font-bold mb-2 text-xl md:text-2xl">
            🏢 Company
          </p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            How we improved Company’s new website speed by 78%
          </h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            We meticulously target specific keywords your audience uses,
            ensuring every click brings highly relevant traffic directly to
            your site. This isn’t guesswork.
          </p>
        </div>

        {/* Image */}
        <div className="w-full order-1 md:order-2">
          <img
            src={workspeed2}
            alt="Case Study 2"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
