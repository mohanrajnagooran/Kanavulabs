import React from "react";
import img1 from "../assets/art1.png";
import img2 from "../assets/blog1.png";
import img3 from "../assets/blog2.png";
import img4 from "../assets/blog4.png";
import img5 from "../assets/blog4.png";

const featuredArticle = {
  image: img1,
  date: "20 Feb, 2023",
  type: "Article",
  title: "6 great keyboards that your development team will completely fall in love with",
  link: "#",
};

const blogList = [
  {
    id: 1,
    image: img2,
    date: "20 Feb, 2023",
    type: "Article",
    title: "6 great keyboards that your development team will completely fall in love with",
    link: "#",
  },
  {
    id: 2,
    image: img3,
    date: "20 Feb, 2023",
    type: "Article",
    title: "6 great keyboards that your development team will completely fall in love with",
    link: "#",
  },
  {
    id: 3,
    image: img4,
    date: "20 Feb, 2023",
    type: "Article",
    title: "6 great keyboards that your development team will completely fall in love with",
    link: "#",
  },
  {
    id: 4,
    image: img5,
    date: "20 Feb, 2023",
    type: "Article",
    title: "6 great keyboards that your development team will completely fall in love with",
    link: "#",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-white py-16 px-4 ">
      <div className="max-w-7xl mx-auto pb-20">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-12">Articles & Resource</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-8">
          {/* Left Side - Featured Article */}
          <div className="">
            <img src={featuredArticle.image} alt="Featured" className="rounded-lg w-full h-96 " />
            <p className="text-gray-500 mt-6">
              {featuredArticle.date} - {featuredArticle.type}
            </p>
            <h3 className="text-3xl font-bold mt-2 leading-snug">
              {featuredArticle.title}
            </h3>
            <a href={featuredArticle.link} className="text-orange-500 underline mt-2 inline-block">
              Read more
            </a>
          </div>

          {/* Right Side - Blog List */}
          <div className="space-y-6">
            {blogList.map((item) => (
              <div key={item.id} className="flex gap-4 items-start pb-4 last:border-none">
                <img src={item.image} alt="Thumbnail" className="w-32 h-26 object-cover rounded" />
                <div className="flex-1 max-w-[440px]">
                  <p className="text-gray-500 text-md">
                    {item.date} - {item.type}
                  </p>
                  <h4 className="text-xl font-semibold leading-snug mt-1">
                    {item.title}
                  </h4>
                  <a href={item.link} className="text-orange-500 underline text-sm  inline-block">
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
