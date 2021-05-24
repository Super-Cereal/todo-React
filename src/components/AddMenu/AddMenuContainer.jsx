import React, { useState } from "react";

import { compose } from "redux";
import { connect } from "react-redux";
import { reset, SubmissionError } from "redux-form";

import { toggleAddMenu, addNote } from "../../redux/notesReducer";
import AddMenu from "./AddMenu";
import withTransparentBackground from "../_HOC/withTransparentBackground";
import { addMenuOnSelector } from "./../../redux/notesSelector";

const AddMenuContainer = (props) => {
  const [subjects, setSubjects] = useState([]);
  const [showError, setShowError] = useState(false);

  const toggleMenu = (event) => {
    let bool = event.currentTarget.checked;
    props.toggleAddMenu(bool);
  };
  const formAddSubject = () => {
    let id = subjects.length ? subjects[subjects.length - 1].id + 1 : 0;
    setSubjects([...subjects, { id, text: "" }]);
  };
  const formDeleteSubject = (id, clearFields) => () => {
    clearFields("addNoteForm", true, false, [`subjects.${id}`]);
    setSubjects(subjects.filter((s) => s.id !== id));
  };
  const onSubmit = (data) => {
    let { title, subjects, color } = data;
    subjects = subjects.filter((s) => s);
    if (subjects.length === 0) {
      setShowError(true);
      setTimeout(() => setShowError(false), 4000);
      throw new SubmissionError({ _error: "You shoud add at least 1 subject" });
    }
    props.addNote(title, subjects, color);
    props.toggleAddMenu(false);
    setSubjects([]);
    props.reset("addNoteForm");
  };
  return (
    <AddMenu
      showError={showError}
      additionalClass={props.additionalClass}
      backgroundOn={props.backgroundOn}
      subjects={subjects}
      toggleMenu={toggleMenu}
      formAddSubject={formAddSubject}
      formDeleteSubject={formDeleteSubject}
      onSubmit={onSubmit}
    />
  );
};

let mstp = (state) => ({
  backgroundOn: addMenuOnSelector(state),
});
let odtp = { toggleAddMenu, addNote, reset };

export default compose(
  connect(mstp, odtp),
  withTransparentBackground("AddMenu-Toggle", mstp),
  React.memo
)(AddMenuContainer);
