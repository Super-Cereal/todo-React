import { connect } from "react-redux";
import Notes from "./Notes";

let mstp = (state) => ({
  notes: state.notesPage.notes,
});

export default connect(mstp)(Notes);
