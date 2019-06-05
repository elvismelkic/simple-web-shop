import React, { Component, Fragment } from "react";
import Button from "./Button";
import SidebarBasket from "./SidebarBasket";
import { connect } from "react-redux";
import { emptyBasket } from "../actions/products";

class Checkout extends Component {
  state = {
    processing: false,
    response: null,
    fullName: "",
    email: "",
    street: "",
    city: "",
    zip: "",
    country: "",
    phone: "",
    cardNum: "",
    expYear: "",
    cvc: "",
    sendFutureDiscounts: true
  };

  handleFormSubmit = async event => {
    event.preventDefault();
    this.setState(() => ({ processing: true }));

    let serverResponse = true;

    if (serverResponse) {
      this.setState(() => ({ processing: false, response: true }));
    } else {
      this.setState(() => ({ processing: false, response: false }));
    }
  };

  handleTextChange = event => {
    let target = event.target;

    switch (target.id) {
      case "name":
        this.setState(() => ({ fullName: target.value }));
        break;
      case "email":
        this.setState(() => ({ email: target.value }));
        break;
      case "street":
        this.setState(() => ({ street: target.value }));
        break;
      case "city":
        this.setState(() => ({ city: target.value }));
        break;
      case "zip":
        this.setState(() => ({ zip: target.value }));
        break;
      case "country":
        this.setState(() => ({ country: target.value }));
        break;
      case "phone":
        this.setState(() => ({ phone: target.value }));
        break;
      case "cardNum":
        this.setState(() => ({ cardNum: target.value }));
        break;
      case "expYear":
        this.setState(() => ({ expYear: target.value }));
        break;
      default:
        this.setState(() => ({ cvc: target.value }));
    }
  };

  handleCheckboxChange = () => {
    this.setState(() => ({
      sendFutureDiscounts: !this.state.sendFutureDiscounts
    }));
  };

  render() {
    const { emptyBasket } = this.props;
    const {
      processing,
      response,
      fullName,
      email,
      street,
      city,
      zip,
      country,
      phone,
      cardNum,
      expYear,
      cvc,
      sendFutureDiscounts
    } = this.state;

    return (
      <main className="main">
        <div className="main__container">
          {processing === true ? (
            <h2 className="main__heading u-text-align-center">
              Your request is being processed. Please, wait.
            </h2>
          ) : response === null ? (
            <Fragment>
              <h2 className="main__heading main__heading--checkout">
                Checkout
              </h2>
              <div className="checkout__container">
                <section className="checkout__section">
                  <form
                    className="checkout__form"
                    onSubmit={this.handleFormSubmit}
                  >
                    <h3 className="checkout__heading">
                      Personal information{" "}
                      <span className="checkout__heading--required">*</span>
                    </h3>
                    <label>
                      <input
                        type="text"
                        className="checkout__input"
                        placeholder="Full name"
                        id="name"
                        value={fullName}
                        onChange={this.handleTextChange}
                      />
                    </label>
                    <label>
                      <input
                        type="email"
                        className="checkout__input"
                        placeholder="Email"
                        id="email"
                        value={email}
                        onChange={this.handleTextChange}
                      />
                    </label>
                    <label>
                      <input
                        type="text"
                        className="checkout__input"
                        placeholder="Street"
                        id="street"
                        value={street}
                        onChange={this.handleTextChange}
                      />
                    </label>
                    <label>
                      <input
                        type="text"
                        className="checkout__input"
                        placeholder="City"
                        id="city"
                        value={city}
                        onChange={this.handleTextChange}
                      />
                    </label>
                    <label>
                      <input
                        type="text"
                        className="checkout__input"
                        placeholder="Zip"
                        id="zip"
                        value={zip}
                        onChange={this.handleTextChange}
                      />
                    </label>
                    <label>
                      <input
                        type="text"
                        className="checkout__input"
                        placeholder="Country"
                        id="country"
                        value={country}
                        onChange={this.handleTextChange}
                      />
                    </label>
                    <label>
                      <input
                        type="tel"
                        className="checkout__input"
                        placeholder="Phone"
                        id="phone"
                        value={phone}
                        onChange={this.handleTextChange}
                      />
                    </label>
                    <hr className="checkout__line" />
                    <h3 className="checkout__heading">
                      Card information{" "}
                      <span className="checkout__heading--required">*</span>
                    </h3>
                    <label>
                      <input
                        type="text"
                        className="checkout__input"
                        placeholder="Card number"
                        id="cardNum"
                        value={cardNum}
                        onChange={this.handleTextChange}
                      />
                    </label>
                    <label>
                      <input
                        type="text"
                        className="checkout__input"
                        placeholder="Expiration year (MM/YY)"
                        id="expYear"
                        value={expYear}
                        onChange={this.handleTextChange}
                      />
                    </label>
                    <label>
                      <input
                        type="text"
                        className="checkout__input"
                        placeholder="CVC"
                        id="cvc"
                        maxLength="3"
                        value={cvc}
                        onChange={this.handleTextChange}
                      />
                    </label>
                    <hr className="checkout__line" />
                    <label className="checkout__checkbox-label">
                      <input
                        type="checkbox"
                        className="checkout__checkbox-input"
                        name="sendFutureDiscounts"
                        readOnly
                        value="send info"
                        checked={sendFutureDiscounts}
                        onChange={this.handleCheckboxChange}
                      />{" "}
                      <span className="checkout__checkbox-button" />
                      Let me know about future discounts!
                    </label>
                    <Button
                      isDisabled={
                        !fullName ||
                        !email ||
                        !street ||
                        !city ||
                        !zip ||
                        !country ||
                        !phone ||
                        !cardNum ||
                        !cvc
                      }
                      fill={"filled"}
                      parent={"form"}
                      clickFunction={emptyBasket}
                    >
                      Order
                    </Button>
                  </form>
                </section>
                <section className="checkout__section">
                  <SidebarBasket />
                </section>
              </div>
            </Fragment>
          ) : response === true ? (
            <h2 className="main__heading u-text-align-center">
              Your order has been placed! Thank you for shopping with us! We
              hope we'll see you again!
            </h2>
          ) : (
            <h2 className="main__heading u-text-align-center">
              Oops, there was a mistake! Please, try again.
            </h2>
          )}
        </div>
      </main>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    emptyBasket: () => {
      dispatch(emptyBasket());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
