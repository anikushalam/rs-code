import React from "react";

const Heading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={`text-primary  p-2  font-bold mx-2 text-2xl border-b-2 border-primary ${className}`}
    >
      {children}
    </h1>
  );
};

export default Heading;
