import React, { Component } from 'react';
import './selectedCity.css';

class SelectedCity extends Component {
  constructor(props) {
      super(props);
      this.state = {
      city: null,
      removeCity: null
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      city:  props.selected,
      removeCity: props.removeCity
    })
  }

  removeCity = () => {
    this.state.removeCity(this.state.city.id);
    this.setState({city: null});
  }

  render() {

    return (
      <section className="selectedCity-body">
      {
        this.state.city
        ?
        <div>
          <h2>{this.state.city.name} </h2>
          <img src={`http://openweathermap.org/img/w/${this.state.city.icon}.png`} alt="Weather image" />
          <br />
          <span className='info'>Current Temp {this.state.city.temp}º </span>
          <br />
          <span className='info'>{this.state.city.weather}</span>
          <br />
          <span className='info'>High of {this.state.city.high}º</span>
          <br />
          <span className='info'>Low of {this.state.city.low}º</span>
          <br />
          <span className='info'> Wind is {this.state.city.wind} mph.</span>
          <br />
          <button className='remove' onClick={this.removeCity}>Remove</button>
        </div>
        :
        <p>Enter a new city above<br />or select a city from the list.</p>
      }
      </section>
    )
  }
}

export default SelectedCity;
