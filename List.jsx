import React, { Component } from 'react';


class List extends Component {
  renderList(){
    const items = this.props.items.map(item => {
      return <li key={item.name}> <img src = {item.image}/> {"Name: "}{item.name} {"Hair Type: "} {item.hair} {"Age:"} {item.age}</li>
    });
    return items;
  }



  render(){
    return (
      <ul>
      {this.renderList()}
      </ul>

    );
  }
}


export default List;
