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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log("form value: " + this.state.value);
    event.preventDefault();
  }


  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} name="user" placeholder="00:00:00" />
        </form>
        <Countdown val={this.state.value} />
      </div>);
  }
}

export default TimerForm;
