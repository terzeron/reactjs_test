import logo from './logo.svg';
import './App.css';
import {observer} from "mobx-react";
import {makeAutoObservable} from "mobx";

class Timer {
  secondsPassed = 0

  constructor() {
    makeAutoObservable(this)
  }

  increase() {
    this.secondsPassed += 1
  }

  reset() {
    this.secondsPassed = 0
  }
}

const myTimer = new Timer();

const TimerView = observer(({timer}) => (
  <button onClick={() => timer.reset()}>
    Seconds passed: {timer.secondsPassed}
  </button>
));

setInterval(() => {
  myTimer.increase();
}, 1000);

function App() {
  return (
    <div className="App">
      <TimerView timer={myTimer}/>
    </div>
  );
}

export default App;
