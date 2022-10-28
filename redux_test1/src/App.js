import './App.css';
import {createStore} from "redux";

function App() {
  function count(state = 0, action) {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      default:
        return state;
    }
  }

  let store = createStore(count);
  store.subscribe(() => console.log(store.getState()));
  store.dispatch({type: 'INCREMENT'});
  store.dispatch({type: 'INCREMENT'});
  store.dispatch({type: 'DECREMENT'});

  return (
    <div className="App">
    </div>
  );
}

export default App;
