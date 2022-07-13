import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "John",
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  changeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <h6>Welcome</h6>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Increment Count</button>
        <input
          type="text"
          value={this.state.name}
          placeholder="Insert name here"
          onChange={(e) => this.changeName(e)}
        />
        <p>{this.state.name}</p>
      </div>
    );
  }
}
