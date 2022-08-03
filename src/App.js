import './App.css';
import { useSelector, useDispatch } from 'react-redux';                // useSelector is a hook to access redux store state and useDispatch needed to dispatch an action 
import { increment, decrement, add, login } from './actions';          // imported all actions

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

      <button className = "butn" onClick={() => dispatch(increment())}>Increment</button>
      <button className = "butn" onClick={() => dispatch(decrement())}>Decrement</button>
      <button className = "butn" onClick={() => dispatch(add(5))}>AddByNumber</button>

      <button className = "butn" onClick={() => dispatch(login())}>LogIn/LogOut</button>
      {isLogged ? <h2>Some valuable info for the signed in users</h2> : " "}
    </div>
  );
}

export default App;
