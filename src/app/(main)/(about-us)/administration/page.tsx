"use client";
import { useWebsiteInfoByInstitute } from "@/api/api-hooks";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Content from "@/components/ui/content";
import Heading from "@/components/ui/heading";
import ImageViewer from "@/components/ui/image-viewer";
import { Separator } from "@/components/ui/separator";
import { imageShowUrl } from "@/lib/BaseUrl";
import { useStore } from "@/store";
import { Menu } from "lucide-react";
import React, { useEffect, useState } from "react";

// Define interfaces for administration items and leading person
interface LeadingPerson {
  profilePhoto?: string;
  userLegalName?: string;
}

interface AdministrationItem {
  leading_person_position: string;
  leading_person_message?: string;
  leading_person?: LeadingPerson;
}

const Administration = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const id = useStore((state) => state.id);
  const { data: websiteInfoByInstitute } = useWebsiteInfoByInstitute(id);

  // Explicitly define the types for state
  const [selectedContent, setSelectedContent] =
    useState<AdministrationItem | null>(null);
  const [administration, setAdministration] = useState<AdministrationItem[]>(
    []
  );

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleContentSelect = (item: AdministrationItem) => {
    setSelectedContent(item);
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    if (
      websiteInfoByInstitute?.one_ins?.landing_control?.administration_object
    ) {
      const adminItems =
        websiteInfoByInstitute.one_ins.landing_control.administration_object;
      setAdministration(adminItems);
      setSelectedContent(adminItems[0]); // Set the first item as the selected content initially
    }
  }, [websiteInfoByInstitute?.one_ins?.landing_control?.administration_object]);

  return (
    <div className="flex flex-col md:flex-row border-t-1 border-back">
      {/* Mobile menu button */}
      <button
        className="md:hidden p-4 bg-background text-primary"
        onClick={toggleSidebar}
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        }  md:block w-full md:w-64 bg-gray-100 p-4`}
      >
        <ul>
          {administration.map((item, index) => (
            <li key={index} className="mb-2">
              <button
                className={`w-full text-left p-4 m-1 hover:text-primary hover:font-semibold border-b-2  hover:border-primary duration-300 ${
                  selectedContent === item
                    ? "border-primary font-semibold text-primary border-b-2 "
                    : "border-transparent"
                }`}
                onClick={() => handleContentSelect(item)}
              >
                {item.leading_person_position}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Separator
        orientation="vertical"
        className="mx-2 border-[1px] border-gray-100 h-screen"
      />
      {/* Main content */}
      <div className="flex-1 p-6">
        <Card className="bg-background shadow-none">
          <CardHeader>
            <CardTitle>
              <Heading>Administration</Heading>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-4">
              <div className="md:w-4/5 w-full">
                {selectedContent?.leading_person_message && (
                  <Content>{selectedContent.leading_person_message}</Content>
                )}
              </div>
              <div className="sm:w-1/5 w-full flex flex-col items-center justify-center text-center">
                {selectedContent?.leading_person?.profilePhoto && (
                  <ImageViewer
                    src={`${imageShowUrl}/${selectedContent.leading_person.profilePhoto}`}
                    alt="founder image"
                    width={250}
                    height={250}
                  />
                )}

                <h3 className="text-lg font-semibold mt-2 text-primary">
                  {selectedContent?.leading_person?.userLegalName}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {selectedContent?.leading_person_position}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Administration;
