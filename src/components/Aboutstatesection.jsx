// src/components/AboutStatsSection.jsx
import started from '../assets/started.png'

const stats = [
  { label: "Successful Work", value: "300+" },
  { label: "Team member", value: "25+" },
  { label: "Happy Customers", value: "100+" },
  { label: "Creative Ideas", value: "1000+" },
];

const AboutStatsSection = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 text-center mb-16">
          {stats.map((item, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-5xl font-bold text-orange-500">{item.value}</h3>
              <p className="text-2xl font-bold text-black mt-2">{item.label}</p>
            </div>
          ))}
        </div>

        {/* About Message */}
        <div className="grid md:grid-cols-2 items-center gap-2">
          {/* Left Text */}
          <div className='px-8'>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-snug">
              We started in 2021 as a small <br />
              team of passionate innovators
            </h2>
            <p className="text-gray-700 md:text-xl">
              We go beyond basic optimization, meticulously refining your content and
              technical foundation. This ensures search engines effortlessly
              discover and categorize your content while delivering a polished and
              engaging experience to your users.
            </p>
            <button className="bg-black text-xl text-white px-14 py-4 mt-8 rounded hover:bg-orange-400 transition">
            Download our deck
          </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={started}
              alt="Team working"
              className="w-full max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStatsSection;
