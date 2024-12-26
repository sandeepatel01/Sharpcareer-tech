import { CardStackDemo } from "@/components/home/CardStack";
import HeroSection from "@/components/home/HeroSection";
import Programs from "@/components/home/Programs";
import Testimonials from "@/components/home/TestimonialCards";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const page = () => {
  return (
    <>
      <div className="w-full flex flex-col">
        <HeroSection />
      </div>
      <Programs />
      <div className="max-lg:hidden">
        <Testimonials />
      </div>
      <div className="lg:hidden">
        <BackgroundBeamsWithCollision>
          <CardStackDemo />
        </BackgroundBeamsWithCollision>
      </div>
    </>
  );
};

export default page;
