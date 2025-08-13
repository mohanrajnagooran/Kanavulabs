import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

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
    <section className="max-w-6xl px-4 sm:px-6 md:px-16 py-12 bg-white mx-auto">
      {/* Heading */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          What Our Customers Say
        </h2>
        <p className="text-gray-600">
          Real stories from businesses we’ve helped grow.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className="bg-white border border-gray-200 shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Stars */}
            <div className="flex items-center text-orange-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
              <span className="ml-2 text-gray-500 text-sm">5.0 Rating</span>
            </div>

            {/* Text */}
            <p className="text-gray-800 italic mb-6 leading-relaxed">
              “{item.text}”
            </p>

            {/* Name & Role */}
            <div className="text-right">
              <p className="text-black text-lg font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">{item.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-12" data-aos="fade-up">
        <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-orange-400 transition-colors duration-300">
          Contact Us
        </button>
      </div>
    </section>
  );
}
