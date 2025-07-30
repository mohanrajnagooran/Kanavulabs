import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import user from '../assets/user2.png'

// Sample testimonial data
const testimonials = [
  {
    name: 'Andy Smith',
    username: '@andysmith',
    image: user, // replace with actual image paths
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
    <section className="bg-white py-10 md:py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          What our great customers say
        </h2>

        <div className="bg-gray-50 p-8 rounded-lg flex flex-col mb-14 md:flex-row items-center justify-between gap-8 transition-all duration-300">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <img
              src={current.image}
              alt={current.name}
              className="w-62 h-62 rounded-full border-4 border-black object-center"
            />
          </div>

          {/* Testimonial Content */}
          <div className="text-left flex-1">
            <p className="text-lg text-gray-700 mb-6">“{current.message}”</p>
            <div>
              <h3 className="text-2xl uppercase font-bold">{current.name}</h3>
              <p className="text-gray-500 text-xl font-semibold">{current.username}</p>
            </div>
          </div>

          {/* Arrows */}
          <div className="flex gap-4 md:mt-30">
            <button
              onClick={prevSlide}
              className="p-3 border border-black rounded-md hover:bg-black hover:text-white transition"
            >
              <ArrowLeftIcon className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 bg-black text-white rounded-md hover:opacity-90 transition"
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
