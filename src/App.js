import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { description: 'Buy milk and bread', isCompleted: true },
        { description: 'Pay the water bill', isCompleted: false},
        { description: 'Pick up drycleaning', isCompleted: false}
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
            <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } />
            )}
        </ul>
      </div>
    );
  }
}

export default App;
