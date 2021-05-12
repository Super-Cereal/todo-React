import React from "react";
import searchIcon from "../../static/images/loupe.svg";
import HamburgerMenuContainer from './HamburgerMenu/HamburgerMenuContainer';

const TopPanel = (props) => (
  <div className="TopPanel">
    <HamburgerMenuContainer />
    <div className="TopPanel-Search">
      <img src={searchIcon} alt="search" />
    </div>
  </div>
);

export default TopPanel;
