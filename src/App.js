import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import Pokemon from "./components/Pokemon";
import ClassComponent from "./components/ClassComponent";
import PropComponent from "./components/PropComponent";
import Talker from "./components/Talker";
import ShoppingList from "./components/ShoppingList";
import ClockComponent from "./components/ClockStuff/ClockComponent";

function App() {
  function showMeSomething(input) {
    alert(input);
  }

  function hover() {
    alert("Hovered");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <ClockComponent />

        <ClassComponent />
        <Talker />

        {/* Child of App */}
        <PropComponent
          newDate={{ favouriteColour: "Silver" }}
          name="Sam"
          age={90}
          propFunc={showMeSomething}
        />

        {/* Wrap component in div to add event listener and handler */}
        <div onMouseEnter={() => hover()}>
          <ShoppingList />
        </div>

        <Pokemon pokemon="pikachu" />
        <Greeting name="Sam" age="29" />
        <Counter />
      </header>
    </div>
  );
}

export default App;
