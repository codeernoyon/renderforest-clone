import React from "react";
import { HeroLeft, HeroRight } from "../../components";

const Hero = () => {
  return (
    <div className="h-[120vh] bg-[url('./Assets/banner_back_illustration.png')] object-fill bg-cover pt-20">
      <div className="flex justify-between items-center">
        <HeroLeft />
        <HeroRight />
      </div>
    </div>
  );
};

export default Hero;
