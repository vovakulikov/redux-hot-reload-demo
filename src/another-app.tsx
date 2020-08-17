import React, { useEffect, useRef } from 'react'
import { Store } from 'redux';
import { Provider } from 'react-redux'

import App from './components/App'
import { IState } from "./types/common-types";
import configureStore from "./store";

const initialState: Partial<IState> = {
  todos: {
    'uniq_id': { id: 'uniq_id', text: 'Hello, i am todo from initial state', completed: false }
  },
};

export default function AnotherApp() {
  const storeRef = useRef<Store<IState>>(configureStore(initialState, 'another app'));
  
  useEffect(() => () => {
    
    // @ts-ignore
    storeRef.current.teardown();
    // @ts-ignore
    storeRef.current = null;
  }, []);

  return (
    <Provider store={storeRef.current}>
      <App/>
    </Provider>
  );
};
