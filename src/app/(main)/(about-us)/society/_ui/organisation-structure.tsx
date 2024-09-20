import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Heading from "@/components/ui/heading";
import PDFViewer from "@/components/ui/PDFViewer";
import { fileShowUrl, fileShowUrl2 } from "@/lib/BaseUrl";
import { FileIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const OrganisationStructure = ({ data }: { data: string }) => {
  const [viewPdf, setViewPdf] = useState(false);
  return (
    <div className="space-y-4">
      <Heading>Organisation Structure</Heading>
      {viewPdf ? (
        <PDFViewer file={data} setActive={setViewPdf} />
      ) : (
        <Card className="w-full md:w-1/2">
          <CardContent className="flex items-center justify-between p-6">
            <div className="flex items-center space-x-4">
              <FileIcon className="h-10 w-10 text-blue-500" />
              <div>
                <p className="font-medium">Organisation Structure</p>
                <p className="text-sm text-gray-500">PDF Document</p>
              </div>
            </div>
            <Button
              onClick={() => setViewPdf(true)}
              className="border-primary hover:border-primary hover:border-[2px]  hover:text-primary "
            >
              View
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default OrganisationStructure;
