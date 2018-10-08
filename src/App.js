import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: "Max", age: 28},
      {name: "Manu", age: 29},
      {name: "Stephanie", age: 26}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) =>{
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: "Manu", age: 29},
        {name: "Stephanie", age: 27}
      ]
    })
  }

  nameChangedHandler = (event) =>{
    this.setState({
      persons: [
        {name: 'Max', age: 28},
        {name: event.target.value, age: 29},
        {name: "Stephanie", age: 27}
      ]
    })
  }

  render() {

    const style={
      backgroundColor:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };
    return (
      <div className="App">
        <h1>This is a Title</h1>
        <p>This is really working</p>
        <button 
        style={style}
        onClick={() =>this.switchNameHandler('Mazamillian!!')}>Switch Name</button> 
                            {/* first method to adjust value */}

        <div>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        changed = {this.nameChangedHandler}
        click={this.switchNameHandler.bind(this, 'Max!')}>Hobbies: racing</Person>
              {/* second (and preferred) method to adjust value */}
      
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
        </div>
      </div>
    );
  }
}

export default App;
