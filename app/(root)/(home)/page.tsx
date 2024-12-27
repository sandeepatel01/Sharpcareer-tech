import { CardStackDemo } from "@/components/home/CardStack";
import HeroSection from "@/components/home/HeroSection";
import Programs from "@/components/home/Programs";
import Testimonials from "@/components/home/TestimonialCards";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import RecruitmentSteps from "@/components/home/RecruitmentSteps";
import FAQ from "@/components/home/FAQ";
import NetworkingHelp from "@/components/home/NetworkingHelp";

const page = () => {
  return (
    <>
      <div className="w-full flex flex-col">
        <HeroSection />
      </div>
      <Programs />
      <NetworkingHelp />
      <div className="max-lg:hidden">
        <Testimonials />
      </div>
      <div className="lg:hidden">
        <BackgroundBeamsWithCollision>
          <CardStackDemo />
        </BackgroundBeamsWithCollision>
      </div>
      <RecruitmentSteps />
      <FAQ />
    </>
  );
};

export default page;
