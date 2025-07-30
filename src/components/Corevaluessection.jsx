// src/components/CoreValuesSection.jsx

import {
  FaStar,
  FaCubes,
  FaRobot,
  FaRedo,
  FaChartBar,
  FaUser,
} from "react-icons/fa";

const values = [
  {
    icon: <FaStar className="text-3xl text-black" />,
    title: "Best Qualities",
    description:
      "We meticulously target specific keywords your audience uses, ensuring every click brings highly relevant traffic directly to your site. This isn't guesswork.",
  },
  {
    icon: <FaCubes className="text-3xl text-black" />,
    title: "Top tier infrastructure",
    description:
      "We meticulously target specific keywords your audience uses, ensuring every click brings highly relevant traffic directly to your site. This isn't guesswork.",
  },
  {
    icon: <FaRobot className="text-3xl text-black" />,
    title: "Innovation & Technology",
    description:
      "We meticulously target specific keywords your audience uses, ensuring every click brings highly relevant traffic directly to your site. This isn't guesswork.",
  },
  {
    icon: <FaRedo className="text-3xl text-black" />,
    title: "Always iterate",
    description:
      "We meticulously target specific keywords your audience uses, ensuring every click brings highly relevant traffic directly to your site. This isn't guesswork.",
  },
  {
    icon: <FaChartBar className="text-3xl text-black" />,
    title: "User Centered",
    description:
      "We meticulously target specific keywords your audience uses, ensuring every click brings highly relevant traffic directly to your site. This isn't guesswork.",
  },
  {
    icon: <FaUser className="text-3xl text-black" />,
    title: "Escalation in mind",
    description:
      "We meticulously target specific keywords your audience uses, ensuring every click brings highly relevant traffic directly to your site. This isn't guesswork.",
  },
];

const CoreValuesSection = () => {
  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          The core values<br />that drive everything we do
        </h2>
        <p className="text-black max-w-4xl mx-auto mb-12 text-lg">
          We go beyond basic optimization, meticulously refining your content and technical foundation. This ensures search engines effortlessly find and showcase your business, driving highly relevant potential customers directly to you. Stop competing for visibility; start dominating it.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition text-left"
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-black text-md">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
