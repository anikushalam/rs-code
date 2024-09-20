import { useRndMouBatch } from "@/api/api-hooks";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Heading from "@/components/ui/heading";
import { FileIcon } from "lucide-react";
import React from "react";
import OneMou from "./one-mou";

const MouCollaboration = ({ did }: { did: string }) => {
  const [mou, setMou] = React.useState<any>();
  const { data: mouBatch } = useRndMouBatch({
    id: did,
    page: 1,
    limit: 1000,
    search: "",
  });
  return (
    <div className="space-y-4">
      <Heading>MOU and Collaborations</Heading>
      {mou ? (
        <OneMou setActive={setMou} id={did} batch={mou} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {mouBatch?.all_batch?.map((item: any) => (
            <Card className="w-full" key={item?._id}>
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center space-x-4">
                  <FileIcon className="h-10 w-10 text-blue-500" />
                  <div>
                    <p className="font-medium">{item?.u_batch?.batchName}</p>
                  </div>
                </div>
                <Button
                  onClick={() => setMou(item?.u_batch?._id)}
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

export default MouCollaboration;
