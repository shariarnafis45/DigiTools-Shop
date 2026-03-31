import React from "react";
import MenIcon from "../assets/user.png";
import BoxIcon from "../assets/package.png"
import RocketIcon from "../assets/rocket.png"

const GetStart = () => {
  return (
    <div className="bg-[#F9FAFC]">
      <div className="py-28 max-w-[1200px] mx-auto px-5">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-[#101727]">
            Get Started in 3 Steps
          </h2>
          <p className="font-medium text-[#627382] mt-3">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10 ">
          <div className="px-6 py-20 bg-white text-center shadow-md space-y-4 relative">
            <div className="mx-auto bg-[#9514FA]/10 max-w-20 p-4 rounded-full">
              <img src={MenIcon} alt="" className="" />
            </div>
            <h3 className="text-2xl font-bold">Create Account</h3>
            <p className="font-medium text-[#627382]">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
            <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]  p-2 rounded-full text-white absolute top-5 right-5 ">
              <h2 className="font-bold text-xl">01</h2>
            </div>
          </div>
          <div className="px-6 py-20 bg-white text-center shadow-md space-y-4 relative">
            <div className="mx-auto bg-[#9514FA]/10 max-w-20 p-4 rounded-full">
              <img src={BoxIcon} alt="" className="" />
            </div>
            <h3 className="text-2xl font-bold">Choose Products</h3>
            <p className="font-medium text-[#627382]">
              Browse our catalog and select the tools that fit your needs. 
            </p>
            <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]  p-2 rounded-full text-white absolute top-5 right-5 ">
              <h2 className="font-bold text-xl">02</h2>
            </div>
          </div>
          <div className="px-6 py-20 bg-white text-center shadow-md space-y-4 relative">
            <div className="mx-auto bg-[#9514FA]/10 max-w-20 p-4 rounded-full">
              <img src={RocketIcon} alt="" className="" />
            </div>
            <h3 className="text-2xl font-bold">Start Creating</h3>
            <p className="font-medium text-[#627382]">
             Download and start using your premium tools immediately.
            </p>
            <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]  p-2 rounded-full text-white absolute top-5 right-5 ">
              <h2 className="font-bold text-xl">03</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStart;
