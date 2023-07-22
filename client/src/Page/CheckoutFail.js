import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

const CheckoutFail = () => {
  return (
    <div className="space-y-5">
      <Header />
      <div className="space-y-3 w-fit m-auto flex flex-col items-center justify-center gap-2">
        <h1 className="text-2xl text-red-500 font-semibold">Purchase Failed</h1>
        <Link to={"/cart"}>
          <button className="px-4 py-2 bg-cyan-500 text-white font-bold">
            Try Again
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutFail;
