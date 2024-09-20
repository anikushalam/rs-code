import React from "react";

const SubHeading = ({
  className,
  children,
}: {
  className?: string;
  children: any;
}) => {
  return (
    <div className={`flex ${className}`}>
      <h4 className="p-1 text-start w-fit-content border-primary font-semibold border-b-2 text-lg my-3 mx-2">
        {children}
      </h4>
    </div>
  );
};

export default SubHeading;
