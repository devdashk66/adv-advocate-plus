"use client";
import CountUp from "react-countup";

const ExperienceSection = () => {
  return (
    <div className="bg-gray-900 text-gray-200 py-24">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-start lg:gap-5">
        <div className="mb-8 md:mb-0 md:w-1/2">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            <span className="text-default">50 Years</span> of Experience in
            Various Cases
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-1/2">
          <ExperienceSectionCard
            number={90}
            title="Awards"
            description="Separated they live in Bookmarksgrove right at the coast of the Semantics."
            delay={0}
          />
          <ExperienceSectionCard
            number={3000}
            title="Cases Wins"
            description="Separated they live in Bookmarksgrove right at the coast of the Semantics."
            delay={0.3}
          />
          <ExperienceSectionCard
            number={2000}
            title="Clients"
            description="Separated they live in Bookmarksgrove right at the coast of the Semantics."
            delay={0.6}
          />
          <ExperienceSectionCard
            number={200}
            title="Attorneys"
            description="Separated they live in Bookmarksgrove right at the coast of the Semantics."
            delay={0.9}
          />
        </div>
      </div>
    </div>
  );
};

const ExperienceSectionCard = ({ number, title, description, delay }) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-6xl font-bold text-default">
        <CountUp end={number} duration={3} />+
      </h3>
      <p className="text-xl font-semibold">{title}</p>
      <p className="text-white/60">{description}</p>
    </div>
  );
};

export default ExperienceSection;
