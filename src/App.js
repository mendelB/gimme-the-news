import React, { Component } from 'react';
import { Thumbnail, Button, Col } from 'react-bootstrap';
import HeadlineRenderer from './components/HeadlineRenderer';
import SourcesBar from './components/SourcesBar';
import './App.css';

const sources = ["the-next-web", "bbc-news", "bloomberg"]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 1
    }

    this.changeSource = this.changeSource.bind(this);
  }

  changeSource(key) {
    this.setState({activeKey: Number(key)})
  }

  render() {
    return (
      <div>
        <SourcesBar changeSource={this.changeSource}/>
        <HeadlineRenderer newsSource={sources[this.state.activeKey - 1]}/>
      </div>
    );
  }
}

export default App;
