import React, { useState } from "react";

const CartCard = ({ cartItem, removeFromCart, calculateAmount }) => {
  const [productCount, setProductCount] = useState(1);

  return (
    <div className="w-[90vw] flex items-center justify-between px-10 shadow-lg">
      {/* product details */}
      <div className="flex items-center gap-10">
        <img src={cartItem?.imageURL} alt="product" />
        <div>
          <h3>{cartItem?.productName}</h3>
          <p>{cartItem?.description}</p>
          <button
            className="font-semibold text-xl"
            onClick={() => removeFromCart(cartItem)}
          >
            Remove
          </button>
        </div>
      </div>

      {/* product count and price */}
      <div className="space-y-3">
        {/* button and counter */}
        <div className="flex items-center gap-2 bg-gray-100 text-xl font-semibold py-2 px-5 rounded-md">
          <button
            className="border-r-[1.5px] border-gray-400 pr-3"
            onClick={() => {
              setProductCount((prev) => {
                if (prev > 1) {
                  calculateAmount(-cartItem.price);
                  return prev - 1;
                }
                return prev;
              });
            }}
          >
            -
          </button>
          <p className="px-2">{productCount}</p>
          <button
            className="border-l-[1.5px] border-gray-400 pl-3"
            onClick={() => {
              setProductCount((prev) => {
                if (prev < 10) {
                  calculateAmount(cartItem.price);
                  return prev + 1;
                }
                return prev;
              });
            }}
          >
            +
          </button>
        </div>

        {/* price display */}
        <p className="w-fit m-auto font-semibold">
          &#8377;{cartItem.price * productCount}
        </p>
      </div>
    </div>
  );
};

export default CartCard;
