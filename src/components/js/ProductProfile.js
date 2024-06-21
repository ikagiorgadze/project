import React from "react";
import "../css/ProductProfile.css";

const ProductProfile = ({ image, name, description, price, available }) => {
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
      </div>
    </div>
  );
};

export default ProductProfile;
