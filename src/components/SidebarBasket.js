import React, { Component } from "react";
import SidebarProduct from "./SidebarProduct";
import { connect } from "react-redux";

class SidebarBasket extends Component {
  state = {
    basket: this.props.basket
  };

  render() {
    const { total } = this.props;
    const { basket } = this.state;
    return (
      <section className="sidebar-basket">
        <h3 className="sidebar-basket__heading">Basket</h3>
        <ul className="sidebar-basket__list">
          {basket ? (
            basket.map(product => (
              <li key={product.id}>
                <SidebarProduct product={product} />
              </li>
            ))
          ) : (
            <div />
          )}
        </ul>
        <p className="sidebar-basket__total">TOTAL: {total.toFixed(2)} €</p>
      </section>
    );
  }
}

function mapStateToProps({ basket, total }) {
  return {
    basket,
    total
  };
}

export default connect(mapStateToProps)(SidebarBasket);
