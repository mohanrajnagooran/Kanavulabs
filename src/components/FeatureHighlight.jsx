import React from "react";
import remoteWork from "../assets/careers1.png"; // your image path

const FeatureHighlight = () => {
  return (
    <section className="max-w-7xl  mx-auto lg:mb-10 lg:mt-10 mb-5">
      <div className="grid md:grid-cols-2 gap-12 items-center bg-gray-50">
        {/* Left: Text */}
        <div className="p-10">
          <h3 className="text-2xl md:text-4xl font-bold mb-4">100% Remote</h3>
          <p className="text-gray-700 mb-4">
            We meticulously target specific keywords your audience uses,
            ensuring every click brings highly relevant traffic directly to
            your site. This isn’t guesswork; it's a measurable strategy.
          </p>
          <p className="text-gray-700">
            Our remote-first culture supports productivity, flexibility, and
            better work-life balance. We value results, not office hours.
          </p>
        </div>

        {/* Right: Image */}
        <div className="w-full">
          <img
            src={remoteWork}
            alt="Remote Work"
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-10">
        <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-orange-500 transition">
          Browse open positions
        </button>
      </div>
    </section>
  );
};

export default FeatureHighlight;