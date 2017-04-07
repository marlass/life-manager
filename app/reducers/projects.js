import * as types from '../types';
import Immutable from 'immutable';

const projectsReducer = (
  state = Immutable.Map({}),
  action
) => {
  switch (action.type) {
    case types.ADD_PROJECT:
      return state.set(action.payload, Immutable.Map({
        id: action.payload,
        name: '',
        description: '',
        categories: Immutable.Map({})
      }))
    case types.REMOVE_PROJECT:
      return state.delete(action.payload);
    case types.SET_PROJECT_NAME:
      return state.set(action.payload.projectId,
        state
          .get(action.payload.projectId)
          .set('name',action.payload.name));
    case types.SET_PROJECT_DESCRIPTION:
      return state.set(action.payload.projectId,
        state
          .get(action.payload.projectId)
          .set('description',action.payload.description));
    case types.ADD_PROJECT_CATEGORY:
    case types.REMOVE_PROJECT_CATEGORY:
    case types.SET_PROJECT_CATEGORY_NAME:
    case types.SET_PROJECT_CATEGORY_DESCRIPTION:
    case types.EDIT_PROJECT_ID:
    case types.EDIT_PROJECT_CATEGORY_ID:
      return state;
    default:
      return state;
  }
};

export default projectsReducer;
