import React, { useCallback, useRef } from 'react'
import { addTodo } from '../actions/todo-action'
import { useDispatch } from "react-redux";

export default function AddTodo() {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const value = inputRef.current?.value?.trim();
    
    if ( value == null) {
      return
    }
    
    dispatch(addTodo(value));
    
    // @ts-ignore
    inputRef.current.value = ''
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
};
