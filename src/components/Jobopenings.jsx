import React, { useEffect } from "react";
import { MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";
import AOS from "aos";
import "aos/dist/aos.css";

const jobs = [
  {
    location: "Erode, TN",
    type: "Full Time",
    title: "Junior Search Engine Optimisation Associate",
    description:
      "We meticulously target specific keywords your audience uses, ensuring every click brings highly relevant traffic directly to your site. This isn't guesswork; it's a measurable strategy.",
    link: "#",
  },
  {
    location: "Erode, TN",
    type: "Full Time",
    title: "Junior Search Engine Optimisation Associate",
    description:
      "We meticulously target specific keywords your audience uses, ensuring every click brings highly relevant traffic directly to your site. This isn't guesswork; it's a measurable strategy.",
    link: "#",
  },
];

export default function Jobopenings() {
  useEffect(() => {
    AOS.init({ duration: 900, once: false, mirror: true });
  }, []);

  return (
    <section className="bg-black text-white py-16 px-4 mb-0.5">
      <div className="max-w-7xl mx-auto ">
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Open positions</h2>
          <p className="text-gray-300 mt-4 max-w-3xl mx-auto">
            We meticulously target specific keywords your audience uses,
            ensuring every click brings highly relevant traffic directly to your
            site. This isn't guesswork; it's a measurable strategy.
          </p>
        </div>

        {/* Job Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 200}
              className="bg-white text-black rounded-lg shadow-md p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Location & Type */}
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <MapPinIcon className="w-5 h-5 mr-2" />
                <span>{job.location}</span>
                <span className="mx-3">—</span>
                <ClockIcon className="w-5 h-5 mr-2" />
                <span>{job.type}</span>
              </div>

              {/* Job Title */}
              <h3 className="text-lg md:text-xl font-bold mb-3">
                {job.title}
              </h3>

              {/* Job Description */}
              <p className="text-gray-700 text-sm md:text-base mb-6 leading-relaxed">
                {job.description}
              </p>

              {/* Button */}
              <a
                href={job.link}
                className="bg-black text-white px-5 py-2 rounded-md hover:bg-orange-500 transition text-center"
              >
                View Job
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
