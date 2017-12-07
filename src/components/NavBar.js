import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <ul>
          <li><a href="#">Welcome</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Teaching</a></li>
        </ul>
      </div>
    );
  }
}

export default NavBar;