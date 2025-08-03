import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import user from '../assets/user2.png';

// Testimonials Data
const testimonials = [
  {
    name: 'Andy Smith',
    username: '@andysmith',
    image: user,
    message:
      'We meticulously target specific keywords your audience uses, ensuring every click brings highly relevant traffic directly to your site. This isn’t guesswork.',
  },
  {
    name: 'Sarah Johnson',
    username: '@sarahj',
    image: user,
    message:
      'Kanavu Labs helped us scale our startup within 6 months. Their tech and marketing strategies are top-notch.',
  },
  {
    name: 'Michael Lee',
    username: '@michaellee',
    image: user,
    message:
      'The team is incredibly talented and professional. Our MVP was launched ahead of schedule and exceeded expectations.',
  },
  {
    name: 'Priya Ramesh',
    username: '@priyar',
    image: user,
    message:
      'We were blown away by their infrastructure design and SEO expertise. Highly recommended!',
  },
];

const Servicestestinimonials = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[index];

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          What our great customers say
        </h2>

        <div className="bg-gray-50 p-6 md:p-10 rounded-lg flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-300">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <img
              src={current.image}
              alt={current.name}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-black object-cover mx-auto md:mx-0"
            />
          </div>

          {/* Message + Info */}
          <div className="flex-1 text-left">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              “{current.message}”
            </p>
            <h3 className="text-xl font-bold uppercase">{current.name}</h3>
            <p className="text-gray-500 text-md">{current.username}</p>
          </div>

          {/* Controls */}
          <div className="flex md:flex-col gap-4">
            <button
              onClick={prevSlide}
              className="p-3 border border-black rounded-md hover:bg-black hover:text-white transition"
              aria-label="Previous"
            >
              <ArrowLeftIcon className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 border border-black rounded-md hover:bg-black hover:text-white transition"
              aria-label="Next"
            >
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicestestinimonials;
