import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const team = [
  {
    name: "Monika",
    role: "Associate Lead Generation Specialist",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Drives targeted outreach campaigns, identifies high-potential leads, and builds lasting client relationships. Skilled in understanding audience needs and delivering strategies that convert prospects into loyal customers, ensuring consistent business growth.",
  },
  {
    name: "Mohan Raj",
    role: "Associate Full stack Developer",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    quote:
      "Designs and develops seamless web applications from front-end to back-end. Combines technical expertise with problem-solving skills to deliver scalable, user-friendly, and high-performing digital solutions tailored to business needs.",
  },
  {
    name: "Sakthi Shivani",
    role: "Junior Lead Generation Specialist",
    img: "https://randomuser.me/api/portraits/women/46.jpg",
    quote:
      "We meticulously target specific keywords your audience uses, ensuring every click brings highly relevant traffic directly to your site. This isn't guesswork; it's a measurable strategy.",
  },
];

export default function TeamStrength() {
  useEffect(() => {
    AOS.init({ duration: 900, once: false, mirror: true });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 bg-white">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div data-aos="fade-right">
          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
              What our team says <br className="hidden md:block" /> about us
            </h2>
            <p className="text-gray-600 max-w-xl text-lg">
              We meticulously target specific keywords your audience uses,
              ensuring every click brings highly relevant traffic directly to your
              site.
            </p>
          </div>

          {/* Monika's Card */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={team[0].img}
                alt={team[0].name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-lg">{team[0].name}</p>
                <p className="text-sm text-gray-600">{team[0].role}</p>
              </div>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              {team[0].quote}
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {team.slice(1).map((person, index) => (
            <div
              key={index}
              data-aos="fade-left"
              className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-lg">{person.name}</p>
                  <p className="text-sm text-gray-600">{person.role}</p>
                </div>
              </div>
              <p className="text-gray-700 text-base leading-relaxed">
                {person.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
