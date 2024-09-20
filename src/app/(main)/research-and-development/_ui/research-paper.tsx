import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import OnePaper from "./OnePaper";
import { Button } from "@/components/ui/button";
import { FileIcon } from "lucide-react";
import Heading from "@/components/ui/heading";

interface RndPaperProps {
  data: Array<{
    _id: string;
    head_name: string;
  }>;
}

const RndPaper: React.FC<RndPaperProps> = ({ data }) => {
  const [active, setActive] = useState<string | null>(null);

  const handleClick = (itemId: string) => {
    setActive(itemId);
  };

  return (
    <div className="space-y-4">
      <Heading>Research Papers</Heading>
      {active ? (
        <OnePaper active={active} setActive={setActive} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data?.map((item, index) => (
            <Card className="w-full" key={item?._id}>
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center space-x-4">
                  <FileIcon className="h-10 w-10 text-blue-500" />
                  <div>
                    <p className="font-medium">{item?.head_name}</p>
                  </div>
                </div>
                <Button
                  onClick={() => handleClick(item?._id)}
                  className="border-primary hover:border-primary hover:border-[2px]  hover:text-primary "
                >
                  View
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default RndPaper;
