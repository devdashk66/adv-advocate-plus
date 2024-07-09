"use client";

import FAQItem from "./FAQItem";

const FAQList = ({ faqs, openIndex, toggleOpen }) => (
  <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
    {faqs.map((faq, index) => (
      <FAQItem
        key={index}
        question={faq.question}
        answer={faq.answer}
        isOpen={openIndex === index}
        toggleOpen={() => toggleOpen(index)}
      />
    ))}
  </div>
);

export default FAQList;
