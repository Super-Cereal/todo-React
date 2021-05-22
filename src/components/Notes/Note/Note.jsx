import React from "react";

const CheckboxLine = ({ id, elemName, elemText }) => (
  <div className={`Note-${elemName} CheckboxLine`}>
    <input id={`Checkbox-${id}`} className={`CheckboxLine-Toggle`} type="checkbox" />
    <label className={`CheckboxLine-Label`} htmlFor={`Checkbox-${id}`}>
      {elemText}
    </label>
  </div>
);

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
  let subjectItems = subjects.map((text, index) => (
    <CheckboxLine elemName="Subject" id={`Subject_${props.noteId}_${index}`} elemText={text} key={index} />
  ));
  let aTItems = aT.map((text, index) => (
    <CheckboxLine
      elemName="AccomplishedTask"
      id={`AccomplishedTask_${props.noteId}_${index}`}
      elemText={text}
      key={index}
    />
  ));
  return (
    <div className={`Note Note_color_${color}`}>
      <div className="Note-Title fontType_headline">{title}</div>
      <div className="Note-Subjects">{subjectItems}</div>
      <div className="Note-Hr"></div>
      <div className="Note-AccomplishedTasks">
        <DropDownBox id={`AccomplishedTasks_${props.noteId}`} title="Accomplished tasks" children={aTItems} />
      </div>
    </div>
  );
};

export default Note;
