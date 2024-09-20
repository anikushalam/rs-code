import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Heading from "@/components/ui/heading";
import PDFViewer from "@/components/ui/PDFViewer";
import { FileIcon } from "lucide-react";
import React, { useState } from "react";

const Syllabus = ({ syllabus }: { syllabus: any }) => {
  const [viewPdf, setViewPdf] = useState<any>();
  console.log(syllabus);
  return (
    <div className="space-y-4">
      <Heading>Syllabus</Heading>
      {viewPdf ? (
        <PDFViewer file={viewPdf} setActive={setViewPdf} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {syllabus?.map((item: any) => (
            <Card className="w-full" key={item?._id}>
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center space-x-4">
                  <FileIcon className="h-10 w-10 text-blue-500" />
                  <div>
                    <p className="font-medium">{item?.name}</p>
                    <p className="text-sm text-gray-500">PDF Document</p>
                  </div>
                </div>
                <Button
                  onClick={() => setViewPdf(item?.attach)}
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

export default Syllabus;