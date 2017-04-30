import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import tasks from "./task";
import projects from "./projects";

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  routing,
  tasks,
  projects,
});

export default rootReducer;
