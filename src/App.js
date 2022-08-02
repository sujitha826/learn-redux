import './App.css';
import { useSelector, useDispatch } from 'react-redux';           // useSelector is a hook to access redux store state and useDispatch needed to dispatch an action 
import { increment, decrement, login } from './actions';          // imported all actions

/* custom React hooks that allow your React components to interact with the Redux store.
useSelector reads a value from the store state and subscribes to updates, 
while useDispatch returns the store's dispatch method to let you dispatch actions.*/

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello Redux enabled App!!</h1>
      <h2>Counter state - {counter}</h2>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <p><button onClick={() => dispatch(login())}>Log In/Log Out</button></p>
      {isLogged ? <h2>Some valuable info for the signed in users</h2> : " "}
    </div>
  );
}

export default App;
