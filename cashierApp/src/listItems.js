import React, { Component } from 'react';
import './listItems.css';

class ListItems extends Component {
  render() {
    const items = [
      {category: "Meat & Poultry", sku: 1001, desc: "Rib-eye Steak", price: 12.95},
      {category: "Meat & Poultry", sku: 1023, desc: "Free-range Chicken", price: 6.95},
      {category: "Meat & Poultry", sku: 1045, desc: "Bacon", price: 3.79},
      {category: "Dairy", sku: 2005, desc: "American Cheese Slices", price: 5.59},
      {category: "Dairy", sku: 2012, desc: "Milk (Low-fat)", price: 1.99},
      {category: "Dairy", sku: 2014, desc: "Milk (Whole)", price: 2.29},
      {category: "Dairy", sku: 2034, desc: "Cream Cheese", price: 3.25},
      {category: "Produce", sku: 3002, desc: "Lettuce (Iceberg)", price: 1.25},
      {category: "Produce", sku: 3005, desc: "Lettuce (Romaine)", price: 2.39},
      {category: "Produce", sku: 3013, desc: "Tomato (Organic)", price: 0.99},
      {category: "Bread", sku: 4010, desc: "Loaf (White)", price: 1.99},
      {category: "Bread", sku: 4015, desc: "Loaf (Wheat)", price: 2.59},
      {category: "Bread", sku: 4021, desc: "Buns (Hotdog)", price: 1.75},
      {category: "Bread", sku: 4023, desc: "Buns (Hamburger)", price: 3.00}
    ];
    const results = items.map( (item, i) => {
      return (
        <li key={i}>
          <span className="itemName">{item.desc}</span>
          <button className="purchaseBtn">Purchase</button>
          <span className="price"> ${item.price}</span>
        </li>
      )
    })
    return (
      <div>
        <ul className="listItemUl">
          <h3>Items For Purchase</h3>
          {results}
        </ul>
      </div>
    )
  }
}

export default ListItems;
