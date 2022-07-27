import React from "react";

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      username: "",
      population: 0,
      country: null,
      currentUser: {},
    };
  }

  handleChange = (e) => {
    console.log("target", e.target);
    let { name } = e.target;
    this.setState({
      [name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.props.login) {
      alert(
        `${this.state.username}, ${this.state.email}, ${this.state.password}`
      );
    } else {
      console.log("DONE");

      let dataOBJ = {
        users: [
          {
            name: this.state.username,
            email: this.state.email,
            password: this.state.password,
          },
        ],
      };

      let storageArray = JSON.parse(localStorage.getItem("data")) || [];

      console.log(storageArray);

      if (storageArray.length == 0) {
        console.log("HERE");
        localStorage.setItem("data", JSON.stringify(dataOBJ));
      } else {
        let data = {
          name: this.state.username,
          email: this.state.email,
          password: this.state.password,
        };

        console.log(storageArray.users);
        storageArray.users.push(data);
        localStorage.setItem("data", JSON.stringify(storageArray));
      }

      // console.log(storageArray);

      // let dataString = `${this.state.username}, ${this.state.email}, ${this.state.password}`;
    }
  };

  componentDidMount() {
    //   let data = localStorage.getItem("data");
    //   alert(data);
    fetch("https://restcountries.com/v3.1/name/peru")
      .then((response) => {
        console.log(response);
        console.log(response.flag);
        return response.json();
      })
      .then((realData) => {
        console.log(realData);
        console.log(realData[0].population);
        this.setState({
          country: realData[0].name.official,
          population: realData[0].population,
        });
      });

    console.log(localStorage.getItem("data"));
    let data = JSON.parse(localStorage.getItem("data"));
    this.setState({ currentUser: data });
  }

  render() {
    let classes = ["Ham", "Eggs", "Bacon", "Toast"];

    let list = classes.map((item, index) => {
      return <option>{item}</option>;
    });

    return (
      <div>
        <h2>{this.props.login ? "Login Form" : "Signup Form"}</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label> <br />
          <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="Sam O'Shaughnessy"
          />
          <br />
          <label>Email:</label> <br />
          <input
            name="email"
            type="text"
            onChange={this.handleChange}
            value={this.state.email}
            placeholder="sam@sam.com"
          />
          <br />
          <label>Password:</label> <br />
          <input
            name="password"
            type="text"
            onChange={this.handleChange}
            value={this.state.password}
            placeholder="123"
          />
          <br />
          <span>select class</span>
          <select name="classSelect">
            <option value="none" selected disabled hidden></option>
            {list}
          </select>
          <br />
          <input type="submit" value={this.props.login ? "Login" : "Signup"} />
        </form>

        {this.state.currentUser && this.state.currentUser !== undefined ? (
          <div>
            <p>{this.state.currentUser.password}</p>
          </div>
        ) : null}

        {this.state.country !== null ? (
          <div>
            <p>
              {this.state.country}, {this.state.population}
            </p>
          </div>
        ) : null}
      </div>
    );
  }
}
