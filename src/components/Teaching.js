import React, { Component } from 'react';

class Teaching extends Component {

  displayGist = () => {
    return <script src="https://gist.github.com/mthorry/54f95c05490846c59d5109b5d98fa05e.js"></script>
  }

  render() {
    return (
      <div className="Teaching section flex-container">
      <p className='section-paragraph'>Some selected lessons from my time as a web development instructor and my previous career as an Earth Science teacher.</p>
        <div className="item">
          <h3>Recursion Lecture 👨‍💻</h3>
          <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQiqWLpob5bEOGD-WZODZ-BvxFqQ0Iqs1RYKbhNZwTMNjSWmptIXIlrxIO46hqh4iPxYNtNLzzPNKvk/embed?start=false&loop=true&delayms=3000" frameborder="0" width="100%" height="300" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        </div>
        <div className="item">
          <h3>Intro to React Lesson ⚛️</h3>
          <iframe src="https://docs.google.com/document/d/e/2PACX-1vRjFCIm39B5wmoVlAOk3ttVyoDyWITsbY00K26gIXxv1NsuAzF_iQU8e_Sw5x5RJQ8q2hkuGJnkxWRv/pub?embedded=true" width="100%" height="300"></iframe>
        </div>
        <div className="item">
          <h3>Earth Science Curriculum Map 🌏</h3>
          <iframe src="https://drive.google.com/file/d/0B-qIerDc7L8XUmlqczFTaUgxY0U/preview" width="100%" height="400"></iframe>
        </div>
        <div className="item">
          <h3>Dynamic Earth Unit Plan 🌋</h3>
          <iframe src="https://drive.google.com/file/d/1Ea-Zf0vlX7Tw-7ABkkiK4PA3bgph_tCv/preview" width="100%" height="400"></iframe>
        </div>
      </div>
    );
  }
}
export default Teaching;

        // <div className="item">
        // <h3>Projects</h3>
        // <img src="../wormz.png"/>
        // <p>Gochujang jean shorts master cleanse before they sold out authentic roof party excepteur twee plaid. Aliquip tacos gentrify DIY schlitz hella ut, fashion axe echo park cillum ugh letterpress.</p>
        // </div>
        //         <img src="../wormz.png"/>
        // <p>Locavore green juice vaporware, chartreuse brooklyn shaman vinyl in. Officia vinyl small batch PBR&B mumblecore fugiat. Fixie in tumblr, twee dolore deserunt readymade cold-pressed slow-carb minim.</p>