import React, { useEffect, useState } from "react";
import Heading from "@/components/ui/heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PDFViewer from "@/components/ui/PDFViewer";
import { FileIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
const IQACReports = ({
  aqar,
  minutesOfMeetings,
}: {
  aqar: any;
  minutesOfMeetings: any;
}) => {
  const [viewPdf, setViewPdf] = useState<any>();
  return (
    <div>
      <Heading className="mb-2">IQAC Reports</Heading>
      <Tabs defaultValue="aqar" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-primary text-primary-foreground">
          <TabsTrigger value="aqar">AQAR</TabsTrigger>
          <TabsTrigger value="mom">Minutes of Meetings</TabsTrigger>
        </TabsList>
        <TabsContent value="aqar" className="mt-4">
          <div className="space-y-4">
            {viewPdf ? (
              <PDFViewer file={viewPdf} setActive={setViewPdf} />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {aqar?.map((item: any) => (
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
                        onClick={() => setViewPdf(item?.image)}
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
        </TabsContent>
        <TabsContent value="mom" className="mt-4">
          <div className="space-y-4">
            {viewPdf ? (
              <PDFViewer file={viewPdf} setActive={setViewPdf} />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {minutesOfMeetings?.map((item: any) => (
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
                        onClick={() => setViewPdf(item?.image)}
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default IQACReports;
