import { ITodoAction } from "./todo-action";
import { IFilterAction } from "./filter-action";

export type IAction = ITodoAction | IFilterAction;
