import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Persons.js] inside componentDidMount()');
  }

  componentWillReceiveProps (nextProps) {
    console.log('[UPDATE Persons.js] Inside componentWillReceiveProps()');
  }

  shouldComponentUpdate(nextProps, state) {
    console.log('[UPDATE Persons.js] Inside shouldComponentUpdate()');
    return nextProps.persons !== this.props.persons;
  }

  render () {
    console.log('[Persons.js] inside render()');
    return this.props.persons.map((person, index) => {
        return (
        <Person
            click={() => {
              this.props.clicked(index);
            }}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.props.changed(event, person.id)}
          />
        );
    });
  }
}

export default Persons;
