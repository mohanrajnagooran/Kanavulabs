import React, { useEffect } from 'react';
import aboutImg from '../assets/abouthero.png';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const Abouthero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false, // animate on both scroll down & up
      mirror: true, // replay when scrolling back
    });
    AOS.refresh();
  }, []);

  return (
    <section className="pt-10 mb-3 bg-white flex items-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-8">
        
        {/* Left Image */}
        <div data-aos="fade-right" data-aos-delay="200">
          <img src={aboutImg} alt="About Us" className="w-full h-auto" />
        </div>

        {/* Right Content */}
        <div className="p-2" data-aos="fade-left" data-aos-delay="400">
          <h1 className="text-3xl md:text-7xl font-bold mb-4">
            About our<br />
            amazing agency
          </h1>
          <p className="text-gray-600 mb-6 text-2xl">
            Founded in 2021, Kanavu Labs began with a mission to deliver digital excellence through collaboration. Today, we empower brands with innovative solutions tailored to meet real business needs and create lasting impact.
          </p>
          <Link
            to="/contact-us"
            className="inline-block px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-orange-500 transition"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Abouthero;
