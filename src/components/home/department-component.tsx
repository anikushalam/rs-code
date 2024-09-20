import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";
import { useDepartmentSiteInfo } from "@/api/api-hooks";
import TruncateText from "../ui/truncate";

const DepartmentComponent = ({ did, name }: { did: string; name: string }) => {
  const { data: departmentInfo } = useDepartmentSiteInfo(did);
  console.log(departmentInfo);
  return (
    <Card className="bg-background shadow-md m-2 sm:m-4">
      <CardHeader className="h-[80px] sm:h-[100px] box-border mb-2">
        <CardTitle className="text-center mb-1">{name}</CardTitle>
      </CardHeader>
      <CardContent className="h-[150px] sm:h-[200px] flex items-center justify-center text-xs sm:text-sm">
        <p className="text-sm md:text-base line-clamp-5">
          {departmentInfo?.department_site?.department_hod_message && (
            <TruncateText
              text={departmentInfo?.department_site?.department_hod_message}
            ></TruncateText>
          )}
        </p>
      </CardContent>
      <CardFooter className="flex justify-end flex-shrink-0">
        <Link href={`department/redirect/${did}`}>
          <Button className="hover:opacity-95 hover:bg-primary text-xs md:text-sm lg:text-base">
            Read More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default DepartmentComponent;
