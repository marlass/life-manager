import * as types from '../types';

const todoReducer = (
  state = [],
  action
) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [action.payload, ...state];
    case types.REMOVE_TODO:
      return state.filter(element => element.name !== action.payload);
    default:
      return state;
  }
};

export default todoReducer;
