import React, { useState, useEffect } from "react";
import "./Products.scss";
import Product from './Product/Product';
import { getALl } from "../../api/products";

const Products = ({ innerPage, headingText }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const showItems = async () => {
      try {
        const { data } = await getALl();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    showItems();
  }, []);

  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        <Product products={products} />
      </div>
    </div>
  );
};

export default Products;
