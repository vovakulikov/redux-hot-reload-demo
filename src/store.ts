import { IState } from "./types/common-types";
import { createStore } from "redux";
import rootReducer from "./reducers";

const configureStore = (initialState: Partial<IState>, _: string) => {
  // const composeEnhancers = composeWithDevTools({
  //   name: name
  // });
  
  
  const store = createStore(
    // @ts-ignore
    rootReducer,
    initialState,
    // composeEnhancers()
  );
  
  // if(module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('./reducers', () => {
  //     const nextReducer = require('./reducers/index').default;
  //
  //     store.replaceReducer(nextReducer);
  //   });
  // }
  
  return store;
};


export default configureStore;
