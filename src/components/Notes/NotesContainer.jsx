import { connect } from "react-redux";
import Notes from "./Notes";
import { subjectCompletedOrUncompleted } from './../../redux/notesReducer';

let mstp = (state) => ({
  notes: state.notesPage.notes,
});

let odtp = {
  onSubjectCompleted: subjectCompletedOrUncompleted(true),
  onSubjectUncompleted: subjectCompletedOrUncompleted(false),
};

export default connect(mstp, odtp)(Notes);
