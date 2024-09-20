import LandingWrapper from "@/components/landing-wrapper";
import React, { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return <LandingWrapper>{children}</LandingWrapper>;
};

export default MainLayout;
