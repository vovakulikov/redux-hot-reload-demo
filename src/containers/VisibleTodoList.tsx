import React, { Dispatch, useCallback } from "react";

import TodoList from '../components/TodoList'
import { IState, ITodo, VisibilityFilter } from "../types/common-types";
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

export type IProps = {
  state: IState;
  dispatch: Dispatch<ITodoAction>;
}

export default function(props: IProps) {
  const todos: Array<ITodo> = getVisibleTodos(props.state.todos, props.state.visibilityFilter);//useSelector<IState, Array<ITodo>>((state) => );
  const handleToggle = useCallback((id) => props.dispatch(toggleTodo(id)), [props.dispatch]);
  
  return (
    <TodoList
      todos={todos}
      toggleTodo={handleToggle}/>
  );
}
