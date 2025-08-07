import React from "react";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      text: `Kanavu Labs helped us increase our website speed by 78%, which directly led to a 20% increase in conversions. Their technical expertise is unmatched.`,
      name: "Jane Doe",
      role: "E-commerce Manager",
    },
    {
      text: `The team's transparent process and clear communication made our project a breeze. We couldn't be happier with our new app and the results it's generating.`,
      name: "John Smith",
      role: "Startup Founder",
    },
   
  ];

  return (
    <section className="max-w-6xl px-6 mx-auto md:px-16 py-5 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          What Our Customers Say
        </h2>
        <p className="text-gray-600">
          Real stories from businesses we’ve helped grow.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-center  gap-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-md rounded-lg p-6 hover:shadow-lg transition"
          >
            {/* Stars */}
            <div className="flex items-center text-orange-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
              <span className="ml-2 text-gray-500 text-sm">5.0 Rating</span>
            </div>

            {/* Text */}
            <p className="text-gray-800 italic mb-4">“{item.text}”</p>

            {/* Name & Role */}
            <p className="text-black text-xl font-semibold text-end">{item.name}</p>
            <p className="text-sm text-gray-500 text-end">{item.role}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-12">
        <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-orange-400 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
}
