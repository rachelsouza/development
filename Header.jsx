import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import FilteredList from './FilteredList';



class Header extends Component {
  render() {
    return (
      <div className="Header">
      <h1> Welcome to {this.props.name} shelter website! Search our shelter for your cat!</h1>
      <p> Filter by age, hair type, or search for your breed!</p>

      </div>
    );
  }
}

export default Header;
