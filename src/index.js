
import registerServiceWorker from './registerServiceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

import App from './App';
import MyLayout from "./layout";
import L from "./l";



ReactDOM.render(
    <Router>
        {/*<div>*/}
            {/*<Route path='/app' component={App}></Route>*/}
            <Route path='/' component={L}></Route>
        {/*</div>*/}
    </Router>, document.getElementById('root'));
registerServiceWorker();
