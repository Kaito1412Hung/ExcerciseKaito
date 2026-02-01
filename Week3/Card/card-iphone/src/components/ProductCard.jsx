import React from "react";
import "./ProductCard.css";

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>

      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">{price} VNĐ</p>
        <button className="btn-card">Mua</button>
      </div>
    </div>
  );
};

export default ProductCard;
