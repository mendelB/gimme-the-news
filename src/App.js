import React, { Component } from 'react';
import { Thumbnail, Button, Col } from 'react-bootstrap';
import NewsHeadline from './components/NewsHeadline';
import './App.css';

let img = "https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/Magikarp-Jump.jpg";
let headline = "Magikarp Jump, the latest mobile Pokémon game, is out today";
let description = "The Pokémon Company just released Magikarp Jump, a mobile game starring the world's least-loved finned Pokémon. To use the developer's own words, \"What is this world coming ..."
let article = "https://thenextweb.com/gaming/2017/05/25/magikarp-jump-latest-mobile-pokemon-game-today/";

class App extends Component {
  render() {
    return (
      <div>
        <NewsHeadline image={img} headline={headline} description={description} articleLink={article}/>
      </div>
    );
  }
}

export default App;
