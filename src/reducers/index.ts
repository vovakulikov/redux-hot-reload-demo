import { combineReducers } from 'redux';

import todos from './todos'
import visibilityFilter from './visibilityFilter'
import { IState } from "../types/common-types";

const rootReducer = combineReducers<IState>({
  todos,
  visibilityFilter,
});


export default rootReducer;
