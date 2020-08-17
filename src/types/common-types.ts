
export type ITodoId = string | number;

export enum VisibilityFilter {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_COMPLETED = 'SHOW_COMPLETED',
  SHOW_ACTIVE = 'SHOW_ACTIVE'
}

export type ITodo = {
  id: ITodoId;
  text: string;
  completed: boolean
}


export type IState = {
  todos: Record<ITodoId, ITodo>;
  visibilityFilter: VisibilityFilter
}
