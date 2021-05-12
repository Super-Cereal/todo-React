import React from "react";
import Note from "./Note/Note";

const Notes = (props) => {
  let noteItems = props.notes.map((n) => <Note note={n} key={n.id} />);
  return <div className="Notes">{noteItems}</div>;
};

export default Notes;
