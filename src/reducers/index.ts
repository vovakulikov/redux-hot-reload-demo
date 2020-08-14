import { combineReducers } from 'redux'

import todos from './todos'
import visibilityFilter from './visibilityFilter'
import { IState } from "../types/common-types";

const rootReducer = combineReducers<IState>({
  todos,
  visibilityFilter
});

// Infer a global state type from reducer!
export default rootReducer;
