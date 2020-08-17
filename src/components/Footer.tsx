import React from 'react'

import FilterLink from '../containers/FilterLink'
import { VisibilityFilter } from "../types/common-types";

export default function Footer () {
  return (
    <div>
      <span>Show: </span>
      <FilterLink
        filter={VisibilityFilter.SHOW_ALL}>
      
        All
      </FilterLink>
    
      <FilterLink
        filter={VisibilityFilter.SHOW_ACTIVE}>
      
        Active
      </FilterLink>
    
      <FilterLink
        filter={VisibilityFilter.SHOW_COMPLETED}>
      
        Completed
      </FilterLink>
    </div>
  );
};

