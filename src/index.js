
import registerServiceWorker from './registerServiceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  IndexRouter
} from 'react-router-dom'

import App from './App';

 


ReactDOM.render(
    <Router>    
        <Route path='/' component={App}></Route>
    </Router>, document.getElementById('root'));
registerServiceWorker();
