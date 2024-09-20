import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import PDFViewer from "@/components/ui/PDFViewer";
import { useRndMouOne } from "@/api/api-hooks";

interface CollapsibleDivProps {
  item: any;
  clearActive: (attach: string) => void;
}

const CollapsibleDiv: React.FC<CollapsibleDivProps> = ({
  item,
  clearActive,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="mt-2">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <CardHeader className="flex flex-row items-center justify-between p-2 bg-primary text-primary-foreground cursor-pointer">
            <CardTitle className="text-lg">{item.batch?.batchName}</CardTitle>
            {isOpen ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent className="p-4 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col md:flex-row gap-2">
                <p className="text-sm font-semibold">Institution Industry:</p>
                <p className="text-sm">{item?.institution_industry}</p>
              </div>
              <div className="flex flex-col md:flex-row gap-2">
                <p className="text-sm font-semibold">Organization Name:</p>
                <p className="text-sm">{item?.org_name}</p>
              </div>
              <div className="flex flex-col md:flex-row gap-2">
                <p className="text-sm font-semibold">Durations:</p>
                <p className="text-sm">{item?.durations}</p>
              </div>
              <div className="flex flex-col md:flex-row gap-2">
                <p className="text-sm font-semibold">Staff Count:</p>
                <p className="text-sm">{item?.staff_count}</p>
              </div>
              <div className="flex flex-col md:flex-row gap-2">
                <p className="text-sm font-semibold">Student Count:</p>
                <p className="text-sm">{item?.student_count}</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between mt-4">
              <Button
                variant="secondary"
                onClick={() => clearActive(item?.attach)}
              >
                Download
              </Button>
              <Button asChild>
                <Link href={item?.link}>
                  <ExternalLink className="mr-2 h-4 w-4" /> Visit
                </Link>
              </Button>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

interface OneMouProps {
  id: string;
  setActive: (value: string | null) => void;
  batch: string;
}

const OneMou: React.FC<OneMouProps> = ({ id, setActive, batch }) => {
  const { data: rndMouOne } = useRndMouOne({
    id: id,
    batch: batch,
    page: 1,
    limit: 1000,
    search: "",
  });

  const [active, clearActive] = useState<string | false>(false);
  return (
    <div>
      {active ? (
        <PDFViewer setActive={clearActive} file={active} />
      ) : (
        <div>
          <Button
            variant="outline"
            onClick={() => setActive(null)}
            className="bg-primary text-primary-foreground hover:bg-background hover:text-primary border-primary border-[2px]"
          >
            Back
          </Button>
          {rndMouOne?.all_mou?.map((item: any, index: number) => (
            <CollapsibleDiv key={index} item={item} clearActive={clearActive} />
          ))}
        </div>
      )}
    </div>
  );
};

export default OneMou;
