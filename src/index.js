
import registerServiceWorker from './registerServiceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import {
  BrowserRouter,
  Route,
  Link,
    Redirect,
    Switch
} from 'react-router-dom'
import {auth} from './login/login.redux'
import Login from './login/login'
import MyLayout from './menu/myMenu'
import './index.css'
const store = createStore(auth)


ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login}></Route>
                <Route path='/layout' exact component={MyLayout}></Route>
                <Redirect to='/MyLayout'></Redirect>
            </Switch>
        </BrowserRouter>
    </Provider>), document.getElementById('root'));
registerServiceWorker();
