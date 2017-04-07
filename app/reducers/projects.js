import _ from 'lodash';
import { ADD_PROJECT, REMOVE_PROJECT, SET_PROJECT_NAME,
    SET_PROJECT_DESCRIPTION, ADD_PROJECT_CATEGORY, REMOVE_PROJECT_CATEGORY,
    SET_PROJECT_CATEGORY_NAME, SET_PROJECT_CATEGORY_DESCRIPTION,
    EDIT_PROJECT_ID, EDIT_PROJECT_CATEGORY_ID
} from '../types';
import Immutable from 'immutable';

const projectsReducer = (
  state = Immutable.Map({}),
  action
) => {
  switch (action.type) {
    case ADD_PROJECT:
      return state.set(action.payload, Immutable.Map({
        id: action.payload,
        name: '',
        description: '',
        categories: Immutable.Map({})
      }))
    case REMOVE_PROJECT:
      return state.delete(action.payload);
    case SET_PROJECT_NAME:
      return state.set(action.payload.projectId,
        state
          .get(action.payload.projectId)
          .set('name',action.payload.name));
    case SET_PROJECT_DESCRIPTION:
      return state.set(action.payload.projectId,
        state
          .get(action.payload.projectId)
          .set('description',action.payload.description));
    case ADD_PROJECT_CATEGORY:
    case REMOVE_PROJECT_CATEGORY:
    case SET_PROJECT_CATEGORY_NAME:
    case SET_PROJECT_CATEGORY_DESCRIPTION:
    case EDIT_PROJECT_ID:
    case EDIT_PROJECT_CATEGORY_ID:
      return state;
    default:
      return state;
  }
};

export default projectsReducer;
