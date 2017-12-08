import React, { Component } from 'react';
import Welcome from './components/Welcome'
import Work from './components/Work'
import Teaching from './components/Teaching'
import Blog from './components/Blog'
import NavBar from './components/NavBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Welcome />
        <h1>WORK</h1>
        <Work />
        <h1>BLOG</h1>
        <Blog />
        <h1>TEACHING</h1>
        <Teaching />
      </div>
    );
  }
}

export default App;

// SECTIONS:
  // WELCOME: Contact + Resume; Social Media Links
  // PROJECTS: screenshots + links
  // TEACHING + SCHOOL STUFF: curriculum + lessons
  // BLOG POSTS: selected blog posts