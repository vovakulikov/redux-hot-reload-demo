import React, { useRef } from 'react'
import { Store } from 'redux';
import { Provider } from 'react-redux'

import AppComponent from './components/App'
import { IState } from "./types/common-types";
import configureStore from "./store";

const initialState: Partial<IState> = {
  todos: [
    { id: 'uniq_id', text: 'Hello, i am todo from initial state', completed: false }
  ]
};

export default function App() {
  const storeRef = useRef<Store<IState>>(configureStore(initialState));

  return (
    <Provider store={storeRef.current}>
      <AppComponent/>
    </Provider>
  );
};
