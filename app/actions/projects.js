import {
  ADD_PROJECT,
  REMOVE_PROJECT,
  SET_PROJECT_NAME,
  SET_PROJECT_DESCRIPTION,
  ADD_PROJECT_CATEGORY,
  REMOVE_PROJECT_CATEGORY,
  SET_PROJECT_CATEGORY_NAME,
  SET_PROJECT_CATEGORY_DESCRIPTION,
  EDIT_PROJECT_ID,
  EDIT_PROJECT_CATEGORY_ID,
} from "./../types";

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
  description,
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
