import React, { Component } from 'react';
import hmu from '../images/hmu.gif'

const APIkey = process.env.REACT_APP_WEATHER_API_KEY

class Welcome extends Component {

  state = {
    current: null,
    icon: null
  }

  async fetchWeather() {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=40.71&lon=-74.00&appid=${APIkey}`)
      .then((res) => res.json())
  }


  async componentDidMount() {
    await this.fetchWeather()
      .then((json) => {
        return json.weather ? this.setState({ 
          current: json.weather[0],
          icon: json.weather[0].icon 
        }) : null
      })
  }


  formatCurrentWeather = (currentWeather) => {
    const lastChar = currentWeather.charAt(currentWeather.length - 1)

    if (lastChar === 'g') {
      currentWeather = currentWeather + 'gy '
    } else if (lastChar === 'e' || lastChar === 's') {
      currentWeather = currentWeather.slice(0, -1) + 'y'
    } else if (currentWeather === 'clear') {
      currentWeather = 'cloudless '
    } else {
      currentWeather = currentWeather + 'y '
    }
    return currentWeather
  }

  render() {
    let currentWeather, image

    if (this.state.current) {
      currentWeather = this.formatCurrentWeather(this.state.current.main.toLowerCase())
      image = <img src={`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`} alt={currentWeather} className='weatherIcon' />
    } else {
      currentWeather = ''
      image = ''
    }

    return (
      <div className="Welcome section">
        <h1 className="welcome-intro"><strong>Matt Thorry</strong> is a <strong>software engineer</strong>, <strong>problem solver
              </strong> &<strong> all-around good person</strong> living in {currentWeather} {image} New York City
              <br />
          <br />
          <a href="https://linkedin.com/in/mthorry" target="_blank" rel="noopener noreferrer"><i
            className="fa fa-linkedin-square i-hov" /></a> <a href="https://github.com/mthorry"
              target="_blank" rel="noopener noreferrer"><i className="fa fa-github i-hov" /></a> <a
                href="mailto:mthorry@gmail.com?Subject=Hello%20there!" target="_top"><i className="fa fa-envelope i-hov"
                 /></a>
          <br />
          <a href="https://drive.google.com/open?id=1Jt9UmGjo2fi6HHDVIgvtxjjYNH9vZk-V" target="_blank"
            rel="noopener noreferrer"><button className="button resume-button">Resume <i className="fa fa-file-pdf-o"
             /></button></a>
        </h1>
        <img src={hmu} className="main-pic" alt='hmu'/>
      </div>
    );
  }
}

export default Welcome;

//   <a href="https://angel.co/mthorry" target="_blank" rel="noopener noreferrer"><i className="fa fa-angellist i-hov" aria-hidden="true"/></a>
