import React, { Component } from 'react';
import SourcesBar from './components/SourcesBar';
import EditSources from './components/EditSources';
import { Navbar, Nav, NavItem  } from 'react-bootstrap';
import './App.css';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editing: false,
			readingList: false
		}
		this.editSources = this.editSources.bind(this)
		this.readingList = this.readingList.bind(this)
	}

	editSources(e) {
		e.preventDefault()
		this.setState({editing: this.state.editing ? false : true})
	}

	readingList() {
		debugger
		this.setState({readingList: true})
	}

  render() {
    return (
      <div>
      	<Navbar>
			    <Navbar.Header>
			      <Navbar.Brand>
			        Gimme the News
			      </Navbar.Brand>
			    </Navbar.Header>
			    <Nav>
			      <NavItem eventKey={1} onClick={this.editSources}>{!this.state.editing ? "Edit News Sources" : "Done"}</NavItem>
			      <NavItem eventKey={2} onClick={this.readingList}>Reading List</NavItem>
			    </Nav>
			  </Navbar>
        {this.state.editing ? <EditSources/> : <SourcesBar readingList={this.state.readingList}/>}
      </div>
    );
  }
}

export default App;
