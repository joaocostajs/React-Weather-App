import React, { Component } from 'react';
import './form.css'
class Form extends Component {


// handleChange = e => {
//     const {name,type,value} = e.target;
//     const val = type === 'number' ? parseFloat(value) : value
    
//     this.setState({[name]: val}) // ao ter o name em vez de title ou description ele recebe da variavel o valor e atualiza o state
//     console.log(this.state);
//   }

// getWeather = async e =>{
//   e.preventDefault();
 
//   let part1 = "http://api.openweathermap.org/data/2.5/weather?q="
//   let input = this.state.input
//   let part2 = "&appid=b8d5d166fa637e392446c7de40113758&lang=pt"
//   let url = part1 + input + part2
  
//   let fetching = await fetch(url)
//   let json = await fetching.json()

//   console.log("jason", json);
//   console.log(this.props.state);
//   json.cod === "404" ? this.props.setState({success:false}) : this.props.setState({success:true})
// } 
  render() {
    return (
      <div>
        <form onSubmit={this.props.fetch}>
         <input type="text" name="input" placeholder="Type here the name of your city, ex. London, UK" onChange={this.props.update}/>
         <button type="submit">search</button>
        
         
       
    </form>
      {this.props.error === true ? <div className="error">
      You need to put other adress
    </div> : null}
    </div>
    );
  }
}

export default Form;