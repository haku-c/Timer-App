import React from 'react';
import './Form.css';
import Countdown from "./Clock.js"

/** A TimerForm object will take the input from the form and save it in state.value.
 *  This will the source of truth for the timer*/
export class TimerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }


  render() {
    const timerInput = this.state.value
    return (
      <div className="App">
        <div className="Input" >
          <form onSubmit={this.handleSubmit} >
            <input type="text" onChange={this.handleChange} name="user" autoComplete="off" />
          </form>
        </div>
        <Countdown val={timerInput} key={timerInput} />
      </div>);
  }
}

export default TimerForm;
