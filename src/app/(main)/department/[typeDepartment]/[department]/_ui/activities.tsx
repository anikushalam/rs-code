import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useRndActivities } from "@/api/api-hooks";
import OneActivities from "./one-activities";
import Heading from "@/components/ui/heading";

interface Activity {
  _id: string;
  activity_name: string;
  activity_department: { dName: string };
  activity_batch: { batchName: string };
  activity_type: string;
  activity_staff: {
    staffFirstName?: string;
    staffMiddleName?: string;
    staffLastName?: string;
  };
}
interface ActiviteisProps {
  did: string;
}

const ActivitiesTable: React.FC<ActiviteisProps> = ({
  did,
}: {
  did: string;
}) => {
  const [active, setActive] = useState<string | null>(null);
  const { data: activities } = useRndActivities({
    sid: did,
    page: 1,
    limit: 1000,
    search: "",
    flow: "DEPARTMENT",
  });

  if (active) {
    return <OneActivities id={active} setActive={setActive} />;
  }

  return (
    <div className="container mx-auto py-10">
      <Heading className="mb-4">Activities</Heading>
      <div className="rounded-md border">
        <Table className="border-black/80 border-[1px]">
          <TableHeader className="bg-primary text-primary-foreground">
            <TableRow>
              <TableHead className="text-primary-foreground">Sr. No.</TableHead>
              <TableHead className="text-primary-foreground">Name</TableHead>
              <TableHead className="text-primary-foreground">
                Department
              </TableHead>
              <TableHead className="text-primary-foreground">Batch</TableHead>
              <TableHead className="text-primary-foreground">Type</TableHead>
              <TableHead className="text-primary-foreground">
                Staff Name
              </TableHead>
              <TableHead className="text-primary-foreground">Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities?.all_act?.map((item: Activity, index: number) => (
              <TableRow
                key={item._id}
                className={` hover:bg-card hover:text-primary-foreground ${
                  index & 1 ? "bg-gray-100" : ""
                }`}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.activity_name}</TableCell>
                <TableCell>{item.activity_department.dName}</TableCell>
                <TableCell>{item.activity_batch.batchName}</TableCell>
                <TableCell>{item.activity_type}</TableCell>
                <TableCell>
                  {`${item.activity_staff.staffFirstName || ""} ${
                    item.activity_staff.staffMiddleName || ""
                  } ${item.activity_staff.staffLastName || ""}`.trim()}
                </TableCell>
                <TableCell>
                  <Button variant="link" onClick={() => setActive(item._id)}>
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ActivitiesTable;
