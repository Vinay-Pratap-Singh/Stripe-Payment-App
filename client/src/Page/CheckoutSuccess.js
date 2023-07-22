import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
const CheckoutSuccess = () => {
  //  removing the cart items from local storage
  localStorage.removeItem("cartItems");

  return (
    <div className="space-y-5">
      <Header />
      <div className="space-y-3 w-fit m-auto flex flex-col items-center justify-center gap-2">
        <h1 className="text-2xl text-green-500 font-semibold">
          Purchase Successfull
        </h1>
        <Link to={"/"}>
          <button className="px-4 py-2 bg-cyan-500 text-white font-bold">
            Explore More Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
