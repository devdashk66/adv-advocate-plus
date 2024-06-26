"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaBalanceScale,
  FaBuilding,
  FaBusinessTime,
  FaGavel,
} from "react-icons/fa";
import { Button } from "../ui/button";

const PracticeAreas = () => {
  return (
    <div className="bg-gray-900 text-gray-200 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Our <span className="text-default">Practice Areas</span>
          </h2>
          <p className="mb-3">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in.
          </p>
          <p className="mb-10">
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.
          </p>
          <Button className="rounded-full">Learn More</Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <PracticeAreaCard
            icon={<FaBalanceScale size={30} />}
            title="Banking and Finance Law"
            description="Far far away, behind the word mountains, far from the countries."
            delay=".3"
          />
          <PracticeAreaCard
            icon={<FaBusinessTime size={30} />}
            title="Commercial Law"
            description="Far far away, behind the word mountains, far from the countries."
            delay=".6"
          />
          <PracticeAreaCard
            icon={<FaBuilding size={30} />}
            title="Corporate Law"
            description="Far far away, behind the word mountains, far from the countries."
            delay=".9"
          />
          <PracticeAreaCard
            icon={<FaGavel size={30} />}
            title="Criminal Law"
            description="Far far away, behind the word mountains, far from the countries."
            delay="1.2"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="mt-6"
        >
          <Link href="/services" className="text-default font-bold">
            More Practice Areas &rarr;
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

const PracticeAreaCard = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 100, delay }}
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-start"
    >
      <div className="bg-gray-700 p-4 rounded-full mr-4">{icon}</div>
      <div>
        <h3 className="text-xl text-default font-bold mb-2">{title}</h3>
        <p className="text-white/60">{description}</p>
      </div>
    </motion.div>
  );
};

export default PracticeAreas;
