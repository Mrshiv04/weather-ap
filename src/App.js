import React, { Component } from 'react';
import './App.css';
import WeatherBox from './components/weatherCard';
import TitleBox from './components/titleBar';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: undefined,
      city: undefined,
      country: undefined,
      desc: undefined,
      main: [],
      wind: []
    };
    this.performSearch('srinagar');
  }

  // async performSearch(searchTerm) {
  //   let response = await fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?appid=8718e1596cecdd2e42052933e521bba4&q=${searchTerm}`
  //   );
  //   let data = await response.json();
  //   let icon =
  //     'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';
  //   this.setState({
  //     wind: data.wind,
  //     icon: icon,
  //     main: data.main,
  //     city: data.name,
  //     country: data.sys.country,
  //     desc: data.weather[0].description
  //   });
  // }

  performSearch(searchTerm) {
    const urlString =
      'https://api.openweathermap.org/data/2.5/weather?appid=8718e1596cecdd2e42052933e521bba4&q=' +
      searchTerm;
    $.ajax({
      url: urlString,
      success: data => {
        console.log(data);
        const Icon =
          'http://openweathermap.org/img/wn/' +
          data.weather[0].icon +
          '@2x.png';
        this.setState({
          wind: data.wind,
          icon: Icon,
          main: data.main,
          city: data.name,
          country: data.sys.country,
          desc: data.weather[0].description
        });
        console.log(this.state.description);
      },
      error: (xhr, status, err) => {
        console.error('failure');
      }
    });
  }

  changeHandler = e => {
    let searchTerm = this.state.term;
    searchTerm = e.target.value;
    if (searchTerm) {
      this.performSearch(searchTerm);
    } else {
      this.performSearch('Kolkata');
    }
  };

  render() {
    return (
      <div className='App'>
        <TitleBox />
        <input
          style={{
            fontSize: 24,
            display: 'block',
            width: '98%',
            padding: 10,
            color: 'white',
            backgroundColor: 'transparent'
          }}
          onChange={this.changeHandler}
          placeholder='Enter Movie Name'
        />
        <WeatherBox
          winds={this.state.wind}
          icon={this.state.icon}
          mains={this.state.main}
          city={this.state.city}
          country={this.state.country}
          desc={this.state.desc}
        />
      </div>
    );
  }
}

export default App;
