import React, { Component } from 'react';
import { Thumbnail, Button, Col } from 'react-bootstrap';
import HeadlineRenderer from './components/HeadlineRenderer';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <HeadlineRenderer newsSource="the-next-web"/>
      </div>
    );
  }
}

export default App;
