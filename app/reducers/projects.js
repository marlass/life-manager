import _ from 'lodash';
import { ADD_PROJECT, REMOVE_PROJECT, SET_PROJECT_NAME,
    SET_PROJECT_DESCRIPTION, ADD_PROJECT_CATEGORY, REMOVE_PROJECT_CATEGORY,
    SET_PROJECT_CATEGORY_NAME, SET_PROJECT_CATEGORY_DESCRIPTION,
    EDIT_PROJECT_ID, EDIT_PROJECT_CATEGORY_ID
} from '../types';

const projectsReducer = (
  state = {},
  action
) => {
  switch (action.type) {
    case ADD_PROJECT:
      return Object.assign({},state,{[action.payload]: {
        id: action.payload,
        name: '',
        description: '',
        categories: {}
      }});
    case REMOVE_PROJECT:
      return _.omit(state, [action.payload]);
    case SET_PROJECT_NAME:
      return Object.assign({},
        _.set(state,
          `[${action.payload.projectId}].name`,
          action.payload.name))
    case SET_PROJECT_DESCRIPTION:
      return Object.assign({},
        _.set(state,
          `[${action.payload.projectId}].description`,
          action.payload.description))
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
