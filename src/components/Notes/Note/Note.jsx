import React from "react";

const CheckboxLine = ({ id, elemName, elemText, ...props }) => {
  let { noteId, subjectId, onChange, checked } = props;
  return (
    <div className={`Note-${elemName} CheckboxLine`}>
      <input
        checked={checked}
        onChange={() => onChange(noteId, subjectId)}
        id={`Checkbox-${id}`}
        className={`CheckboxLine-Toggle`}
        type="checkbox"
      />
      <label className={`CheckboxLine-Label`} htmlFor={`Checkbox-${id}`}>
        {elemText}
      </label>
    </div>
  );
};

const DropDownBox = ({ id, title, children }) => (
  <div className="DropDown">
    <input className="DropDown-Toggle" type="checkbox" id={`DropDown_${id}`} />
    <label className="DropDown-Label" htmlFor={`DropDown_${id}`} data-number={`(${children.length})`}>
      {title}
    </label>
    <div className="DropDown-Content">{children}</div>
  </div>
);

const Note = (props) => {
  let { title = "New note", subjects = [], accomplishedTasks: aT = [], color = "orange" } = props.note;
  let subjectItems = subjects.map((s, index) => (
    <CheckboxLine
      elemName="Subject"
      id={`Subject_${props.noteId}_${index}`}
      noteId={props.noteId}
      subjectId={s.id}
      elemText={s.text}
      onChange={props.onSubjectCompleted}
      checked={false}
      key={s.id}
    />
  ));
  let aTItems = aT.map((s, index) => (
    <CheckboxLine
      elemName="AccomplishedTask"
      id={`AccomplishedTask_${props.noteId}_${index}`}
      noteId={props.noteId}
      subjectId={s.id}
      elemText={s.text}
      onChange={props.onSubjectUncompleted}
      checked={true}
      key={s.id}
    />
  ));
  console.log("RENDER NOTE");
  return (
    <div className={`Note Note_color_${color}`}>
      <div className="Note-Title fontType_headline">{title}</div>
      <div className="Note-Subjects">{subjectItems}</div>
      {aT.length ? (
        <>
          <div className="Note-Hr"></div>
          <div className="Note-AccomplishedTasks">
            <DropDownBox
              id={`AccomplishedTasks_${props.noteId}`}
              title="Accomplished tasks"
              children={aTItems}
            />
          </div>
        </>
      ) : undefined}
    </div>
  );
};

export default Note;
