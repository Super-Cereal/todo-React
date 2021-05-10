import React from "react";

const HamburgerMenu = (props) => (
  <div className="HamburgerMenu">
    <input className="HamburgerMenu-Toggle" id="HamburgerMenu-Toggle" type="checkbox" />
    <label className="HamburgerMenu-Button" htmlFor="HamburgerMenu-Toggle">
      <div></div>
      <span></span>
    </label>
    <label className="HamburgerMenu-HiddenBackgroundButton" htmlFor="HamburgerMenu-Toggle"></label>
    <ul className="HamburgerMenu-Box">
      <li className="HamburgerMenu-Item">
        <a href="#">Lorem Ipsum</a>
      </li>
      <li className="HamburgerMenu-Item">
        <a href="#">Lorem Ipsum</a>
      </li>
      <li className="HamburgerMenu-Item">
        <a href="#">Lorem Ipsum</a>
      </li>
      <li className="HamburgerMenu-Item">
        <a href="#">Lorem Ipsum</a>
      </li>
    </ul>
  </div>
);

export default HamburgerMenu;
