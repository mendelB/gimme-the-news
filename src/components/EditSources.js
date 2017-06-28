import React, { Component } from 'react';
import newsFetcher from '../lib/NewsFetcher'
import { Checkbox  } from 'react-bootstrap';
import '../App.css';

class EditSources extends Component {
	constructor(props) {
    super(props);

    this.state = {
      sources: [],
    }

    this.handleChange = this.handleChange.bind(this)
  }

	componentDidMount() {
    newsFetcher.getSources()
    .then(sources => this.setState({sources: sources}))
  }

  handleChange(e) {
    let sources = this.state.sources.slice()
    let source = sources[Number(e.target.value)]
  	if (e.target.checked) {
      source.favored = true
  	} else {
      source.favored = false
  	}
    newsFetcher.updateSources(sources)
    this.setState(sources)
  }

  render() {
    return (
      <form>
      	{ this.state.sources.map( (source, index) => {
      			return <Checkbox value={index} key={index} checked={source.favored} onChange={this.handleChange}>{source.name}</Checkbox>
      		})
      	}
      </form>
    );
  }
}

export default EditSources;
