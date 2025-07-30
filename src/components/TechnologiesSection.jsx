import image from '../assets/service1.png'

const services = [
  {
    title: "Digital Marketing Services",
    description:
      "We meticulously target specific keywords your audience uses, ensuring every click brings highly relevant traffic directly to your site. This isn’t guesswork; it’s a measurable strategy, giving you clearer insights and control over your advertising spend. Stop paying for exposure; start paying for potential customers ready to engage.",
    image: image,
  },
  {
    title: "Software Development",
    description:
      "We meticulously target specific keywords your audience uses, ensuring every click brings highly relevant traffic directly to your site. This isn’t guesswork; it’s a measurable strategy, giving you clearer insights and control over your advertising spend.",
    image: image,
  },
  {
    title: "AR, VR and Mixed Reality",
    description:
      "We meticulously target specific keywords your audience uses, ensuring every click brings highly relevant traffic directly to your site. Stop paying for exposure; start paying for potential customers ready to engage.",
    image: image,
  },
  {
    title: "Artificial Intelligence",
    description:
      "We meticulously target specific keywords your audience uses, ensuring every click brings highly relevant traffic directly to your site. This isn’t guesswork; it’s a measurable strategy, giving you clearer insights and control over your advertising spend.",
    image: image,
  },
];

const TechnologiesSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          We are experts on all technologies <br />
          <span className="text-black/90">& platforms</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className=" rounded-lg p-6 bg-gray-50 transition"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-contain "
              />
              <h3 className="text-3xl font-bold mb-2 ">{service.title}</h3>
              <p className="text-black text-lg">{service.description}</p>
            </div>
          ))}
        </div>
        <div  className='justify-center items-center flex mt-10'>
            <button
            type="submit"
            className=" bg-black text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-orange-400 transition"
          >
            Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
