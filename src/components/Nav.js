import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import home from "../images/home.svg";
import cart from "../images/cart.svg";
import { connect } from "react-redux";

class Nav extends Component {
  state = {
    mobileVisible: false
  };

  showMobileNav = () => {
    this.setState(() => ({ mobileVisible: !this.state.mobileVisible }));
  };

  render() {
    return (
      <Fragment>
        <nav className="nav">
          <div className="nav__container">
            <div className="nav__heading">
              <NavLink to="/" exact className="nav__link nav__link--logo">
                <h1 className="heading heading--primary">E-DEVICES</h1>
              </NavLink>
              <h2 className="heading heading--secondary">
                Get the best electronic devices in the market!
              </h2>
            </div>
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink to="/" exact className="nav__link">
                  <img src={home} className="nav__link" alt="home" />
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/basket" className="nav__link">
                  <img src={cart} className="nav__link" alt="home" />
                  <span className="nav__link nav__link--quantity">
                    {this.props.basket.reduce(
                      (acc, next) => acc + next.quantity,
                      0
                    )}
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        {/* <nav className="mobile-nav">
          <button className="mobile-nav__button" onClick={this.showMobileNav}>
            <span
              className={
                this.state.mobileVisible
                  ? "mobile-nav__icon mobile-nav__icon--clicked"
                  : "mobile-nav__icon"
              }
            >
              &nbsp;
            </span>
          </button>
          <div className="mobile-nav__container">
            <NavLink to="/" className="mobile-nav__logo-container" exact>
              <img
                src={symbol}
                className="mobile-nav__logo nav__logo-part1"
                alt="logo"
              />
              <img
                src={logo}
                className="mobile-nav__logo nav__logo-part2"
                alt="logo"
              />
            </NavLink>
            <ul
              className={
                this.state.mobileVisible
                  ? "mobile-nav__list mobile-nav__list--show"
                  : "mobile-nav__list"
              }
            >
              <li className="mobile-nav__item">
                <NavLink
                  to="/"
                  className="mobile-nav__link"
                  exact
                  activeClassName="mobile-nav__link--active"
                  onClick={this.showMobileNav}
                >
                  Home
                </NavLink>
              </li>
              <li className="mobile-nav__item">
                <NavLink
                  to="/basket"
                  className="mobile-nav__link"
                  activeClassName="mobile-nav__link--active"
                  onClick={this.showMobileNav}
                >
                  Basket
                </NavLink>
              </li>
            </ul>
          </div>
        </nav> */}
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    basket: state.basket
  };
}

export default connect(mapStateToProps)(Nav);
