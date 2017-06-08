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
      sources: [],
      mySources: newsFetcher.mySources()
    }

    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    if (!this.state.mySources.length) {
      newsFetcher.getSources()
      .then(sources => this.setState({sources: sources}))
    }
  }

  handleSelect(eventKey) {
    this.setState({activeKey: eventKey})
  }

  render() {
    let sources = this.state.mySources.length ? this.state.mySources : this.state.sources
    return (
      <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="0" onSelect={this.handleSelect}>
        <Row className="clearfix">
          <Col sm={2} className="s-container">
            <Nav bsStyle="pills" stacked className="news-sources">
              {
                sources.map((source, index) => <NavItem key={index} eventKey={String(index)}> {source.name} </NavItem>)
              }
            </Nav>
          </Col>
          <Col sm={10}>
            {sources.length > 0 ?
              <HeadlineRenderer newsSource={sources[Number(this.state.activeKey)].id}/>
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
