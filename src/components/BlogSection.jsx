import React, { useEffect } from "react";
import img1 from "../assets/art1.png";
import img2 from "../assets/blog1.png";
import img3 from "../assets/blog2.png";
import img4 from "../assets/blog4.png";
import img5 from "../assets/blog4.png";
import AOS from "aos";
import "aos/dist/aos.css";

const featuredArticle = {
  image: img1,
  date: "20 Feb, 2023",
  type: "Article",
  title:
    "6 great keyboards that your development team will completely fall in love with",
  link: "#",
};

const blogList = [
  {
    id: 1,
    image: img2,
    date: "20 Feb, 2023",
    type: "Article",
    title:
      "6 great keyboards that your development team will completely fall in love with",
    link: "#",
  },
  {
    id: 2,
    image: img3,
    date: "20 Feb, 2023",
    type: "Article",
    title:
      "Code refactoring best practices: when it’s time (and when it’s not) to do it",
    link: "#",
  },
  {
    id: 3,
    image: img4,
    date: "20 Feb, 2023",
    type: "Article",
    title:
      "Scaling apps with microservices: best practices and gotchas to avoid",
    link: "#",
  },
  {
    id: 4,
    image: img5,
    date: "20 Feb, 2023",
    type: "Article",
    title: "Design thinking in agile: how to integrate it into sprints",
    link: "#",
  },
];

const BlogSection = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: false, mirror: true });
  }, []);

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl sm:text-5xl font-bold text-center mb-12"
          data-aos="fade-up"
        >
          Articles & Resources
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Featured Article */}
          <div className="flex flex-col" data-aos="fade-right">
            <img
              src={featuredArticle.image}
              alt="Featured"
              className="rounded-lg w-full h-auto object-cover max-h-[400px]"
            />
            <p className="text-gray-500 mt-6 text-base sm:text-lg">
              {featuredArticle.date} - {featuredArticle.type}
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold mt-2 leading-snug">
              {featuredArticle.title}
            </h3>
            <a
              href={featuredArticle.link}
              className="text-orange-500 underline mt-2 inline-block text-sm sm:text-base"
            >
              Read more
            </a>
          </div>

          {/* Blog List */}
          <div className="space-y-6" data-aos="fade-left">
            {blogList.map((item, idx) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row gap-4 border-b pb-4"
                data-aos="fade-up"
                data-aos-delay={idx * 150} // stagger animation
              >
                <img
                  src={item.image}
                  alt="Thumbnail"
                  className="w-full sm:w-32 h-36 object-cover rounded"
                />
                <div className="flex-1">
                  <p className="text-gray-500 text-sm sm:text-base">
                    {item.date} - {item.type}
                  </p>
                  <h4 className="text-lg sm:text-xl font-semibold mt-1 leading-snug">
                    {item.title}
                  </h4>
                  <a
                    href={item.link}
                    className="text-orange-500 underline text-md inline-block mt-1"
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
