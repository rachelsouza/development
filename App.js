import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilteredList from './FilteredList';
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
import Header from './Header';


const cats = [
  {name: "Persian", hair:"Longhair", age: "1", image: Persian},
  {name: "Siamese", hair:"Shorthair", age: "3", image: Siamese},
  {name: "Abyssinian", hair:"Shorthair", age: "7", image: Abyssinian},
  {name: "Balinese", hair:"Longhair", age: "5", image: Balinese},
  {name: "Birman", hair:"Longhair", age: "9", image: Birman},
  {name: "Manx", hair:"Shorthair", age: "3", image: Manx},
  {name: "Ragdoll", hair:"Longhair", age: "3", image: Ragdoll},
  {name: "Munchkin", hair:"Longhair", age: "11", image: Munchkin},
  {name: "Ocicat", hair:"Shorthair", age: "9", image: Ocicat},
  {name: "Pixiebob", hair:"Shorthair", age: "3", image: Pixiebob},
  {name: "Sphynx", hair:"Hairless", age: "1", image: Sphynx},
  {name: "Cymric", hair:"Longhair", age: "1", image: Cymric},
]


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header name = {'ProvCat'}/>
      <FilteredList items={cats}/>
      </div>
    );
  }
}

export default App;
