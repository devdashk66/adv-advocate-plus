import Card from "./Card";

const CardList = () => (
  <div className=" bg-gray-900">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6  container mx-auto">
      {people.map((person) => (
        <Card key={person.id} person={person} />
      ))}
    </div>
  </div>
);

export default CardList;

const people = [
  {
    id: 1,
    name: "Jeremy Walker",
    title: "CEO, Founder, Atty.",
    description:
      "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    image: "/images/jeremy.png", // replace with actual image path
  },
  {
    id: 2,
    name: "Lawson Arnold",
    title: "CEO, Founder, Atty.",
    description:
      "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    image: "/images/lawson.png", // replace with actual image path
  },
  {
    id: 3,
    name: "Patrik White",
    title: "CEO, Founder, Atty.",
    description:
      "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    image: "/images/patrik.png", // replace with actual image path
  },
  {
    id: 4,
    name: "Kathryn Ryan",
    title: "CEO, Founder, Atty.",
    description:
      "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    image: "/images/kathryn.png", // replace with actual image path
  },
  {
    id: 5,
    name: "Jeremy Walker",
    title: "CEO, Founder, Atty.",
    description:
      "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    image: "/images/jeremy.png", // replace with actual image path
  },
  {
    id: 6,
    name: "Lawson Arnold",
    title: "CEO, Founder, Atty.",
    description:
      "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    image: "/images/lawson.png", // replace with actual image path
  },
  {
    id: 7,
    name: "Patrik White",
    title: "CEO, Founder, Atty.",
    description:
      "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    image: "/images/patrik.png", // replace with actual image path
  },
  {
    id: 8,
    name: "Kathryn Ryan",
    title: "CEO, Founder, Atty.",
    description:
      "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    image: "/images/kathryn.png", // replace with actual image path
  },
];
