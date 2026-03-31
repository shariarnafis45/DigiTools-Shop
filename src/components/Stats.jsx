import React from "react";

const Stats = () => {
  return (
    <div className=" bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-10">
      <div className="w-11/12 mx-auto py-15 grid sm:grid-cols-3 gap-7">
        <div className="text-center border-r border-gray-400/50">
          <h2 className="text-6xl font-extrabold text-white">50K+</h2>
          <p className="text-2xl text-white font-medium mt-3">Active Users</p>
        </div>
        <div className="text-center border-r border-gray-400/50">
          <h2 className="text-6xl font-extrabold text-white">200+</h2>
          <p className="text-2xl text-white font-medium mt-3">Premium Tools</p>
        </div>
        <div className="text-center">
          <h2 className="text-6xl font-extrabold text-white">4.9</h2>
          <p className="text-2xl text-white font-medium mt-3">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
