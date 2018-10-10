import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';

class App extends Component {
  constructor(props){
    super(props);
    console.log('these are the props', props)
}

  state = {
    persons: [
      {id:'1', name: "Max", age: 28},
      {id:'2', name: "Manu", age: 29},
      {id:'3', name: "Stephanie", age: 26}
    ],
    otherState: 'some other value',
    showPersons: false
  }


  nameChangedHandler = (event, id) =>{

    const personIndex = this.state.persons.findIndex(p =>{ //.findIndex takes in a function and will execute the function on every elemt in the array
      return p.id === id; //return t or f on whether or not this is the person/element you were looking for
                          // it will be true if the element that you are currently looking at (p) is equal to the argument (id) that you received
    });
    
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) =>{
    // const persons = this.state.persons.slice(); //get a copy of the full array using slice and copy it into the new const
    const persons = [...this.state.persons]; // <-- this is an equivelent to the slice approach abouve
    persons.splice(personIndex, 1); //start splicing the personIndex remove one element from the array
    this.setState({persons: persons}); //setting state to updated persons
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
      backgroundColor:'green',
      font: 'inherit',
      color: 'white',
      border: '1px solid blue',
      padding:'8px',
      cursor:'pointer',
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
            <div>
              <Persons 
                persons = {this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}/>
            </div> 
      ); 
      style.backgroundColor='red';
  }
    const assignedClasses =[];
    if (this.state.persons.length <= 2){
      assignedClasses.push(classes.red); //red class is in app.css so it  would be classes = ['red']
    }
    if (this.state.persons.length <= 1){
      assignedClasses.push(classes.bold); //bold class is in app. css so it would be classes =['red, bold'] since we joined it at the className below
    }

    return (
      <div className='App'>
        <h1>This is a Title</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p>
        <button
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>    
        {persons}
      </div>
    );
  }
}

export default App;
