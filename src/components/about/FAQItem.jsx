"use client";

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => (
  <div className="border-b border-gray-700">
    <button
      className={`w-full flex justify-between items-center p-4 ${
        isOpen ? "bg-default rounded" : ""
      }`}
      onClick={toggleOpen}
    >
      <span className="text-white text-left">{question}</span>
      <span className="text-white">{isOpen ? "-" : "+"}</span>
    </button>
    {isOpen && (
      <div className="p-4 bg-gray-800 text-white">
        <p>{answer}</p>
      </div>
    )}
  </div>
);

export default FAQItem;
