import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "../assets/service1.png";

const services = [
  {
    title: "Digital Marketing Services",
    description:
      "Our digital marketing services help you reach the right audience at the right time. From SEO to social media and paid campaigns, we craft data-driven strategies that boost visibility, drive qualified traffic, and turn clicks into loyal customers for sustainable business growth.",
    image: image,
  },
  {
    title: "Software Development",
    description:
      "We build robust, scalable, and user-friendly software tailored to your business needs. From web apps to mobile solutions, our development process ensures quality, efficiency, and seamless performance—empowering you to streamline operations, solve complex problems, and stay ahead in a rapidly evolving digital world.",
    image: image,
  },
  {
    title: "AR, VR and Mixed Reality",
    description:
      "We craft immersive AR, VR, and Mixed Reality experiences that transform how users interact with digital environments. From training simulations to interactive product showcases, our solutions blend the virtual and physical worlds to engage audiences, boost retention, and deliver innovative business outcomes.",
    image: image,
  },
  {
    title: "Artificial Intelligence",
    description:
      "We build smart AI-driven solutions that help businesses automate tasks, gain actionable insights, and make intelligent decisions. From machine learning models to natural language processing and predictive analytics, our AI capabilities drive innovation, improve efficiency, and give you a competitive edge in your industry.",
    image: image,
  },
];

const TechnologiesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2
          className="text-3xl sm:text-4xl font-bold text-center mb-4"
          data-aos="fade-up"
        >
          We are experts on all technologies <br />
          <span className="text-black/90">& platforms</span>
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-md transition"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 sm:h-64 object-contain mb-4"
              />
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 text-base sm:text-lg">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-10" data-aos="zoom-in">
          <button
            type="button"
            className="bg-black text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-orange-400 transition"
          >
            Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
