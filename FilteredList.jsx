import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import List from './List';
import Persian from './Persian.jpg';
import Siamese from './Siamese.jpg';
import Abyssinian from './Abyssinian.jpg';
import Balinese from './Balinese.jpg';
import Birman from './Birman.jpg';
import Manx from './Manx.jpg';
import Ragdoll from './Ragdoll.jpg';
import Munchkin from './Munchkin.jpg';
import Ocicat from './Ocicat.jpg';
import Pixiebob from './Pixiebob.jpg';
import Sphynx from './Sphynx.jpg';
import Cymric from './Cymric.jpg';
import {Button} from 'react-bootstrap';
import {ButtonToolbar} from 'react-bootstrap';
import {ButtonGroup} from 'react-bootstrap';


class FilteredList extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    //TODO (FilteredList): Add an additional state variable within this.state called "type" and set it to a default value
    this.state = {
      search: "",
      age: "All",
      hair: "All",
      image: '',
      sort: "",
    };


}
  //Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({search: event.target.value.trim().toLowerCase()});
  }

  //TODO (FilteredList): Set the state of the "type" state variable depending on what is passed in
  onFilter = (event) => {
    this.state.hair = event.state.hair;
    this.state.age = event.state.age;
  }

  //TODO (FilteredList): Change filterItem to take into account the "type" state variable when filtering
  filterItem = (item) => {
    if (item.age === this.state.age|| this.state.age === "All" ){
    if (item.hair === this.state.hair  || this.state.hair === "All"){
      return item.name.toLowerCase().search(this.state.search) !== -1;
  }
}
}

onSelectedHair = (eventKey) => {
  this.setState({
    hair: eventKey
  });
}

onSelectedAge = (eventKey) => {
  this.setState({
    age: eventKey
  });
}

sortByNum = (a, b) => {
  /////create if statement to deal with current state / ascending/descending
  if(this.state.sort === "Ascending"){
  const diff = a.age - b.age;
  return diff;
}
  if(this.state.sort === "Descending"){
    const diff = a.age - b.age;
    return -1 * diff;
}
  return null;
}

onClickButton= (eventKey) => {
  this.setState({
    sort: eventKey
  });
}

  render(){
    return (
        <div className = "filter-list">


        <DropdownButton id="typeDropdown" title={"Sort by Age"}>
        <MenuItem eventKey="Ascending" onSelect={this.onClickButton}>Sort Ascending by age </MenuItem>
        <MenuItem eventKey="Descending" onSelect={this.onClickButton}>Sort Descending by age </MenuItem>
          <MenuItem eventKey="" onSelect={this.onClickButton}>Unsort</MenuItem>
        </DropdownButton>

            <DropdownButton id="typeDropdown" title={"Hair Type"}>
            <MenuItem eventKey="Shorthair" onSelect={this.onSelectedHair}>Shorthair</MenuItem>
            <MenuItem eventKey="Longhair" onSelect={this.onSelectedHair}>Longhair</MenuItem>
            <MenuItem eventKey="Hairless" onSelect={this.onSelectedHair}>Hairless</MenuItem>
            <MenuItem eventKey="All" onSelect={this.onSelectedHair}>All</MenuItem>
            </DropdownButton>

          <DropdownButton id="typeDropdown" title={"Age"}>
            <MenuItem eventKey="1"  onSelect={this.onSelectedAge}>1</MenuItem>
            <MenuItem eventKey="3" onSelect={this.onSelectedAge}>3</MenuItem>
            <MenuItem eventKey="5" onSelect={this.onSelectedAge}>5</MenuItem>
            <MenuItem eventKey="7" onSelect={this.onSelectedAge}>7</MenuItem>
            <MenuItem eventKey="9" onSelect={this.onSelectedAge}>9</MenuItem>
            <MenuItem eventKey="11" onSelect={this.onSelectedAge}>11</MenuItem>

            <MenuItem eventKey="All" onSelect={this.onSelectedAge}>All</MenuItem>
          </DropdownButton>

          <input type = "text" placeholder = "Search" onChange = {this.onSearch} />


          <List items = {this.props.items.filter(this.filterItem).sort((a,b) => this.sortByNum(a,b))} />
        </div>


    );
  }
}


export default FilteredList;
