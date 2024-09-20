"use client";
import { useWebsiteInfoByInstitute } from "@/api/api-hooks";
import { useStore } from "@/store";
import React from "react";
import CarouselComponent from "@/components/home/carousel-component";
import AboutIns from "@/components/home/about-ins";
import HomeDepartment from "@/components/home/home-department";
import EventAccrediationVisionMission from "@/components/home/events-accrediation-vimi";
import Testimonials from "@/components/home/alumini";
import AchievementsSection from "@/components/home/achivement";
const Page = () => {
  const id = useStore((state) => state.id);
  const { data: websiteInfoByInstitute } = useWebsiteInfoByInstitute(id);
  return (
    <div className="w-full flex flex-col gap-4">
      {websiteInfoByInstitute?.one_ins?.landing_control?.home_background_object
        ?.images.length > 0 && (
        <CarouselComponent
          images={
            websiteInfoByInstitute?.one_ins?.landing_control
              ?.home_background_object?.images
          }
        />
      )}
      {websiteInfoByInstitute?.one_ins?.landing_control
        ?.home_about_institute_object && (
        <AboutIns
          home_object={
            websiteInfoByInstitute?.one_ins?.landing_control
              ?.home_about_institute_object
          }
        />
      )}
      {/* {websiteInfoByInstitute?.one_ins?.landing_control
        ?.about_society_dynamic && (
        <FounderMessage
          data={
            websiteInfoByInstitute?.one_ins?.landing_control
              ?.about_society_dynamic
          }
        />
      )} */}
      <HomeDepartment />
      <EventAccrediationVisionMission
        iso_certificate={websiteInfoByInstitute?.one_ins?.iso_certificate.slice(
          0,
          4
        )}
      />
      <AchievementsSection />
      <Testimonials />
    </div>
  );
};

export default Page;
