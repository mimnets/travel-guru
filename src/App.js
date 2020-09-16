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
import Home from './components/Home/Home';
import About from './components/About/About';
import Booking from './components/Booking/Booking';

function App() {
  return (
    <Router>
        <Header></Header>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/booking">
            <Booking />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      
    </Router>
  );
}

export default App;
