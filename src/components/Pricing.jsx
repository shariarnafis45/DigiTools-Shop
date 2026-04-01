import React, { use } from "react";

const Pricing = ({ pricingDataPromise }) => {
  const pricingData = use(pricingDataPromise);

  return (
    <div className="max-w-[1200px] mx-auto py-28 px-5">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-[#101727]">
          Simple, Transparent Pricing
        </h2>
        <p className="font-medium text-[#627382] mt-3">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="mt-14  grid sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8">
        {pricingData.map((pricing) => {
          return (
            <div className={`card ${pricing.planName === "Pro" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-base-200"}  shadow-md rounded-lg relative flex flex-col h-full hover:-translate-y-3 transition max-w-sm`}>
              <div className="card-body">
                <span
                  className={`badge badge-lg badge-warning ${pricing.planName === "Pro" ? "block" : "hidden"} absolute -top-3 right-[35%]`}
                >
                  Most Popular
                </span>
                <div className="">
                  <h2 className="text-3xl font-bold">{pricing.planName}</h2>
                  <p className={`font-medium ${pricing.planName === "Pro" ? "text-white" : "text-[#627382]"}  mt-2`}>
                    {pricing.description}
                  </p>
                  <p className={`text-2xl mt-3 ${pricing.planName === "Pro" ? "text-white" : "text-[#627382]"} `}>
                    {" "}
                    <span className={`font-bold text-4xl ${pricing.planName === "Pro" ? "text-white" : "text-black"} `}>
                      ${pricing.price}
                    </span>{" "}
                    /month
                  </p>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs mb-4">
                  {pricing.features.map((feature) => (
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 inline-block text-success"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature.name}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <button className={`btn btn-primary w-full rounded-full ${pricing.planName !== "Pro" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-white text-[#9514FA]"} border-none shadow-none`}>
                    {pricing.buttonText}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
