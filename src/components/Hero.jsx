import Heroimage from '../assets/image 58.png'
const Hero = () => {
  return (
    <section className="pt-2 pb-20 px-6 text-center bg-white">
      <h1 className="text-4xl md:text-7xl font-bold mb-6">Innovate Without Limits</h1>
      <p className="max-w-3xl mx-auto text-gray-600 mb-8 text-xl">
        Our passionate team crafts innovative solutions for complex business challenges. We partner for success through digital products, data-driven marketing, and expert problem-solving.
      </p>
      <div className="flex justify-center gap-4">
        <a href="#" className="block bg-black text-white text-center px-4 py-2 rounded-md">Contact Us</a>
        <a href="#" className="border border-black text-black text-center px-4 py-2 rounded-md">Our Services</a>
      </div>
      <div className='flex items-center justify-center'>
        <img src={Heroimage} alt="" />
      </div>
    </section>
  );
};

export default Hero;
