import React from "react";

export default function Product({
  product: { name, description, image, price }
}) {
  return (
    <div className="product__item">
      <div className="product__img-container">
        <img src={image} alt="product logo" className="product__img" />
      </div>
      <div className="product__info">
        <p className="product__name">{name}</p>
        <p className="product__info-row">
          <span className="product__info-description">
            {description.split(".")[0]}.
          </span>
        </p>
        <p className="product__info-row">
          <span className="product__info-value">
            {price} €
            {name === "Motion Sensor"
              ? " (3 for 65.00 €)"
              : name === "Smoke Sensor"
              ? " (2 for 35.00 €)"
              : ""}
          </span>
        </p>
      </div>
    </div>
  );
}
