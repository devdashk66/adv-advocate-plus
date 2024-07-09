const Card = ({ id, icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-start space-y-4">
      <div className="text-4xl text-gold-500 bg-default w-16 h-16 flex items-center justify-center rounded-full">
        {icon}
      </div>
      <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-default">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
      <a href="#" className="text-gold-500 hover:underline">
        Learn More →
      </a>
    </div>
  );
};

export default Card;
