import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import "./Cart.scss";
import CartItem from "./CartItem/CartItem";

const Cart = ({ setShowCart, quantity }, props) => {
  const [quantityFromChild, setQuantityFromChild] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  // Update quantity value from child component
  const updateQuantityFromChild = (quantity) => {
    setQuantityFromChild(quantity);
  }

  useEffect(() => {
    if (showSuccess) {
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  },[showSuccess]);

  // Function to calculate total price of the cart
  const calculateTotalPrice = () => {
    const pricePerProduct = 789; // Price per product
    return quantityFromChild * pricePerProduct;
  }

  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading"> Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">close</span>
          </span>
        </div>
        <>
          <CartItem
            quantity={quantityFromChild}
            setQuantity={updateQuantityFromChild}
          />
          <div className="cart-footer">
            <div className="subtotal">
              <span className="text"> Total:</span>
              <span className="text total text-red-500"> {calculateTotalPrice()} $</span>
            </div>
            <div className="button">
              <button onClick={() => {
                setShowSuccess(true);
              }} className="checkout-cta hover:transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">Checkout</button>
            </div>
          </div>
        </>
      </div>
      {/* Show success box if showSuccess is true */}
     {showSuccess && (
      <div className="success-box">
        <span className="tick-icon">&#10004;</span>
        <span className="success-text text-4xl text-red-500">Success!</span>
      </div>
     )}
    </div>
  );
};

export default Cart;
