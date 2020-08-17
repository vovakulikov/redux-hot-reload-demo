import React, { Dispatch, useCallback, useEffect, useRef, useState } from 'react'
import { addTodo } from '../actions/todo-action'
import { connect } from "react-redux";
import { ITodo, ITodoId } from "../types/common-types";


export type IDispatchProps = {
  addTodo?: (value: string) => void;
  dispatch: Dispatch<any>;
}

const mapDispatch = (dispatch: Dispatch<any>) => ({
  dispatch: (action: any) => dispatch(action)
});

function generateTodo(amount: number): Record<ITodoId, ITodo> {
  var s:Record<ITodoId, ITodo> = {};
  let id = 0;
  
  for (var i = 0; i <= amount; i++) {
    s[id] = ({ id: id++, text: 'hello this is todo with '+ id, completed: true })
  }
  
  return s;
}

export function AddTodo(props: IDispatchProps) {
  // const [state, setState] = useState({...generateTodo(200000)});

  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const value = inputRef.current?.value;

    if (inputRef.current == null || value == null || !inputRef.current.value.trim()) {
      return
    }

    /*props.addTodo(value);*/
    props.dispatch(addTodo(value));
    inputRef.current.value = ''
  }, [props.dispatch,]);
  
  useEffect(() => () => { inputRef.current = null }, []);

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

// export function AddTodo(props: IDispatchProps) {
//   const [state, _] = useState({...generateTodo(200000)});
//
//
//   const handleClick = useCallback((_) => {
//     props.dispatch(state);
//   }, [props.dispatch, state]);
//
//   return (
//     <div onClick={handleClick}>
//       Hello world
//     </div>
//   )
// };

export default connect(null, mapDispatch)(AddTodo)

// export default class AddTodoC extends React.Component<IDispatchProps> {
//
//   inputRef: RefObject<HTMLInputElement>;
//
//   constructor(props: IDispatchProps) {
//     super(props);
//
//     this.inputRef = React.createRef();
//   }
//
//   handleSubmit = (e: any) => {
//     e.preventDefault();
//     const value = this.inputRef.current?.value;
//
//     if (this.inputRef.current == null || value == null || !this.inputRef.current.value.trim()) {
//       return
//     }
//
//     this.props.dispatch(addTodo(value));
//     this.inputRef.current.value = ''
//   };
//
//   render() {
//     const ref = this.inputRef;
//
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input ref={ref} />
//           <button type="submit">
//             Add Todo
//           </button>
//         </form>
//       </div>
//     )
//   }
// }
