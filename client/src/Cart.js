import React, { useEffect, useState } from "react";
import CartCard from "./Components/CartCard";
import Header from "./Components/Header";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  // function to remove product from cart
  const removeFromCart = (cartItem) => {
    const updatedCart = cartItems.filter((item) => item.id !== cartItem.id);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  // function to calculate the amount
  const calculateAmount = (amount) => {
    setTotalAmount(totalAmount + amount);
  };

  // function to handle the payment checkout
  const handleCheckout = () => {
    fetch("http://localhost:5000/create-checkout-session", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((resData) => console.log(resData))
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    let myCart = localStorage.getItem("cartItems");
    if (myCart) {
      myCart = JSON.parse(myCart);
    } else {
      myCart = [];
    }
    let amount = 0;
    for (let i = 0; i < myCart.length; i++) {
      amount += myCart[i].price;
    }
    setTotalAmount(amount);
    setCartItems(myCart);
  }, []);

  return (
    <div>
      {/* adding the header */}
      <Header />

      <div className="flex items-center justify-center flex-col gap-10 mt-10">
        {cartItems.length === 0 ? (
          <h1 className="font-bold text-xl">No items in cart</h1>
        ) : (
          <div className="flex flex-col items-center gap-10">
            {cartItems.map((cartItem, index) => {
              return (
                <CartCard
                  key={index}
                  cartItem={cartItem}
                  removeFromCart={removeFromCart}
                  calculateAmount={calculateAmount}
                />
              );
            })}
          </div>
        )}

        {/* adding the checkout */}
        {cartItems.length > 0 && (
          <div className="self-end mr-10 bg-cyan-100 p-3 rounded-md font-semibold w-60 space-y-5 mb-10">
            <div className="flex items-center justify-between">
              <h3>Subtotal</h3>
              <p>&#8377; {totalAmount}</p>
            </div>
            <button
              className="bg-cyan-500 w-full text-white font-bold py-2 rounded-md px-5"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
