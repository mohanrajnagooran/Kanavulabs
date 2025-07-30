// PortfolioShowcase.jsx
import React from "react";
import workspeed1 from '../assets/workspeed1.png';
import workspeed2 from '../assets/workspeed2.png';

export default function Portfolioshow() {
  return (
    <section className="p-2">
      {/* Section Header */}
      <div className="text-center mb-16 ">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Discover how we had helped world class companies in the past
        </h2>
        <div className="flex justify-center gap-4 mt-4">
          <button className="bg-black text-white px-5 py-2 rounded-md hover:bg-orange-400">
            Contact Us
          </button>
          <button className="border border-black text-black px-5 py-2 rounded-md hover:border-orange-400 hover:text-orange-500">
            Our Portfolio
          </button>
        </div>
      </div>

      {/* Card 1 */}
      <div className="grid md:grid-cols-2 gap-6  items-center shadow">
        {/* Left: Content */}
          {/* Right: Image */}
        <img
          src={workspeed1} // replace with your path
          alt="Case Study 1"
          className="w-full  object-cover "
        />
        <div className="p-6 md:p-10">
          <p className="text-blue-600 font-bold mb-2 text-4xl">🏢 Company</p>
          <h3 className="text-4xl font-bold mb-4 w-96">
            How we improved Company’s new website speed by 78%
          </h3>
          <p className="text-gray-700 text-base leading-relaxed w-auto">
            We meticulously target specific keywords your audience uses,
            ensuring every click brings highly relevant traffic directly to
            your site. This isn’t guesswork.
          </p>
        </div>

      
      </div>

      {/* Card 2 */}
      <div className="grid md:grid-cols-2  items-center  shadow">
        {/* Left: Content */}
        <div className="p-6 md:p-10">
          <p className="text-blue-600 font-bold mb-2 text-4xl ">🏢 Company</p>
          <h3 className="text-4xl font-bold mb-4 w-96">
            How we improved Company’s new website speed by 78%
          </h3>
          <p className="text-gray-700 text-base leading-relaxed auto">
            We meticulously target specific keywords your audience uses,
            ensuring every click brings highly relevant traffic directly to
            your site. This isn’t guesswork.
          </p>
        </div>

        {/* Right: Image */}
        <img
          src={workspeed2} // replace with your path
          alt="Case Study 2"
          className="w-full h-full object-cover "
        />
      </div>
    </section>
  );
}
