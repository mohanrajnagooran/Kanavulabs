import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import service1 from '../assets/service1.png'
import service2 from '../assets/service2.png'

const Articles = () => {
  const articles = [
    {
      title: "Digital Marketing Services",
      content: "We meticulously target specific keywords your audience uses, ensuring every click brings highly relevant traffic directly to your site. This isn't guesswork; it's a measurable strategy, giving you clear insights and control over your advertising spend. Stop paying for exposure; start paying for potential customers ready to engage.",
      image: service1
    },
    {
      title: "Software Development",
      content: "We go beyond basic optimization, meticulously refining your content and technical foundation. This ensures search engines effortlessly find and showcase your business, driving highly relevant potential customers directly to you. Stop competing for visibility; start dominating it. ",
      image: service2,
    },
    {
      title: "Digital Marketing Services",
      content: "We meticulously target specific keywords your audience uses, ensuring every click brings highly relevant traffic directly to your site. This isn't guesswork; it's a measurable strategy, giving you clear insights and control over your advertising spend. Stop paying for exposure; start paying for potential customers ready to engage.",
      image: service1
    },
    {
      title: "Software Development",
      content: "We go beyond basic optimization, meticulously refining your content and technical foundation. This ensures search engines effortlessly find and showcase your business, driving highly relevant potential customers directly to you. Stop competing for visibility; start dominating it. ",
      image: service2,
    },
  ];

  const [current, setCurrent] = useState(0);
  const visibleCount = 2;

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
    <section className="px-6 py-16 ">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex justify-between mb-6  mt-4">
            {/* Heading */}
        <div className=" mb-10">
          <h2 className="text-2xl md:text-4xl font-bold">
            We are experts on all technologies & platforms
          </h2>
        </div>
        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4">
            <button
              onClick={prev}
              disabled={current === 0}
              className={`p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition ${
                current === 0 ? "opacity-40 cursor-not-allowed" : ""
              }`}
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={next}
              disabled={current + visibleCount >= articles.length}
              className={`p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition ${
                current + visibleCount >= articles.length ? "opacity-40 cursor-not-allowed" : ""
              }`}
            >
              <FaArrowRight />
            </button>
        </div>
        </div>

        {/* Article Cards */}
        <div className="relative">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {articles.slice(current, current + visibleCount).map((article, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md overflow-hidden transition"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-60  object-contain"
                />
                <div className="p-2 mt-2">
                  <h3 className="text-2xl font-bold mb-2">{article.title}</h3>
                  <div className="flex justify-between ">
                    <p className=" text-gray-500 text-sm mb-1">
                        {article.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="items-center justify-center flex">
        <div className="items-center justify-center">
            <button className="border-black p-4 rounded-md border-2 hover:text-orange-400 hover:border-orange-400">
                <a href="#" className="text-2xl font-semibold">Browse more Services</a>
            </button>
          </div>
      </div>
    </section>
  );
};

export default Articles;
