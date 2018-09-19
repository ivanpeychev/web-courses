import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="main-footer"><hr/>&copy; Vako - {(new Date()).getFullYear()}</footer>
    );
  }
}

export default Footer;