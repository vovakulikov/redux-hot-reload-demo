import { ActionTypes, ITodoAction } from "../actions/todo-action";
import { ITodo } from "../types/common-types";

const todos = (state: Array<ITodo> = [], action: ITodoAction): Array<ITodo> => {
  
  console.log('hell');
  switch (action.type) {
    case ActionTypes.addTodo:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
      
    case ActionTypes.toggleTodo:
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      );

    default:
      return state
  }
};

export default todos
