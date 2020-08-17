import React, { Dispatch, Fragment, useCallback, useState } from 'react'

import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

export function FuncCounter () {
  const [counter, setCounter] = useState(0);
  
  const handleIncClick = useCallback(() => {
    setCounter((counter) => counter + 1)
  }, []);
  
  const handleDecClick = useCallback(() => {
    setCounter((counter) => counter - 1)
  }, []);
  
  return (
    <Fragment>
      <h1>Function counter</h1>
      <button onClick={handleDecClick}>dec</button>
      { `This is counter between buttonsssss ${counter}`}
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
    this.setState({ counter: this.state.counter + 10 })
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

export type IProps = {
  withRender?: boolean;
  dispatch?: Dispatch<any>;
}
const App = (props: IProps) => {
  // let dispatch = useDispatch();
  //
  // useEffect(() => () => {
  //   dispatch(resetTodos());
  // }, []);
  
  const { withRender = true } = props;

  return (
    <div>
      <FuncCounter/>
      <ClassCounter/>
    
      <AddTodo/>
      { withRender  && <VisibleTodoList /> }
      <Footer />
    </div>
  );
};

export default App
