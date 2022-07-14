import React from "react";
import WorldClock from "./WorldClock";

export default class ClockComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      place: "",
      places: ["Asia/Hong_Kong", "America/Los_Angeles"],
    };
  }

  addNewClock = (e) => {
    e.preventDefault();

    this.setState({
      places: this.state.places.concat(this.state.place),
      place: "",
    });
  };

  render() {
    return (
      <div style={{ width: "100vw" }}>
        <form onSubmit={(e) => this.addNewClock(e)}>
          <label>Insert a new place EG: Europe/London</label>
          <input
            type="text"
            value={this.state.place}
            placeholder="Europe/London"
            onChange={(e) =>
              this.setState({
                place: e.target.value,
              })
            }
          />
          <input type="submit" value="submit" />
        </form>
        <WorldClock clocks={this.state.places} />
      </div>
    );
  }
}
