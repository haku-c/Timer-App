import React from "react"
// import ReactDOM from "react-dom"
import './Clock.css'

function convertMS(initialState) {
  return initialState.seconds * 1000 + initialState.minutes * 60000 + initialState.hours * 3600000
}

class Timer {
  constructor(time) {
    this.time = time
    this.paused = false;
    this.displayString = this.display(time);
  }

  display(ms) {
    var hours = Math.floor(ms / 3600000);
    var minutes = Math.floor((ms - (hours * 3600000)) / 60000);
    var seconds = Math.floor((ms - (hours * 3600000) - (minutes * 60000)) / 1000);
    // var ds = Math.floor((ms - (hours * 3600000) - (minutes * 60000) - (seconds * 1000)) / 100);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    return hours + "H " + minutes + "M " + seconds + "S"
  }

  unpause() {
    this.paused = false
  }
  pause() {
    this.paused = true
  }
}


export class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Timer(5000) };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>{this.state.time.displayString}</h1>
      </div>
    );
  }

  tick() {
    this.setState({
      time: new Timer(this.state.time.time - 1000)
    });
  }
}



export default Countdown