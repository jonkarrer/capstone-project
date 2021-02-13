import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Order from './Order/Order';
import FAQs from './FAQs/FAQs';

interface AppProps {}

function App({}: AppProps) {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='https://jonkarrer.github.io/capstone-project' exact component={() => <Home />} />
          <Route path='https://jonkarrer.github.io/capstone-project/order' exact component={() => <Order />}/>
          <Route path='https://jonkarrer.github.io/capstone-project/faqs' exact component={() => <FAQs />}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
