import React, { useState } from "react";

const faqItems = [
  {
    question: "How big is the Kanavu Labs team?",
    answer:
      "We go beyond basic optimization, meticulously refining your content and technical foundation. This ensures search engines effortlessly find and showcase your business, driving highly relevant potential customers directly to you. Stop competing for visibility; start dominating it.",
  },
  {
    question: "How many projects have you completed",
    answer:
      "We have successfully completed 150+ projects across various domains including SaaS, healthcare, e-commerce, and fintech.",
  },
  {
    question: "How can I get a quote?",
    answer:
      "You can fill out the contact form above or email us at support@kanavulabs.com with your project details.",
  },
  {
    question: "What are your operational hours?",
    answer:
      "Our team is available Monday to Friday, 9AM – 7PM IST. For urgent needs, we also respond during weekends.",
  },
  {
    question: "Do you offer help in urgent projects?",
    answer:
      "Yes, we accommodate urgent or priority-based projects depending on team availability. Reach out to us directly.",
  },
  {
    question: "What is the best way to get in touch with you?",
    answer:
      "The contact form on our site is the fastest way. You can also email or call us for quick queries.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-[#f5f5f5] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 text-medium md:text-xl mb-10 max-w-2xl mx-auto">
          We go beyond basic optimization, meticulously refining your content and technical foundation. This ensures search engines effortlessly find and showcase your business.
        </p>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm text-xl"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 text-lg py-4 font-medium text-left focus:outline-none"
              >
                {item.question}
                <span>{activeIndex === index ? "−" : "+"}</span>
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-4 text-gray-700 text-sm md:text-base">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
