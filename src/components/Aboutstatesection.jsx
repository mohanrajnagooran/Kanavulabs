import started from '../assets/started.png'

const stats = [
  { label: "Successful Work", value: "300+" },
  { label: "Team member", value: "25+" },
  { label: "Happy Customers", value: "100+" },
  { label: "Creative Ideas", value: "1000+" },
];

const AboutStatsSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 text-center gap-6 mb-16">
          {stats.map((item, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-4xl sm:text-5xl font-bold text-orange-500">{item.value}</h3>
              <p className="text-lg sm:text-xl font-semibold text-black mt-2">{item.label}</p>
            </div>
          ))}
        </div>

        {/* About Message */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left Text */}
          <div className="text-center md:text-left px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-snug">
              We started in 2021 as a small <br className="hidden sm:inline" />
              team of passionate innovators
            </h2>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
              We go beyond basic optimization, meticulously refining your content and
              technical foundation. This ensures search engines effortlessly
              discover and categorize your content while delivering a polished and
              engaging experience to your users.
            </p>
            <button className="bg-black text-white text-lg sm:text-xl px-10 py-3 mt-6 rounded-md hover:bg-orange-500 transition">
              Download our deck
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={started}
              alt="Team working"
              className="w-full max-w-md sm:max-w-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStatsSection;
