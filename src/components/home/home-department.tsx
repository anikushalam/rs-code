"use client";
import { useAllMergedDepartments, useNoticeInstitute } from "@/api/api-hooks";
import { useStore } from "@/store";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import DepartmentComponent from "./department-component";

const HomeDepartment = () => {
  const id = useStore((state) => state.id);
  const { data: allDepartments } = useAllMergedDepartments({
    id: id as string,
    page: 1,
    limit: 5,
    search: "",
  });

  return (
    <article className="m-4 sm:m-10 shadow-md border-[1px] border-gray-200 rounded-md">
      <h1 className="text-center text-2xl sm:text-3xl text-primary font-bold my-4">
        Our Department
      </h1>
      <div className="mt-6 sm:mt-10 flex items-center flex-col justify-center mx-4 sm:mx-30 mb-8 sm:mb-10 px-4 sm:px-20">
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent className="-ml-2 sm:-ml-4">
            {allDepartments?.all_depart.map((item: any) => (
              <CarouselItem
                key={item?._id}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <DepartmentComponent did={item?._id} name={item?.dName} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <Link
          href="/department"
          className="self-end text-primary text-base sm:text-lg underline flex items-center mt-4 sm:mt-0"
        >
          All Department
          <ArrowUpRight className="ml-1" />
        </Link>
      </div>
    </article>
  );
};

export default HomeDepartment;
