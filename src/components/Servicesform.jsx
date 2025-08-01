import React from 'react';

const Servicesform = () => {
  return (
    <section className="py-0 md:py-12 bg-white px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className='md:px-6'>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
            Fill the form to get a <br className="hidden sm:block" /> free consultation now
          </h2>
          <p className="text-gray-700 text-lg md:text-xl mb-6">
            Our passionate team crafts innovative solutions for complex business challenges.
            We partner for success through digital products.
          </p>

          <ul className="space-y-4 text-gray-800 text-base md:text-xl">
            <li className="flex items-start">
              <span className="text-orange-500 mr-2 text-xl">✓</span>
              <span>100% free consultation</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2 text-xl">✓</span>
              <span>No payment required</span>
            </li>
          </ul>
        </div>

        {/* Right Form */}
        <form className="space-y-6 w-full">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-lg font-medium mb-1">Full name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-800 text-lg rounded-md px-4 py-3"
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-1">Email address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-800 text-lg rounded-md px-4 py-3"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-lg font-medium mb-1">Phone number</label>
              <input
                type="tel"
                placeholder="Enter your phone"
                className="w-full border border-gray-800 text-lg rounded-md px-4 py-3"
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-1">Company</label>
              <input
                type="text"
                placeholder="Enter your company"
                className="w-full border border-gray-800 text-lg rounded-md px-4 py-3"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-lg font-medium mb-1">Role</label>
              <input
                type="text"
                placeholder="Enter your role"
                className="w-full border border-gray-800 text-lg rounded-md px-4 py-3"
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-1">Industry</label>
              <input
                type="text"
                placeholder="Enter your industry"
                className="w-full border border-gray-800 text-lg rounded-md px-4 py-3"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 text-lg rounded-md font-semibold hover:bg-orange-400 transition"
          >
            Book Free Consultation
          </button>
        </form>
      </div>
    </section>
  );
};

export default Servicesform;
