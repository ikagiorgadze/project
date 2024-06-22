import React from "react";
import "../css/HomePage.css";
import ProductList from "./ProductList";

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Top Rated Events</h1>

      <div className="container">
        <ProductList />
      </div>
      <div className="cart-container">
        <Cart />
      </div>
    </div>
  );
};

export default HomePage;
