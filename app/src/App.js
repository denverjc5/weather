import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import Recents from './components/Recents';
import SelectedCity from './components/SelectedCity';
const url = "/api/weather";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      selectedCity: null,
      cities: []
    }
  }

  componentDidMount() {
     axios.get( url ).then( response => {
       this.setState({ cities: response.data });
     });
   }

   selectCity = (city) => {
     this.setState({
       selectedCity: city
     })
   };

   removeCity = (id) => {
     axios.delete( `${url}/${id}` ).then( response => {
       this.setState({selectedCity: null, cities: response.data });
     })
   }

   createCity = (city) => {
     axios.post( url, city ).then( response => {
       this.setState({ selectedCity: city, cities: response.data} );
     });
   }

  render() {
    return (
      <div>
        <Header />

        <Input createCity={this.createCity} selectCity={this.selectCity.bind(this)}/>
          <div className="city-info">
          <Recents cities={this.state.cities} selectCity={this.selectCity.bind(this)}/>
          <SelectedCity selected={this.state.selectedCity} removeCity={this.removeCity}/>
        </div>
      </div>
    );
  }
}

export default App;
