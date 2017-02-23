import React, { Component } from 'react';
import ListItems from './listItems.js';
import RunningReceipt from './runningReceipt.js';
import './shoppingCart.css';

class ShoppingCart extends Component {
  constructor(){
    super();
    this.state = {
      purchasing: []
    }
  }

  render() {
    return (
      <div className="shoppingCart">
        <h1>Shopping Cart / Cash Register</h1>
        <ListItems />
        <RunningReceipt />
      </div>
    )
  }
}

export default ShoppingCart;

