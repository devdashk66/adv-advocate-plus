"use client";
// components/CTA.js
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Bg from "/public/images/hero.jpeg";

const CTA = () => {
  return (
    <section className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative flex items-center justify-center"
          >
            <Image
              src={Bg}
              width={1080}
              height={550}
              alt="Consultation"
              className="w-full h-96 object-cover opacity-75"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Let&#x2019;s get started. Call us Now for a Free Consultation
              </h2>
              <Link
                href="/contact"
                className="mt-4 bg-default text-white font-semibold py-3 px-6 rounded-md"
              >
                CALL US NOW
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
