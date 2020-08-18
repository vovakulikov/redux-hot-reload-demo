import { IState } from "./types/common-types";
import { createStore } from "redux";
import rootReducer from "./reducers";

const configureStore = (initialState: Partial<IState>) => {
  return createStore(
    rootReducer,
    initialState,
  );
};

export default configureStore;
