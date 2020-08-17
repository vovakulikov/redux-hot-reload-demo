

import todos from './todos'
import visibilityFilter from './visibilityFilter'
import { IState } from "../types/common-types";

const rootReducer = (state: IState, action: any): IState => {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  }
};

// Infer a global state type from reducer!
export default rootReducer;
