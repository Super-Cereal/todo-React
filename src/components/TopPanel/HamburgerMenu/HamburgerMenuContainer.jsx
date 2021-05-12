import React from "react";

import { compose } from "redux";
import { connect } from "react-redux";

import { toggleHamburgerMenu } from "../../../redux/notesReducer";
import HamburgerMenu from "./HamburgerMenu";
import withTransparentBackground from "../../_HOC/withTransparentBackground";

class HamburgerMenuContainer extends React.Component {
  toggleMenu = (event) => {
    let bool = event.currentTarget.checked;
    this.props.toggleHamburgerMenu(bool);
  };
  render() {
    return <HamburgerMenu additionalClass={this.props.additionalClass} toggleMenu={this.toggleMenu} />;
  }
}

let mstp = (state) => ({
  backgroundOn: state.notesPage.hamburgerMenuOn,
});

let odtp = { toggleHamburgerMenu };

export default compose(
  connect((s) => ({}), odtp),
  withTransparentBackground("HamburgerMenu-Toggle", mstp)
)(HamburgerMenuContainer);
