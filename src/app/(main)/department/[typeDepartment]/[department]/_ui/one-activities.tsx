import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import PDFViewer from "@/components/ui/PDFViewer";
import { useOneRndActivity } from "@/api/api-hooks";

interface OneActivitiesProps {
  id: string;
  setActive: (value: string | null) => void;
}

interface OtherAttachment {
  _id: string;
  name: string;
  attach: string;
}

const OneActivities: React.FC<OneActivitiesProps> = ({ id, setActive }) => {
  const { data: activities } = useOneRndActivity(id);
  const [activeAttachment, setActiveAttachment] = useState<string | null>(null);

  const renderInfoItem = (label: string, value: string | undefined) => (
    <div className="flex flex-col md:flex-row gap-2">
      <p className="text-sm font-semibold">{label}:</p>
      <p className="text-sm">{value || "N/A"}</p>
    </div>
  );

  const renderAttachmentButton = (
    label: string,
    attachment: string | undefined
  ) => {
    if (!attachment) return null;
    return (
      <Button
        variant="outline"
        onClick={() => setActiveAttachment(attachment)}
        className="w-full md:w-auto text-black"
      >
        {label}
      </Button>
    );
  };

  if (activeAttachment) {
    return (
      <PDFViewer file={activeAttachment} setActive={setActiveAttachment} />
    );
  }

  return (
    <Card className="mt-4">
      <CardHeader>
        <Button
          variant="outline"
          onClick={() => setActive(null)}
          className="mb-4 w-[150px]"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <CardTitle>{activities?.act?.activity_name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {renderInfoItem(
            "Activity Department",
            activities?.act?.activity_department?.dName
          )}
          {renderInfoItem("Activity Type", activities?.act?.activity_type)}
          {renderInfoItem("Batch", activities?.act?.activity_batch?.batchName)}
          {renderInfoItem(
            "Staff Name",
            `${activities?.act?.activity_staff?.staffFirstName || ""} ${
              activities?.act?.activity_staff?.staffMiddleName || ""
            } ${activities?.act?.activity_staff?.staffLastName || ""}`.trim() ||
              undefined
          )}
        </div>
        <div className="flex flex-wrap gap-3 mt-4">
          {renderAttachmentButton(
            "Attendance",
            activities?.act?.attendance?.[0]
          )}
          {renderAttachmentButton("Notice", activities?.act?.notice?.[0])}
          {renderAttachmentButton(
            "Permission Letter",
            activities?.act?.permission_letter?.[0]
          )}
          {renderAttachmentButton(
            "Activity Report",
            activities?.act?.activity_report?.[0]
          )}
          {activities?.act?.other?.map((item: OtherAttachment) => (
            <Button
              key={item._id}
              variant="outline"
              onClick={() => setActiveAttachment(item.attach)}
              className="w-full md:w-auto text-black"
            >
              {item.name}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default OneActivities;
