import { ITodoId } from "../types/common-types";

let nextTodoId = 0;

// Action types
export enum ActionTypes {
  addTodo = 'ADD_TODO',
  toggleTodo = 'TOGGLE_TODO',
  resetTodos = 'RESET_TODOS'
}

export type IAddTodoAction = {
  type: typeof ActionTypes.addTodo,
  id: ITodoId;
  text: string;
}

export type IToggleTodoAction = {
  type: typeof ActionTypes.toggleTodo,
  id: ITodoId,
}

export type IResetTodosAction = {
  type: typeof ActionTypes.resetTodos,
}

export type ITodoAction = IAddTodoAction | IToggleTodoAction | IResetTodosAction;

// Action creators
export const addTodo = (text: string): IAddTodoAction => ({
  type: ActionTypes.addTodo,
  id: nextTodoId++,
  text
});

export const toggleTodo = (id: ITodoId): IToggleTodoAction => ({
  type: ActionTypes.toggleTodo,
  id
});

export const resetTodos = (): IResetTodosAction => ({
  type: ActionTypes.resetTodos,
});

