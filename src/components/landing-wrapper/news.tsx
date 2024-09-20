"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Megaphone, Pause, Play } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { useNoticeInstitute } from "@/api/api-hooks";
import { useStore } from "@/store";
import Link from "next/link";

const NewsTicker = ({ newsItems }: any) => {
  const [isPaused, setIsPaused] = useState(false);

  const id = useStore((state) => state.id);
  const { data: noticeInstitute } = useNoticeInstitute({ id });

  return (
    <Card className="my-2 bg-background ">
      <CardContent>
        <div className="flex items-center">
          <Link
            className="flex items-center justify-center text-primary font-bold"
            href="/notices"
          >
            Notices
            <Megaphone size={24} className="mr-2" />
          </Link>
          <div
            className="marquee-container overflow-hidden"
            style={{ flexGrow: 1 }}
          >
            <div
              className={`marquee ${isPaused ? "paused" : ""}`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <ul className="marquee-content flex">
                {noticeInstitute?.announcement?.map((item: any) => (
                  <li
                    key={item?._id}
                    className="px-4 hover:text-primary border-r-2 border-primary"
                  >
                    <Link href={`notices?nid=${item?._id}`}>
                      {item?.insAnnTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsTicker;
