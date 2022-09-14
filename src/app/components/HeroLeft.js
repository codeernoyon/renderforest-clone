import React from "react";
import { MdEmail } from "react-icons/md";
import Button from "./utils/Button";
import HeroRearItem from "./utils/HeroRearItem";
import Input from "./utils/Input";
import Stare from "./utils/Stare";

const HeroLeft = () => {
  return (
    <div className="w-[98%] md:w-[45%] md:pt-6 lg:h-screen pb-12 lg:pb-0">
      <div className="flex flex-col justify-center items-start pt-32 lg:pt-0 lg:h-full px-5">
        {/* ----=== Top title  ===----*/}
        <div>
          <p className="text-[35px] font-[700] leading-[40px] text-gray-800">
            All your <span className="heroTextGradient">design tools</span> in
            one place
          </p>
        </div>
        {/* ----=== Description ===----*/}
        <div className="mt-5">
          <p>
            Free time-saving growth marketing tools to succeed: high quality
            videos, animations, mockups, logos, presentations, SMM graphics, and
            a professional website.
          </p>
        </div>
        {/* ----==== Input ====----- */}
        <div className="mt-10 w-full">
          <Input
            icon={<MdEmail />}
            className="bg-slate-50 px-3 py-[14px] w-[98%] lg:w-[70%] rounded-md border-[1px] border-gray-400 hover:border-indigo-600"
          />
        </div>
        {/* ----==== Button =====---- */}
        <div className="mt-6 w-full">
          <Button
            title="Get Started"
            className="w-[98%] lg:w-0 lg:px-[43px] py-[16px] md:py-[15px] rounded-[7px] heroBtn"
          />
        </div>
        {/* ====---- Starts -----===== */}
        <div className="mt-8">
          <div>
            <Stare />
          </div>
          <div className="mt-3 relative left-[-2px]">
            <HeroRearItem className="flex items-center" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;
