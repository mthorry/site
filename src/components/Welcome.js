import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome section">
        <h1 className="welcome-intro"><strong>Matt Thorry</strong> is a <strong>full stack web developer, software engineer, educator </strong>&<strong> all-around good person</strong> living in New York City 🌃
        <br/>
        <br/>
          <a href="https://linkedin.com/in/mthorry" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin-square i-hov" aria-hidden="true"/></a>  <a href="https://medium.com/@mthorry" target="_blank" rel="noopener noreferrer"><i class="fa fa-medium i-hov" aria-hidden="true"/></a>  <a href="https://github.com/mthorry" target="_blank" rel="noopener noreferrer"><i class="fa fa-github i-hov" aria-hidden="true"/></a>  <a href="mailto:mthorry@gmail.com?Subject=Hello%20there!" target="_top"><i class="fa fa-envelope i-hov" aria-hidden="true"/></a>
        <br/>
          <a href="https://drive.google.com/file/d/1hCBsKbK_89p_gnv508ri8GScHPbTdwOO/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button className="button resume-button">Resume <i class="fa fa-file-pdf-o" aria-hidden="true"/></button></a>


        </h1>
        <img src="https://pbs.twimg.com/profile_images/936284824767205376/yu8sFzhm_400x400.jpg" className="main-pic"/>
      </div>
    );
  }
}

export default Welcome;

//   <a href="https://angel.co/mthorry" target="_blank" rel="noopener noreferrer"><i class="fa fa-angellist i-hov" aria-hidden="true"/></a>