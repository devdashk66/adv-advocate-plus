import { cardsData } from "@/data/cardsData";
import Card from "./Card";

const CardsList = () => {
  return (
    <div className="bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 container mx-auto py-16 ">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            icon={card.icon}
            title={card.title}
            description={card.description}
            id={card.id}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsList;
