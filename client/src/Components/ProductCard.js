import React, { useEffect, useState } from "react";

const ProductCard = ({ product }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    let myCart = localStorage.getItem("cartItems");
    if (myCart) {
      myCart = JSON.parse(myCart);
    } else {
      myCart = [];
    }
    setCartItems(myCart);
  }, []);

  // function to add the product in cart
  const addProductToCart = () => {
    // getting cart items from localstorage
    let myCart = localStorage.getItem("cartItems");
    if (myCart) {
      myCart = JSON.parse(myCart);
    } else {
      myCart = [];
    }
    // checking that the element is already in cartItem or not
    let isProductExist = false;
    for (let i = 0; i < myCart.length; i++) {
      if (myCart[i]?.id === product?.id) {
        window.alert("Product is already in cart");
        isProductExist = true;
        break;
      }
    }
    if (isProductExist) {
      return;
    }

    myCart.push(product);
    localStorage.setItem("cartItems", JSON.stringify(myCart));
    window.alert("Product added to cart");
  };

  return (
    <div className="shadow-md rounded-md p-3 space-y-1">
      <img src={product?.imageURL} alt="product" />
      <h3>{product?.productName}</h3>
      <p>{product?.description}</p>
      <button
        className="bg-cyan-500 w-full text-white font-bold py-2 rounded-md"
        onClick={() => addProductToCart(product)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
