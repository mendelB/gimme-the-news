import React, { Component } from 'react';
import { Thumbnail, Button, Col } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <Col md={4} xs={6} className="App">
        <Thumbnail className="news-thumbnail" src="https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/Magikarp-Jump.jpg" alt="242x200">
          <h3>Magikarp Jump, the latest mobile Pokémon game, is out today</h3>
          <p>The Pokémon Company just released Magikarp Jump,
            a mobile game starring the world's least-loved finned Pokémon.
            To use the developer's own words, \"What is this world coming ...</p>
          <p>
            <a 
              target="_blank"
              href="https://thenextweb.com/gaming/2017/05/25/magikarp-jump-latest-mobile-pokemon-game-today/">
                <Button bsStyle="primary">Full Article</Button></a>
          </p>
        </Thumbnail>
      </Col>
    );
  }
}

export default App;
