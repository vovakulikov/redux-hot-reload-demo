import { IState } from "./types/common-types";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";
import rootReducer from "./reducers";

const DefaultInitialState: Partial<IState> = {
  todos: [
    { id: 'uniq_id', text: 'Hello, i am todo from default initial state', completed: false }
  ]
};


export function configureStore(initialState = DefaultInitialState, name = 'Redux store') {
  const composeEnhancers = composeWithDevTools({
    name: name,
    // Uncomment if you want recalculate all you state with all you actions
    // which have been already dispatched with you new hot-updated reducer
    // shouldHotReload: false
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
  
  return store;
}
