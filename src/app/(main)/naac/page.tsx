"use client";
import { useNaacDetails, useOneIqacAuthority } from "@/api/api-hooks";
import { useStore } from "@/store";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Ipp from "./_ui/ipp";
import NaacPdf from "./_ui/naac-pdf";
import { Separator } from "@/components/ui/separator";

const Naac = () => {
  const [selectedContent, setSelectedContent] = useState("ipp");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const qcid = useStore((state) => state.qid);
  const { data: naacDetails } = useNaacDetails(qcid);

  console.log(naacDetails);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  const type = searchParams.get("type");
  useEffect(() => {
    if (tab) {
      setSelectedContent(tab);
    }
  }, [tab]);
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
              <Link
                className={`w-full text-left p-4 m-1 block hover:text-primary hover:font-semibold border-b-2  hover:border-primary duration-300 ${
                  selectedContent === item.url
                    ? "border-primary font-semibold text-primary border-b-2 "
                    : "border-transparent"
                }`}
                href={`/naac?tab=${item.url}`}
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
        {selectedContent === "ipp" ? (
          <Ipp />
        ) : selectedContent === "ssr-3" ? (
          <NaacPdf
            data={naacDetails?.custom?.naac_ssr_three_cycle}
            name="SSR-3 Cycle"
          />
        ) : selectedContent === "ssr-4" ? (
          <NaacPdf
            data={naacDetails?.custom?.naac_ssr_four_cycle}
            name="SSR-4 Cycle"
          />
        ) : selectedContent === "dvv" ? (
          <NaacPdf data={naacDetails?.custom?.naac_dvv} name="DVV" />
        ) : selectedContent === "iiaq" ? (
          <NaacPdf data={naacDetails?.custom?.naac_iiqa} name="IIAQ" />
        ) : selectedContent === "certificate" ? (
          <NaacPdf
            data={naacDetails?.custom?.certificates}
            name="Certificates"
          />
        ) : selectedContent === "student-satisfactory-survey" ? (
          <NaacPdf data={naacDetails?.custom?.naac_sss} name="Certificates" />
        ) : selectedContent === "undertakings" ? (
          <NaacPdf
            data={naacDetails?.custom?.undertakings}
            name="Certificates"
          />
        ) : (
          <h1>Default</h1>
        )}
      </div>
    </div>
  );
};

export default Naac;

const sidebar = [
  {
    title: "Institute Perspective Planning",
    url: "ipp",
  },
  {
    title: "SSR-3 Cycle",
    url: "ssr-3",
  },
  {
    title: "SSR-4 Cycle",
    url: "ssr-4",
  },
  {
    title: "DVV",
    url: "dvv",
  },
  {
    title: "IIAQ",
    url: "iiaq",
  },
  {
    title: "Certificate",
    url: "certificate",
  },
  {
    title: "Student Satisfaction Survey",
    url: "student-satisfactory-survey",
  },
  {
    title: "Undertakings",
    url: "undertakings",
  },
];
