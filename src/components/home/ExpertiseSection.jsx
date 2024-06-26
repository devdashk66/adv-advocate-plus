"use client";
// components/ExpertiseSection.js
import {
  FaBriefcase,
  FaChessKnight,
  FaGavel,
  FaLightbulb,
} from "react-icons/fa";

const icons = {
  "Labor and Employment": FaBriefcase,
  "Corporate & Civil Litigation": FaGavel,
  "Intellectual Property Law": FaLightbulb,
  "Criminal Prosecution and Defense": FaChessKnight,
};
const expertises = [
  {
    title: "Labor and Employment",
    description:
      "Separated they live in. Separated they live in Bookmarks grove right at the coast of the Semantics, a large language ocean.",
  },
  {
    title: "Corporate & Civil Litigation",
    description:
      "Separated they live in. Separated they live in Bookmarks grove right at the coast of the Semantics, a large language ocean.",
  },
  {
    title: "Intellectual Property Law",
    description:
      "Separated they live in. Separated they live in Bookmarks grove right at the coast of the Semantics, a large language ocean.",
  },
  {
    title: "Criminal Prosecution and Defense",
    description:
      "Separated they live in. Separated they live in Bookmarks grove right at the coast of the Semantics.",
  },
];

const ExpertiseSection = () => {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">
          More <span className="text-default">Expertise</span>
        </h2>
        <div className="flex flex-wrap justify-center">
          {expertises.map((expertise) => (
            <ExpertiseCard
              key={expertise.title}
              title={expertise.title}
              description={expertise.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;

const ExpertiseCard = ({ title, description }) => {
  const Icon = icons[title];

  return (
    <div className="md:basis-2/4 lg:basis-1/4 ">
      <div className="bg-white rounded-lg shadow-lg p-6  py-12 m-4 flex flex-col">
        <div className="w-16 h-16 bg-default flex items-center justify-center rounded-full text-4xl mb-4">
          <Icon />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-default">{title}</h3>
        <p className="text-gray-500 mb-4">{description}</p>
        <a href="#" className="hover:text-default text-black font-semibold">
          Learn More &rarr;
        </a>
      </div>
    </div>
  );
};
