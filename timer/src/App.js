import React from 'react';
import './App.css';

/** A TimerForm object will take the input from the form and save it as its state.  */
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
    console.log(this.state.value)
    event.preventDefault();
  }


  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} name="user" placeholder="00:00:00" />
        </form>
      </div>);
  }
}

export default TimerForm;
