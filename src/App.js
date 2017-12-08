import React, { Component } from 'react';
import Welcome from './components/Welcome'
import Work from './components/Work'
import Teaching from './components/Teaching'
import Blog from './components/Blog'
import About from './components/About'
import NavBar from './components/NavBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Welcome />
        <h2>WORK</h2>
        <Work />
        <h2>ABOUT</h2>
        <About />
        <h2>BLOG</h2>
        <Blog />
        <h2>TEACHING</h2>
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