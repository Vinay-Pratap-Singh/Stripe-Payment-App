import React from "react";

const ProductCard = ({ product }) => {
  // getting cart from local storage
  let cartItems = localStorage.getItem("cartItems");
  if (cartItems) {
    cartItems = JSON.parse(cartItems);
  } else {
    cartItems = [];
  }

  // function to add the product in cart
  const addProductToCart = () => {
    // checking that the element is already in cartItem or not
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i]?.id === product?.id) {
        window.alert("Product is already in cart");
        break;
      }
    }

    cartItems.push(product);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
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
