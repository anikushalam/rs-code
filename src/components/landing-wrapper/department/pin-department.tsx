"use client";
import { usePinnedDepartment } from "@/api/api-hooks";
import { NavigationMenuItem } from "@/components/ui/navigation-menu";
import { useStore } from "@/store";
import React from "react";
import OnePinnedDepartment from "./one-pinned-department";
import UnpinnedDepartment from "./unpin-department";
import { on } from "events";

const PinDepartment = () => {
  const id = useStore((state) => state.id);
  const { data: pinDepartment } = usePinnedDepartment({
    id: id,
    flow: "DEPENDENT",
  });
  const { data: unpinnedDepartment } = usePinnedDepartment({
    id: id,
    flow: "INDEPENDENT",
  });
  return (
    <ul className="grid w-[400px] gap-4 p-4 md:w-[600px] md:grid-cols-3 lg:w-[600px] ">
      {pinDepartment?.ins?.map((item: any) => (
        <OnePinnedDepartment item={item} key={item} />
      ))}
      {unpinnedDepartment?.ins?.length > 0 && <UnpinnedDepartment />}
    </ul>
  );
};

export default PinDepartment;
