import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const achievements = [
  {
    title: "Congratulations to Dr. D. P. Agrawal for Patent Grant",
    description:
      "Patent has been granted to Dr. D. P. Agrawal of Department of Mechanical...",
    image: "/api/placeholder/400/300",
  },
  {
    title: "Our Pride Alumnus - Mr. Sujit Bhosale",
    description:
      "Our Pride Alumnus - Mr. Sujit Bhosale - Young and Dynamic Computer Engineer...",
    image: "/api/placeholder/400/300",
  },
  {
    title: "Congratulations for Placement in Zensoft",
    description:
      "Congratulations to Shubham Shitole from BE Information Technology(2020-21) for...",
    image: "/api/placeholder/400/300",
  },
];

const AchievementCard = ({ title, description, image }: any) => (
  <Card className="w-full h-full flex justify-between flex-col bg-background">
    <CardHeader>
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover mb-4 rounded-t-lg"
      />
    </CardHeader>
    <CardContent>
      <CardTitle className="text-lg font-semibold mb-2">{title}</CardTitle>
      <p className="text-sm text-gray-600">{description}</p>
    </CardContent>
    <CardFooter className="flex justify-center items-center ">
      <Button
        variant="outline"
        className="w-full bg-primary text-primary-foreground"
      >
        READ DETAILS →
      </Button>
    </CardFooter>
  </Card>
);

const AchievementsSection = () => (
  <div className="bg-gray-100 py-12">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-4">Achievements</h2>
      <p className="text-center text-gray-600 mb-8">
        Congratulations from Principal, Staff & Students to Achievers.
      </p>
      <Carousel className="w-full  mx-auto">
        <CarouselContent className=" flex gap-2 mx-10">
          {achievements.map((achievement, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3 "
            >
              <AchievementCard {...achievement} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </div>
);

export default AchievementsSection;
