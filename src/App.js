import './App.css';
import { useSelector, useDispatch } from 'react-redux';                // useSelector is a hook to access redux store state and useDispatch needed to dispatch an action 
import { increment, decrement, add } from './actions';                 // imported all actions
import Login from './components/Login';
import Profile from './components/Profile';

/* custom React hooks that allow your React components to interact with the Redux store.
useSelector reads a value from the store state and subscribes to updates, 
while useDispatch returns the store's dispatch method to let you dispatch actions.*/

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1 style={{ color: theme }}>Hello Redux enabled App!!</h1>

      <h2 style={{ color: theme }} >Counter state - {counter}</h2>
      <button className="butn" onClick={() => dispatch(increment())}>Increment</button>
      <button className="butn" onClick={() => dispatch(decrement())}>Decrement</button>
      <button className="butn" onClick={() => dispatch(add(5))}>AddByFive</button>
      {isLogged ? <Profile /> : <Login />}
    </div>
  );
}

export default App;
