import React from "react";
import { User, UserRound } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import style from "./alumini.module.css";
const testimonials = [
  {
    name: "Richi Rich",
    role: "Student",
    content:
      '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laudantium atque odit. Ullam delectus corrupti accusantium amet omnis voluptatem ipsa provident iste illo vel atque recusandae qui suscipit consectetur, impedit exercitationem? Dolorum, suscipit praesentium!"',
    avatar: <User className="w-12 h-12" />,
  },
  {
    name: "Richi Rich",
    role: "Student",
    content:
      '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laudantium atque odit. Ullam delectus corrupti accusantium amet omnis voluptatem ipsa provident iste illo vel atque recusandae qui suscipit consectetur, impedit exercitationem? Dolorum, suscipit praesentium!"',
    avatar: <UserRound className="w-12 h-12" />,
  },
  {
    name: "Richi Rich",
    role: "Student",
    content:
      '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laudantium atque odit. Ullam delectus corrupti accusantium amet omnis voluptatem ipsa provident iste illo vel atque recusandae qui suscipit consectetur, impedit exercitationem? Dolorum, suscipit praesentium!"',
    avatar: <User className="w-12 h-12" />,
  },
];

const TestimonialCard = ({ name, role, content, avatar }: any) => (
  <div
    className={`bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform skew-y-5  ${style.skewedContainer}`}
  >
    <div className={`flex flex-col items-center ${style.skewedBody}`}>
      <div>
        <div className="mb-4 text-gray-600">{avatar}</div>
        <p className="text-gray-800 mb-4">{content}</p>
        <h3 className="font-bold">{name}</h3>
        <p className="text-blue-500">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <div className="bg-gray-100 py-12">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
      <Carousel opts={{ align: "start" }} className="w-full ">
        <CarouselContent className="-ml-2 sm:-ml-4 flex gap-3 mx-10">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <TestimonialCard {...testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </div>
);

export default Testimonials;
