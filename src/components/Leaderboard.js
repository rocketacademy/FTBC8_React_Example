import Counter from "./Counter";
import React from "react";

export default class Leaderboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counters: [
        { count: 0, name: "Bob", id: 1 },
        { count: 2, name: "Sam", id: 2 },
        { count: 3, name: "Jim", id: 3 },
        { count: 4, name: "Tim", id: 4 },
      ],
    };
  }

  incrementCount = (id) => {
    let position;
    const counter = this.state.counters.filter((counterEl, index) => {
      position = index;
      return counterEl.id === id;
    });
    counter[0].count += 1;
    let newArray = [...this.state.counters];
    newArray[position] = counter;
    this.setState({
      count: newArray,
    });
  };

  decrementCount = (id) => {
    let position;
    const counter = this.state.counters.filter((counterEl, index) => {
      position = index;
      return counterEl.id === id;
    });
    counter[0].count -= 1;
    let newArray = [...this.state.counters];
    newArray[position] = counter;
    this.setState({
      count: newArray,
    });
  };

  render() {
    this.state.counters.sort((a, b) => b.count - a.count);
    return (
      <div className="App">
        {this.state.counters && this.state.counters.length > 0 ? (
          this.state.counters.map((counter) => (
            <Counter
              name={counter.name}
              count={counter.count}
              key={counter.id}
              plus={this.incrementCount}
              minus={this.decrementCount}
              id={counter.id}
            />
          ))
        ) : (
          <p>No Counters here! </p>
        )}
      </div>
    );
  }
}
