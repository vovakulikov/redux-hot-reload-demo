import React, { PropsWithChildren, useCallback } from 'react';

import Link from '../components/Link'
import { IState, VisibilityFilter } from "../types/common-types";
import { useDispatch, useSelector } from "react-redux";
import { setVisibilityFilter } from "../actions/filter-action";

export type IProps = {
  filter: VisibilityFilter;
}

export default function FilterLink (props: PropsWithChildren<IProps>) {
  const currentFilter = useSelector<IState>((state) => state.visibilityFilter);
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    dispatch(setVisibilityFilter(props.filter));
  }, [props.filter]);
  
  
  return (
    <Link
      onClick={handleClick}
      active={currentFilter == props.filter}>

      { props.children }
    </Link>
  )
}
