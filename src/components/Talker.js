import React from "react";
import { Button } from "./Button";

export default class Talker extends React.Component {
  handleClick() {
    let speech = "";
    for (let i = 0; i < 10000; i++) {
      speech += "blah ";
    }
    alert(speech);
  }

  render() {
    return (
      <div>
        <Button propFunc={this.handleClick} />
        <button onClick={() => alert("CLick")}>Click me</button>
      </div>
    );
  }
}
