import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const pathname = useLocation().pathname;

  return (
    <div className="h-20 bg-cyan-100 px-10 flex items-center justify-between">
      {/* logo */}
      <p className="font-bold text-xl">
        <Link to={"/"}>Stripe Payment</Link>
      </p>

      <ul className="flex items-center gap-3 font-semibold">
        <li
          className={
            pathname === "/"
              ? "text-green-500 font-bold text-lg"
              : "font-semibold text-lg"
          }
        >
          <Link to={"/"}>Product</Link>
        </li>
        <li
          className={
            pathname === "/cart"
              ? "text-green-500 font-bold text-lg"
              : "font-semibold text-lg"
          }
        >
          <Link to={"/cart"}>Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
