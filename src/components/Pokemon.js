import React from "react";

export default class Pokemon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      sprite: "",
      weight: 0,
    };
  }

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemon}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          name: data.name,
          sprite: data.sprites.front_default,
          weight: data.weight,
        });
      });
  }

  renderPokemon = () => (
    <div>
      <h4>{this.state.name}</h4>
      <h5>{this.state.weight}</h5>
      <img src={this.state.sprite} alt={this.props.pokemon} />
    </div>
  );

  render() {
    return <div>{this.renderPokemon()}</div>;
  }
}
