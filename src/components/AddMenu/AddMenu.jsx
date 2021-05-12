import React from "react";

const InitialAddNoteForm = (props) => {
  return <div>form</div>;
};

const AddMenu = (props) => {
  return (
    <div className={`AddMenu ${props.additionalClass}`}>
      <input className="AddMenu-Toggle" onChange={props.toggleMenu} type="checkbox" id="AddMenu-Toggle" />
      <div className="AddMenu-Button">
        <label className="AddMenu-Label" htmlFor="AddMenu-Toggle">
          <div className="AddMenu-Plus fontType_headline">+</div>
        </label>
      </div>
      <div className="AddMenu-Content">
        <InitialAddNoteForm />
      </div>
    </div>
  );
};

export default AddMenu;
