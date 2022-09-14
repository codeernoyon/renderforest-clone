import React from "react";
import { HeroLeft, HeroRight } from "../../components";

const Hero = () => {
  return (
    <div className="md:h-[120vh] h-auto bg-[url('./Assets/banner_back_illustration.png')] object-fill bg-cover overflow-hidden">
      {/* ----==== Back Image2 ====----- */}
      <div className="absolute left-0 -bottom-52 z-0 h-[70vh] w-full bg-[url('./Assets/banner_doodle_lines.png')] object-fill bg-cover"></div>
      <div className="container mx-auto lg:flex justify-between items-center md:pl-10 px-4  relative z-10">
        <HeroLeft />
        <HeroRight />
      </div>
      {/* -----===== Hero Bottom =====------- */}
      <div>
        <div className="w-full flex justify-center items-center px-5 md:px-14">
          <div className="hidden md:block w-[30%] h-[1px] bg-black"></div>
          <div className="px-2">
            <span>
              Trusted by <span className="font-semibold">15M+</span> users and
              <span className="font-semibold">100k+</span> high-end companies
            </span>
          </div>
          <div className="hidden md:block w-[30%] h-[1px] bg-black"></div>
        </div>
        <div className="w-full flex justify-center items-center mt-4">
          <img
            src="./Assets/trust_logos.png"
            alt="bottomPhoto"
            className="w-[70%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
