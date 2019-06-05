import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import ProductList from "./ProductList";
import { connect } from "react-redux";

class Basket extends Component {
  state = {
    products: this.props.products,
    basket: this.props.basket,
    promotion: {
      promotionName: "",
      applied: false
    },
    total: this.props.total,
    sortBy: "name asc"
  };

  handleTextChange = event => {
    let value = event.target.value;

    this.setState(() => ({
      promotion: { ...this.state.promotion, promotionName: value }
    }));
  };

  handleButtonClick = () => {
    let {
      promotion: { promotionName, applied },
      total
    } = this.state;
    let newTotal, newApplied;

    if (applied) return;

    if (promotionName === "20%OFF") {
      newTotal = parseFloat((total * 0.8).toFixed(2));
      newApplied = true;
    } else if (promotionName === "5%OFF") {
      newTotal = parseFloat((total * 0.95).toFixed(2));
      newApplied = true;
    } else if (promotionName === "20EUROFF") {
      newTotal = parseFloat((total - 20).toFixed(2));
      newApplied = true;
    } else {
      newTotal = total;
      newApplied = applied;
    }

    this.setState(() => ({
      total: newTotal >= 0 ? newTotal : 0,
      promotion: { promotionName: "", applied: newApplied }
    }));
  };

  handleSortChange = event => {
    let value = event.target.value;

    this.setState(() => ({ sortBy: value }));
  };

  componentDidUpdate(prevProps, prevState) {
    // Sort products when "this.state.sortBy" is changed
    if (prevState.sortBy !== this.state.sortBy) {
      let sortedBasket = this.state.basket.sort(
        (currentProduct, nextProduct) => {
          switch (this.state.sortBy) {
            case "name asc":
              return currentProduct.name.toUpperCase() <
                nextProduct.name.toUpperCase()
                ? -1
                : 1;
            case "name desc":
              return currentProduct.name.toUpperCase() <
                nextProduct.name.toUpperCase()
                ? 1
                : -1;
            case "price asc":
              return currentProduct.price - nextProduct.price;
            default:
              return nextProduct.price - currentProduct.price;
          }
        }
      );

      this.setState(() => ({ basket: sortedBasket }));
    }
  }

  render() {
    let { basket } = this.props;
    let {
      promotion: { promotionName },
      total,
      sortBy
    } = this.state;
    return (
      <main className="main">
        <div className="main__container">
          <section className="main__beer">
            <h2 className="main__heading">Basket</h2>
            <select
              className="main__sort"
              value={sortBy}
              onChange={this.handleSortChange}
            >
              <option className="main__sort-option" value="name asc">
                Name Asc
              </option>
              <option className="main__sort-option" value="name desc">
                Name Desc
              </option>
              <option className="main__sort-option" value="price asc">
                Price Asc
              </option>
              <option className="main__sort-option" value="price desc">
                Price Desc
              </option>
            </select>
          </section>
          {basket.length === 0 ? (
            <p className="main__total">Your basket is empty</p>
          ) : (
            <Fragment>
              <ProductList products={basket} />
              <div className="main__promotion">
                <label>
                  <input
                    type="text"
                    className="main__input"
                    placeholder="Promotion"
                    id="promotion"
                    value={promotionName}
                    onChange={this.handleTextChange}
                  />
                </label>
                <Button
                  fill="filled"
                  parent="basket"
                  clickFunction={this.handleButtonClick}
                >
                  Apply
                </Button>
              </div>
              <p className="main__total">TOTAL: {total.toFixed(2)} €</p>
              <NavLink to="/checkout" className="nav__link">
                <Button fill="filled" parent="basket">
                  Proceed to checkout
                </Button>
              </NavLink>
            </Fragment>
          )}
        </div>
      </main>
    );
  }
}

function mapStateToProps({ products, basket, total }) {
  return {
    products,
    basket,
    total
  };
}

export default connect(mapStateToProps)(Basket);
