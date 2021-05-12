let initialState = {
  notes: [
    {
      id: 1,
      title: "Great work",
      subjects: ["Call David", "Read Drakula", "Walk the dog"],
      accomplishedTasks: [
        "Freak some salt",
        "Meet mother",
        "Call David",
        "Read Drakula",
        "Walk the dog",
        "Call David",
        "Read Drakula",
        "Walk the dog",
        "Call David",
        "Read Drakula",
        "Walk the dog",
        "Freak some salt",
        "Meet mother",
        "Call David",
        "Read Drakula",
        "Walk the dog",
        "Call David",
        "Read Drakula",
        "Walk the dog",
        "Call David",
        "Read Drakula",
        "Walk the dog",
        "Freak some salt",
        "Meet mother",
        "Call David",
        "Read Drakula",
        "Walk the dog",
        "Call David",
        "Read Drakula",
        "Walk the dog",
        "Call David",
        "Read Drakula",
        "Walk the dog",
        "Freak some salt",
        "Meet mother",
        "Call David",
        "Read Drakula",
        "Walk the dog",
        "Call David",
        "Read Drakula",
        "Walk the dog",
        "Call David",
        "Read Drakula",
        "Walk the dog",
      ],
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
    default:
      return state;
  }
};

export default notesReducer;

export const toggleHamburgerMenu = (bool) => ({ type: TOGGLE_HAMBURGER_MENU, bool });
export const toggleAddMenu = (bool) => ({ type: TOGGLE_ADD_MENU, bool });
