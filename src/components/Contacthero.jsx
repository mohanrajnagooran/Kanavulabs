import React from "react";
import contactImage from "../assets/contact.png"; // Replace with your image path
import { EnvelopeIcon,PhoneIcon } from "@heroicons/react/24/outline";

const Contacthero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid md:grid-cols-1 gap-12 items-center md:py-1 py-20">
        {/* Left - Image and Contact Info */}
        <div className="">
            <div className="md:flex md:flex-row  items-center px-6 gap-20">
                <div className="">
                    <h2 className="text-4xl md:text-5xl   font-bold mb-6">
                        Get in touch with us
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 max-w-3xl">
                        Our passionate team crafts innovative solutions for complex business
                        challenges. We partner for success through digital products.
                    </p>
                </div>
                <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                    <EnvelopeIcon className="w-18 h-18 text-white rounded-xl px-2 bg-black" />
                <span className="text-6xl"></span>
                <div>
                    <p className="font-medium">Send us a message</p>
                    <p className="text-gray-700">support@kanavulabs.com</p>
                </div>
                </div>
            <div className="flex items-start gap-3">
            <PhoneIcon class="w-18 h-18 text-white rounded-xl px-2 bg-black" />
              <div>
                <p className="font-medium">Give us a call</p>
                <p className="text-gray-700 font-semibold">+91 7338824568</p>
              </div>
            </div>
          </div>
        </div>       
          
        </div>
           <div className="md:flex  justify-between gap-10">
             <img
            src={contactImage}
            alt="Contact Illustration"
            className="w-full max-w-xl"
          />
        {/* Right - Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-xl font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name here"
                className="w-full px-4 py-2 text-xl border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block mb-1 text-xl font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email here"
                className="w-full px-4 py-2 text-xl border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block mb-1 text-xl font-medium">Phone</label>
              <input
                type="tel"
                placeholder="Enter your number here"
                className="w-full px-4 text-xl py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-xl mb-1 font-medium">Company</label>
              <input
                type="text"
                placeholder="Enter your company here"
                className="w-full px-4 text-xl py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-xl font-medium">Leave us your message</label>
            <textarea
              rows="4"
              placeholder="Please type your message here"
              className="w-full text-xl px-4 py-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-black text-xl text-white px-6 py-2 rounded-md hover:bg-orange-500"
          >
            Send Message
          </button>
        </form>
           </div>
      </div>
    </section>
  );
};

export default Contacthero;
