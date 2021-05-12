import React from "react";
import { connect } from "react-redux";

let withTransparentBackground = (htmlFor, mstp) => (Component) => {
  // htmlFor - id input-а
  // mstp - параметр для connect, чтобы получить 
  // нужный bollean: backgroundOn из store
  let withTransparentBackgroundComponent = (props) => (
    <>
      <Component
        {...props}
        additionalClass={`withTransparentBackground_component withTransparentBackground_component_${props.backgroundOn}`}
      />
      <label
        className={`withTransparentBackground_label withTransparentBackground_label_${props.backgroundOn}`}
        htmlFor={htmlFor}
      ></label>
    </>
  );

  return connect(mstp)(withTransparentBackgroundComponent);
};

export default withTransparentBackground;
