import { VisibilityFilter } from "../types/common-types";

// Action types
export enum ActionTypes {
  setVisibilityFilter = 'SET_VISIBILITY_FILTER',
}

export type ISetVisibilityFilterAction = {
  type: typeof ActionTypes.setVisibilityFilter,
  filter: VisibilityFilter
}

export type IFilterAction = ISetVisibilityFilterAction;

// Action creators
export const setVisibilityFilter = (filter: VisibilityFilter): ISetVisibilityFilterAction => ({
  type: ActionTypes.setVisibilityFilter,
  filter
});
