import React from 'react';
import { EnvelopeIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

const Subscribe = () => {
  return (
    <section className="bg-black py-12 px-4 mb-50">
      <div className="max-w-7xl mx-auto flex px-6 flex-col md:flex-row items-start md:items-center justify-between gap-4 text-white ">
        
        {/* Icon + Text */}
        <div className="flex items-start md:items-center gap-4">
          <EnvelopeIcon className="w-24 h-24 text-white" />
          <h2 className="text-2xl pt-4 md:pt-2 md:text-4xl font-bold">
            Subscribe to our <br className="md:hidden" /> newsletter
          </h2>
        </div>

        {/* Email Form */}
        <div className="w-full md:w-auto flex flex-col space-y-8 mt-12">
          <div className="flex flex-col sm:flex-row gap-4 mb-6 border bg-white md:w-full  justify-between">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:w-72 px-4 py-3 rounded-md text-black placeholder:text-xl focus:outline-none"
            />
                <button className="bg-black text-white text-xl font-semibold px-10 py-3 rounded-md border hover:bg-orange-400 border-white">
                Subscribe
                </button>
          </div>
          <div className="flex items-start text-gray-300 text-xl">
            <CheckCircleIcon className="w-10 h-10 mr-2 text-green-400 mt-1" />
            <span className='pt-2'>Don’t worry we won’t send you spam</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscribe