import Content from "@/components/ui/content";
import Heading from "@/components/ui/heading";
import React from "react";

const Affiliation = ({ affiliation }: { affiliation: any }) => {
  return (
    <div className="my=2">
      <Heading>Affiliations</Heading>
      <div className="my-2">
        {affiliation?.map((item: any, index: number) => (
          <div className="my-2 flex flex-col" key={index}>
            <h3 className="text-xl font-semibold underline">{item.name}</h3>
            <Content>{item.info}</Content>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Affiliation;
