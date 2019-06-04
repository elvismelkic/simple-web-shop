import React, { Component } from "react";
import Button from "./Button";
import { connect } from "react-redux";
import { addToBasket } from "../actions/products";
import { removeFromBasket } from "../actions/products";

class Modal extends Component {
  state = {
    quantity: 1
  };

  handleQuantityChange = event => {
    let target = event.target;

    this.setState(() => ({
      quantity: parseInt(target.value)
    }));
  };

  closeOnEscape = event =>
    event.keyCode === 27 ? this.props.closeModal() : null;

  componentDidMount() {
    // Close modal when escape key is pressed.
    document.addEventListener("keydown", this.closeOnEscape, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.closeOnEscape, false);
  }

  render() {
    const product = this.props.product || null;

    return (
      <div className="modal">
        {/* Darken the background when the modal appears.
            onClick closes opened modal when background is clicked. */}
        <div
          className={`modal__dark-background ${
            product ? "modal__dark-background--active" : null
          }`}
          onClick={this.props.closeModal}
        />
        {product === null ? (
          <div className="modal__container" />
        ) : (
          <div className="modal__container modal__container--active">
            <button className="modal__exit" onClick={this.props.closeModal}>
              &#10005;
            </button>
            <div className="modal__img-container">
              <img
                src={product.image}
                alt="product logo"
                className="modal__img"
              />
            </div>
            <div className="modal__info">
              <p className="modal__name u-margin-bottom-mid">{product.name}</p>
              <div className="modal__row-container">
                <p className="modal__info-row">
                  <span className="modal__info-value">{product.price} €</span>
                </p>
                <p className="modal__info-row modal__info-description">
                  {product.description}
                </p>
                <select
                  className="modal__info-row modal__quantity"
                  value={this.state.quantity}
                  onChange={this.handleQuantityChange}
                >
                  <option className="modal__quantity-option" value="1">
                    1
                  </option>
                  <option className="modal__quantity-option" value="2">
                    2
                  </option>
                  <option className="modal__quantity-option" value="3">
                    3
                  </option>
                  <option className="modal__quantity-option" value="4">
                    4
                  </option>
                  <option className="modal__quantity-option" value="5">
                    5
                  </option>
                </select>
              </div>
              <Button
                fill="filled"
                clickFunction={() => {
                  this.props.addToBasket({
                    product,
                    quantity: this.state.quantity
                  });
                }}
              >
                {this.props.basket.every(val => val.id !== product.id)
                  ? "Add to basket"
                  : "Update quantity"}
              </Button>
              <Button
                fill="filled"
                clickFunction={() => {
                  this.props.removeFromBasket(product.id);
                }}
              >
                Remove
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    basket: state.basket
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToBasket: product => {
      dispatch(addToBasket(product));
    },
    removeFromBasket: product => {
      dispatch(removeFromBasket(product));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
