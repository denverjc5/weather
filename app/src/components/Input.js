import React, {Component} from 'react';
import axios from 'axios';
import './input.css';
import appKey from '../config.js';
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      createCity: props.createCity
    }
  }

  getUserInput = (value) => {
    this.setState({
      userInput: value
    });
  }

  clearForm = () => {
    var input = document.getElementById("input-field");
    input.value = '';
    this.setState({
      userInput: ''
    })
  }

  getWeather = (value) => {
    if (value) {
      let number = parseInt(value, 10);
      let urlParam = (number) ? '?zip=' : '?q=';
      let url = `${baseUrl}${urlParam}${this.state.userInput}&units=imperial&APPID=${appKey.apiKey}`;
      let newCity = {};
      axios.get(url).then(response => {
        newCity.name = response.data.name;
        newCity.temp = parseInt(response.data.main.temp, 10);
        newCity.high = parseInt(response.data.main.temp_max, 10);
        newCity.low =  parseInt(response.data.main.temp_min, 10);
        newCity.weather = response.data.weather[0].main;
        newCity.icon = response.data.weather[0].icon;
        newCity.wind = parseInt(response.data.wind.speed, 10);
        this.state.createCity(newCity);
        this.clearForm();
      });
    }
  }


  render() {
    return (
      <div id="input-body">
        <input id="input-field" placeholder="Enter a location" onChange={ (e) => this.getUserInput(e.target.value)}></input>
        <button onClick={ () => {this.getWeather(this.state.userInput)} }>Get weather</button>
      </div>
    )
  }
}

export default Input
