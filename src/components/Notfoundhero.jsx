import React from 'react';
import notfound from '../assets/notfound.png'; // Replace with your actual image path
import { Link } from 'react-router-dom';

const Notfoundhero = () => {
  return (
    <section className="min-h-screen px-4 sm:px-8 py-16 flex items-center justify-center bg-white">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
        
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h1 className="text-7xl sm:text-9xl font-extrabold text-black">404</h1>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 text-black">Page not found</h2>
          <p className="mt-4 text-gray-600 text-lg sm:text-xl max-w-lg">
            Our passionate team crafts innovative solutions for complex business challenges.
            We partner for success through digital products, data-driven marketing, and expert problem-solving.
          </p>
          <Link
            to="/"
            className="mt-6 inline-block bg-black text-white text-lg sm:text-xl px-6 py-3 rounded-md hover:bg-gray-800 transition"
          >
            Go Back Home
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end pt-10">
          <img
            src={notfound}
            alt="404 Not Found"
            className=" lg:max-w-3xl sm:max-w-xl h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Notfoundhero;
