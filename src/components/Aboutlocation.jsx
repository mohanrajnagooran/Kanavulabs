import { Mail, Phone } from "lucide-react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import officelocation from "../assets/officelocation.png";

const locations = [
  {
    city: "Erode, Tamilnadu",
    country: "India",
    email: "support@kanavulabs.com",
    phone: "+91 9876543210",
  },
  {
    city: "Bangalore, Karnataka",
    country: "India",
    email: "support@kanavulabs.com",
    phone: "+91 9876543210",
  },
  {
    city: "Ras Al Khaimah",
    country: "United Arab Emirates",
    email: "support@kanavulabs.com",
    phone: "+91 9876543210",
  },
];

const Aboutlocation = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false, // repeat animation on scroll
      mirror: true, // trigger on scroll up
    });
    AOS.refresh();
  }, []);

  return (
    <section className="bg-white py-16 px-4 md:px-6 text-center">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          className="text-3xl md:text-5xl font-bold mb-12 leading-snug"
          data-aos="fade-down"
        >
          Come and visit us in one <br className="hidden md:block" />
          of our offices
        </h2>

        {/* Office cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
          {locations.map((location, index) => (
            <div
              key={index}
              className="space-y-4 border border-gray-200 p-6 rounded-md shadow-sm hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay={index * 150} // stagger animations
            >
              <h3 className="text-2xl font-bold text-black">{location.city}</h3>
              <p className="text-lg font-semibold text-gray-700">
                {location.country}
              </p>

              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-gray-500" />
                <a
                  href={`mailto:${location.email}`}
                  className="text-gray-800 underline text-base"
                >
                  {location.email}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-gray-500" />
                <p className="text-gray-800 text-base">{location.phone}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Office Map Image */}
        <div className="mt-16 px-4" data-aos="zoom-in">
          <img
            src={officelocation}
            alt="Office locations map"
            className="w-full h-auto max-w-5xl mx-auto"
          />
        </div>

        {/* CTA Button */}
        <div className="mt-12" data-aos="fade-up" data-aos-delay="300">
          <Link
            to="/contact-us"
            className="inline-block px-6 py-3 bg-black text-white text-lg font-medium rounded-md hover:bg-orange-500 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Aboutlocation;
