import React, { Dispatch, useCallback } from "react";

import TodoList from '../components/TodoList'
import { IState, ITodo, VisibilityFilter } from "../types/common-types";
import { useDispatch, useSelector } from "react-redux";
import { ITodoAction, toggleTodo } from "../actions/todo-action";

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

export default function() {
  const todos: Array<ITodo> = useSelector<IState, Array<ITodo>>((state) => getVisibleTodos(state.todos, state.visibilityFilter));
  const dispatch = useDispatch<Dispatch<ITodoAction>>();
  const handleToggle = useCallback((id) => dispatch(toggleTodo(id)), []);
  
  return (
    <TodoList
      todos={todos}
      toggleTodo={handleToggle}/>
  );
}
