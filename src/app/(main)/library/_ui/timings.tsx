import Content from "@/components/ui/content";
import Heading from "@/components/ui/heading";
import React from "react";

const Timings = ({ timings }: { timings: string }) => {
  return (
    <div>
      <Heading>Timings</Heading>
      <Content>{timings}</Content>
    </div>
  );
};

export default Timings;
