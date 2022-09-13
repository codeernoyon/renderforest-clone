import React from "react";
import { PopUpCard } from "../../components";
import Button from "../../components/utils/Button";
import { HeaderData } from "../../data";

const Header = () => {
  const { navs } = HeaderData;
  return (
    <header className="px-7 flex items-center fixed top-0">
      {/* --=== Logo ===-- */}
      <div>
        <a href="#/">
          <svg
            class="size"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 31 40"
          >
            <defs>
              <style>.cls__11 .cls__22</style>
              <linearGradient
                id="linear-gradient1"
                y1="-125.92"
                x2="39.99"
                y2="-125.92"
                gradientTransform="matrix(1, 0, 0, -1, 0, -100)"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0"
                  stop-color="#5690ff"
                  stop-opacity="0.988"
                ></stop>
                <stop offset="1" stop-color="#0052e0"></stop>
              </linearGradient>
            </defs>
            <path
              class="cls__11"
              d="M29.151,18.372l-7.021-4.63L2.886,1.9A17.484,17.484,0,0,1,6.227,7.461a18.518,18.518,0,0,1,1.049,4.113L21.7,20.617a1.181,1.181,0,0,1,.3,1.643l-.054.069h0l-.054.062-.062.062H21.8l-.1.077L7.762,31.018A.833.833,0,0,1,6.6,30.794a.849.849,0,0,1-.147-.471V10.964a18.333,18.333,0,0,0-.934-3.5A16.373,16.373,0,0,0,.455.3L0,0V36.434a3.572,3.572,0,0,0,5.532,2.978L29.151,24.691a3.781,3.781,0,0,0,0-6.319Z"
            ></path>
            <path
              class="cls__22"
              d="M29.151,18.372l-7.021-4.63a5.463,5.463,0,0,1,.772,7.716,5.347,5.347,0,0,1-.926.9h0l-.054.062-.062.062h0l-.1.077-10.031,5.91h0L7.87,31.08a.833.833,0,0,1-1.219-.216.849.849,0,0,1-.147-.471V11a18.063,18.063,0,0,0-.988-3.534A16.373,16.373,0,0,0,.455.3L0,0V36.434a3.572,3.572,0,0,0,5.532,2.978L29.151,24.691a3.781,3.781,0,0,0,0-6.319Z"
            ></path>
          </svg>
        </a>
      </div>
      <nav className="flex justify-between items-center py-3">
        {/* ---=== Nav ===--- */}
        <ul className="flex space-x-10 px-16 md:mr-[20%]">
          {navs?.map((item, index) => (
            <li key={index.id} className="cursor-pointer navItem py-4">
              <div className="flex items-center relative">
                {/* ----=== Title ===---- */}
                <span className=" text-[14px] font-[600] text-gray-500">
                  {item.title}
                </span>
                {/* ----=== Icons ===---- */}
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      data-name="Rectangle 21224"
                      width="24"
                      height="24"
                      fill="none"
                    ></rect>
                    <path
                      data-name="Arrow - Right 2"
                      d="M5.778,4.279c-.034.035-.162.184-.281.306A13.014,13.014,0,0,1,2.02,7a2.77,2.77,0,0,1-.707.2,1.16,1.16,0,0,1-.537-.131A1.124,1.124,0,0,1,.3,6.527a5.9,5.9,0,0,1-.154-.638A14.387,14.387,0,0,1,0,3.6,16.635,16.635,0,0,1,.128,1.391a5.1,5.1,0,0,1,.2-.8A1.071,1.071,0,0,1,1.279,0h.034a2.927,2.927,0,0,1,.793.245,13.014,13.014,0,0,1,3.4,2.38,3.4,3.4,0,0,1,.289.332A1.07,1.07,0,0,1,6,3.6a1.125,1.125,0,0,1-.222.683"
                      transform="translate(15.199 10) rotate(90)"
                      fill="#545F7E"
                    ></path>
                  </svg>
                </span>
                {/* -----==== Popup ====----- */}
                <div className="popUp absolute -left-[40px] top-[40px]  bg-slate-200 h-auto w-[250px] rounded-xl">
                  <PopUpCard
                    topItem={item.topItem}
                    items={item.item}
                    bottomItem={item.bottomItem}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* --=== Right side ===-- */}
        <div className="flex justify-end w-full items-center space-x-7">
          {/* ---=== price ===--- */}
          <div>
            <span className="text-[16px] font-[600] text-gray-500">Price</span>
          </div>
          {/* ====---- rightNAv ----==== */}
          <div>
            <div className="flex cursor-pointer">
              <span>Learn</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <rect
                    data-name="Rectangle 21224"
                    width="24"
                    height="24"
                    fill="none"
                  ></rect>
                  <path
                    data-name="Arrow - Right 2"
                    d="M5.778,4.279c-.034.035-.162.184-.281.306A13.014,13.014,0,0,1,2.02,7a2.77,2.77,0,0,1-.707.2,1.16,1.16,0,0,1-.537-.131A1.124,1.124,0,0,1,.3,6.527a5.9,5.9,0,0,1-.154-.638A14.387,14.387,0,0,1,0,3.6,16.635,16.635,0,0,1,.128,1.391a5.1,5.1,0,0,1,.2-.8A1.071,1.071,0,0,1,1.279,0h.034a2.927,2.927,0,0,1,.793.245,13.014,13.014,0,0,1,3.4,2.38,3.4,3.4,0,0,1,.289.332A1.07,1.07,0,0,1,6,3.6a1.125,1.125,0,0,1-.222.683"
                    transform="translate(15.199 10) rotate(90)"
                    fill="#545F7E"
                  ></path>
                </svg>
              </span>
            </div>
            <ul className="">
              <li></li>
            </ul>
          </div>
          {/* ----===== Button ====------ */}
          <Button title="SingUp" />

          {/* ----==== Language ====---- */}
          <div className="flex">
            <span className="text-[16px] font-semibold">En</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <rect
                  data-name="Rectangle 21224"
                  width="24"
                  height="24"
                  fill="none"
                ></rect>
                <path
                  data-name="Arrow - Right 2"
                  d="M5.778,4.279c-.034.035-.162.184-.281.306A13.014,13.014,0,0,1,2.02,7a2.77,2.77,0,0,1-.707.2,1.16,1.16,0,0,1-.537-.131A1.124,1.124,0,0,1,.3,6.527a5.9,5.9,0,0,1-.154-.638A14.387,14.387,0,0,1,0,3.6,16.635,16.635,0,0,1,.128,1.391a5.1,5.1,0,0,1,.2-.8A1.071,1.071,0,0,1,1.279,0h.034a2.927,2.927,0,0,1,.793.245,13.014,13.014,0,0,1,3.4,2.38,3.4,3.4,0,0,1,.289.332A1.07,1.07,0,0,1,6,3.6a1.125,1.125,0,0,1-.222.683"
                  transform="translate(15.199 10) rotate(90)"
                  fill="#545F7E"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
