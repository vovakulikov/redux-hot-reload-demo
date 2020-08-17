import React, { useCallback, useEffect } from "react";

import TodoList from '../components/TodoList'
// import { IState, VisibilityFilter } from '../types/common-types';
import { IState, ITodo, VisibilityFilter } from "../types/common-types";
import { useSelector } from "react-redux";


const getVisibleTodos = (todos: Array<ITodo>, filter: VisibilityFilter): Array<ITodo> => {
  switch (filter) {
    case VisibilityFilter.SHOW_ALL:
      return todos;
    case VisibilityFilter.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilter.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter)
  }
};

// TODO [VK] Research why useSelector does not infer return value of selector
// right now you should pass generic of return value type (in case below this is Array<ITodo>)
export default function() {
  let todos: Array<ITodo> = useSelector<IState, Array<ITodo>>((state) => getVisibleTodos(Object.values(state.todos), state.visibilityFilter));
  
  // let dispatch = useDispatch<Dispatch<ITodoAction>>();
  const handleToggle = useCallback((id) => {
    console.log(id);
  }, []);
  
  useEffect(() => () => { todos = null }, []);
  
  return (
    <TodoList
      todos={todos}
      toggleTodo={handleToggle}/>
  );
}
