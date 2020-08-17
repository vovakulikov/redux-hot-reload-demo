import React, { PropsWithChildren, useCallback } from 'react';

import Link from '../components/Link'
import { VisibilityFilter } from "../types/common-types";

export type IProps = {
  filter: VisibilityFilter;
}

// TODO [VK] I have a problem with add typing to connect HOC (connect is't work properly with infer types)
// back to this problem with mapStateToProp and other stuff later
export default function FilterLink (props: PropsWithChildren<IProps>) {
  // const currentFilter = useSelector<IState>((state) => state.visibilityFilter);
  const handleClick = useCallback(() => {
    //dispatch(setVisibilityFilter(props.filter));
  }, [props.filter]);
  
  
  return (
    <Link
      onClick={handleClick}
      active={false}
    >
      { props.children }
    </Link>
  )
}
