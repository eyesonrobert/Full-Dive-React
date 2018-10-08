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
    otherState: 'some other value',
    showPersons: false
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
  togglePersonsHandler = () =>{
    const doesShow= this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
    //this is for toggling. if showPersons is true, it will set does show to false. if showPersons is false, it will set doesShow to true
  }

  render() {

    const style={
      backgroundColor:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
            <div>
                <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age}/>
                <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                changed = {this.nameChangedHandler}
                click={this.switchNameHandler.bind(this, 'Max!')}>Hobbies: racing</Person>      
                <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age}/>
            </div> //putting entire div in persons variable. it's a way to check if showPersons is true before returning. conditional rendering
      ); 
    }
    return (
      <div className="App">
        <h1>This is a Title</h1>
        <p>This is really working</p>
        <button
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>    
        {persons}
      </div>
    );
  }
}

export default App;
