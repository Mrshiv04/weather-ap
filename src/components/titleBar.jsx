import React, { Component } from 'react';
import '../App.css';

class Title extends Component {
  render() {
    return (
      <div>
        <table className='header'>
          <tbody>
            <tr>
              <td>
                <img width='70' src='titleicon.png' alt='weatherIcon' />
              </td>
              <td width='8' />
              <td>
                <h4>Weather App</h4>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Title;
