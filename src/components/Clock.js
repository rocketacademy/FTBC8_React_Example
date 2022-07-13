import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    // Initialise component state to contain "date" attribute with current date and time
    this.state = { date: new Date() };
  }

  componentDidMount() {
    // Set date value in state every second to current date and time
    // Save setInterval timer ID in class variable for teardown in another class method
    this.timerId = setInterval(() => {
      console.log("TICK");
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    // Teardown setInterval timer with timer ID saved as class variable
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* Render date value that is stored in state */}
          <p>{this.state.date.toString()}</p>
        </header>
      </div>
    );
  }
}
