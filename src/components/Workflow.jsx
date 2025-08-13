import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "../assets/workflow.png";

export default function Workflow() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="max-w-7xl py-16 px-6 grid mx-auto grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left Section */}
      <div className="flex flex-col space-y-8">
        <div data-aos="fade-right">
          <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
            We have a simple, <br />
            yet bulletproof and <br />
            effective process.
          </h2>
          <p className="text-gray-700 mt-4 max-w-md">
            We meticulously target specific keywords your audience uses,
            ensuring every click brings highly relevant traffic directly to
            your site. This isn't guesswork.
          </p>
          <button className="bg-black hover:bg-orange-400 text-white px-6 py-3 rounded-md mt-6 transition-all duration-300">
            Contact Us
          </button>
        </div>

        <div className="mt-10" data-aos="zoom-in">
          <img src={image} alt="Illustration" className="w-auto" />
        </div>
      </div>

      {/* Right Section: 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: "Initial quote",
            desc: "Get your project started with a free initial quote. Share your requirements, and our team will provide a tailored estimate to match your goals, timeline, and budget—no commitment required.",
            num: "1",
          },
          {
            title: "Project idea",
            desc: "Have a project idea? Let’s bring it to life. Share your vision with us, and we’ll help you turn it into a scalable, impactful solution tailored to your business needs.",
            num: "2",
          },
          {
            title: "Execution",
            desc: "From planning to launch, we ensure flawless execution at every stage. Our agile approach keeps your project on track, delivering quality results on time and within budget.",
            num: "3",
          },
          {
            title: "Launch",
            desc: "We launch with impact. From final testing to go-live support, we ensure a smooth, successful rollout that sets your project up for long-term success.",
            num: "4",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="relative bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <h4 className="font-bold text-lg">{card.title}</h4>
            <p className="text-gray-700 mt-2">{card.desc}</p>
            <span className="absolute md:top-4 top-0 md:right-4 right-0 md:text-[96px] text-6xl text-gray-300 font-bold">
              {card.num}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
