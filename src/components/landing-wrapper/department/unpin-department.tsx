"use client";
import { usePinnedDepartment } from "@/api/api-hooks";
import { useStore } from "@/store";
import Link from "next/link";
import React from "react";

const UnpinnedDepartment = () => {
  const id = useStore((state) => state.id);
  const { data: unpinnedDepartment, error } = usePinnedDepartment({
    id: id,
    flow: "INDEPENDENT",
  });
  if (error) {
    return <div>Error loading department</div>;
  }
  return (
    <li>
      <div className="text-md font-semibold leading-none">Other</div>
      <div>
        {unpinnedDepartment &&
          unpinnedDepartment.ins.map((department: any) => (
            <div
              key={department._id}
              className=" list-disc  block select-none space-y-1 rounded-md pt-1 leading-none no-underline outline-none transition-colors hover:font-medium hover:text-accent-foreground focus:font-medium focus:text-accent-foreground"
            >
              <Link
                href={`/department/other/${department._id}`}
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

export default UnpinnedDepartment;
