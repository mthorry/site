import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div>
        <ul className="NavBar">

          <li className="nav-item nav-name">MGT</li>
          <li className="nav-item nav-last"><a href="#" className="nav-link">Teaching</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Blog</a></li>
          <li className="nav-item"><a href="#" className="nav-link">About</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Work</a></li>
        </ul>
      </div>
    );
  }
}

export default NavBar;