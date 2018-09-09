import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Counter count='5'/>
        <Counter count='10'/>
        <Footer />
      </div>
    );
  }
}

export default App;