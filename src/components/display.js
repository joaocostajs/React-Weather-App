import React, { Component } from 'react';
import './display.css';
class Form extends Component {
  
  render() {
       const {name, cod, main, sys, weather} = this.props.data
  
       const d = new Date();
       const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
       const month = months[d.getMonth()]
     
  
       return (
        <div className="display">
          {console.log(this.props.data)}
            <p>{name}, {sys.country}</p>
            <h2>{weather[0].description}</h2> 
            <p>{month}, {d.getDay()} {d.getFullYear()}</p>
           <h1>{main.temp}º</h1>
           <button className="btn" onClick={this.props.success}>search again</button>
        </div>

    );
  }
}

export default Form;