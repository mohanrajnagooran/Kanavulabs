import React from "react";
import contactImage from "../assets/contact.png";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

const Contacthero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Top Section - Heading + Contact Info */}
      <div
        className="flex flex-col px-10 md:flex-row md:items-center mb-12 gap-6 md:gap-20"
        data-aos="fade-up"
      >
        {/* Text */}
        <div className="text-center md:text-left" data-aos="fade-right">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in touch with us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto md:mx-0">
            Our passionate team crafts innovative solutions for complex business
            challenges. We partner for success through digital products.
          </p>
        </div>

        {/* Contact Details */}
        <div className="space-y-6 text-left" data-aos="fade-left">
          <div className="flex items-start gap-4">
            <EnvelopeIcon className="w-10 h-10 text-white rounded-md p-2 bg-black" />
            <div>
              <p className="font-medium">Send us a message</p>
              <p className="text-gray-700">support@kanavulabs.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <PhoneIcon className="w-10 h-10 text-white rounded-md p-2 bg-black" />
            <div>
              <p className="font-medium">Give us a call</p>
              <p className="text-gray-700 font-semibold">+91 7338824568</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Image + Form */}
      <div
        className="flex flex-col md:flex-row items-start gap-12"
        data-aos="zoom-in-up"
      >
        {/* Left - Image */}
        <div className="w-full md:w-1/2" data-aos="fade-right">
          <img
            src={contactImage}
            alt="Contact Illustration"
            className="w-full h-auto mx-auto md:mx-0"
          />
        </div>

        {/* Right - Form */}
        <form className="w-full md:w-1/2 space-y-6" data-aos="fade-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div data-aos="fade-up" data-aos-delay="100">
              <label className="block mb-1 text-xl font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name here"
                className="w-full px-4 py-2 text-xl border border-gray-300 rounded-md"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <label className="block mb-1 text-xl font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email here"
                className="w-full px-4 py-2 text-xl border border-gray-300 rounded-md"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <label className="block mb-1 text-xl font-medium">Phone</label>
              <input
                type="tel"
                placeholder="Enter your number here"
                className="w-full px-4 py-2 text-xl border border-gray-300 rounded-md"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <label className="block mb-1 text-xl font-medium">Company</label>
              <input
                type="text"
                placeholder="Enter your company here"
                className="w-full px-4 py-2 text-xl border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="500">
            <label className="block mb-1 text-xl font-medium">
              Leave us your message
            </label>
            <textarea
              rows="4"
              placeholder="Please type your message here"
              className="w-full text-xl px-4 py-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-black text-xl text-white px-6 py-3 rounded-md hover:bg-orange-500"
            data-aos="flip-up"
            data-aos-delay="600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacthero;
