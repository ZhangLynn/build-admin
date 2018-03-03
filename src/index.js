
import registerServiceWorker from './registerServiceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

import MyLayout from './menu/myMenu'
import './index.css'



ReactDOM.render(
    <Router>
            <Route path='/' component={MyLayout}></Route>
    </Router>, document.getElementById('root'));
registerServiceWorker();
