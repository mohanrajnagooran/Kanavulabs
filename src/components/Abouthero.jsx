import React from 'react'
import aboutImg from '../assets/abouthero.png'
import { Link } from 'react-router-dom';

const Abouthero = () => {
  return (
    <section className="pt-10 mb-3 bg-white  flex items-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-8">
        {/* Left Image */}
        <div>
          <img src={aboutImg} alt="About Us" className="w-full h-auto" />
        </div>

        {/* Right Content */}
        <div className='p-2'>
          <h1 className="text-3xl md:text-7xl font-bold mb-4 ">
            About our<br />
            amazing agency
          </h1>
          <p className="text-gray-600 mb-6 text-2xl">
            Our passionate team crafts innovative solutions for complex business
            challenges. We partner for success through digital products,
            data-driven marketing, and expert problem-solving.
          </p>

          <Link
            to="/contact-us"
            className="inline-block px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-orange-500 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>

  )
}

export default Abouthero
