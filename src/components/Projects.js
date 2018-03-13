import React, { Component } from 'react';
import lineup from '../images/lineup.png'
import events from '../images/events.png'
import spots from '../images/spots.png'
import earthquakes from '../images/earthquakes.png'

class Projects extends Component {
  render() {
    return (
      <div className="Projects section flex-container">
        <div className="item">
          <img src={lineup} className="thumb"/>
          <div className="overlay">
            <div className="text">
              <h3>My Lineup 📺</h3>
              <p><strong>Save + schedule favorite TV shows</strong></p>
              <p>JavaScript, React, Redux, Ruby, Rails, PostgreSQL</p>
              <p><a href="https://my-lineup.herokuapp.com/dash" target="_blank" rel="noopener noreferrer">Explore App <i className="fa fa-external-link"/></a></p>
              <p><a href="https://github.com/mthorry/tv-lineup-app" target="_blank" rel="noopener noreferrer">Repo <i className="fa fa-github" aria-hidden="true"/></a></p>
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
              <p><a href="https://lets-events.herokuapp.com/login" target="_blank" rel="noopener noreferrer">Explore App  <i className="fa fa-external-link"></i></a></p>
              <p><a href="https://github.com/mthorry/EventsApp" target="_blank" rel="noopener noreferrer">Repo <i className="fa fa-github" aria-hidden="true"/></a></p>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={spots} className="thumb"/>
          <div className="overlay">
            <div className="text">
              <h3>Spots 🍻</h3>
              <p><strong>Save favorite restaurants + bars</strong></p>
              <p>JavaScript, React, Ruby, Rails, PostgreSQL</p>
              <p><a href="https://my-spots.herokuapp.com/login" target="_blank" rel="noopener noreferrer">Explore App  <i className="fa fa-external-link"></i></a></p>
              <p><a href="https://github.com/mthorry/restaurant-tracker-demo" target="_blank" rel="noopener noreferrer">Repo <i className="fa fa-github" aria-hidden="true"/></a></p>
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
              <p><a href="https://earthquakes-mapper.herokuapp.com" target="_blank" rel="noopener noreferrer">Explore App  <i className="fa fa-external-link"></i></a></p>
              <p><a href="https://github.com/mthorry/earthquakes-mapper" target="_blank" rel="noopener noreferrer">Repo <i className="fa fa-github" aria-hidden="true"/></a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;