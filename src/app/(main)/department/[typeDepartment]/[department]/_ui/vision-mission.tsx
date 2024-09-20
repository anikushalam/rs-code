import Content from "@/components/ui/content";
import Heading from "@/components/ui/heading";
import React from "react";

const VisionMission = ({
  vision,
  mission,
}: {
  vision: string;
  mission: string;
}) => {
  return (
    <div className="flex flex-col ">
      <div className="my-2">
        <Heading className="mb-2">Vision</Heading>
        <Content>{vision}</Content>
      </div>
      <div className="my-2">
        <Heading className="mb-2">Mission</Heading>
        <Content>{mission}</Content>
      </div>
    </div>
  );
};

export default VisionMission;
