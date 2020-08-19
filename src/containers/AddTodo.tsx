import React, { Dispatch, useCallback, useRef } from 'react'
import { addTodo, ITodoAction } from '../actions/todo-action'

export type IProps = {
  dispatch: Dispatch<ITodoAction>;
};

export default function AddTodo(props: IProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const value = inputRef.current?.value?.trim();
    
    if ( value == null) {
      return
    }
    
    props.dispatch(addTodo(value));
    
    // @ts-ignore
    inputRef.current.value = ''
  }, [props.dispatch]);

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
