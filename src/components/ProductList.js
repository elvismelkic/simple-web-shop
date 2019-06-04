import React, { Component, Fragment } from "react";
import Modal from "./Modal";
import Product from "./Product";
import { connect } from "react-redux";

export default class ProductList extends Component {
  state = {
    modalProduct: null
  };

  handleClickProduct = product => {
    this.setState(() => ({ modalProduct: product }));
  };

  handleCloseModal = () => {
    this.setState(() => ({ modalProduct: null }));
  };

  render() {
    const { products } = this.props;
    const { modalProduct } = this.state;
    return (
      <Fragment>
        <ul className="product__list">
          {products.map(product => (
            <li
              key={product.id}
              onClick={() => this.handleClickProduct(product)}
            >
              <Product product={product} />
            </li>
          ))}
        </ul>
        <Modal product={modalProduct} closeModal={this.handleCloseModal} />
      </Fragment>
    );
  }
}

// function mapStateToProps(state) {
//   console.log(state);
//   return {
//     ...state
//   };
// }

// export default connect(mapStateToProps)(ProductList);
