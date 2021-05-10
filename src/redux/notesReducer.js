let initialState = {
  notes: [
    {
      id: 1,
      title: "Great work",
      subjects: ["Call David", "Read Drakula", "Walk the dog"],
      accomplishedTasks: ["Freak some salt", "Meet mother", "Call David", "Read Drakula", "Walk the dog", "Call David", "Read Drakula", "Walk the dog", "Call David", "Read Drakula", "Walk the dog", "Freak some salt", "Meet mother", "Call David", "Read Drakula", "Walk the dog", "Call David", "Read Drakula", "Walk the dog", "Call David", "Read Drakula", "Walk the dog", "Freak some salt", "Meet mother", "Call David", "Read Drakula", "Walk the dog", "Call David", "Read Drakula", "Walk the dog", "Call David", "Read Drakula", "Walk the dog", "Freak some salt", "Meet mother", "Call David", "Read Drakula", "Walk the dog", "Call David", "Read Drakula", "Walk the dog", "Call David", "Read Drakula", "Walk the dog"],
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
      accomplishedTasks: ["Freak some salt", "Meet mother"],
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
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default notesReducer;
