import React, { Fragment, useState, Suspense } from 'react';

const LazyAnotherApp = React.lazy(() => import('./another-app'));

function AnotherAppLoader() {
  const [active, setActive] = useState(false);
  
  return (
    <Fragment>
      { active ?
        <Suspense fallback={null}>
          <LazyAnotherApp/>
        </Suspense>: 'Press button to load another todo app'
      }

      <button onClick={() => setActive(!active)}>{active ? 'Remove' : 'Load'}</button>
    </Fragment>
  );
}

export default AnotherAppLoader;
