import React, { Component } from 'react';
import '../App.css';

class WeatherBox extends Component {
  constructor(props) {
    super(props);
  }

  converTemp(temp) {
    const temp_new = temp - 273;
    return Math.ceil(temp_new);
  }

  determineDirection(degree) {
    if (degree > 330 && degree <= 30) {
      return ' North';
    } else if (degree > 30 && degree <= 60) {
      return ' North East';
    } else if (degree > 60 && degree <= 120) {
      return 'East';
    } else if (degree > 120 && degree <= 150) {
      return ' South East';
    } else if (degree > 150 && degree <= 210) {
      return ' South';
    } else if (degree > 210 && degree <= 240) {
      return ' South West';
    } else if (degree > 240 && degree <= 300) {
      return ' West';
    } else if (degree > 300 && degree <= 330) {
      return ' North West';
    }
  }

  render() {
    return (
      <div style={{ color: 'white' }} className='list'>
        <h3>
          {this.props.city},{this.props.country}
        </h3>
        <h3>{this.converTemp(this.props.mains.temp)}&deg;</h3>
        <img style={{ margin: 0 }} src={this.props.icon} alt='icon' />
        <h5 style={{ margin: 0 }}>{this.props.desc}</h5>
        <p>
          Wind speed is {this.props.winds.speed} km/hr from{' '}
          {this.determineDirection(this.props.winds.deg)}
        </p>
        <p>
          And it feels like {this.converTemp(this.props.mains.feels_like)}&deg;
        </p>
        <p>with Humidity of {this.props.mains.humidity}%</p>
      </div>
    );
  }
}

export default WeatherBox;
