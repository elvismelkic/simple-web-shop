import React from "react";
import { NavLink } from "react-router-dom";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__row">
          <div>
            <NavLink to="/" exact className="nav__logo-container">
              <h1 className="heading heading--primary">e-devices</h1>
            </NavLink>
          </div>
          <ul className="footer__list footer__list--center">
            <li className="footer__item">
              <NavLink to="/" className="footer__link" exact>
                Home
              </NavLink>
            </li>
            <li className="footer__item">
              <NavLink to="/basket" className="footer__link" exact>
                Basket
              </NavLink>
            </li>
          </ul>
          <ul className="footer__list footer__list--end">
            <li className="footer__link footer__link--widen">
              <img
                src={facebook}
                className="footer__icon"
                alt="facebook logo"
              />
            </li>
            <li className="footer__link footer__link--widen">
              <img src={twitter} className="footer__icon" alt="twitter logo" />
            </li>
          </ul>
        </div>
        <p className="footer__copyright">&copy; 2019 All rights reserved.</p>
      </div>
    </footer>
  );
}
