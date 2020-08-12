import React, { Component } from 'react';
import './display.css';
class Form extends Component {

  render() {
       const {name, cod, main, sys, weather} = this.props.data
    return (
        <div>
          {console.log(this.props.data)}
            <p>{name}</p>
            <h1>{weather[0].desciption}</h1> 
           <p>{main.temp}º</p>
        </div>

    //    <p>{this.props.data}</p>
    );
  }
}

export default Form;