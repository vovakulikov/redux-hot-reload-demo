import React from 'react'

import Todo from './Todo'
import { ITodo, ITodoId } from "../types/common-types";

export type IProps = {
  todos: Array<ITodo>,
  toggleTodo: (id: ITodoId) => void;
}

const TodoList = ({ todos, toggleTodo }: IProps) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    )}
  </ul>
);

export default TodoList;
