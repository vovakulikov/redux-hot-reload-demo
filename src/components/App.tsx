import React, { Fragment, useState } from 'react'

import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

function StateLostChecker () {
  const [counter, setCounter] = useState(0);
  
  const handleIncClick = () => {
    setCounter(counter + 20)
  };
  
  const handleDecClick = () => {
    setCounter(counter - 1)
  };
  
  return (
    <Fragment>
      <h1>Function counter</h1>
      <button onClick={handleDecClick}>dec</button>
      { `This is counter between buttons ${counter}`}
      <button onClick={handleIncClick}>inc</button>
    </Fragment>
    
  );
}

class ClassCounter extends React.Component<any, any> {
  
  state = { counter: 0 };

  handleDecClick = () => {
    this.setState({ counter: this.state.counter - 1 })
  };
  
  handleIncClick = () => {
    this.setState({ counter: this.state.counter + 2 })
  };
  
  render() {
    const counter = this.state.counter;

    return (
      <Fragment>
        <h1>Class counter</h1>
        <button onClick={this.handleDecClick}>dec</button>
        { `This is counter between buttons ${counter}`}
        <button onClick={this.handleIncClick}>inc</button>
      </Fragment>
    )
  }
}
// This is root app component which contains all other container component which connected to redux store
const App = () => (
  <div>
    <StateLostChecker/>
    <ClassCounter/>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App
