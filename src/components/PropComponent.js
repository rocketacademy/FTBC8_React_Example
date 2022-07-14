// Function

// export default function PropComponent() {
//   // Can write JS here, declare helperfunctions, can define variables etc

//   return <div>Content props</div>;
// }

import React from "react";

// Class

export default class PropComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("render:", this.props);

    return (
      <div>
        <button onClick={() => this.props.propFunc("Hello")}>
          Show me Something!
        </button>
        {this.props.name}
        {this.props.age}
      </div>
    );
  }
}
