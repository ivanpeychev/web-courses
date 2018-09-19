import React, { Component } from 'react';
import './Header.css';

import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <NavLink exact to='/' >Home</NavLink>
        <NavLink to='/catalogue' >Catalogue</NavLink>
        <NavLink to='/about' >About</NavLink>
      </header>
    );
  }
}