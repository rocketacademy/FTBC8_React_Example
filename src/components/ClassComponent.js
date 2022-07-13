// Class

import React from "react";

export default class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // has access to state here
    // can define instance variables
  }

  // Can define methods here
  // Cannot write plain js here

  render() {
    // Can write JS here
    return <div>Content</div>;
  }
}
