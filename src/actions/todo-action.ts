import { ITodoId } from "../types/common-types";

let nextTodoId = 0;

// Action types
export enum ActionTypes {
  addTodo = 'ADD_TODO',
  toggleTodo = 'TOGGLE_TODO'
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

export type ITodoAction = IAddTodoAction | IToggleTodoAction;

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

