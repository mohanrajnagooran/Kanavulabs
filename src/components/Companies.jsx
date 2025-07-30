// src/components/Companies.jsx
import microlabs from '../assets/microlabs.png';
import bespoke from '../assets/bespoke.png'

const companies = [
  { id: 1, logo: microlabs, alt: "Micro Labs" },
  { id: 2, logo: bespoke, alt: "108 Bespoke" },
  { id: 3, logo: microlabs, alt: "Micro Labs" },
  { id: 4, logo: bespoke, alt: "108 Bespoke" },
  { id: 5, logo: microlabs, alt: "Micro Labs" },
  { id: 6, logo: bespoke , alt: "108 Bespoke" },
];

const Companies = () => {
  return (
    <section className="py-20 px-6 bg-white mb-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-12">
        <div className="md:w-1/3">
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
            Trusted by <span className="text-orange-500 font-bold">100+</span> companies around the world
          </h2>
        </div>

        <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-6">
          {companies.map((company) => (
            <div
              key={company.id}
              className="flex items-center justify-center bg-gray-100 p-4 rounded-md shadow-sm"
            >
              <img
                src={company.logo}
                alt={company.alt}
                className="md:h-40 h-28 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
