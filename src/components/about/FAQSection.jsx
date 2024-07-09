"use client";

import { useState } from "react";
import FAQList from "./FAQList";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "HOW TO DOWNLOAD AND REGISTER?",
      answer:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      question: "HOW TO CREATE YOUR PAYPAL ACCOUNT?",
      answer:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      question: "HOW TO LINK YOUR PAYPAL AND BANK ACCOUNT?",
      answer:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
  ];

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <FAQList faqs={faqs} openIndex={openIndex} toggleOpen={toggleOpen} />
      </div>
    </div>
  );
};

export default FAQSection;
