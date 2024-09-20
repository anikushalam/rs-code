"use client";

import { useWebsiteInfoByInstitute } from "@/api/api-hooks";
import { useStore } from "@/store";
import { Menu } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import About from "./_ui/about";
import SubCourse from "./_ui/sub-course";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

interface SubHead {
  sub_head_title_main: string;
  [key: string]: any;
}

interface Course {
  _id: string;
  head_about?: string;
  head_images?: string[];
  sub_head?: SubHead[];
  [key: string]: any;
}

const AcademicCourse: React.FC = () => {
  const [selectedContent, setSelectedContent] = useState<SubHead>({
    sub_head_title_main: "About",
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const params = useParams();
  const { academicDepartment } = params as { academicDepartment: string };
  const id = useStore((state) => state.id);
  const { data: websiteInfoByInstitute } = useWebsiteInfoByInstitute(id);
  const [courses, setCourses] = useState<Course | null>(null);
  const [sidebar, setSidebar] = useState<string[]>([]);

  useEffect(() => {
    const coursesDesk =
      websiteInfoByInstitute?.one_ins?.landing_control?.academic_courses_desk;

    if (coursesDesk) {
      const filteredCourses = coursesDesk.filter((item: Course) => {
        return academicDepartment === item._id;
      });

      setCourses(filteredCourses?.[0] || null);
    }
  }, [websiteInfoByInstitute, academicDepartment]);

  useEffect(() => {
    let subHead: string[] = [];
    if (courses && courses.sub_head) {
      courses.sub_head.forEach((item) => {
        subHead.push(item.sub_head_title_main);
      });
    }
    setSidebar(["About", ...subHead]);
  }, [courses]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleContentSelect = (item: string) => {
    if (item === "About") {
      setSelectedContent({
        sub_head_title_main: "About",
        about: courses?.head_about,
        head_images: courses?.head_images?.[0],
      });
    } else {
      const subHead = courses?.sub_head?.filter((sub_head) => {
        return sub_head.sub_head_title_main === item;
      });
      setSelectedContent(subHead?.[0] || { sub_head_title_main: "About" });
    }
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
                  selectedContent.sub_head_title_main === item
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
        <Heading>{courses?.head_name}</Heading>
        {selectedContent.sub_head_title_main === "About" ? (
          <About
            about={courses?.head_about}
            image={courses?.head_images?.[0]}
          />
        ) : (
          <SubCourse data={selectedContent} />
        )}
      </div>
    </div>
  );
};

export default AcademicCourse;
