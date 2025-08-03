import React from 'react'
import speed from '../assets/speed.png'

export default function Speed()  {
  return (
    <div className="max-w-7xl bg-white  mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-black rounded-xl overflow-hidden">
        {/* Left Section */}
        <div className="text-white px-8 py-12 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let’s work together
          </h2>
          <p className="text-gray-300 max-w-md">
            We meticulously target specific keywords your audience uses,
            ensuring every click brings highly relevant traffic directly to
            your site. This isn't guesswork.
          </p>
          <button className="border text-white px-6 py-2 rounded-md hover:bg-orange-400 transition-all">
            Contact Us
          </button>
        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center  h-full ">
          <img
            src={speed}
            alt="Rocket Illustration"
            className=""
          />
        </div>
      </div>
    </div>
  )
};
