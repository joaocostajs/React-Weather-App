import React, { Component } from 'react';
import Form from './components/form';
import Display from './components/display';
import './App.css';

class App extends Component {
  handleChange = e => {
    const {name,type,value} = e.target;
    const val = type === 'number' ? parseFloat(value) : value
    
    this.setState({[name]: val}) // ao ter o name em vez de title ou description ele recebe da variavel o valor e atualiza o state
    console.log(this.state);
  }
  

  getWeather = async e =>{
    e.preventDefault();

    let part1 = "http://api.openweathermap.org/data/2.5/weather?q="
    // let part1 = "http://api.openweathermap.org/data/2.5/forecast/hourly?q=&appid="
    let input = this.state.input
    let key = process.env.REACT_APP_API_KEY
    let part2 = "&lang=pt&units=metric"
    let url = part1 + input + key + part2
    
    let fetching = await fetch(url)
    let json = await fetching.json()
    this.setState({data: json})
    json.cod === "404" ? this.setState({success:false}) : this.setState({success:true})
  } 


  state = {
    success: "",
    data: "",
  };

  render() {
    return (
      <div className="App">
       
      <header className="App-header">
        {this.state.success ? <Display data={this.state.data}/>  :  <Form fetch={this.getWeather} update={this.handleChange}/> }
      </header>
    </div>
    );
  }
}

export default App;