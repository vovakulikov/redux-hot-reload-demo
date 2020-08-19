import React, { Dispatch } from 'react'

import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { IState } from "../types/common-types";

export type IProps = {
  state: IState;
  dispatch: Dispatch<any>
}

const App = (props: IProps) => {

  return (
    <div>
      <AddTodo
        dispatch={props.dispatch} />

      <VisibleTodoList
        state={props.state}
        dispatch={props.dispatch}/>
    </div>
  );
};

export default App
