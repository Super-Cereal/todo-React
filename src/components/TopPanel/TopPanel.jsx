import React from "react";
import searchIcon from "../../static/images/loupe.svg";
import HamburgerMenu from "./HamburgerMenu";

const TopPanel = (props) => (
  <div className="TopPanel">
    <HamburgerMenu />
    <div className="TopPanel-Search">
      <img src={searchIcon} alt="search" />
    </div>
  </div>
);

export default TopPanel;
