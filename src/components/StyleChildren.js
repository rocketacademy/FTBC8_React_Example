import React from "react";

export default class StyleChildren extends React.Component {
  render() {
    console.log(this.props.children);
    return (
      <div style={{ border: `solid ${this.props.color} 3px` }}>
        {this.props.children}
      </div>
    );
  }
}
