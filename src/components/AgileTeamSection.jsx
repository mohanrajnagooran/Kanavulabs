import { ChartBarIcon, FolderIcon, CubeIcon } from "@heroicons/react/24/outline";

const features = [
  {
    title: "Affordable cost for startups and companies",
    description:
      "We meticulously target specific keywords your audience uses, ensuring every click brings highly relevant traffic directly to your site. This isn't guesswork.",
    icon: ChartBarIcon,
  },
  {
    title: "Effective and scalable infrastructure",
    description:
      "We meticulously target specific keywords your audience uses, ensuring every click brings highly relevant traffic directly to your site. This isn't guesswork.",
    icon: FolderIcon,
  },
  {
    title: "Deliver your MVP in 4 weeks or less",
    description:
      "We meticulously target specific keywords your audience uses, ensuring every click brings highly relevant traffic directly to your site. This isn't guesswork.",
    icon: CubeIcon,
  },
];

const AgileTeamSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          We are an agile team of <br /> passionate innovators
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-lg p-6 text-left hover:shadow-md transition"
            >
              {/* ✅ Render as a component, NOT as an image */}
              <item.icon className="w-14 h-14 text-black mb-16" />

              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600 text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgileTeamSection;
