import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  IndexRouter
} from 'react-router-dom'
import logo from './logo.svg';
// import './App.css';
import './App.less'

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)


const Category = ({match}) => {
       return(
           <div>
                <ul>
                    <li><Link to={`${match.url}/shoes`}>Shoes</Link></li>
                    <li><Link to={`${match.url}/boots`}>Boots</Link></li>
                    <li><Link to={`${match.url}/footwear`}>Footwear</Link></li>
                </ul>
                <Route path={`${match.path}/:name`} render= {({match}) =>( <div> <h3> {match.params.name} </h3></div>)}/>
            </div>
       )
}



const Products = () => (
    <div>
        <h2>Products</h2>
    </div>
)
 

class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li><Link to="/">Homes</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><Link to="/products">Products</Link></li>
            <Route exact path="/" component={Home}/>
            <Route path="/category" component={Category}/>
            <Route path="/products" component={Products}/>
          </ul>
         </nav>
           <div>{this.props.children}</div>
      </div>
    )
  }
}
export default App;
