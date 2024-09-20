"use client";
import { useAllEvents } from "@/api/api-hooks";
import { useStore } from "@/store";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { formatDate } from "@/lib/utils";
import { ArrowUpRight, Eye } from "lucide-react";
import Link from "next/link";
import { ScrollArea } from "../ui/scroll-area";
import Heading from "../ui/heading";
import Image from "next/image";
import { imageShowUrl } from "@/lib/BaseUrl";
import Content from "../ui/content";

const EventAccrediationVisionMission = ({
  iso_certificate,
}: {
  iso_certificate: any;
}) => {
  const eid = useStore((state) => state.ids.eventId);
  const { data: allEvents } = useAllEvents(eid);
  // console.log(allEvents);
  console.log(iso_certificate);
  const notices = [
    {
      id: 1,
      title: "Campus Drive of Kirloskar for MECH 2022 Batch on 12th July",
    },
    {
      id: 2,
      title:
        "Campus Drive of Everest Ltd for MECH & Electrical on 8th July 2022",
    },
    {
      id: 3,
      title:
        "Campus Drive of Walchandnagar Industries for MECH on 15th June 2022",
    },
    {
      id: 4,
      title:
        "Campus Drive of Drive of ApMoSys Technologies for All the Branches on 7th...",
    },
    {
      id: 5,
      title: "CRETECHNOVA-2K24",
    },
    {
      id: 6,
      title: "Campus Drive of Kirloskar for MECH 2022 Batch on 12th July",
    },
    {
      id: 7,
      title:
        "Campus Drive of Everest Ltd for MECH & Electrical on 8th July 2022",
    },
    {
      id: 8,
      title:
        "Campus Drive of Walchandnagar Industries for MECH on 15th June 2022",
    },
    {
      id: 9,
      title:
        "Campus Drive of Drive of ApMoSys Technologies for All the Branches on 7th...",
    },
    {
      id: 10,
      title: "CRETECHNOVA-2K24",
    },
    // Add more notices as needed
  ];
  return (
    <div className="sm:m-10 m-2">
      <div className="flex justify-between items-center  flex-col md:flex-row">
        <Card className="w-full max-w-md h-[350px] bg-background">
          <Heading>Upcoming Events</Heading>
          <CardContent className="p-0 bg-background">
            <ScrollArea className="h-[300px] w-full rounded-md border">
              {allEvents?.all_events?.map((event: any) => (
                <div
                  key={event._id}
                  className="flex items-center p-4 border-b last:border-b-0"
                >
                  <div className="flex-grow pr-4">
                    <p className="text-sm font-medium">{event.event_name}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <Eye className="h-5 w-5 text-blue-500" />
                  </div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
        <Card className="w-full max-w-md h-[350px] bg-background">
          <Heading className="mb-2">Affiliation</Heading>
          <CardContent className="p-0 bg-background">
            <div className="grid grid-cols-2 gap-4 justify-center items-center mb-2">
              {iso_certificate?.map((certificate: any) => (
                <Card
                  key={certificate?._id}
                  className="relative overflow-hidden bg-background w-[145px]"
                >
                  <CardContent className="p-0 relative">
                    <Image
                      src={`${imageShowUrl}/${certificate.image}`}
                      alt={`${certificate.name} logo`}
                      width={150}
                      height={150}
                      // className="w-1/2 h-auto object-contain"
                    />
                    <div className="absolute bottom-0 left-0 bg-primary text-primary-foreground p-2 w-full text-center">
                      <Link
                        className="font-semibold block"
                        href={certificate?.link}
                      >
                        {certificate.name}
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="w-full max-w-md h-[350px] bg-background">
          <Heading>Our Vision</Heading>
          <Content>this is vision</Content>
          <Heading>Our Mission</Heading>
          <Content>this is mission</Content>
        </Card>
      </div>
    </div>
  );
};

export default EventAccrediationVisionMission;
