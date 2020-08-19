import React, { useEffect, useRef, useState } from 'react'
import { Store } from 'redux';

import AppComponent from './components/App'
import { IState, VisibilityFilter } from "./types/common-types";
import configureStore from "./store";

const initialState: Partial<IState> = {
  todos: [
    { id: 'uniq_id', text: 'Hello, i am todo from initial state', completed: false }
  ],
  visibilityFilter: VisibilityFilter.SHOW_ALL
};

export default function App() {
  const storeRef = useRef<Store<IState>>(configureStore(initialState));
  const [state, setState] = useState(initialState);

  useEffect(() => {
    return storeRef.current.subscribe(() => {
      setState(storeRef.current.getState());
    });
  }, []);

  return (
    <AppComponent
      state={state}
      dispatch={storeRef.current.dispatch}
    />
  );
};
