import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import art1 from '../assets/art1.png'
import art2 from '../assets/art2.png'

const Articles = () => {
  const articles = [
    {
      title: "6 great keyboards that your development team will completely fall in love with",
      date: "20 Feb, 2023",
      category: "Engineering",
      image: art1
    },
    {
      title: "Code refactoring best practices: when its time (and when its not) to do it",
      date: "20 Feb, 2023",
      category: "Engineering",
      image: art2,
    },
    {
      title: "Scaling apps with microservices",
      date: "12 Jan, 2023",
      category: "Architecture",
      image: art1,
    },
    {
      title: "Design thinking in agile",
      date: "05 Dec, 2022",
      category: "UI/UX",
      image: art2,
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
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex justify-between mb-6  mt-4">
            {/* Heading */}
        <div className=" mb-10">
          <h2 className="text-2xl md:text-4xl font-bold">
            Browse our latest articles and resources
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
                  className="w-full h-72 object-cover"
                />
                <div className="p-2 mt-2">
                  <h3 className="text-2xl font-bold mb-2">{article.title}</h3>
                  <div className="flex justify-between border-t border-gray-400 mt-6 ">
                    <p className=" text-gray-500 text-xl mb-1 mt-2">
                        {article.date} - {article.category}
                    </p>
                    <a href="#" className="text-xl  text-blue-500 underline mt-2">
                        Read more
                    </a>
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
                <a href="#" className="text-2xl font-semibold">Browse more articles</a>
            </button>
          </div>
      </div>
    </section>
  );
};

export default Articles;
