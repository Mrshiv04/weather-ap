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
          {this.props.winds.deg}
          &deg;
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
