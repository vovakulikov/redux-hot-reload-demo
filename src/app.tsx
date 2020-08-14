import React from 'react'
import { Provider } from 'react-redux'

import store from './store';
import AppComponent from './components/App'
import AnotherAppLoader from './another-app-loader';

function App() {
  return (
    <Provider store={store}>
      <AppComponent />
      <AnotherAppLoader/>
    </Provider>
  );
}


export default App;
