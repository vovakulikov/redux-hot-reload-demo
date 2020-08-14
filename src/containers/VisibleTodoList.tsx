import React, { Dispatch } from "react";
import { useDispatch, useSelector } from 'react-redux'

import TodoList from '../components/TodoList'
import { ITodoAction, toggleTodo } from '../actions/todo-action'
import { IState, VisibilityFilter } from '../types/common-types';
import { ITodo } from "../types/common-types";


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
  const todos = useSelector<IState, Array<ITodo>>((state) => getVisibleTodos(state.todos, state.visibilityFilter));
  const dispatch = useDispatch<Dispatch<ITodoAction>>();
  
  return (
    <TodoList
      todos={todos}
      toggleTodo={(id) => dispatch(toggleTodo(id))}/>
  );
}
