import React from 'react'

const Servicesform = () => {
  return (
    <section className="py-15  bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className='mx-8'>
          <h2 className="text-4xl sm:text-4xl font-bold mb-6">
            Fill the form to get a free consultation now
          </h2>
          <p className="text-gray-700 text-xl mb-6">
            Our passionate team crafts innovative solutions for complex business challenges.
            We partner for success through digital products.
          </p>

          <ul className="space-y-4 text-gray-800">
            <li className="flex items-start">
              <span className="text-orange-500 text-xl mr-2">✓</span>
              <span className='text-xl'>100% free consultation</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 text-xl mr-2">✓</span>
              <span className='text-xl'>No payment required</span>
            </li>
          </ul>
        </div>

        {/* Right Form */}
        <form className="space-y-6 p-2">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xl font-medium mb-1">Full name</label>
              <input
                type="text"
                placeholder="Enter your name here"
                className="w-full  border-gray-800 border-2 text-xl rounded-md px-4 py-4"
              />
            </div>
            <div>
              <label className="block font-medium text-xl mb-1">Email address</label>
              <input
                type="email"
                placeholder="Enter your email here"
                className="w-full  border-gray-800 border-2 text-xl rounded-md px-4 py-4"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-xl mb-1">Phone number</label>
              <input
                type="tel"
                placeholder="Enter your number here"
                className="w-full  border-gray-800 border-2 text-xl rounded-md px-4 py-4"
              />
            </div>
            <div>
              <label className="block font-medium text-xl mb-1">Company</label>
              <input
                type="text"
                placeholder="Enter your company here"
                className="w-full  border-gray-800 border-2 text-xl rounded-md px-4 py-4"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-xl mb-1">Role</label>
              <input
                type="text"
                placeholder="Enter your role here"
                className="w-full  border-gray-800 border-2 text-xl rounded-md px-4 py-4"
              />
            </div>
            <div>
              <label className="block text-xl font-medium mb-1">Industry</label>
              <input
                type="text"
                placeholder="Enter your industry here"
                className="w-full  border-gray-800 border-2 text-xl rounded-md px-4 py-4"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md text-lg font-semibold hover:bg-orange-400 transition"
          >
            Book Free Consultation
          </button>
        </form>
      </div>
    </section>
  )
}

export default Servicesform