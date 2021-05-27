let initialState = {
  notes: [
    {
      id: 0,
      title: "Sweet home",
      subjects: [
        { id: 0, text: "Call David" },
        { id: 1, text: "Read Drakula" },
        { id: 2, text: "Walk the dog" },
      ],
      accomplishedTasks: [
        { id: 3, text: "Freak some salt" },
        { id: 4, text: "Meet mother" },
      ],
      color: "blue",
    },
    {
      id: 1,
      title: "Meat room",
      subjects: [
        { id: 0, text: "Call David" },
        { id: 1, text: "Read Drakula" },
        { id: 2, text: "Walk the dog" },
      ],
      accomplishedTasks: [],
      color: "red",
    },
  ],
  hamburgerMenuOn: false,
  addMenuOn: false,
};

const TOGGLE_HAMBURGER_MENU = "TOGGLE_HAMBURGER_MENU";
const TOGGLE_ADD_MENU = "TOGGLE_ADD_MENU";
const ADD_NOTE = "ADD_NOTE";
const SUBJECT_COMPLETED_OR_UNCOMPLETED = "SUBJECT_COMPLETED_OR_UNCOMPLETED";

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_HAMBURGER_MENU:
      return {
        ...state,
        hamburgerMenuOn: action.bool,
      };
    case TOGGLE_ADD_MENU:
      return {
        ...state,
        addMenuOn: action.bool,
      };
    case ADD_NOTE:
      let notes_addNote = state.notes;
      return {
        ...state,
        notes: [
          ...notes_addNote,
          {
            id: notes_addNote.length ? notes_addNote[notes_addNote.length - 1].id + 1 : 0,
            title: action.title,
            subjects: action.subjects,
            accomplishedTasks: [],
            color: action.color,
          },
        ],
      };
    case SUBJECT_COMPLETED_OR_UNCOMPLETED:
      let { isCompleted, noteId, subjectId } = action;
      let notes_subjectCompleted = [...state.notes];
      let curNote = notes_subjectCompleted.find((n) => n.id === noteId);
      if (isCompleted) {
        let completedSubjectIndex = curNote.subjects.findIndex((s) => s.id === subjectId);
        let completedSubject = curNote.subjects.splice(completedSubjectIndex, 1)[0];
        curNote.accomplishedTasks = [completedSubject, ...curNote.accomplishedTasks];
      } else {
        let uncompletedSubjectIndex = curNote.accomplishedTasks.findIndex((s) => s.id === subjectId);
        let uncompletedSubject = curNote.accomplishedTasks.splice(uncompletedSubjectIndex, 1)[0];
        curNote.subjects = [...curNote.subjects, uncompletedSubject];
      }
      return {
        ...state,
        notes: notes_subjectCompleted,
      };

    default:
      return state;
  }
};

export const toggleHamburgerMenu = (bool) => ({ type: TOGGLE_HAMBURGER_MENU, bool });
export const toggleAddMenu = (bool) => ({ type: TOGGLE_ADD_MENU, bool });
export const addNote = (title, subjects, color) => ({ type: ADD_NOTE, title, subjects, color });

export const subjectCompletedOrUncompletedSuccess = (isCompleted, noteId, subjectId) => ({
  type: SUBJECT_COMPLETED_OR_UNCOMPLETED,
  isCompleted,
  noteId,
  subjectId,
});

export const subjectCompletedOrUncompleted = (isCompleted) => (noteId, subjectId) => (dispatch) => {
  dispatch(subjectCompletedOrUncompletedSuccess(isCompleted, noteId, subjectId));
};

export default notesReducer;
