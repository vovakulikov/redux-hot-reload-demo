import React from 'react'
import { Dispatch } from "redux";
import { useDispatch } from 'react-redux'
import { addTodo, ITodoAction } from '../actions/todo-action'

export default () => {
  const dispatch = useDispatch<Dispatch<ITodoAction>>();
  let input: HTMLInputElement|null;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        const value = input?.value;

        if (input == null || value == null || !input.value.trim()) {
          return
        }
        
        dispatch(addTodo(value));
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
};
