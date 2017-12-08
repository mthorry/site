import React, { Component } from 'react';
import lineup from '../images/lineup.png'
import events from '../images/events.png'
import spots from '../images/spots.png'
import earthquakes from '../images/earthquakes.png'

class Work extends Component {
  render() {
    return (
      <div className="Work section flex-container">
        <div className="item">
          <img src={lineup} className="thumb"/>
          <div className="overlay">
            <div className="text">
              <h3>My Lineup 📺</h3>
              <p><strong>Save favorite TV shows</strong></p>
              <p>JavaScript, React, Redux, Ruby, Rails, PostgreSQL, Semantic UI</p>
              <p><a href="https://my-lineup.herokuapp.com/dash" target="_blank">Explore App</a></p>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={events} className="thumb"/>
          <div className="overlay">
            <div className="text">
              <h3>Let's Have Fun Together 🎉</h3>
              <p><strong>Find events + see who's going</strong></p>
              <p>Ruby, Rails, PostgreSQL, Bootstrap UI</p>
              <p><a href="https://lets-events.herokuapp.com/login" target="_blank">Explore App</a></p>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={spots} className="thumb"/>
          <div className="overlay">
            <div className="text">
              <h3>Spots 🍻</h3>
              <p><strong>Save favorite restaurants + bars</strong></p>
              <p>JavaScript, React, Redux, Ruby, Rails, PostgreSQL, Semantic UI</p>
              <p><a href="https://my-spots.herokuapp.com/login" target="_blank">Explore App</a></p>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={earthquakes} className="thumb"/>
          <div className="overlay">
            <div className="text">
              <h3>Earthquake Mapper 🗺</h3>
              <p><strong>View earthquakes around world</strong></p>
              <p>JavaScript, React, Google Maps</p>
              <p><a href="https://earthquakes-mapper.herokuapp.com" target="_blank">Explore App</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;