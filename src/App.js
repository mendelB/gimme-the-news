import React, { Component } from 'react';
import SourcesBar from './components/SourcesBar';
import EditSources from './components/EditSources';
import ReadingListRenderer from './components/ReadingListRenderer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem  } from 'react-bootstrap';
import './App.css';


function App(props) {
  return (
    <div>
      <Router>
      	<div>
	      	<Navbar>
				    <Navbar.Header>
				      <Navbar.Brand>
				        Gimme the News
				      </Navbar.Brand>
				    </Navbar.Header>
				    <Nav>
				    	<li role="presentation">
				      	<Link role="button" to="/">Home</Link>
				      </li>
				      <li role="presentation">
				      	<Link role="button" to="/edit-sources">Edit Sources</Link>
				      </li>
				      <li role="presentation">
	        			<Link role="button" to="/reading-list">Reading List</Link>
	        		</li>
				    </Nav>
				  </Navbar>
			    <div>
			      <Route exact path="/" component={SourcesBar}/>
			      <Route path="/edit-sources" component={EditSources}/>
			      <Route path="/reading-list" component={ReadingListRenderer}/>
			    </div>
		    </div>
		  </Router>
    </div>
  );
}

export default App;
