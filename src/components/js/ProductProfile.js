import React, { useContext } from "react";
import "../css/ProductProfile.css";
import { CartContext } from "../js/CartContext";

const ProductProfile = ({ key, image, name, description, price, available }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ key, image, name, description, price, available });
  };

  return (
    <div className="row product mx-auto">
      <div className="col-md-2">
        <img src={image} alt={name} className="product-image" />
      </div>
      <div className="col-md-10 product-detail">
        <div className="product-header">
          <h4 className="product-name">{name}</h4>
          <span className="product-price">₾{price}</span>
        </div>
        <p>{description}</p>
        <p>Available: {available ? "Yes" : "No"}</p>
        <button className="btn btn-primary" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductProfile;
