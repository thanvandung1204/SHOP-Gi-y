import { MdClose } from "react-icons/md";
import cartItem from "../../../assets/shoe-store-product-images/p2 Air Jordan XXXVII Low PF/9cb30549-fe13-4998-ad7d-6c2876be3b5b.webp";
import "./CartItem.scss";
import { useState } from "react";

const CartItem = ({ quantity, setQuantity }) => {
  // Function to increase quantity of product
  const increaseQuantity = () => {
    setQuantity(quantity + 1); // Update quantity value in parent component
  }

  // Function to decrease quantity of product
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1); // Update quantity value in parent component
    }
  }

  // Function to calculate price
  const calculatePrice = () => {
    const pricePerProduct = 789; // Price per product
    return quantity * pricePerProduct;
  }

  return (
    <div className="cart-products">
      <div className="cart-product">
        <div className="img-container">
          <img src={cartItem} alt="1223" />
        </div>
        <div className="prod-details">
          <span className="name pr-8">Product Name</span> {/* Fix to display "Product Name" */}
          <MdClose className="close-btn" />

          <div className="quantity-buttons text-center mt-5">
            <span onClick={decreaseQuantity} className="border text-2xl rounded-xl pl-2"> - </span>
            <span className="border p-2 ml-2 mr-2 pl-3 rounded-2xl text-purple-600 text-2xl text-center "> {quantity} </span>
            <span onClick={increaseQuantity} className="border rounded-xl pl-2 text-2xl pr-2"> + </span>
          </div>
          <div className="text pt-2 pl-2">
            <span>{quantity}</span>
            <span>x</span>
            <span className="lineHeight text-2xl">$ {calculatePrice()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
