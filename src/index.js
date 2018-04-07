
import registerServiceWorker from './registerServiceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
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

const store = createStore(auth, compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
))


ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login}></Route>
                <Route path='/layout' exact component={MyLayout}></Route>
                <Redirect to='/layout'></Redirect>
            </Switch>
        </BrowserRouter>
    </Provider>), document.getElementById('root'));
registerServiceWorker();
