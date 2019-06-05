import React from "react";

export default function SidebarProduct({ product: { name, price } }) {
  return (
    <div className="sidebar-product__item">
      <div className="sidebar-product__info">
        <p className="sidebar-product__name">{name}</p>
        <p className="sidebar-product__info-row">
          <span className="sidebar-product__info-value">{price} €</span>
        </p>
      </div>
    </div>
  );
}
