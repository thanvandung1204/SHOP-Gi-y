import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdClose } from "react-icons/md";
import { useParams } from "react-router-dom";
import { getId } from "../../../api/products";
import "./Search.scss";

const Search = ({ setShowSearch }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const showItem = async () => {
    const { data } = await axios.get("http://localhost:3000/products");
    setSearchResults(data);
    console.log(data);
  };

  const handleSearch = (e) => {
    const searchInput = e.target.value;
    setSearchInput(searchInput);
    const filteredResults = searchResults.filter((product) => {
      // Customize your search logic here
      return product.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    setSearchResults(filteredResults);
  };

  useEffect(() => {
    showItem();
  }, []);

  return (
    <div className="search-model">
      <div className="form-model">
        <input
          onKeyUp={handleSearch}
          type="text"
          autoFocus
          placeholder="Search for products"
        />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        {searchInput.length > 0 && (
          <div className="search-result">
            {searchResults.map((product) => (
              <div key={product.id} className="search-result-item">
                <div className="img-container">
                  <img src={product.image} alt="1223" />
                </div>
                <div className="prod-details">
                  <span className="name">{product.name}</span>
                  <span className="desc">{product.price}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
