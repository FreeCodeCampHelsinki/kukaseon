import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import MenuTop from './components/MenuTop.jsx';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp';


function App() {
  return (
    <div>
      <Router>
        <MenuTop />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </div>
      </Router>
    </div>
  );
}

export default App;
