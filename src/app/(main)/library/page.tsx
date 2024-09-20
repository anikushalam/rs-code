"use client";
import { useLibrarySiteInfo } from "@/api/api-hooks";
import { useStore } from "@/store";
import { Menu } from "lucide-react";
import React, { useState } from "react";
import LibrarianMessage from "./_ui/librarians-message";
import RulesAndRegulations from "./_ui/rules-regulations";
import Timings from "./_ui/timings";
import OnlineLibrary from "./_ui/online-library";
import ContactLibrary from "./_ui/contact-library-section";
import { Separator } from "@/components/ui/separator";

const Library = () => {
  const [selectedContent, setSelectedContent] = useState("Librarians Message");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const libraryId = useStore((state) => state.ids.libraryId);
  const { data: libraryData } = useLibrarySiteInfo(libraryId);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleContentSelect = (item: any) => {
    setSelectedContent(item);
    setIsSidebarOpen(false);
  };
  console.log(libraryData);
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
        } md:block w-full md:w-64 bg-gray-100 p-4`}
      >
        <ul>
          {sidebar.map((item, index) => (
            <li key={index} className="mb-2">
              <button
                className={`w-full text-left p-4 m-1 hover:text-primary hover:font-semibold border-b-2  hover:border-primary duration-300 ${
                  selectedContent === item
                    ? "border-primary font-semibold text-primary border-b-2 "
                    : "border-transparent"
                }`}
                onClick={() => handleContentSelect(item)}
              >
                {item}
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
        {selectedContent === "Librarians Message" ? (
          <LibrarianMessage
            message={libraryData?.library_site?.library_message}
          />
        ) : selectedContent === "Timings" ? (
          <Timings timings={libraryData?.library_site?.library_timing} />
        ) : selectedContent === "Rules and Regulations" ? (
          <RulesAndRegulations
            rules={libraryData?.library_site?.library_rule}
          />
        ) : selectedContent === "Online Library" ? (
          <OnlineLibrary />
        ) : selectedContent === "Contact Library Section" ? (
          <ContactLibrary
            contacts={libraryData?.library_site?.library_contact}
          />
        ) : (
          <LibrarianMessage
            message={libraryData?.library_site?.library_message}
          />
        )}
      </div>
    </div>
  );
};

export default Library;
const sidebar = [
  "Librarians Message",
  "Timings",
  "Rules and Regulations",
  "Online Library",
  "Contact Library Section",
];
