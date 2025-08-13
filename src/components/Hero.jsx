import Heroimage from "../assets/image 58.png";

const Hero = () => {
  return (
    <section className="md:pt-10 pt-0 pb-20 px-6 text-center bg-white">
      <h1
        className="text-4xl md:text-7xl max-w-6xl font-bold mb-6 mx-auto"
        data-aos="fade-down"
      >
        Accelerate Your Digital Growth with{" "}
        <span className="text-orange-500">Kanavu Labs.</span>
      </h1>

      <p
        className="max-w-2xl mx-auto text-gray-600 mb-8 text-xl"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        We are an agile team of passionate innovators dedicated to crafting
        digital products that solve complex business challenges and drive
        measurable results.
      </p>

      <div
        className="flex justify-center gap-4"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        <a
          href="#"
          className="block bg-black hover:bg-orange-500 text-white text-center px-4 py-2 rounded-md transition-transform transform hover:scale-105"
        >
          Contact Us
        </a>
        <a
          href="#"
          className="border border-black text-black text-center hover:text-orange-500 px-4 py-2 rounded-md transition-transform transform hover:scale-105"
        >
          Our Services
        </a>
      </div>

      <div
        className="flex items-center justify-center mt-10"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <img
          src={Heroimage}
          alt="Hero section illustration"
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
