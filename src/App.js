import React, { Component } from 'react';
import SourcesBar from './components/SourcesBar';
import EditSources from './components/EditSources';
import { Navbar, Nav, NavItem  } from 'react-bootstrap';
import './App.css';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editing: false
		}
		this.editSources = this.editSources.bind(this)
	}

	editSources(e) {
		e.preventDefault()
		this.setState({editing: true})
	}

  render() {
    return (
      <div>
      	<Navbar>
			    <Navbar.Header>
			      <Navbar.Brand>
			        <a href="#">React-Bootstrap</a>
			      </Navbar.Brand>
			    </Navbar.Header>
			    <Nav>
			      <NavItem eventKey={1} onClick={this.editSources}>Edit News Sources</NavItem>
			    </Nav>
			  </Navbar>
        {this.state.editing ? <EditSources/> : <SourcesBar/>}
      </div>
    );
  }
}

export default App;
