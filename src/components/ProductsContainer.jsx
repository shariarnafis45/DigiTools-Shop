import React, { use, useState } from "react";
import ProductsCardContainer from "./ProductsCardContainer"
import CartProducts from "./CartProducts";

const ProductsContainer = ({ productsPromise, setCartItemCount }) => {
  const [cartProducts, setCartProduct] = useState([])
  const productsData = use(productsPromise);
  const [tab,SetTab] = useState("products")
  
  
  return (
    <div className="max-w-[1200px] mx-auto py-28 px-7">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-[#101727]">
          Premium Digital Tools
        </h2>
        <p className="font-medium text-[#627382] mt-3">
          Choose from our curated collection of premium digital products
          designed <br />
          to boost your productivity and creativity.
        </p>
      </div>
      <div className="flex justify-center mt-5">
        <button onClick={()=> SetTab("products")} className={`btn rounded-full hover:bg-white  border-none ${tab === "products" && "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" } `}>Products</button>
        <button onClick={()=> SetTab("cart")} className={`btn rounded-full hover:bg-white  border-none ${tab === "cart" && "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" } `}>Cart<span>({cartProducts.length})</span></button>
      </div>
      <div>
        {
            tab === "products" ? <ProductsCardContainer setCartItemCount={setCartItemCount} productsData={productsData} setCartProduct={setCartProduct} cartProducts={cartProducts}/> : <CartProducts cartProducts={cartProducts} setCartProduct={setCartProduct}/>
        }
      </div>

    </div>
  );
};

export default ProductsContainer;
