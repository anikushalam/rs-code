"use client";
import { useOnePinnedDepartment } from "@/api/api-hooks";
import { useStore } from "@/store";
import Link from "next/link";
import React from "react";

interface OnePinnedDepartmentProps {
  item: string | undefined;
}

const OnePinnedDepartment: React.FC<OnePinnedDepartmentProps> = ({ item }) => {
  const id = useStore((state) => state.id);
  const { data: onepinnedData, error } = useOnePinnedDepartment({
    id: id,
    type: item, // Ensure type is a string
  });
  if (error) {
    return <div>Error loading department</div>;
  }

  return (
    <li>
      <div className="text-md font-semibold leading-none">{item}</div>
      <div>
        {onepinnedData &&
          onepinnedData.ins.map((department: any) => (
            <div
              key={department._id}
              className=" list-disc  block select-none space-y-1 rounded-md pt-1 leading-none no-underline outline-none transition-colors hover:font-medium hover:text-accent-foreground focus:font-medium focus:text-accent-foreground"
            >
              <Link
                href={`/department/${item}/${department._id}`}
                className=" text-sm leading-snug text-muted-foreground"
              >
                {department.dName}
              </Link>
            </div>
          ))}
      </div>
    </li>
  );
};

export default OnePinnedDepartment;
