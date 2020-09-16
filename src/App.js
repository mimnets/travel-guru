import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import bg from './images/Rectangle 1.png';
function App() {
  return (
    <Router>
      
      <div>
       <Header></Header>
        <Switch>
          <Route path="/">
            {/* <About /> */}
          </Route>
          <Route path="/">
            {/* <Users /> */}
          </Route>
          <Route path="/">
            {/* <Home /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
