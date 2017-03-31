import { ADD_TASK, REMOVE_TASK } from '../types';

const taskReducer = (
  state = [],
  action
) => {
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
