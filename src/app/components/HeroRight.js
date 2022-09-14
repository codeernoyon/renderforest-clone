import React from "react";
import IllustrationHeroLeft from "./utils/IllustrationHeroLeft";
import IllustrationHeroRight from "./utils/IllustrationHeroRight";

const HeroRight = () => {
  return (
    <div className="flex items-center  justify-center h-[300px] lg:h-screen w-[98%] lg:w-[65%]">
      <div className="h-full w-full relative flex items-center justify-center ">
        <div className="relative w-[95%] h-[75%] rounded-[40px] bg-white shadow-2xl shadow-[#b577f980] flex items-center justify-center lg:mt-10">
          <div className="videoGradient shadow-md shadow-[#b577f980] w-[92%] h-[88%] rounded-[30px] flex items-center justify-center">
            <div className="bg-slate-900 w-[95%] h-[90%] rounded-[20px] overflow-hidden relative">
              <iframe
                src="https://www.youtube.com/embed/MPdYy_DRtuU?rel=0&amp;amp;"
                title="iframe-video"
                allowfullscreen=""
                class="video_to_iframe"
              ></iframe>
            </div>
          </div>
          <IllustrationHeroLeft className="hidden lg:block absolute -bottom-14 -left-28" />
          <IllustrationHeroRight className="hidden lg:block absolute -top-14 -right-24" />
        </div>
      </div>
    </div>
  );
};

export default HeroRight;
