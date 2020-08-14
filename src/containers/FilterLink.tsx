import React, { PropsWithChildren } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import Link from '../components/Link'
import { IState, VisibilityFilter } from "../types/common-types";
import { setVisibilityFilter } from "../actions/filter-action";

export type IProps = {
  filter: VisibilityFilter;
}

// TODO [VK] I have a problem with add typing to connect HOC (connect is't work properly with infer types)
// back to this problem with mapStateToProp and other stuff later
export default (props: PropsWithChildren<IProps>) => {
  const currentFilter = useSelector<IState>((state) => state.visibilityFilter);
  const dispatch = useDispatch();
  
  return (
    <Link
      onClick={() => dispatch(setVisibilityFilter(props.filter))}
      active={props.filter == currentFilter}
    >
      { props.children }
    </Link>
  )
}
