import React, { Fragment, useCallback, useState } from 'react'
import { render } from 'react-dom'
import App from "./app";

function Root() {
  const [active, setActive] = useState(false);
  const handleClick = useCallback(() => {
    setActive((active) => !active);
  }, []);

  return (
    <Fragment>
      { active
        ? <App/>
        : 'Press button to load another todo app'
      }
      
      <button
        onClick={handleClick}>

        {active ? 'Remove' : 'Load'}
      </button>
    </Fragment>
  );
}

render(
  <Root />,
  document.getElementById('root')
);
