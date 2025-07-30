import React from 'react'
import jointeam from '../assets/jointeam.png'
import { Link } from 'react-router-dom'

const Jointeam = () => {
  return (
    <section className="bg-[#0F0F0F] text-white  ">
      <div className="  grid md:grid-cols-2 items-center ">
        {/* Left Image */}
        <div className="flex justify-between mt-15">
          <img
            src={jointeam}
            alt="Handshake illustration"
            className="w-full"
          />
        </div>

        {/* Right Text */}
        <div className="text-center md:text-left space-y-8 py-20 px-40">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Ready to start <br />
            working together <br />
            with our team?
          </h2>
          <Link
                to="/contact-us"
                className="inline-block px-6 py-3 bg-black text-white border border-white font-medium rounded-md hover:text-orange-400 hover:border-orange-400 transition"
                >
                Contact Us
            </Link>
        </div>
      </div>
    </section>
  )
}

export default Jointeam