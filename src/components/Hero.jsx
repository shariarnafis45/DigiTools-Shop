import React from "react";
import Banner from "../assets/banner.png";
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import { GoDotFill } from "react-icons/go";

const Hero = () => {
  return (
    <div className=" w-11/12 mx-auto">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse gap-15">
          <img src={Banner} className="rounded-lg " />
          <div className="text-center lg:text-left">
            <div className="badge badge-soft badge-primary text-[#9514FA] font-medium mb-2"><GoDotFill /> New: AI-Powered Tools Available</div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl  font-extrabold leading-14 sm:leading-20 text-[#101727]">
              Supercharge Your Digital Workflow
            </h1>
            <p className="py-6 text-[1.1rem] leading-5 text-[#627382]">
              Access premium AI tools, design assets, templates, and
              productivity <br />
              software—all in one place. Start creating faster today. Explore
              Products
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start ">
              <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full py-2 px-4 font-bold">
                Explore Products
              </button>
              <button className="watch-btn btn  border border border-[#9514FA] rounded-full py-2 px-4 font-bold hover:bg-[#9514FA] hover:text-white">
                <div className="flex items-center gap-1">
                  <SiGoogledisplayandvideo360 />

                <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent hover:text-white">Watch Demo</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
