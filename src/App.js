import React, { Component } from 'react';
import { Thumbnail, Button, Col } from 'react-bootstrap';
import NewsHeadline from './components/NewsHeadline';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NewsHeadline/>
      </div>
    );
  }
}

export default App;
