import React from "react";
import Clock from "./ClockStuff/Clock";

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
    };
  }
  render() {
    return (
      <div>
        {this.state.show ? <Clock timezone={"America/Los_Angeles"} /> : null}
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Toggle Clock
        </button>
        <h6>Welcome</h6>
        <p>{this.props.name}</p>
        <p>{this.props.age}</p>]{" "}
      </div>
    );
  }
}
