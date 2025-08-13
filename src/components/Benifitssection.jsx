// BenefitsSection.jsx
import React, { useEffect } from "react";
import { GraduationCap } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const benefits = [
  {
    title: "100% Remote",
    description:
      "Work from anywhere in the world with full flexibility and support.",
  },
  {
    title: "Awesome Team",
    description:
      "Collaborate with passionate innovators who thrive on excellence and creativity.",
  },
  {
    title: "Flexible Hours",
    description:
      "Set your own schedule while meeting project goals efficiently.",
  },
];

const BenefitsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: false, mirror: true });
  }, []);

  return (
    <section className="lg:mt-10 py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto bg-white text-center lg:mb-20">
      <h2
        className="text-2xl md:text-4xl font-bold mb-12"
        data-aos="fade-up"
      >
        Perks & Benefits of working at <br className="hidden md:block" />
        our agency
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="p-4 rounded-md bg-black text-white mb-4">
              <GraduationCap className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-lg">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
