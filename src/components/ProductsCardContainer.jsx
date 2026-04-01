import React, { useState } from "react";

const ProductsCard = ({ productsData, setCartProduct, cartProducts }) => {

  const handleBuyNow = (product) => {
    
    setCartProduct([...cartProducts, product]);
  };
  return (
    <div className="mt-15 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
      {productsData.map((product, i) => (
        <div key={i}>
          <div
            className={`card  shadow-md rounded-lg relative flex flex-col h-full hover:-translate-y-3 transition max-w-sm`}
          >
            <div className="card-body">
              <span
                className={`badge badge-md font-semibold  absolute top-4 right-4 ${product.tag === "popular" && "bg-[#627382] text-white"} ${product.tag === "new" && "bg-[#DBFCE7] text-[#0A883E]"} ${product.tag === "best seller" && "bg-[#FEF3C6] text-[#BB4D00]"}`}
              >
                {product.tag}
              </span>
              <div className="">
                <div className="bg-[#9514FA]/10 max-w-[70px] p-3 rounded-full mb-5">
                  <img src={product.icon} alt="" className="" />
                </div>
                <h2 className="text-3xl font-bold">{product.name}</h2>
                <p className={`font-medium  mt-2`}>{product.description}</p>
                <p className={`text-2xl mt-3 text-[#627382]`}>
                  <span className={`font-bold text-4xl text-[#101727]`}>
                    ${product.price}
                  </span>{" "}
                  /{product.period}
                </p>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs mb-4">
                {product.features.map((feature, i) => (
                  <li key={i}>
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
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <button
                  onClick={() => handleBuyNow(product)}
                  className={`btn  w-full rounded-full  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white`}
                >
                  buy
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsCard;
