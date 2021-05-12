import React from "react";

import { compose } from "redux";
import { connect } from "react-redux";

import { toggleAddMenu } from "../../redux/notesReducer";
import AddMenu from "./AddMenu";
import withTransparentBackground from "../_HOC/withTransparentBackground";

class AddMenuContainer extends React.Component {
  toggleMenu = (event) => {
    let bool = event.currentTarget.checked;
    this.props.toggleAddMenu(bool);
  };
  render() {
    return <AddMenu additionalClass={this.props.additionalClass} toggleMenu={this.toggleMenu} />;
  }
}

let mstp = (state) => ({
  backgroundOn: state.notesPage.addMenuOn,
});

let odtp = { toggleAddMenu };

export default compose(
  connect((s) => ({}), odtp),
  withTransparentBackground("AddMenu-Toggle", mstp)
)(AddMenuContainer);
