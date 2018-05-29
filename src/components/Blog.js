import React, { Component } from 'react';
import site from '../images/site.png'
import redux from '../images/redux.png'
import google from '../images/google.png'
import performance from '../images/performance.png'

class Blog extends Component {
  render() {
    return (
      <div>
      <div className="Blog section flex-container">
      <p className='section-paragraph'>Here are some of my recent and favorite blog posts. I have thousands of views and hundreds of claps every month.</p>
        <div className="item">
          <img src={redux} className="thumb"/>
          <div className="blog-overlay">
            <div className="text">
              <h3>Why I Love Redux 💜</h3>
              <p><strong>Featured in Frontend Weekly</strong></p>
              <p>Currently over 3000 views</p>
              <p><a href="https://medium.com/front-end-hacking/why-i-love-redux-with-react-and-so-should-you-def71cee6a26" target="_blank" rel="noopener noreferrer">Read on Medium  <i className="fa fa-external-link"></i></a></p>
            </div>
          </div>
        </div>

      <div className="item">
          <img src={google} className="thumb"/>
          <div className="blog-overlay">
            <div className="text">
              <h3>Google Maps and React 🗺</h3>
              <p><strong>Featured in Hackernoon</strong></p>
              <p>Currently over 5000 views</p>
              <p><a href="https://hackernoon.com/how-to-make-a-personal-site-with-react-and-javascript-%EF%B8%8F-6fdf26211124" target="_blank" rel="noopener noreferrer">Read on Medium  <i className="fa fa-external-link"></i></a></p>
            </div>
          </div>
        </div>

        <div className="item">
          <img src={site} className="thumb"/>
          <div className="blog-overlay">
            <div className="text">
              <h3>How I Made This Site 🔨</h3>
              <p><strong>Featured in Frontend Weekly</strong></p>
              <p>Currently over 5000 views</p>
              <p><a href="https://medium.com/front-end-hacking/using-javascript-event-listeners-and-why-javascript-isnt-all-bad-bcd6cdf7f1f9" target="_blank" rel="noopener noreferrer">Read on Medium  <i className="fa fa-external-link"></i></a></p>
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
      </div>
      </div>
    );
  }
}

export default Blog;