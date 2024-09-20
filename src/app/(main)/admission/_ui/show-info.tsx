import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useOneApplication } from "@/api/api-hooks";
import { imageShowUrl } from "@/lib/BaseUrl";

export default function ShowInfo({ apid }: { apid: string }) {
  const { data: oneApplicationDetail } = useOneApplication(apid);

  const applicationUrl = `https://dashboard.qviple.com/login?external&landing_page&goapid=${oneApplicationDetail?.oneApply?._id}&goid=${oneApplicationDetail?.oneApply?.admissionAdmin?.institute?._id}&goaaid=${oneApplicationDetail?.oneApply?.admissionAdmin?._id}`;

  return (
    <Card className="mt-2 bg-background ">
      <CardHeader>
        <CardTitle>{oneApplicationDetail?.oneApply?.applicationName}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-row gap-4">
            <Button asChild>
              <Link href={applicationUrl}>
                <i className="fa-solid fa-list mr-2"></i>
                Fill Admission
              </Link>
            </Button>

            {oneApplicationDetail?.oneApply?.applicationPhoto && (
              <Button asChild>
                <Link
                  href={`${imageShowUrl}/${oneApplicationDetail?.oneApply?.applicationPhoto}`}
                  target="_blank"
                >
                  <i className="fa-solid fa-download mr-2"></i>
                  Download Brochure
                </Link>
              </Button>
            )}
          </div>
          <div>
            <h3 className="font-semibold">Application Instructions</h3>
            <p>{oneApplicationDetail?.oneApply?.applicationAbout}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
