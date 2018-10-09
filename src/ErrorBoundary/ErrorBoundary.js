import React, {Component} from 'react';

class ErrorBoundary extends Component{

    state={
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) =>{ //takes in potential error and some additional info which will be pass in automatically from React
     this.setState({                      //will be  executed whenever a component we wrap in an error boundary throws an erorr
         hasError: true,
         errorMessage: error
     });           
    }

    render(){
        if (this.state.hasError){
            return <h1>{this.state.errorMessage}</h1>;

        }else{
            return this.props.children;
        }
    }
}
export default ErrorBoundary; //this is a higher order component