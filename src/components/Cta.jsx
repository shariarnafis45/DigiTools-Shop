import React from "react";

const Cta = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] ">
      <div className="max-w-[1200px] mx-auto py-28 px-5 space-y-5">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-white">
            Ready to Transform Your Workflow?
          </h2>
          <p className="font-medium text-white/70 mt-3">
            Join thousands of professionals who are already using Digitools to work smarter <br />Start your free trial today.
          </p>
        </div>
        <div className="flex gap-4 justify-center mt-6">
          <button className=" btn  rounded-full py-2 px-4 font-bold  outline-none border-none shadow-none">
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent ">
              Explore Products
            </span>
          </button>
          <button className="btn btn-ghost text-white rounded-full py-2 px-4 font-bold border border-white hover:bg-transparent">
            View Pricing
          </button>
        </div>
        <p className="font-medium text-white/70 mt-3 text-center">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default Cta;
