import React, { Component } from 'react';
import listeners from '../images/listeners.png'
import redux from '../images/redux.png'
import google from '../images/google.png'
import performance from '../images/performance.png'

class Blog extends Component {
  render() {
    return (
      <div className="Blog section flex-container">
      <div className="item">
          <img src={google} className="thumb"/>
          <div className="blog-overlay">
            <div className="text">
              <h3>Google Maps and React 🗺</h3>
              <p><strong>Featured in Frontend Weekly</strong></p>
              <p>Currently over 8000 views</p>
              <p><a href="https://medium.com/front-end-hacking/using-the-google-maps-javascript-api-in-a-react-project-b3ed734375c6" target="_blank" rel="noopener noreferrer">Read on Medium  <i className="fa fa-external-link"></i></a></p>
            </div>
          </div>
        </div>

        <div className="item">
          <img src={redux} className="thumb"/>
          <div className="blog-overlay">
            <div className="text">
              <h3>My First Redux App 🥇</h3>
              <p><strong>Featured in Hacker Noon</strong></p>
              <p>Currently over 2000 views</p>
              <p><a href="https://hackernoon.com/my-first-redux-app-with-a-rails-backend-4cf59332a994" target="_blank" rel="noopener noreferrer">Read on Medium  <i className="fa fa-external-link"></i></a></p>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={performance} className="thumb"/>
          <div className="blog-overlay">
            <div className="text">
              <h3>Optimize Performance 🏁</h3>
              <p><strong>Featured in Hacker Noon</strong></p>
              <p>Currently over 800 views</p>
              <p><a href="https://medium.com/@mthorry/application-performance-monitoring-with-newrelic-chrome-9910a379fb4" target="_blank" rel="noopener noreferrer">Read on Medium  <i className="fa fa-external-link"></i></a></p>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={listeners} className="thumb"/>
          <div className="blog-overlay">
            <div className="text">
              <h3>JavaScript Event Listeners👂</h3>
              <p><strong>Featured in Frontend Weekly</strong></p>
              <p>Currently over 500 views</p>
              <p><a href="https://medium.com/front-end-hacking/using-javascript-event-listeners-and-why-javascript-isnt-all-bad-bcd6cdf7f1f9" target="_blank" rel="noopener noreferrer">Read on Medium  <i className="fa fa-external-link"></i></a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;