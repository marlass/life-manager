import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import user from "./user";
import tasks from "./task";
import projects from "./projects";

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  user,
  routing,
  tasks,
  projects,
});

export default rootReducer;
