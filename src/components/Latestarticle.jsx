
import React from "react";
import blog1 from "../assets/blog1.png"; // Replace with your images
import blog2 from "../assets/blog1.png";
import blog3 from "../assets/blog1.png";
import blog4 from "../assets/blog1.png";
import blog5 from "../assets/blog1.png";
import blog6 from "../assets/blog1.png";

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
  return (
    <div>
        <section className="px-4  max-w-7xl mx-auto mb-20">
      <h2 className="text-4xl font-bold mb-10">Latest articles</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto rounded-md shadow-sm"
            />
            <p className="text-gray-500 mt-4 text-sm">
              {post.date} - {post.type}
            </p>
            <h3 className="font-semibold text-lg mt-2 leading-snug">
              {post.title}
            </h3>
            <a
              href={post.link}
              className="text-orange-500 mt-2 inline-block hover:underline"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default Latestarticle