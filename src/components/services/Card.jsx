"use client";

import { motion } from "framer-motion";

const Card = ({ id, icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 100, delay: 0.2 * id }}
      className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-start space-y-4"
    >
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
    </motion.div>
  );
};

export default Card;
