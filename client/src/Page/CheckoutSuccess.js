import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
const CheckoutSuccess = () => {
  return (
    <div className="space-y-5">
      <Header />
      <div className="space-y-3">
        <h1 className="text-2xl text-green-500 font-semibold">
          Purchase Successfull
        </h1>
        <Link to={"/"}>
          <button className="px-4 py-1 bg-cyan-500 text-white">
            Explore More Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
