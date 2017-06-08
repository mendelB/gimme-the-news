import React, { Component } from 'react';
import HeadlineRenderer from './HeadlineRenderer';
import newsFetcher from '../lib/NewsFetcher'
import { Nav, NavItem, Tab, Row, Col, FormGroup, Checkbox  } from 'react-bootstrap';
import '../App.css';

class EditSources extends Component {
	constructor(props) {
    super(props);

    this.state = {
      sources: []
    }

  }

	componentDidMount() {
    newsFetcher.getSources()
    .then(sources => this.setState({sources: sources}))
  }

  render() {
    return (
      <ul>
      	{ this.state.sources.map( source => {
      			return <li>{source.name}</li>
      		})
      	}
      </ul>
    );
  }
}

export default EditSources;
