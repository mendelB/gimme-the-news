import React, { Component } from 'react';
import HeadlineRenderer from './HeadlineRenderer';
import newsFetcher from '../lib/NewsFetcher'
import { Nav, NavItem, Tab, Row, Col, FormGroup, Checkbox  } from 'react-bootstrap';
import '../App.css';

class EditSources extends Component {
	constructor(props) {
    super(props);

    this.state = {
      sources: [],
      mySources: newsFetcher.mySources()
    }

    this.handleChange = this.handleChange.bind(this)
  }

	componentDidMount() {
    newsFetcher.getSources()
    .then(sources => this.setState({sources: sources}))
  }

  handleChange(e) {
  	let source = this.state.sources[Number(e.target.value)]
  	let mySources
  	if (e.target.checked) {
  		mySources = this.state.mySources.concat(source)
  	} else {
  		mySources = this.state.mySources.filter(s => s!== source)
  	}
  	this.setState({mySources: mySources})
  	newsFetcher.updateMySources(mySources)
  }

  render() {
    return (
      <form>
      	{ this.state.sources.map( (source, index) => {
      			return <Checkbox value={index} checked={this.state.mySources.includes(source) ? true : false} onChange={this.handleChange}>{source.name}</Checkbox>
      		})
      	}
      </form>
    );
  }
}

export default EditSources;
