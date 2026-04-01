import React, { useState } from "react";
import ProductsCard from "./ProductsCard";

const ProductsCardContainer = ({ productsData, setCartProduct, cartProducts }) => {

  
  return (
    <div className="mt-15 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
      {productsData.map((product, i) => (
        <ProductsCard cartProducts={cartProducts} setCartProduct={setCartProduct} key={i} product={product}/>
      ))}
    </div>
  );
};

export default ProductsCardContainer;
