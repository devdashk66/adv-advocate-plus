"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "John Doe",
    comment:
      "Excellent service and support! I had a great experience with this team. They were attentive, responsive, and really understood my needs.",
    title: "Software Engineer",
    photo: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Jane Smith",
    comment:
      "Very professional and dedicated team. They went above and beyond to ensure everything was handled efficiently and effectively.",
    title: "Marketing Manager",
    photo: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Michael Johnson",
    comment:
      "Highly recommend their services! Their expertise and dedication helped us achieve our goals. A truly fantastic experience.",
    title: "Product Designer",
    photo: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Emily Davis",
    comment:
      "Great experience from start to finish. They provided excellent guidance and support throughout the entire process.",
    title: "HR Specialist",
    photo: "https://i.pravatar.cc/150?img=4",
  },
  {
    name: "William Brown",
    comment:
      "They really care about their clients. I felt valued and appreciated every step of the way. Their commitment is unparalleled.",
    title: "Financial Advisor",
    photo: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Ava Martinez",
    comment:
      "Outstanding advocacy and support. Their knowledge and attention to detail ensured we were well-prepared for every situation.",
    title: "Legal Consultant",
    photo: "https://i.pravatar.cc/150?img=6",
  },
  {
    name: "James Wilson",
    comment:
      "Knowledgeable and trustworthy. They provided invaluable insights and advice that helped us navigate complex issues with ease.",
    title: "Business Analyst",
    photo: "https://i.pravatar.cc/150?img=7",
  },
  {
    name: "Sophia Moore",
    comment:
      "Prompt and effective communication. They kept us informed at every stage and were always available to address our concerns.",
    title: "Project Manager",
    photo: "https://i.pravatar.cc/150?img=8",
  },
  {
    name: "Benjamin Taylor",
    comment:
      "They exceeded my expectations. The team's professionalism and dedication resulted in a successful outcome beyond what I had hoped for.",
    title: "Entrepreneur",
    photo: "https://i.pravatar.cc/150?img=9",
  },
  {
    name: "Isabella Anderson",
    comment:
      "Very supportive and understanding. They took the time to understand our unique needs and provided tailored solutions that worked perfectly.",
    title: "Freelance Writer",
    photo: "https://i.pravatar.cc/150?img=10",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">
          <span className="text-default">Happy</span> Clients
        </h2>
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative w-full"
        >
          <CarouselContent>
            {testimonials.map((item, index) => (
              <CarouselItem
                key={item.name}
                className="md:basis-1/2 lg:basis-1/3 p-4 justify-center items-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 50 }}
                  className="bg-gray-800 rounded-lg shadow-md p-6"
                >
                  <Card
                    comment={item.comment}
                    name={item.name}
                    title={item.title}
                    image={item.photo}
                  />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-5 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 rounded-full text-white cursor-pointer" />
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 rounded-full text-white cursor-pointer" />
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;

const Card = ({ comment, name, title, image }) => {
  return (
    <div className="hover:scale-105 duration-300">
      <div className="flex items-center space-x-4">
        <Image
          width={50}
          height={50}
          src={image}
          alt={name}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div className="text-left">
          <p className="font-bold text-default text-xl">{name}</p>
          <p className="text-sm">{title}</p>
        </div>
      </div>
      <p className="text-lg mt-4 text-gray-400">{comment}</p>
    </div>
  );
};
