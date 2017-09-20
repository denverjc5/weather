import React, { Component } from 'react';
import './recents.css';

class Recents extends Component {
  render() {
    return (
      <div className="recent-body">
      <h2 className="title-text">Recent Cities</h2>
        <ul className="listContainer">
          {
            this.props.cities.map((city) => {
              return (
                  <li className="listText" key={city.id} onClick={() => this.props.selectCity(city)}>
                  {city.name}
                  </li>)
            })
          }
        </ul>
      </div>
    )
  }
}

export default Recents;
