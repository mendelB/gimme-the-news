import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import EditSources from './components/EditSources';
import SourcesBar from './components/SourcesBar';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
