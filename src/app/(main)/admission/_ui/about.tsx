import Content from "@/components/ui/content";
import Heading from "@/components/ui/heading";
import React from "react";

const About = ({ data }: { data: string }) => {
  return (
    <div>
      <Heading>About</Heading>
      <Content>{data}</Content>
    </div>
  );
};

export default About;
