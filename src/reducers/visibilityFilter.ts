import { VisibilityFilter } from "../types/common-types";
import { IFilterAction, ActionTypes } from "../actions/filter-action";

const visibilityFilter = (state = VisibilityFilter.SHOW_ALL, action: IFilterAction): VisibilityFilter => {
  switch (action.type) {
    case ActionTypes.setVisibilityFilter:
      return action.filter;

    default:
      return state
  }
};

export default visibilityFilter
