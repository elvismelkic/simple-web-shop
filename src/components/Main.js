import React, { Component } from "react";
import ProductList from "./ProductList";
import { connect } from "react-redux";

class Main extends Component {
  state = {
    products: this.props.products,
    basket: this.props.basket,
    sortBy: "name asc"
  };

  handleSortChange = event => {
    let value = event.target.value;

    this.setState(() => ({ sortBy: value }));
  };

  componentDidMount() {
    // Update this.state.products so that its elements (products) have inBasket
    // property set to "true" if said element is in this.state.basket
    // and sort them by name ascending.
    let newProducts = this.state.products.sort((currentProduct, nextProduct) =>
      currentProduct.name.toUpperCase() < nextProduct.name.toUpperCase()
        ? -1
        : 1
    );

    this.setState(() => ({ products: newProducts }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sortBy !== this.state.sortBy) {
      let sortedProducts = this.state.products.sort(
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

      this.setState(() => ({ products: sortedProducts }));
    }
  }

  render() {
    const { products, basket, sortBy } = this.state;
    return (
      <main className="main">
        <div className="main__container">
          <section className="main__beer">
            <h2 className="main__heading">Products</h2>
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
          <ProductList products={products} />
        </div>
      </main>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    ...state
  };
}

export default connect(mapStateToProps)(Main);
