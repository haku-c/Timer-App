import React from "react"
import './Clock.css'

function convertMS(initialState) {
  return initialState.seconds * 1000 + initialState.minutes * 60000 + initialState.hours * 3600000
}

/** A timer class has a value storing the time in milliseconds of the timer, 
a field indicating if the timer is paused, and a display message based on the remaining time */

class Timer {
  constructor(time) {
    this.value = time
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
}

/** A countdown object has a state containing a timer. When rendered it will 
 * show the time represented by the timer and a button that can pause and unpause the timer.  */
export class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { paused: true, time: new Timer(this.props.val) };
    this.toggleButton = this.toggleButton.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(this.state.paused),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  toggleButton() {
    console.log(this.state.paused)
    this.setState(prevState => ({
      paused: !(prevState.paused)
    }));
  }

  tick(paused) {
    if (!paused) {
      this.setState(prevState => ({
        time: new Timer(prevState.time.value - 1000),
        paused: prevState.paused
      }));
    } else {
      this.setState(prevState => ({
        time: new Timer(prevState.time.value),
        paused: prevState.paused
      }));
    }
  }

  render() {
    const timeLeft = this.state.time.displayString;
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + ":" + today.getMilliseconds();
    console.log(time);
    return (
      <div>
        <h1>{timeLeft}</h1>
        <button id="toggle" onClick={this.toggleButton}>{this.state.paused ? 'Start' : 'Pause'} </button>
      </div >
    );
  }
}
export default Countdown