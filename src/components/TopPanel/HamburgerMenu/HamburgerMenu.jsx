import React from "react";

const HamburgerMenu = (props) => {
  return (
    <div className={`HamburgerMenu ${props.additionalClass}`}>
      <input
        className="HamburgerMenu-Toggle"
        onChange={props.toggleMenu}
        id="HamburgerMenu-Toggle"
        type="checkbox"
      />
      <label className="HamburgerMenu-Button" htmlFor="HamburgerMenu-Toggle">
        <div></div>
        <span></span>
      </label>
      <ul className="HamburgerMenu-Box">
        <li className="HamburgerMenu-Item">
          <a href="/#">Lorem Ipsum</a>
        </li>
        <li className="HamburgerMenu-Item">
          <a href="/#">Lorem Ipsum</a>
        </li>
        <li className="HamburgerMenu-Item">
          <a href="/#">Lorem Ipsum</a>
        </li>
        <li className="HamburgerMenu-Item">
          <a href="/#">Lorem Ipsum</a>
        </li>
      </ul>
    </div>
  );
};


export default HamburgerMenu;
