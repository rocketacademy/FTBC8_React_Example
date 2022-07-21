import React from "react";

export default class ShoppingList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shopping: ["apples", "beef", "carrots", "demera suger"],
      newItem: " ",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Updated!");
  }

  handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    this.setState({
      newItem: "",
      shopping: this.state.shopping.concat(this.state.newItem),
    });
  };

  render() {
    return (
      <div>
        {/* <form onSubmit={this.handleSubmit}> */}
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            value={this.state.newItem}
            placeholder="Insert new item here"
            onChange={(e) => this.setState({ newItem: e.target.value })}
          />

          <input type="submit" value="submit" />
        </form>
        <ol>
          {this.state.shopping ? (
            this.state.shopping.map((shoppingItem, index) => (
              <li key={index}>{shoppingItem}</li>
            ))
          ) : (
            <p>You dont have a list!</p>
          )}
        </ol>
      </div>
    );
  }
}
