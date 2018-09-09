import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <ul>
          <li><a href='#'>Link 1</a></li>
          <li><a href='#'>Link 2</a></li>
          <li><a href='#'>Link 3</a></li>
        </ul>
      </header>
    );
  }
}

export default Header;