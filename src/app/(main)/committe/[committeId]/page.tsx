"use client";
import {
  useOneIqacAuthority,
  useWebsiteInfoByInstitute,
} from "@/api/api-hooks";
import { useStore } from "@/store";
import { Menu } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import About from "./_ui/about";
import Compositions from "./_ui/composition";
import Meetings from "./_ui/meetings";
import { Separator } from "@/components/ui/separator";

const Committe = () => {
  const params = useParams();
  //   console.log(params);
  const { committeId } = params;
  const [selectedContent, setSelectedContent] = useState("About");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { data: committe } = useOneIqacAuthority(committeId as string);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleContentSelect = (item: any) => {
    setSelectedContent(item);
    setIsSidebarOpen(false);
  };
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
        {selectedContent === "About" ? (
          <About data={committe?.about} />
        ) : selectedContent === "Compositions" ? (
          <Compositions data={committe?.composition} />
        ) : selectedContent === "Meetings" ? (
          <Meetings data={committe?.meetings} />
        ) : (
          <About data={committe?.about} />
        )}
      </div>
    </div>
  );
};

export default Committe;
const sidebar = ["About", "Compositions", "Meetings"];
