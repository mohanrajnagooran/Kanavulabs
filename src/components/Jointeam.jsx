import React from 'react'
import jointeam from '../assets/jointeam.png'
import { Link } from 'react-router-dom'

const Jointeam = () => {
  return (
    <section className="bg-[#0F0F0F] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left Image */}
        <div className="flex justify-center md:justify-end p-6 md:p-12">
          <img
            src={jointeam}
            alt="Handshake illustration"
            className="w-full max-w-md md:max-w-lg object-contain"
          />
        </div>

        {/* Right Text */}
        <div className="text-center md:text-left px-6 md:px-10 py-10 md:py-20 space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Ready to start <br className="hidden sm:inline" />
            working together <br className="hidden sm:inline" />
            with our team?
          </h2>
          <Link
            to="/contact-us"
            className="inline-block px-6 py-3 bg-black text-white border border-white font-medium rounded-md hover:bg-orange-400 hover:border-white transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Jointeam
