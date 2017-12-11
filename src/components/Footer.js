import React, { Component } from 'react';
import gif from '../images/hmu.gif'

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
      <div> </div>
        <div className="footer-1">
          <img src={gif} />
        </div>
        <div className="footer-2">
          <h3>Contact</h3>
          <p><a href="mailto:mthorry@gmail.com?Subject=Hello%20there!" target="_top"><i class="fa fa-envelope i-hov" aria-hidden="true"/> mthorry@gmail.com</a></p>
          <p><a href="https://linkedin.com/in/mthorry" target="_blank"><i class="fa fa-linkedin-square i-hov" aria-hidden="true"/> Linkedin</a></p>
          <p><a href="https://github.com/mthorry" target="_blank"><i class="fa fa-github i-hov" aria-hidden="true"/> Github</a></p>
          <p><a href="https://medium.com/@mthorry" target="_blank"><i class="fa fa-medium i-hov" aria-hidden="true"/> Blog</a></p><br/>
          <h3>This Site</h3>
          <p>Made with ❤️ by <strong>Matthew Thorry</strong> using React, JavaScript and custom CSS</p>
          <p>© 2017</p>
        </div>
      <div> </div>
      <div> </div>

      </div>
    );
  }
}

export default Footer;