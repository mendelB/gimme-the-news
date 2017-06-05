import React, { Component } from 'react';
import HeadlineRenderer from './HeadlineRenderer';
import newsFetcher from '../lib/NewsFetcher'
import { Nav, NavItem, Tab, Row, Col  } from 'react-bootstrap';
import '../App.css';

class SourcesBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeKey: "0",
      sources: []
    }

    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    newsFetcher.getSources()
    .then(sources => this.setState({sources: sources}))
  }

  handleSelect(eventKey) {
    this.setState({activeKey: eventKey})
  }

  render() {
    return (
      <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="0" onSelect={this.handleSelect}>
        <Row className="clearfix">
          <Col sm={2} className="s-container">
            <Nav bsStyle="pills" stacked className="news-sources">
              {this.state.sources.map((source, index) => <NavItem eventKey={String(index)}> {source.name} </NavItem>)}
            </Nav>
          </Col>
          <Col sm={10}>
            {this.state.sources.length > 0 ?
              <HeadlineRenderer newsSource={this.state.sources[Number(this.state.activeKey)].id}/>
            : "Loading..."
            }
          </Col>
        </Row>
    </Tab.Container>
    </div>
    );
  }
}

export default SourcesBar;
