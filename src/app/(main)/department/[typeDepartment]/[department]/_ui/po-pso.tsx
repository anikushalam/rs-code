import { Card, CardContent } from "@/components/ui/card";
import Content from "@/components/ui/content";
import Heading from "@/components/ui/heading";
import SubHeading from "@/components/ui/sub-heading";
import React from "react";

const PoPso = ({ data }: { data: any }) => {
  return (
    <div>
      <Heading>Program Outcomes and Program Specific Outcomes</Heading>
      {data?.map((item: any) => (
        <Card className="bg-background shadow-none" key={item._id}>
          <CardContent>
            <SubHeading>{item?.title}</SubHeading>
            <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-4">
              <div className="w-full">
                {item?.description && <Content>{item?.description}</Content>}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PoPso;
