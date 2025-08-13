import React, { useEffect } from "react";
import workspeed1 from "../assets/workspeed1.png";
import workspeed2 from "../assets/workspeed2.png";
import workspeed3 from "../assets/port3.png";
import workspeed4 from "../assets/port4.png";
import pin from "../assets/Vector.png";
import AOS from "aos";
import "aos/dist/aos.css";

const caseStudies = [
  {
    id: 1,
    image: workspeed1,
    logo: pin,
    company: "Company",
    title: "How we improved Company's new website speed by 78%",
    description:
      "We meticulously target specific keywords your audience uses, ensuring every click brings highly relevant traffic directly to your site. This isn't guesswork.",
  },
  {
    id: 2,
    image: workspeed2,
    logo: pin,
    company: "Company",
    title: "How we helped application launch tables in less than 6 months",
    description:
      "Our strategies helped scale user growth significantly without affecting backend performance.",
  },
  {
    id: 3,
    image: workspeed3,
    logo: pin,
    company: "Company",
    title: "How we helped Youtube improve its search engine speed",
    description:
      "We optimized the backend indexing to reduce search latency by 65% across millions of videos.",
  },
  {
    id: 4,
    image: workspeed4,
    logo: pin,
    company: "Company",
    title: "How we improved webflow SEO performed in over a week",
    description:
      "A complete redesign and technical audit led to a 40% faster user onboarding experience.",
  },
];

const PortfolioSection = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: false, mirror: true });
  }, []);

  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl sm:text-5xl font-bold text-center mb-6"
          data-aos="fade-up"
        >
          Our Portfolio
        </h2>
        <p
          className="text-center text-gray-600 text-lg sm:text-2xl max-w-3xl mx-auto mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Our passionate team crafts innovative solutions for complex business
          challenges. We partner for success through digital products.
        </p>

        <div className="flex flex-col gap-16">
          {caseStudies.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col-reverse md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-8 md:gap-12 bg-gray-100 rounded-xl p-6 shadow-sm`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              {/* Left: Content */}
              <div className="relative md:w-1/2 w-full text-center md:text-left">
                {/* Floating Icon */}
                <div
                  className="absolute -top-4 right-4 bg-white p-2 rounded-full shadow-md"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <img
                    src={item.logo}
                    alt="Tech Icon"
                    className="w-8 h-8 sm:w-10 sm:h-10"
                  />
                </div>

                <h2 className="text-xl sm:text-3xl font-bold text-blue-600 mb-2">
                  {item.company}
                </h2>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-base sm:text-lg">
                  {item.description}
                </p>
              </div>

              {/* Right: Image */}
              <div className="md:w-1/2 w-full" data-aos="zoom-in" data-aos-delay="150">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
