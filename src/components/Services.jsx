import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";

const Articles = () => {
  const articles = [
    {
      title: "Digital Marketing Services",
      content:
        "We offer end-to-end digital marketing solutions designed to grow your business online. Whether you're a startup or an established brand, we help you connect with the right audience through tailored strategies and measurable results.",
      image: service1,
    },
    {
      title: "Software Development",
      content:
        "Our software development services empower businesses with innovative, high-performance applications. From concept to deployment, we craft custom solutions that solve real problems, streamline operations, and accelerate your digital transformation.",
      image: service2,
    },
    {
      title: "AI & Emerging Tech",
      content:
        "We harness the power of AI and emerging technologies to help businesses stay ahead of the curve. From intelligent automation to next-gen solutions, we turn cutting-edge innovation into real-world impact tailored to your unique challenges.",
      image: service1,
    },
  ];

  const [current, setCurrent] = useState(0);
  const visibleCount = 2;

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  const next = () => {
    if (current + visibleCount < articles.length) {
      setCurrent(current + 1);
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <section className="px-6 py-5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading + Navigation Buttons */}
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10"
          data-aos="fade-up"
        >
          <h2 className="text-2xl md:text-4xl font-bold">
            We are experts on all technologies & platforms
          </h2>

          <div className="flex gap-4">
            <button
              onClick={prev}
              disabled={current === 0}
              className={`p-3 rounded-md border border-black transition ${
                current === 0 ? "opacity-40 cursor-not-allowed" : "text-white bg-black hover:bg-orange-500"
              }`}
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={next}
              disabled={current + visibleCount >= articles.length}
              className={`p-3 rounded-md border border-black transition ${
                current + visibleCount >= articles.length
                  ? "opacity-40 cursor-not-allowed"
                  : "text-white bg-black hover:bg-orange-500"
              }`}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Article Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {articles
            .slice(current, current + visibleCount)
            .map((article, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-60 object-contain"
                />
                <div className="p-4">
                  <h3 className="text-2xl font-bold mb-2">{article.title}</h3>
                  <p className="text-gray-600 text-base">{article.content}</p>
                </div>
              </div>
            ))}
        </div>

        {/* Browse More Button */}
        <div
          className="flex justify-center"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <button className="border-black px-6 py-3 rounded-md border-2 hover:text-orange-500 hover:border-orange-400 transition text-lg font-semibold">
            <a href="#">Browse more Services</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Articles;
