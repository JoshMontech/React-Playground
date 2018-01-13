import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Josh", age: 23 },
      { name: "Carla", age: 23 },
      { name: "Daniel", age: 28 }
    ],
    otherState: "some other value"
  };

  switchNameHander = newName => {
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: "Carla", age: 23 },
        { name: "Daniel", age: 28 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Josh", age: 23 },
        { name: event.target.value, age: 23 },
        { name: "Daniel", age: 28 }
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <p>This is really working</p>
        <button
          style={style}
          onClick={() => this.switchNameHander("Joshua")}>
          Switch Name
        </button>
        <Person
          click={this.switchNameHander.bind(this, "Monty")}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          My hobbies incldue dancing
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
