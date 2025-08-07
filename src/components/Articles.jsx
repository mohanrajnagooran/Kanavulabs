import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import art1 from '../assets/art1.png';
import art2 from '../assets/art2.png';

const Articles = () => {
  const articles = [
    {
      title: "6 great keyboards your dev team will love",
      date: "20 Feb, 2023",
      category: "Engineering",
      image: art1
    },
    {
      title: "Code refactoring best practices",
      date: "22 Feb, 2023",
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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto ">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Browse our latest articles and resources
          </h2>
          <div className="flex gap-3">
            <button
              onClick={prev}
              disabled={current === 0}
              className={`p-3 rounded-md border border-black transition ${
                current === 0 ? "opacity-100 " : "text-white bg-black"
              }`}
              aria-label="Previous"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={next}
              disabled={current + visibleCount >= articles.length}
              className={`p-3 rounded-md border border-black transition ${
                current + visibleCount >= articles.length ? "opacity-100 " : "text-white bg-black"
              }`}
              aria-label="Next"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.slice(current, current + visibleCount).map((article, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 flex flex-col justify-between">
                <h3 className="text-xl md:text-2xl font-bold mb-3">{article.title}</h3>

                <div className="border-t pt-3 mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <p className="text-gray-500 text-sm sm:text-base">
                    <span className="font-medium">{article.date}</span> — {article.category}
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 underline text-sm sm:text-base hover:text-blue-800 mt-2 sm:mt-0"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <button className="border-black border-2 px-6 py-3 rounded-md hover:border-orange-500 hover:text-orange-500 transition">
            <a href="#" className="text-lg sm:text-xl font-semibold">
              Browse more articles
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Articles;
