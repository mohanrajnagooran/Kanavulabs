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
      "We’re known for our creativity, reliability, attention to detail, and commitment to delivering exceptional results that exceed expectations every single time.",
  },
  {
    icon: <FaCubes className="text-3xl text-black" />,
    title: "Top tier infrastructure",
    description:
      "We leverage cutting-edge tools, secure servers, and scalable systems to ensure your business operates smoothly, efficiently, and without downtime.",
  },
  {
    icon: <FaRobot className="text-3xl text-black" />,
    title: "Innovation & Technology",
    description:
      "We embrace the latest technologies and foster a culture of innovation to deliver future-ready solutions that give your business a competitive edge.",
  },
  {
    icon: <FaRedo className="text-3xl text-black" />,
    title: "Always iterate",
    description:
      "We continuously test, learn, and refine our solutions to ensure ongoing improvement, helping your business stay agile, relevant, and results-driven.",
  },
  {
    icon: <FaChartBar className="text-3xl text-black" />,
    title: "User Centered",
    description:
      "We design every solution with your users in mind, ensuring intuitive experiences that truly solve problems and deliver real value to your audience.",
  },
  {
    icon: <FaUser className="text-3xl text-black" />,
    title: "Escalation in mind",
    description:
      "We build with scale in mind, ensuring our solutions grow seamlessly with your business and adapt to evolving needs without compromising performance.",
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
          Our core values—innovation, integrity, collaboration, and excellence—shape every project we undertake. They guide our decisions, inspire our creativity, and ensure we consistently deliver solutions that make a real impact for our clients and partners.
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
