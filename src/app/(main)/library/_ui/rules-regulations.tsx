import Content from "@/components/ui/content";
import Heading from "@/components/ui/heading";
import React from "react";

const RulesAndRegulations = ({ rules }: { rules: string }) => {
  return (
    <div>
      <Heading>Rules and Regulations</Heading>
      <Content>{rules}</Content>
    </div>
  );
};

export default RulesAndRegulations;
