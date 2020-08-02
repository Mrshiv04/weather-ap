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
        console.log(this.state.wind.deg);
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

  changeBackgroundImage(e) {
    let image = '';
    if (11 >= e && e >= 5) {
      //MORNING
      image =
        'https://static.boredpanda.com/blog/wp-content/uploads/2017/12/lane2-5a24438ef0bcf__880.jpg';
    } else if (15 >= e && e > 11) {
      //AFTERNOON
      image =
        'https://static.boredpanda.com/blog/wp-content/uploads/2017/12/lane7-5a24439e2f9de__880.jpg';
    } else if (19 >= e && e > 15) {
      //EVENING
      image =
        'https://static.boredpanda.com/blog/wp-content/uploads/2017/12/lane3-5a2443917d60f__880.jpg';
    } else if (e > 19 || (5 > e && e >= 0)) {
      //NIGHT
      image =
        'https://static.boredpanda.com/blog/wp-content/uploads/2017/12/lane5-5a24439939e90__880.jpg';
    }
    return image;
  }

  changeMessege(e) {
    let messege = '';
    if (11 >= e && e >= 5) {
      //MORNING
      messege = 'Morning is when I am awake and there is a dawn in me';
    } else if (15 >= e && e > 11) {
      //AFTERNOON
      messege = 'The afternoon knows what the morning never suspected';
    } else if (19 >= e && e > 15) {
      //EVENING
      messege = 'The evening had turned sweet and blue';
    } else if (e > 19 || (5 > e && e >= 0)) {
      //NIGHT
      messege =
        'The night is the hardest time to be alive and 4am knows all my secrets';
    }
    return messege;
  }

  detTime() {
    let x = new Date();
    console.log(x.getHours());
    return x.getHours();
  }

  render() {
    return (
      <div
        className='App'
        style={{
          backgroundImage:
            'url(' + this.changeBackgroundImage(this.detTime()) + ')'
        }}
      >
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
          placeholder='Enter City Name'
        />
        <h6
          style={{
            color: 'white',
            fontFamily: '"Comic Sans MS", cursive, sans-serif'
          }}
        >
          {this.changeMessege(this.detTime())}
        </h6>
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
