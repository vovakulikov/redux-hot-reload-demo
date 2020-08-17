import { ActionTypes, ITodoAction } from "../actions/todo-action";
import { ITodo, ITodoId } from "../types/common-types";


function generateTodo(amount: number): Record<ITodoId, ITodo> {
  var s:Record<ITodoId, ITodo> = {};
  let id = 0;
  
  for (var i = 0; i <= amount; i++) {
    s[id] = ({ id: id++, text: 'hello this is todo with '+ id, completed: true })
  }

  return s;
}

const todos = (state: Record<ITodoId, ITodo> = {}, action: ITodoAction): Record<ITodoId, ITodo>  => {

  switch (action.type) {
  
    case ActionTypes.resetTodos: {
      return {};
    }

    case ActionTypes.addTodo:
      return {
        ...state,
        ...generateTodo(200000)
      };
      
    // case ActionTypes.toggleTodo:
    //   return Object.keys(state).map(todo =>
    //     (todo.id === action.id)
    //       ? {...todo, completed: !todo.completed}
    //       : todo
    //   );

    default:
      return state
  }
};

export default todos
