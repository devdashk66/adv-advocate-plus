"use client";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Avater from "/public/images/avater.webp";

const Card = ({ person }) => (
  <div className="p-6 flex flex-col">
    <Image
      src={Avater}
      alt={person.name}
      width={250}
      height={250}
      className="rounded-full w-24 h-24 mb-4"
    />
    <h3 className="text-xl font-semibold text-default">{person.name}</h3>
    <p className="text-gray-200 py-4">{person.title}</p>
    <p className="text-gray-400">{person.description}</p>
    <a
      href="#"
      className="text-default mt-4 hover:underline hover:text-white duration-200 flex items-center gap-3"
    >
      Learn More <FaArrowRight />
    </a>
  </div>
);

export default Card;
