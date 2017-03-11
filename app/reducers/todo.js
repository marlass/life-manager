import * as types from '../types';

const todoReducer = (
  state = [],
  action
) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default todoReducer;
