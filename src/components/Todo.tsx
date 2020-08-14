import React from 'react'

export type IProps = {
  onClick: () => void;
  completed: boolean;
  text: string;
};

const Todo = (props: IProps) => (
  <li
    onClick={props.onClick}
    style={{
      textDecoration: props.completed ? 'line-through' : 'none'
    }}
  >
    {props.text}
  </li>
);

export default Todo
