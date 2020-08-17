import React, { Fragment, useState } from 'react';
import AnotherApp from "./another-app";

function AnotherAppLoader() {
  const [active, setActive] = useState(false);
  
  return (
    <Fragment>
      { active
        ? <AnotherApp/>
        : 'Press button to load another todo app'
      }

      <button onClick={() => setActive(!active)}>{active ? 'Remove' : 'Load'}</button>
    </Fragment>
  );
}

export default AnotherAppLoader;
