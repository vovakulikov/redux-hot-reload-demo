import React, { PropsWithChildren } from 'react'

export type ILinkProps = {
  active: boolean;
  onClick: () => void
}

const Link = (props: PropsWithChildren<ILinkProps>) => (
    <button
       onClick={props.onClick}
       disabled={props.active}
       style={{
           marginLeft: '4px',
       }}
    >
      {props.children}
    </button>
);

export default Link
