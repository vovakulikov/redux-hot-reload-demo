import { hot } from "react-hot-loader";
import React, { useRef } from 'react'
import { Provider } from 'react-redux'
import { Store } from 'redux';

import { configureStore } from './store';
import AppComponent from './components/App'
import AnotherAppLoader from './another-app-loader';
import { IState } from "./types/common-types";


const initialState: Partial<IState> = {
  todos: [
    { id: 'uniq_id', text: 'Hello, i am todo from First initial state', completed: false }
  ]
};

function App() {
  const store = useRef<Store<IState>>(configureStore(initialState, 'First redux store'));

  return (
    <Provider store={store.current}>
      <AppComponent />
      <AnotherAppLoader/>
    </Provider>
  );
}


export default hot(module)(App);
