import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Spot from './components/Spot/Spot';
import Login from './components/Login/Login';
import Booking from './components/Booking/Booking';
import SearchRoom from './components/SearchRoom/SearchRoom';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/search">
            <SearchRoom />
          </Route>
          <Route path="/spot/:destination">
              <Spot />
            </Route>
            <Route path="/booking/:destination">
              <Booking />
            </Route>
          {/* <PrivateRoute path="/search/:destination">
              <SearchRoom />
            </PrivateRoute> */}
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      
    </Router>
    </UserContext.Provider>
  );
}

export default App;
