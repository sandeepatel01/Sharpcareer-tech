import HeroSection from "@/components/home/HeroSection";
import Programs from "@/components/home/Programs";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-full flex flex-col">
        <HeroSection />
      </div>
      <Programs />
    </>
  );
};

export default page;
