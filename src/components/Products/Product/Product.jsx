import React from "react";
import "./Product.scss";
import img1 from '../../../assets/shoe-store-product-images/Air Jordan 1 Mid SE Craft/air-jordan-1-mid-se-craft-shoes-RmP7J6.jpeg';
import { motion } from 'framer-motion'
import { fadeIn } from '../../../variants'
import { Link, useNavigate } from "react-router-dom";

const Product = ({ products }) => {
  const navigate = useNavigate()
  return (
    <div className="md:grid grid-cols-4">
      {products.map((item, index) => (
        <div key={index} onClick={() => {
          navigate(`/Products/${item.id}`);
          window.location.reload()
        }} >
          <motion.div  variants={fadeIn('up', 0.25)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} key={index} className="products-card">
          <div className="thumbnail">
            <img  src={item.image} alt="123" />
          </div>
          <div className="prod-details">
            <span className="name pl-5 font-bold">{item.name}</span>
                  <span className="price text-red-500 text-center pl-5">{ item.price} <span className="text-red-600 text-xl">$</span></span>
            <button onClick={()=> navigate("/brd")} className="mt-2 ml-5 overflow-hidden opacity-100 transition duration-300 ease-in-out hover:opacity-80">Buy Now</button>
          </div>
        </motion.div>
       </div> 
      ))}
    </div>
  );
};

export default Product;
