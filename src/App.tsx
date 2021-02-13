import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Order from './Order/Order';

interface AppProps {}

function App({}: AppProps) {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
        <Route path='/' exact component={() => <Home />} />
          <Route path='/order' exact component={() => <Order />}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
