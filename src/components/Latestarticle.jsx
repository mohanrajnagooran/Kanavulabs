import React, { useEffect } from "react";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog1.png";
import blog3 from "../assets/blog1.png";
import blog4 from "../assets/blog1.png";
import blog5 from "../assets/blog1.png";
import blog6 from "../assets/blog1.png";
import AOS from "aos";
import "aos/dist/aos.css";

const blogPosts = [
  {
    id: 1,
    image: blog1,
    date: "20 Feb, 2023",
    type: "Article",
    title: "6 great keyboards that your development team will completely fall in love with",
    link: "#",
  },
  {
    id: 2,
    image: blog2,
    date: "21 Feb, 2023",
    type: "Article",
    title: "10 productivity hacks for developers working remotely",
    link: "#",
  },
  {
    id: 3,
    image: blog3,
    date: "22 Feb, 2023",
    type: "Article",
    title: "How dark mode improves developer focus and health",
    link: "#",
  },
  {
    id: 4,
    image: blog4,
    date: "23 Feb, 2023",
    type: "Article",
    title: "The rise of AI in frontend development: What to expect",
    link: "#",
  },
  {
    id: 5,
    image: blog5,
    date: "24 Feb, 2023",
    type: "Article",
    title: "Why Tailwind CSS is changing the way we build UIs",
    link: "#",
  },
  {
    id: 6,
    image: blog6,
    date: "25 Feb, 2023",
    type: "Article",
    title: "Top 5 IDE extensions every React developer must have",
    link: "#",
  },
];

const Latestarticle = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: false, mirror: true });
  }, []);

  return (
    <section className="px-4 md:px-6 max-w-7xl mx-auto mb-20">
      <h2
        className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left"
        data-aos="fade-up"
      >
        Latest Articles
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.map((post, index) => (
          <div
            key={post.id}
            className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-transform transform hover:-translate-y-2"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-500 text-sm mb-1">
                {post.date} - {post.type}
              </p>
              <h3 className="text-lg font-semibold leading-snug mb-2">
                {post.title}
              </h3>
              <a
                href={post.link}
                className="text-orange-500 text-sm font-medium hover:underline"
              >
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Latestarticle;
