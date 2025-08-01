// src/components/TeamSection.jsx

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    name: "Magudeeswaran",
    role: "CEO & Co-Founder",
    image: "/assets/team1.png",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Abishiek",
    role: "CTO & Co-Founder",
    image: "/assets/team2.png",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "Pradeep",
    role: "Senior Leadership",
    image: "/assets/team3.png",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Meet the amazing team behind our agency
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          We go beyond basic optimization, meticulously refining your content and technical
          foundation. This ensures search engines effortlessly find and showcase your business,
          driving highly relevant potential customers directly to you. Stop competing for visibility;
          start dominating it.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-72 object-cover border-b-4 border-black"
              />
              <div className="p-5 text-center">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>

                {/* Social Icons */}
                <div className="flex justify-center gap-4">
                  <a
                    href={member.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white p-2 rounded hover:bg-opacity-80"
                  >
                    <FaFacebookF size={16} />
                  </a>
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white p-2 rounded hover:bg-opacity-80"
                  >
                    <FaInstagram size={16} />
                  </a>
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white p-2 rounded hover:bg-opacity-80"
                  >
                    <FaLinkedinIn size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
            <button className="md:text-2xl border-2 px-8 py-2 rounded-lg hover:text-orange-400">Join the team</button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
