import React, { useRef } from 'react'
import { Provider } from 'react-redux'

import App from './components/App'
import { Store } from "redux";
import { IState } from "./types/common-types";
import { configureStore } from "./store";

const initialState: Partial<IState> = {
  todos: [
    { id: 'uniq_id', text: 'Hello, i am todo from Second initial state', completed: false }
  ]
};

export default () => {
  const store = useRef<Store<IState>>(configureStore(initialState, 'Second redux store'));
  
  return (
    <Provider store={store.current}>
      <App />
    </Provider>
  );
}
