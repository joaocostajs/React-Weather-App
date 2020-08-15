import React, { Component } from 'react';
import './display.css';
class Form extends Component {
  
  render() {
       const {name, main, sys, weather} = this.props.data
  
       const d = new Date();
       const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
       const month = months[d.getMonth()]
     
  
       return (
         <div>
          <div className="display">
            {console.log(this.props.data)}
            <div className="todays">
            <p>{month}, {d.getDay()} {d.getFullYear()}</p>
              <h2>{weather[0].description.charAt(0).toUpperCase() + weather[0].description.slice(1)}</h2> 
              <p>{name}, {sys.country}</p>
            <h1>{main.temp}º</h1>
            </div>
            <div className="grid">
              <div>
                <p className="hour">18:00</p>
                <p className="bolder">24º</p>
                <p className="bolder">cloudy</p>
              </div>
              <div>
                <p className="hour">18:00</p>
                <p className="bolder">24º</p>
                <p className="bolder">cloudy</p>
              </div>
              <div>
                <p className="hour">18:00</p>
                <p className="bolder">24º</p>
                <p className="bolder">cloudy</p>
              </div>
              <div>
                <p className="hour">18:00</p>
                <p className="bolder">24º</p>
                <p className="bolder">cloudy</p>
              </div>
              <div>
                <p className="hour">18:00</p>
                <p className="bolder">24º</p>
                <p className="bolder">cloudy</p>
              </div>
           
            
            </div>
            
          </div>
          <button className="btn" onClick={this.props.success}>search again</button>

        </div>

    );
  }
}

export default Form;