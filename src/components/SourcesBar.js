import React, { Component } from 'react';
import { Nav, NavItem,  } from 'react-bootstrap';
import '../App.css';

class SourcesBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeKey: "1"
    }

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    this.setState({activeKey: eventKey})
    this.props.changeSource(eventKey)
  }

  render() {
    return (
      <Nav bsStyle="tabs" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
        <NavItem eventKey="1" href="/home">NavItem 1 content</NavItem>
        <NavItem eventKey="2" title="Item">NavItem 2 content</NavItem>
        <NavItem eventKey="3">NavItem 3 content</NavItem>
      </Nav>
    );
  }
}

export default SourcesBar;
