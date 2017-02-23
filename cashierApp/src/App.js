import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingCart from './shoppingCart.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShoppingCart />
      </div>
    );
  }
}

export default App;
