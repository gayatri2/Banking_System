import React from 'react';
import "./App.css";
import Footer from "./components/Footer";

import Home from './components/Home';
import Navbar from './components/Navbar';
import Customers from './components/Customers';
import Transfers from './components/Transfers';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <div className="App" >
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Customers">
              <Customers />
            </Route>
            <Route exact path="/Transfers">
              <Transfers />
            </Route>
          </Switch>
        </div>
        <Footer />
        
      </div>
    </Router>
    
  );
}

export default App;
