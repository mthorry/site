import React, { Component } from 'react';
import Welcome from './components/Welcome'
import Projects from './components/Projects'
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
        <h2>PROJECTS</h2>
        <Projects />
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