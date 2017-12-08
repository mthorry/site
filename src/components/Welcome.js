import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome section">
        <h1 className="welcome-intro"><strong>Matt Thorry</strong> is a <strong>full stack web developer, software engineer, educator </strong>&<strong> all-around good person</strong> living in New York City 🌃</h1>
        <img src="https://pbs.twimg.com/profile_images/936284824767205376/yu8sFzhm_400x400.jpg" className="main-pic"/>
      </div>
    );
  }
}

export default Welcome;