"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import TruncateText from "../ui/truncate";
import { getId } from "@/lib/utils";
import { imageShowUrl } from "@/lib/BaseUrl";
const AboutIns = ({ home_object }: { home_object: any }) => {
  const [play, setPlay] = useState(false);
  const handleClick = () => {
    setPlay(!play);
  };
  console.log(home_object);
  return (
    <div className="box-border">
      <div className="w-full  mt-10 text-center md:pb-10 md:px-24 box-border relative md:max-h-[35rem] md:min-h-[30rem] flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-full flex md:flex-row flex-col-reverse justify-center">
          <div
            className={`md:relative md:top-0 md:left-0 md:right-0 md:mx-auto md:my-0 md:text-center md:float-none md:inline-block md:align-middle w-full`}
            onClick={handleClick}
          >
            {home_object.typo === "YES" ? (
              <iframe
                src={`https://www.youtube.com/embed/${getId(
                  home_object.link_images
                )}`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
                className={`w-full md:w-11/12 md:h-[25rem] h-[15rem]`}
              />
            ) : (
              <img
                src={`${imageShowUrl}/${home_object.link_images}`}
                alt=""
                className="w-full md:w-11/12"
              />
            )}
          </div>
          <div className="md:float-right md:w-[70%] md:relative w-full z-10 flex justify-center">
            <div className="md:absolute md:top-[50%] md:translate-y-[-50%] bg-white shadow-lg p-8 md:left-[-5rem] text-center rounded-lg flex flex-col justify-center items-center">
              <h5
                className={`text-prime text-[1.5rem] mt-0 relative mb-[1.2rem] border-prime border-b-2`}
              >
                About Institute
              </h5>
              <p className="text-gray-700 text-justify leading-5">
                <TruncateText text={home_object.about} />
              </p>
              <div className="readmorebtn my-2">
                <Button>
                  <Link href={"/institute-profile"}>Read More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="text-3xl text-black">hi</div>
  );
};

export default AboutIns;
