// Testimonials.jsx
import React from "react";
import worldmap from '../assets/location.png'

export default function Testimonials() {
  return (
    <section className="relative px-6 md:px-16 py-20 bg-white overflow-hidden">
      {/* Title & Subtitle */}
      <div className=" mx-auto text-center mb-12 grid grid-cols-1">
        <h2 className="text-3xl font-bold mb-4">What our great customers say</h2>
        <p className="text-gray-600">
          We meticulously target specific keywords your audience uses, ensuring every click brings
          highly relevant traffic directly to your site. This isn't guesswork.
        </p>
      </div>

      {/* Background Map */}
      <div className="relative w-full md:h-[600px] h-[200px]">
        <img
          src={worldmap} // ← replace with your actual image path
          alt="World Map"
          className="w-full h-full object-cover opacity-100"
        />

        {/* Testimonial Cards Positioned on Map */}
        <div className="absolute top-[15%] left-[10%] md:w-[250px] w-[100px] bg-white p-4 rounded-xl shadow">
          <p className="md:text-sm text-[10px]  font-medium">“Great quality service delivered on time”</p>
        </div>

        <div className="absolute top-[10%] left-[60%] md:w-[250px] w-[100px] bg-white p-4 rounded-xl shadow">
          <p className="md:text-sm text-[10px] font-medium">“The best development agency”</p>
        </div>

        <div className="absolute  md:top-[60%] top-[65%] left-[20%] md:w-[250px] w-[100px] bg-white p-4 rounded-xl shadow">
          <p className="md:text-sm text-[10px] font-medium">“An amazing development agency”</p>
        </div>

        <div className="absolute top-[65%] left-[75%] md:w-[250px] w-[100px] bg-white p-4 rounded-xl shadow">
            
          <p className="md:text-sm text-[10px] font-medium">“Highly recommended them”</p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-12">
        <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-orange-400">Contact Us</button>
      </div>
    </section>
  );
}
