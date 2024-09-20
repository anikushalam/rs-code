import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import AdmissionCard from "./admission-card";
import ShowInfo from "./show-info";
import { useAdmissionOngoingList } from "@/api/api-hooks";
import { useStore } from "@/store";
import Heading from "@/components/ui/heading";

export default function OngoingAdmission() {
  const [index, setIndex] = useState<string | null>(null);
  const instituteId = useStore((state: any) => state.id);
  const { data: admissionOngoingList } = useAdmissionOngoingList(instituteId);
  const [deviceType, setDeviceType] = useState("desktop");

  useEffect(() => {
    const userAgent = navigator.userAgent;
    if (
      /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/.test(
        userAgent
      )
    ) {
      setDeviceType("mobile");
    }
  }, []);

  return (
    <Card className="my-2 bg-background">
      <CardContent>
        <Heading>New Admissions</Heading>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2 space-y-4">
            {admissionOngoingList?.ads_obj?.ongoing?.map((item: any) => (
              <AdmissionCard
                key={item?._id}
                data={item}
                user={deviceType}
                onClick={setIndex}
              />
            ))}
          </div>
          <div className="w-full md:w-1/2">
            {index && <ShowInfo apid={index} />}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
