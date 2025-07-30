import { Mail, Phone } from "lucide-react";
import React from "react";
import officelocation from '../assets/officelocation.png'
import { Link } from "react-router-dom";

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
  return (
    <section className="bg-white py-20 px-6 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Come and visit us in one <br /> of our offices
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {locations.map((location, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-3xl font-bold">{location.city}</h3>
              <p className="text-black text-2xl font-bold">{location.country}</p>

              <div className="flex justify-center items-center gap-2">
                <Mail className="w-5 h-5 text-gray-500 " />
                <a
                  href={`mailto:${location.email}`}
                  className="text-gray-800 underline text-xl"
                >
                  {location.email}
                </a>
              </div>

              <div className="flex justify-center items-center gap-2">
                <Phone className="w-5 h-5 text-gray-500" />
                <p className="text-gray-800 text-xl">{location.phone}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20">
            <img src={officelocation} alt="" />
        </div>
        <div className="mt-20">
            <Link
                to="/contact-us"
                className="inline-block px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-orange-400 transition"
                >
                Contact Us
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Aboutlocation;