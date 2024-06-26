"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section
      className="flex items-center justify-center h-screen bg-cover bg-center -mt-20 "
      style={{
        backgroundImage:
          "linear-gradient(#ffffff30, #ffffff30), url('/images/hero.jpeg')",
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="bg-black bg-opacity-50 p-8 rounded-lg md:text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            We <span className="text-default">Defend</span> Your Rights
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Your trusted partner in legal matters. Get the support you need with
            our professional services.
          </p>
          <Button>
            <Link href="/contact">Free Consultation</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
