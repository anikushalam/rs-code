import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useDocumentByAdmission } from "@/api/api-hooks";
import { useStore } from "@/store";
import Heading from "@/components/ui/heading";

export default function DocumentCheckList() {
  const admissionId = useStore((state) => state.ids.admissionId);
  const { data: getDocumentByAdmission } = useDocumentByAdmission({
    aid: admissionId,
    limit: 1000,
    page: 1,
  });
  return (
    <Card className="my-2 bg-background">
      <CardHeader>
        <CardTitle>
          <Heading>Document Checklist</Heading>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {getDocumentByAdmission?.all_docs?.map(
            (document: any, index: number) => (
              <li key={index} className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>{document.title}</span>
              </li>
            )
          )}
        </ul>
      </CardContent>
    </Card>
  );
}
