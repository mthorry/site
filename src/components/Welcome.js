import React, { Component } from 'react';
import {accessId, APIkey} from '../secrets.js'

class Welcome extends Component {

  state = {
    current: 'none'
  }

  fetchWeather = () => {
    return fetch(`https://api.aerisapi.com/observations/11101?client_id=${accessId}&client_secret=${APIkey}`)
    .then((res) => res.json())
  }

  componentDidMount = () => {
    this.fetchWeather()
    .then((json) => {
      json.success ? this.setState({ current: json.response.ob }) : null
    })
  }

  formatCurrentWeather = (currentWeather) => {
    let current = ''
    if (currentWeather.toLowerCase().charAt(currentWeather.length-1) === 'y') {
      current = currentWeather.toLowerCase() + ' '
    } else if (currentWeather.toLowerCase() === 'clear') {
      current = 'cloudless '
    } else if (currentWeather.toLowerCase() === 'freezing fog') {
      current = 'freezing '
    } else if (currentWeather.toLowerCase().charAt(currentWeather.length-1) === 'g') {
      current = currentWeather.toLowerCase() + 'gy '
    } else {
      current = currentWeather.toLowerCase() + 'y '
    }
    return current
  }

  importAll = (r) => {
    let icons = {};
    r.keys().map((item, index) => { icons[item.replace('./', '')] = r(item); });
    return icons;
  }

  render() {
    console.log(this.state.current)
    const icons = this.importAll(require.context('../images/icons', false, /\.(png|jpe?g|svg)$/));
    let currentWeather = '🌃'
    this.state.current === 'none' ? null : currentWeather = this.formatCurrentWeather(this.state.current.weatherPrimary)

    return (
      <div className="Welcome section">

        <h1 className="welcome-intro"><strong>Matt Thorry</strong> is a <strong>full stack web engineer, educator </strong>&<strong> all-around good person</strong> living in {currentWeather}<img src={icons[this.state.current.icon]} alt='' className='weatherIcon'/> New York City
        <br/>
        <br/>
          <a href="https://linkedin.com/in/mthorry" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square i-hov" aria-hidden="true"/></a>  <a href="https://medium.com/@mthorry" target="_blank" rel="noopener noreferrer"><i className="fa fa-medium i-hov" aria-hidden="true"/></a>  <a href="https://github.com/mthorry" target="_blank" rel="noopener noreferrer"><i className="fa fa-github i-hov" aria-hidden="true"/></a>  <a href="mailto:mthorry@gmail.com?Subject=Hello%20there!" target="_top"><i className="fa fa-envelope i-hov" aria-hidden="true"/></a>
        <br/>
          <a href="https://drive.google.com/file/d/1tllGBa8TO6BHuf-Bcljx_ylwLy6ECnbo/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button className="button resume-button">Resume <i className="fa fa-file-pdf-o" aria-hidden="true"/></button></a>


        </h1>
        <img src="https://pbs.twimg.com/profile_images/936284824767205376/yu8sFzhm_400x400.jpg" className="main-pic"/>
      </div>
    );
  }
}

export default Welcome;

//   <a href="https://angel.co/mthorry" target="_blank" rel="noopener noreferrer"><i className="fa fa-angellist i-hov" aria-hidden="true"/></a>
