import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';
import FormUserDetails from './components/FormUserDetails';
import File from './components/File'
import Home from './components/Home'


const routing = (
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="'/components/FormUserDetails" component={FormUserDetails} />
        <Route path="/components/File" component={File} />
        <Route path="/components/Home" component={Home} />
      </div>
    </Router>
  )
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();