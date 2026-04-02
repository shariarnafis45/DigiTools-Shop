import React from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const CartProducts = ({ setCartProduct, cartProducts }) => {
  // const totalPrice = cartProducts.reduce((sum, item) => sum + item.price, 0);
  let sum = 0;
  for (let i of cartProducts) {
    sum = sum + i.price;
  }
  const handleDeleteBtn = (product)=> {
    toast.warning(`${product.name} Removed From Cart`, {
          position: "top-right",
        });
    const newCartProducts = cartProducts.filter(p=> p.id !== product.id)
    setCartProduct(newCartProducts)
  }
  const handleProceedToCheckout = () => {
    toast.success("Ready to Checkout", {
      position: "top-right",
    });
    setCartProduct([]);
  };
  return (
    <div className="card shadow-sm bg-base-200 p-3 sm:p-10  mt-12">
      {cartProducts.length !== 0 ? (
        <div className="space-y-5">
          <h2 className="text-2xl font-bold">Your Cart</h2>
          <div className="space-y-6">
            {cartProducts.map((cartProduct, i) => (
              <div
                key={i}
                className="flex justify-between items-center bg-base-300 p-5 rounded-lg "
              >
                <div className="flex gap-4">
                  <div className="bg-[#9514FA]/10 max-w-[50px] p-2 rounded-full flex justify-center items-center">
                    <img src={cartProduct.icon} alt="" className="" />
                  </div>
                  <div>
                    <h2 className=" font-semibold">{cartProduct.name}</h2>
                    <p className="font-medium">$ {cartProduct.price}</p>
                  </div>
                </div>
                <button onClick={()=>handleDeleteBtn(cartProduct)} className="btn text-2xl btn-ghost text-red-600 rounded-full">
                  <MdDelete />
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold">Total :</h3>
            <p className="text-3xl font-extrabold">$ {sum}</p>
          </div>
          <div className="mt-auto">
            <button
              onClick={handleProceedToCheckout}
              className={`btn  w-full rounded-full  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white`}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold text-center">Your Cart Is Empty</h2>
        </div>
      )}
    </div>
  );
};

export default CartProducts;
