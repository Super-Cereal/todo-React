let initialState = {
  notes: [
    {
      id: 1,
      title: "Great work",
      subjects: ["Call David", "Read Drakula", "Walk the dog"],
      accomplishedTasks: [],
      color: "orange",
    },
    {
      id: 2,
      title: "Sweet home",
      subjects: ["Call David", "Read Drakula", "Walk the dog"],
      accomplishedTasks: ["Freak some salt", "Meet mother"],
      color: "blue",
    },
    {
      id: 3,
      title: "Meat room",
      subjects: ["Call David", "Read Drakula", "Walk the dog"],
      accomplishedTasks: [],
      color: "red",
    },
    {
      id: 4,
      title: "Friends & Love",
      subjects: ["Call David", "Read Drakula", "Walk the dog"],
      accomplishedTasks: ["Freak some salt", "Meet mother"],
      color: "purple",
    },
  ],
  hamburgerMenuOn: false,
  addMenuOn: false,
};

const TOGGLE_HAMBURGER_MENU = "TOGGLE_HAMBURGER_MENU";
const TOGGLE_ADD_MENU = "TOGGLE_ADD_MENU";
const ADD_NOTE = "ADD_NOTE";

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
      let notes = state.notes;
      return {
        ...state,
        notes: [
          ...notes,
          {
            id: notes.length ? notes[notes.length - 1].id + 1 : 0,
            title: action.title,
            subjects: action.subjects,
            accomplishedTasks: [],
            color: action.color,
          },
        ],
      };
    default:
      return state;
  }
};

export default notesReducer;

export const toggleHamburgerMenu = (bool) => ({ type: TOGGLE_HAMBURGER_MENU, bool });
export const toggleAddMenu = (bool) => ({ type: TOGGLE_ADD_MENU, bool });
export const addNote = (title, subjects, color) => ({ type: ADD_NOTE, title, subjects, color });
