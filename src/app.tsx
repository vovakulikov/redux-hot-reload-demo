import { hot } from 'react-hot-loader';
import React from 'react'

// import AppComponent from './components/App'
import AnotherAppLoader from './another-app-loader';
// import { Store } from "redux";
// import configureStore from "./store";

// const initialState: Partial<IState> = {
//   todos: {
//     'uniq_id': { id: 'uniq_id', text: 'Hello, i am todo from initial state', completed: false }
//   },
// };


function App() {
  // const storeRef = useRef<Store<IState>>(configureStore(initialState, 'Origin app'));
  
  return (
    // <Provider store={storeRef.current}>
    //   {/*<AppComponent />*/}
    //
    // </Provider>

    <AnotherAppLoader/>
  );
}

export default hot(module)(App);
