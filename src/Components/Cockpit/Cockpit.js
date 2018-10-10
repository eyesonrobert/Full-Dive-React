import React from 'react';
import classes from './cockpit.css';

const cockpit = (props) => {
    const assignedClasses =[];
    if (props.persons.length <= 2){
      assignedClasses.push(classes.red); //red class is in app.css so it  would be classes = ['red']
    }
    if (this.state.persons.length <= 1){
      assignedClasses.push(classes.bold); //bold class is in app. css so it would be classes =['red, bold'] since we joined it at the className below
    }

    return(
        <div className={classes.cockpit}>
            <h1>This is a Title</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>  
        </div>  
    );
};

export default cockpit;