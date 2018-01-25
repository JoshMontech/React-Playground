import React, { PureComponent } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Aux";


class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        { id: "asdfa", name: "Josh", age: 23 },
        { id: "fffme", name: "Carla", age: 23 },
        { id: "boiyo", name: "Daniel", age: 28 }
      ],
      showPersons: false,
      toggleClickedCounter: 0
    };
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] inside componentdidMount()');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate()', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //          nextState.showPersons !== this.state.showPersons ||
  //          nextState.clicked !== this.state.clicked;
  // }

  componetWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate()');
  }



  // state = {
  //   persons: [
  //     { id: "asdfa", name: "Josh", age: 23 },
  //     { id: "fffme", name: "Carla", age: 23 },
  //     { id: "boiyo", name: "Daniel", age: 28 }
  //   ],
  //   showPersons: false
  // };

  nameChangedHandler = (event, id) => {
    // manipulating a person object's 'name' value
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    // this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( (prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClickedCounter: prevState.toggleClickedCounter + 1
      }
    });
  };

  render() {
    console.log("[App.js] inside render()");
    let persons = null;

    if (this.state.showPersons) {
      persons =
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />;
    }

    return (
      <Aux>
          <button onClick={() => {this.setState({showPersons: true})}}>show persons</button>
          <Cockpit
            appTitle={this.props.title}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}/>
          {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
