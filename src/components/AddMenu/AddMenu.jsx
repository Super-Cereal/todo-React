import React from "react";
import { Field, reduxForm } from "redux-form";

class InitialAddNoteForm extends React.Component {
  constructor(props) {
    super(props);
    let subjects = props.subjects.map((s) => s.text);
    props.initialize({ title: "New note", color: "orange", subjects });
  }
  handleTitleSelect = (e) => {
    e.target.select();
  };
  render() {
    let subjects = this.props.subjects.map((s) => (
      <div key={s.id}>
        <Field
          component="input"
          onClick={this.handleTitleSelect}
          name={`subjects.${s.id}`}
          placeholder="Subject"
          autocomplete="off"
        />
        <button type="button" onClick={this.props.formDeleteSubject(s.id, this.props.clearFields)}>
          ✖
        </button>
      </div>
    ));
    let colors = ["orange", "blue", "red", "purple"].map((color, i) => (
      <Field
        component="input"
        type="radio"
        name="color"
        value={color}
        key={i}
        className={`AddNoteForm-Radios-Radio AddNoteForm-Radios-Radio_${color}`}
      />
    ));
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Field
          component="input"
          onClick={this.handleTitleSelect}
          name="title"
          placeholder="Title"
          autocomplete="off"
        />
        <button type="button" onClick={this.props.formAddSubject}>
          Add subjects
        </button>
        <div className="AddNoteForm-Subjects">{subjects}</div>
        <div className="AddNoteForm-Radios">{colors}</div>
        <div>
          <button>Save</button>
        </div>
      </form>
    );
  }
}

const AddNoteForm = reduxForm({ form: "addNoteForm" })(InitialAddNoteForm);

const AddMenu = (props) => {
  return (
    <div className={`AddMenu ${props.additionalClass}`}>
      <input
        className="AddMenu-Toggle"
        checked={props.backgroundOn}
        onChange={props.toggleMenu}
        type="checkbox"
        id="AddMenu-Toggle"
      />
      <div className="AddMenu-Button">
        <label className="AddMenu-Label" htmlFor="AddMenu-Toggle">
          <div className="AddMenu-Label-Plus fontType_headline">+</div>
        </label>
      </div>
      <div className="AddMenu-Content">
        <AddNoteForm
          onSubmit={props.onSubmit}
          subjects={props.subjects}
          formAddSubject={props.formAddSubject}
          formDeleteSubject={props.formDeleteSubject}
        />
      </div>
    </div>
  );
};

export default AddMenu;
