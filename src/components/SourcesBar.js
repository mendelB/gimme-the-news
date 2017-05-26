import React, { Component } from 'react';
import HeadlineRenderer from './HeadlineRenderer';
import { Nav, NavItem, Tab, Row, Col  } from 'react-bootstrap';
import '../App.css';

const sources = ["the-next-web", "bbc-news", "bloomberg"]

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
  }

  render() {
    return (
      <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="1" onSelect={this.handleSelect}>
        <Row className="clearfix">
          <Col sm={2}>
            <Nav bsStyle="pills" stacked>
              <NavItem eventKey="1">
                Tab 1
              </NavItem>
              <NavItem eventKey="2">
                Tab 2
              </NavItem>
            </Nav>
          </Col>
          <Col sm={10}>
            <HeadlineRenderer newsSource={sources[Number(this.state.activeKey) - 1]}/>
          </Col>
        </Row>
    </Tab.Container>
    </div>
    );
  }
}

export default SourcesBar;
