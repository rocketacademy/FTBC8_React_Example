import React from "react";

export default class Counter extends React.Component {
  render() {
    return (
      <div>
        <h6>Welcome</h6>
        <button onClick={() => this.props.plus(this.props.id)}>
          Increment Count
        </button>
        <button onClick={() => this.props.minus(this.props.id)}>
          Decrement Count
        </button>
        <p>{this.props.name}</p>
        <p>{this.props.count}</p>
      </div>
    );
  }
}
