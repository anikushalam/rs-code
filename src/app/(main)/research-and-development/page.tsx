"use client";

import { useAdmissionSiteInfo, useOneIqacAuthority } from "@/api/api-hooks";
import { useStore } from "@/store";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import About from "./_ui/about";
import Mou from "./_ui/mou";
import ResearchPaper from "./_ui/research-paper";
import Activities from "./_ui/activities";
import Projects from "./_ui/projects";
import Meetings from "./_ui/meetings";
import { Separator } from "@/components/ui/separator";

const RandD = () => {
  const [selectedContent, setSelectedContent] = useState("About");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const aid = useStore((state) => state.ids.admissionId);
  const { data: admissionDetails } = useAdmissionSiteInfo(aid);

  const Sidebar = [
    {
      title: "About",
      url: "about",
    },
    {
      title: "MOU",
      url: "mou",
    },
    {
      title: "Research Paper",
      url: "research-paper",
    },
    {
      title: "Activities",
      url: "activities",
    },
    {
      title: "Projects",
      url: "projects",
    },
    {
      title: "Meetings",
      url: "meetings",
    },
  ];
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleContentSelect = (item: string) => {
    setSelectedContent(item);
    setIsSidebarOpen(false);
  };

  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  useEffect(() => {
    if (tab) {
      setSelectedContent(tab);
    }
  }, [tab]);
  const rndId = useStore((state) => state.rndId);

  const { data: oneIqacAuthority } = useOneIqacAuthority(rndId);
  console.log(oneIqacAuthority);
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
        } md:block wmd:block w-full md:w-64 bg-gray-100 p-4`}
      >
        <ul>
          {Sidebar.map((item, index) => (
            <li key={index} className="mb-2">
              <Link
                className={`w-full text-left p-4 m-1 block hover:text-primary hover:font-semibold border-b-2  hover:border-primary duration-300 ${
                  selectedContent === item.url
                    ? "border-primary font-semibold text-primary border-b-2 "
                    : "border-transparent"
                }`}
                href={`/research-and-development?tab=${item.url}`}
              >
                {item.title}
              </Link>
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
        {selectedContent === "about" ? (
          <About about={oneIqacAuthority?.custom?.about} />
        ) : selectedContent === "mou" ? (
          <Mou />
        ) : selectedContent === "research-paper" ? (
          <ResearchPaper data={oneIqacAuthority?.custom?.rnd_paper} />
        ) : selectedContent === "activities" ? (
          <Activities />
        ) : selectedContent === "projects" ? (
          <Projects />
        ) : selectedContent === "meetings" ? (
          <Meetings data={oneIqacAuthority?.custom?.meetings} />
        ) : (
          <About about={oneIqacAuthority?.custom?.about} />
        )}
      </div>
    </div>
  );
};

export default RandD;
