
import React from "react";
import image from '../assets/workflow.png'

export default function workflow() {
  return (
    <div className="max-w-7xl  py-16 px-6 grid mx-auto grid-cols-1 md:grid-cols-2 ">
      {/* Left Section */}
      <div className="flex flex-col space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
            We have a simple, <br />
            yet bulletproof and <br />
            effective process.
          </h2>
          <p className="text-gray-700 mt-4 max-w-md">
            We meticulously target specific keywords your audience uses,
            ensuring every click brings highly relevant traffic directly to
            your site. This isn't guesswork.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-md mt-6">
            Contact Us
          </button>
        </div>

        <div className="mt-10">
          <img
            src={image}
            alt="Illustration"
            className="w-auto "
          />
        </div>
      </div>

      {/* Right Section: 2x2 Grid */}
      <div className="grid grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="relative bg-gray-50 p-6">
          <h4 className="font-bold text-lg">Initial quote</h4>
          <p className="text-gray-700 mt-2">
            We meticulously target specific keywords your audience uses,
            ensuring every click brings highly relevant traffic directly to
            your site. This isn't guesswork.
          </p>
          <span className="absolute md:top-38 top-80 md:right-4 right-0 md:text-[96px] text-6xl text-gray-300 font-bold">
            1
          </span>
        </div>

        {/* Card 2 */}
        <div className="relative bg-gray-50 p-6">
          <h4 className="font-bold text-lg">Project idea</h4>
          <p className="text-gray-700 mt-2">
            We meticulously target specific keywords your audience uses,
            ensuring every click brings highly relevant traffic directly to
            your site. This isn't guesswork.
          </p>
          <span className="absolute md:top-38 top-80 md:right-4 right-0 md:text-[96px] text-6xl text-gray-300 font-bold">
            2
          </span>
        </div>

        {/* Card 3 */}
        <div className="relative bg-gray-50 p-6">
          <h4 className="font-bold text-lg">Execution</h4>
          <p className="text-gray-700 mt-2">
            We meticulously target specific keywords your audience uses,
            ensuring every click brings highly relevant traffic directly to
            your site. This isn't guesswork.
          </p>
          <span className="absolute md:top-38 top-80 md:right-4 right-0 md:text-[96px] text-6xl text-gray-300 font-bold">
            3
          </span>
        </div>

        {/* Card 4 */}
        <div className="relative bg-gray-50 p-6">
          <h4 className="font-bold text-lg">Launch</h4>
          <p className="text-gray-700 mt-2">
            We meticulously target specific keywords your audience uses,
            ensuring every click brings highly relevant traffic directly to
            your site. This isn't guesswork.
          </p>
          <span className="absolute md:top-38 top-80 md:right-4 right-0 md:text-[96px] text-6xl text-gray-300 font-bold">
            4
          </span>
        </div>
      </div>
    </div>
  );
}
