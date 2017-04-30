const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVO_TASK";

const taskReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [action.payload, ...state];
    case REMOVE_TASK:
      return state.filter(element => element.name !== action.payload);
    default:
      return state;
  }
};

export default taskReducer;

export function addTask(task) {
  return {
    type: ADD_TASK,
    payload: task,
  };
}

export function removeTask(task) {
  return {
    type: REMOVE_TASK,
    payload: task,
  };
}
