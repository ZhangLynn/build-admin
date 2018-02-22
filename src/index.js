
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
// import Login from './login/login'


ReactDOM.render(
    <Router>
        {/*<div>*/}
            {/*<Route path='/login' component={Login}></Route>*/}
            <Route path='/' component={MyLayout}></Route>
        {/*</div>*/}
    </Router>, document.getElementById('root'));
registerServiceWorker();
