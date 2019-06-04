import React, { Component } from "react";

export default class SidebarBasket extends Component {
  state = {
    basket: JSON.parse(sessionStorage.getItem("basket")) || []
  };

  render() {
    const { basket } = this.state;
    return (
      <section className="main__crate">
        <h2 className="main__heading">Basket</h2>
        <ul className="card__list">
          {basket ? (
            basket.map(product => (
              <li
                key={product.id}
                onClick={() => this.handleClickProduct(product)}
              >
                <p className="crate__quote-text">{product.name}</p>
              </li>
            ))
          ) : (
            <div />
          )}
        </ul>
        <p className="crate__quote-text">
          The crate will remain forever empty due to the lack of functionality.
        </p>
        <p className="crate__quote-source">&mdash; Captain Disappointment</p>
      </section>
    );
  }
}
