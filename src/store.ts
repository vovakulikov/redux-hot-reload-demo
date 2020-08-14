import { IState } from "./types/common-types";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";
import rootReducer from "./reducers";

const initialState: Partial<IState> = {
  todos: [
    { id: 'uniq_id', text: 'Hello, i am todo from initial state', completed: false }
  ]
};

const composeEnhancers = composeWithDevTools({
  name: 'Simple todo app store'
});

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers()
);

if(module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    const nextReducer = require('./reducers/index').default;
    
    store.replaceReducer(nextReducer);
  });
}

export default store;
