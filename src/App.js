import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/Greeting";
import Pokemon from "./components/Pokemon";
import ClassComponent from "./components/ClassComponent";
import PropComponent from "./components/PropComponent";
import Talker from "./components/Talker";
import ShoppingList from "./components/ShoppingList";
import ClockComponent from "./components/ClockStuff/ClockComponent";
import React from "react";
import Leaderboard from "./components/Leaderboard";
import Form from "./components/Form";

import Wheel from "@uiw/react-color-wheel";
import { products } from "./data.js";
import info from "./info.json";

import { useState } from "react";

export default class App extends React.Component {
  showMeSomething(input) {
    alert(input);
  }

  hover(e) {
    console.log(e);
    alert("Hovered");
  }

  render() {
    console.log(info.info[0]);

    console.log(products);
    console.log(React.Component);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <p onClick={this.hover}>Hello</p>

          <br />

          <p onMouseEnter={(e) => this.hover(e)}>
            Edit <code>src/App.js</code> and save to reload.
          </p> */}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          {/* 
          <Calculator hello={"Hello"} />

          <StyleChildren color="black">
            <p>Hello World </p>
            <h1>Dog</h1>
          </StyleChildren> */}

          {/* <ClockComponent />

          <ClassComponent />
          <Talker />

          <PropComponent
            newDate={{ favouriteColour: "Silver" }}
            name="Sam"
            age={90}
            propFunc={this.showMeSomething}
          /> */}

          {/* Wrap component in div to add event listener and handler */}
          {/* <div onMouseEnter={() => this.hover()}></div>

          <Pokemon pokemon="pikachu" />
          <Greeting name="Sam" age="29" />
          <ShoppingList />
          <Leaderboard /> */}
          <Form />
        </header>
      </div>
    );
  }
}
