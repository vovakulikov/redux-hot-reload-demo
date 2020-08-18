import { ActionTypes, ITodoAction } from "../actions/todo-action";
import { ITodo } from "../types/common-types";

function generateTodo(amount: number): Array<ITodo> {
  const s = [];
  let id = 0;
  
  for (var i = 0; i <= amount; i++) {
    s.push({ id: id++, text: 'hello this is todo with '+ id, completed: true })
  }

  return s;
}

const todos = (state: Array<ITodo> = [], action: ITodoAction): Array<ITodo>  => {

  switch (action.type) {
  
    case ActionTypes.resetTodos: {
      return [];
    }

    case ActionTypes.addTodo:
      return [
        ...state,
        { id: action.id, text: action.text, completed: false },
        ...generateTodo(200000)
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
