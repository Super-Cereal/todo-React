import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "./../../redux/formUtils/Input";
import { requiredField } from "./../../redux/formUtils/validators";

class InitialAddNoteForm extends React.Component {
  constructor(props) {
    super(props);
    let subjects = props.subjects.map((s) => s.text);
    props.initialize({ title: "", color: "orange", subjects });
  }
  handleTitleSelect = (e) => {
    e.target.select();
  };
  render() {
    const subjects = this.props.subjects.map((s, i, subs) => (
      <div key={s.id}>
        <Field
          component="input"
          onClick={this.handleTitleSelect}
          name={`subjects.${s.id}`}
          placeholder="Subject"
          autoComplete="off"
          className="Input-Line"
          autoFocus={subs.length - 1 === i}
        />
        <button
          type="button"
          className="Input-Button Input-Button_delete"
          onClick={this.props.formDeleteSubject(s.id, this.props.clearFields)}
        >
          ✖
        </button>
      </div>
    ));
    const colors = ["orange", "blue", "red", "purple"].map((color, i) => (
      <div key={i}>
        <Field
          component="input"
          type="radio"
          name="color"
          value={color}
          className={`AddNoteForm-Radios-Radio`}
          id={`AddNoteForm-Radios-Radio_${color}`}
        />
        <label
          className={`AddNoteForm-Radios-Label AddNoteForm-Radios-Label_${color}`}
          htmlFor={`AddNoteForm-Radios-Radio_${color}`}
        ></label>
      </div>
    ));

    return (
      <form className="AddNoteForm" onSubmit={this.props.handleSubmit}>
        <Field
          component={Input}
          validate={[requiredField]}
          onClick={this.handleTitleSelect}
          name="title"
          autoComplete="off"
          className="AddNoteForm-Title FormMoveableText-Input fontType_subhead"
          id="AddNoteForm-Title"
          placeholder="Title"
          required={true}
        />
        <div className="AddNoteForm-Subjects">{subjects}</div>
        {this.props.subjects.length < 4 ? (
          <button
            disabled={this.props.subjects.length >= 4}
            className="TransparentButton"
            type="button"
            onClick={this.props.formAddSubject}
          >
            Add subject
          </button>
        ) : (
          <span className="Ahtung">Вы сможете добавить больше целей на основной странице</span>
        )}
        <div className="AddNoteForm-Radios">{colors}</div>
        <div>
          {this.props.error && this.props.showError ? (
            <span className="Ahtung Ahtung_error">{this.props.error}</span>
          ) : undefined}
          <button className="AddNoteForm-SaveButton fontType_subhead">Save</button>
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
          showError={props.showError}
        />
      </div>
    </div>
  );
};

export default AddMenu;
