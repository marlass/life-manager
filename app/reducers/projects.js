import Immutable from 'immutable';

const ADD_PROJECT = 'ADD_PROJECT';
const REMOVE_PROJECT = 'REMOVE_PROJECT';
const SET_PROJECT_NAME = 'SET_PROJECT_NAME';
const SET_PROJECT_DESCRIPTION = 'SET_PROJECT_DESCRIPTION';
const ADD_PROJECT_CATEGORY = 'ADD_PROJECT_CATEGORY';
const REMOVE_PROJECT_CATEGORY = 'REMOVE_PROJECT_CATEGORY';
const SET_PROJECT_CATEGORY_NAME = 'SET_PROJECT_CATEGORY_NAME';
const SET_PROJECT_CATEGORY_DESCRIPTION = 'SET_PROJECT_CATEGORY_DESCRIPTION';
const EDIT_PROJECT_ID = 'EDIT_PROJECT_ID';
const EDIT_PROJECT_CATEGORY_ID = 'EDIT_PROJECT_CATEGORY_ID';

const projectsReducer = (state = Immutable.Map({}), action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return state.set(action.payload, {
        id: action.payload,
        name: '',
        description: '',
        categories: {},
      });
    case REMOVE_PROJECT:
      return state.delete(action.payload);
    case SET_PROJECT_NAME:
      return state.set(
        action.payload.projectId,
        state.get(action.payload.projectId).set('name', action.payload.name)
      );
    case SET_PROJECT_DESCRIPTION:
      return state.set(
        action.payload.projectId,
        state
          .get(action.payload.projectId)
          .set('description', action.payload.description)
      );
    case ADD_PROJECT_CATEGORY:
      return state.set(
        action.payload.projectId,
        state.get('categories').set(action.payload.categoryId, {})
      );
    case REMOVE_PROJECT_CATEGORY:
      return state.set(
        action.payload.projectId,
        state.get('categories').delete(action.payload.categoryId)
      );
    case SET_PROJECT_CATEGORY_NAME:
      return state.setIn(
        [
          action.payload.projectId,
          'categories',
          action.payload.categoryId,
          'name',
        ],
        action.payload.name
      );
    case SET_PROJECT_CATEGORY_DESCRIPTION:
      return state.setIn(
        [
          action.payload.projectId,
          'categories',
          action.payload.categoryId,
          'description',
        ],
        action.payload.description
      );
    case EDIT_PROJECT_ID:
      const map = state.mapKeys(k => {
        if (k === action.payload.projectId) return action.payload.id;
        return k;
      });
      return map;
    case EDIT_PROJECT_CATEGORY_ID:
      const map2 = state[action.payload.projectId].categories.mapKeys(k => {
        if (k === action.payload.categoryId) return action.payload.id;
        return k;
      });
      return map;
    default:
      return state;
  }
};

export default projectsReducer;

export function addProject(projectId) {
  return {
    type: ADD_PROJECT,
    payload: projectId,
  };
}

export function removeProject(projectId) {
  return {
    type: REMOVE_PROJECT,
    payload: projectId,
  };
}

export function setProjectName(projectId, name) {
  return {
    type: SET_PROJECT_NAME,
    payload: {
      projectId,
      name,
    },
  };
}

export function setProjectDescription(projectId, description) {
  return {
    type: SET_PROJECT_DESCRIPTION,
    payload: {
      projectId,
      description,
    },
  };
}

export function addProjectCategory(projectId, categoryId) {
  return {
    type: ADD_PROJECT_CATEGORY,
    payload: {
      projectId,
      categoryId,
    },
  };
}

export function removeProjectCategory(projectId, categoryId) {
  return {
    type: REMOVE_PROJECT_CATEGORY,
    payload: {
      projectId,
      categoryId,
    },
  };
}

export function setProjectCategoryName(projectId, categoryId, name) {
  return {
    type: SET_PROJECT_CATEGORY_NAME,
    payload: {
      projectId,
      categoryId,
      name,
    },
  };
}

export function setProjectCategoryDescription(
  projectId,
  categoryId,
  description
) {
  return {
    type: SET_PROJECT_CATEGORY_DESCRIPTION,
    payload: {
      projectId,
      categoryId,
      description,
    },
  };
}

export function editProjectId(projectId, id) {
  return {
    type: EDIT_PROJECT_ID,
    payload: {
      projectId,
      id,
    },
  };
}

export function editProjectCategoryId(projectId, categoryId, id) {
  return {
    type: EDIT_PROJECT_CATEGORY_ID,
    payload: {
      projectId,
      categoryId,
      id,
    },
  };
}
