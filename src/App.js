import React from 'react';
import './App.css';
import Customer from './Customer.js';
import Home from './Home.js';
import About from './About.js';
import Login from './Login.js';
import Signup from './Signup.js';
import Trial from './Trial.js';
import Book from './Book.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
              <Home/>
          </Route> 
          <Route path="/about">
              <About/>
          </Route> 
          <Route path="/login/instructor">
              <Login/>
          </Route>
          <Route path="/login/customer">
              <Login/>
          </Route>
          <Route path="/signup/instructor">
              <Signup pos="instructor"/>
          </Route>
          <Route path="/signup/customer">
              <Signup pos="customer"/>
          </Route>
          <Route path="/customer">
              <Customer/>
          </Route>
          <Route path="/trial">
              <Trial/>
          </Route> 
          <Route path="/book">
              <Book/>
          </Route>     
        </Switch>  
    </Router>
  );
}

export default App;
