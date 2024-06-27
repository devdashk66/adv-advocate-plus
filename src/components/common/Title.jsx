"use client";
import { motion } from "framer-motion";

const Title = ({ text = "Page Title" }) => {
  return (
    <div className="text-center bg-gray-900 bg-opacity-95 text-white py-24">
      <motion.h3
        className="text-2xl md:text-4xl lg:text-6xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {text}
      </motion.h3>
    </div>
  );
};

export default Title;
