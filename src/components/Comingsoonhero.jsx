import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import comingsoon from "../assets/comingsoon.png";

const Comingsoonhero = () => {
  return (
    <section className="min-h-screen px-4 sm:px-8 py-16 flex items-center justify-center bg-white">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 text-black">
        {/* Right image */}
        <div className="w-full md:w-1/2 text-center">
          <img
            src={comingsoon}
            alt="Coming Soon Illustration"
            className="w-full h-auto max-w-md mx-auto"
          />
        </div>

        {/* Left section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-6">Coming Soon!</h1>
          <p className="text-gray-700 mb-6 text-xl">
            Our passionate team crafts innovative solutions for complex business
            challenges. We partner for success through digital products,
            data-driven marketing, and expert problem-solving.
          </p>

          {/* Email Subscribe */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:w-80 px-4 py-3 border border-gray-400 rounded-md focus:outline-none"
            />
            <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-orange-500 transition font-semibold">
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <div className="mt-4">
            <p className="font-semibold mb-3">Follow us on social media</p>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="bg-black text-white p-3 rounded hover:bg-orange-500">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-black text-white p-3 rounded hover:bg-orange-500">
                <FaXTwitter />
              </a>
              <a href="#" className="bg-black text-white p-3 rounded hover:bg-orange-500">
                <FaInstagram />
              </a>
              <a href="#" className="bg-black text-white p-3 rounded hover:bg-orange-500">
                <FaLinkedinIn />
              </a>
              <a href="#" className="bg-black text-white p-3 rounded hover:bg-orange-500">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comingsoonhero;
