import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="About section about-section">
        <h1 className="about-intro"><strong>Matthew Gerard Thorry</strong>:  Not your average coder</h1>
        <p className="about-item">As a <strong>full stack engineer</strong>, I have demonstrated my ability to <strong>crush it</strong> on both the front end and back end. I am fluent in <strong>Ruby and JavaScript</strong>. I am also quite competent with many <strong>modern frameworks</strong> such as React, Redux, Rails and Node. I <strong>love to code</strong> and am so happy that I get to <strong>learn and create</strong> new things every day!</p>
        <p className="about-item">I come from <strong>humble beginnings</strong> in the countryside of <a href="https://en.wikipedia.org/wiki/Mountain_Lake,_New_Jersey" target="_blank" rel="noopener noreferrer" rel="noopener noreferrer">Warren County, New Jersey <i className="fa fa-external-link"/></a>. I always had a strong desire to understand how the world worked and also to create, so I studied <strong>earth science and education</strong> in college and became a teacher in New York City shortly after graduating. I <strong>taught science</strong> for seven years to students in grades 8 - 12. Students generally agreed that my class was <strong>'lit'</strong>. Eventually I realized that <strong>I missed being creative</strong> so I got back into coding with HTML and CSS, a hobby I'd had since I was a kid on Xanga, and began learning JavaScript. I immediately knew that coding was something I could do <strong>every day for the rest of my life</strong>.</p>
        <p className="about-item">I am also <strong>passionate</strong> about technology, our planet, travel and making people laugh. I am currently <strong>a lead web development instructor at <a href="https://www.c4q.nyc/about" target="_blank" rel="noopener noreferrer" rel="noopener noreferrer">C4Q <i className="fa fa-external-link"/></a> </strong>but I'm looking forward to finding a role where I can help build real products that people love. <a href="mailto:mthorry@gmail.com?Subject=Hello%20there!" target="_top" ><span>Let me know if you're interested!</span> <i className="fa fa-paper-plane" aria-hidden="true"/></a></p>
      </div>
    );
  }
}

export default About;